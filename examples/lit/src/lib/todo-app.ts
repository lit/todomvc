import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators/custom-element.js";
import { property } from "lit/decorators/property.js";
import { state } from "lit/decorators/state.js";

import { todoStyles } from "./todo.css.js";
import { TodoFilter, Todos, isTodoFilter } from "./todos.js";

import "./todo-list.js";
import "./todo-form.js";
import "./todo-footer.js";
import {
	AddTodoEvent,
	DeleteTodoEvent,
	ToggleAllTodoEvent,
	EditTodoEvent,
} from "./events.js";
import { updateOnEvent } from "./utils.js";

@customElement("todo-app")
export class TodoApp extends LitElement {
	static override styles = [
		todoStyles,
		css`
			:host {
				display: block;
			}
		`,
	];

	@updateOnEvent("change")
	@state()
	todoList = new Todos();

	@property()
	filter: TodoFilter = this.#filterFromUrl();

	constructor() {
		super();
		this.addEventListener(AddTodoEvent.eventName, this.#onAddTodo);
		this.addEventListener(DeleteTodoEvent.eventName, this.#onDeleteTodo);
		this.addEventListener(EditTodoEvent.eventName, this.#onEditTodo);
		this.addEventListener(ToggleAllTodoEvent.eventName, this.#onToggleAll);
	}

	override connectedCallback(): void {
		super.connectedCallback();
		window.addEventListener("hashchange", this.#onHashChange);
	}

	override disconnectedCallback(): void {
		super.disconnectedCallback();
		window.removeEventListener("hashchange", this.#onHashChange);
	}

	override render() {
		return html` <section class="todoapp">
			<header class="header">
				<h1>todos</h1>
				<todo-form
					.todoList=${this.todoList}
					.filter=${this.filter}
				></todo-form>
			</header>
			<section class="main">
				<todo-list
					.todoList=${this.todoList}
					.filter=${this.filter}
				></todo-list>
			</section>
			<todo-footer .todoList=${this.todoList} .selectedFilter=${this.filter}>
			</todo-footer>
		</section>`;
	}

	#onAddTodo = (e: AddTodoEvent) => {
		this.todoList.add(e.text);
	};

	#onDeleteTodo = (e: DeleteTodoEvent) => {
		this.todoList.delete(e.id);
	};

	#onEditTodo = (e: EditTodoEvent) => {
		this.todoList.update(e.todo);
	};

	#onToggleAll = (_e: ToggleAllTodoEvent) => {
		this.todoList.toggleAll();
	};

	#onHashChange = () => {
		this.filter = this.#filterFromUrl();
	};

	#filterFromUrl() {
		let filter = /#\/(.*)/.exec(window.location.hash)?.[1];
		if (isTodoFilter(filter)) {
			return filter;
		}
		return "all";
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"todo-app": TodoApp;
	}
}

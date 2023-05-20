import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators/custom-element.js";
import { property } from "lit/decorators/property.js";

import { todoStyles } from "./todo.css.js";
import { TodoFilter, Todos } from "./todos.js";

import "./todo-list.js";
import "./todo-form.js";
import "./todo-footer.js";
import {
	AddTodoEvent,
	DeleteTodoEvent,
	ToggleAllTodoEvent,
	EditTodoEvent,
} from "./events.js";

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

	#todoList = new Todos();

	@property()
	filter: TodoFilter = "all";

	constructor() {
		super();
		this.addEventListener(AddTodoEvent.eventName, this.#onAddTodo);
		this.addEventListener(DeleteTodoEvent.eventName, this.#onDeleteTodo);
		this.addEventListener(EditTodoEvent.eventName, this.#onEditTodo);
		this.addEventListener(ToggleAllTodoEvent.eventName, this.#onToggleAll);
	}

	override render() {
		return html` <section class="todoapp">
			<header class="header">
				<h1>todos</h1>
				<todo-form .todoList=${this.#todoList}></todo-form>
			</header>
			<section class="main">
				<todo-list .todoList=${this.#todoList}></todo-list>
			</section>
			<todo-footer .todoList=${this.#todoList} .selectedFilter=${this.filter}>
			</todo-footer>
		</section>`;
	}

	#onAddTodo = (e: AddTodoEvent) => {
		this.#todoList.add(e.text);
	};

	#onDeleteTodo = (e: DeleteTodoEvent) => {
		this.#todoList.delete(e.id);
	};

	#onEditTodo = (e: EditTodoEvent) => {
		this.#todoList.update(e.todo);
	};

	#onToggleAll = (_e: ToggleAllTodoEvent) => {
		this.#todoList.toggleAll();
	};
}

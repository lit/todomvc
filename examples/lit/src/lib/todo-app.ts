import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators/custom-element.js";
import { state } from "lit/decorators/state.js";

import { todoStyles } from "./todo.css.js";
import { Todos } from "./todos.js";

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
			.todoapp {
				background: #fff;
				margin: 130px 0 40px 0;
				position: relative;
				box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),
					0 25px 50px 0 rgba(0, 0, 0, 0.1);
			}
			h1 {
				position: absolute;
				top: -155px;
				width: 100%;
				font-size: 100px;
				font-weight: 100;
				text-align: center;
				color: rgba(175, 47, 47, 0.15);
				-webkit-text-rendering: optimizeLegibility;
				-moz-text-rendering: optimizeLegibility;
				text-rendering: optimizeLegibility;
			}
			.main {
				position: relative;
				z-index: 2;
				border-top: 1px solid #e6e6e6;
			}
		`,
	];

	@updateOnEvent("change")
	@state()
	readonly todoList = new Todos();

	constructor() {
		super();
		this.addEventListener(AddTodoEvent.eventName, this.#onAddTodo);
		this.addEventListener(DeleteTodoEvent.eventName, this.#onDeleteTodo);
		this.addEventListener(EditTodoEvent.eventName, this.#onEditTodo);
		this.addEventListener(ToggleAllTodoEvent.eventName, this.#onToggleAll);
	}

	override connectedCallback(): void {
		super.connectedCallback();
		this.todoList.connect();
	}

	override disconnectedCallback(): void {
		super.disconnectedCallback();
		this.todoList.disconnect();
	}

	override render() {
		return html` <section class="todoapp">
			<header class="header">
				<h1>todos</h1>
				<todo-form .todoList=${this.todoList}></todo-form>
			</header>
			<section class="main">
				<todo-list .todoList=${this.todoList}></todo-list>
			</section>
			<todo-footer .todoList=${this.todoList}> </todo-footer>
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
}

declare global {
	interface HTMLElementTagNameMap {
		"todo-app": TodoApp;
	}
}

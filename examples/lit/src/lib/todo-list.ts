import {
	LitElement,
	html,
	css,
	nothing,
	PropertyValues,
} from "lit";
import { customElement } from "lit/decorators/custom-element.js";
import { property } from "lit/decorators/property.js";

import { todoStyles } from "./todo.css.js";
import { TodoFilter, Todos } from "./todos.js";

import "./todo-item.js";

@customElement("todo-list")
export class TodoList extends LitElement {
	static override styles = [
		todoStyles,
		css`
			:host {
				display: block;
			}
		`,
	];

	@property({ attribute: false })
	todoList?: Todos;

	@property()
	filter?: TodoFilter;

	protected override willUpdate(changedProperties: PropertyValues<this>): void {
		if (changedProperties.has("todoList")) {
			const oldTodos = changedProperties.get("todoList");
			oldTodos?.removeEventListener("change", this.#onTodoChange);
		}
		this.todoList?.addEventListener("change", this.#onTodoChange);
	}

	#onTodoChange = () => {
		this.requestUpdate();
	};

	override render() {
		return html`
			${(this.todoList?.all.length ?? 0) > 0
				? html`
						<input
							@change=${this.#onToggleAllChange}
							id="toggle-all"
							type="checkbox"
							class="toggle-all"
						/>
						<label for="toggle-all"> Mark all as complete </label>
				  `
				: nothing}
			<ul class="todo-list">
				${this.todoList?.all.map(
					(todo) => html` <todo-item .todo=${todo}></todo-item> `
				)}
			</ul>
		`;
	}

	#onToggleAllChange() {
		console.log("#onToggleAllChange");
	}
}

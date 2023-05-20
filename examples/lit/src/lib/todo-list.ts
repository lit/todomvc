import { LitElement, html, css, nothing } from "lit";
import { customElement } from "lit/decorators/custom-element.js";
import { property } from "lit/decorators/property.js";

import { todoStyles } from "./todo.css.js";
import { TodoFilter, Todos } from "./todos.js";

import "./todo-item.js";
import { ToggleAllTodoEvent } from "./events.js";
import { updateOnEvent } from "./utils.js";

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

  @updateOnEvent('change')
	@property({ attribute: false })
	todoList?: Todos;

	@property()
	filter?: TodoFilter;

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
		this.dispatchEvent(new ToggleAllTodoEvent());
	}
}

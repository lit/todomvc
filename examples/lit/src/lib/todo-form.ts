import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators/custom-element.js";
import { property } from "lit/decorators/property.js";

import { todoStyles } from "./todo.css.js";
import { TodoFilter, Todos } from "./todos.js";
import { AddTodoEvent } from "./events.js";
import { updateOnEvent } from "./utils.js";

@customElement("todo-form")
export class TodoForm extends LitElement {
	static override styles = [
		todoStyles,
		css`
			:host {
				display: block;
			}
		`,
	];

	@updateOnEvent("change")
	@property({ attribute: false })
	todoList?: Todos;

	@property()
	filter?: TodoFilter;

	override render() {
		return html` <input
			@change=${this.#onChange}
			class="new-todo"
			autofocus
			autocomplete="off"
			placeholder="what needs to be done?"
		/>`;
	}

	#onChange(e: Event) {
		const input = e.target as HTMLInputElement;
		const { value } = input;
		console.log("#onChange", value, this.todoList);
		if (value.length > 0) {
			this.dispatchEvent(new AddTodoEvent(value));
		}
		input.value = "";
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"todo-form": TodoForm;
	}
}

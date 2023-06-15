import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators/custom-element.js";
import { property } from "lit/decorators/property.js";

import { todoStyles } from "./todo.css.js";
import { Todos } from "./todos.js";
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
			input::-webkit-input-placeholder {
				font-style: italic;
				font-weight: 300;
				color: #e6e6e6;
			}

			input::-moz-placeholder {
				font-style: italic;
				font-weight: 300;
				color: #e6e6e6;
			}

			input::input-placeholder {
				font-style: italic;
				font-weight: 300;
				color: #e6e6e6;
			}
		`,
	];

	@updateOnEvent("change")
	@property({ attribute: false })
	todoList?: Todos;

	override render() {
		return html`<input
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

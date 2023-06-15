import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators/custom-element.js";
import { property } from "lit/decorators/property.js";
import { state } from "lit/decorators/state.js";
import { classMap } from "lit/directives/class-map.js";

import { todoStyles } from "./todo.css.js";
import { type Todo } from "./todos.js";
import { DeleteTodoEvent, EditTodoEvent } from "./events.js";

@customElement("todo-item")
export class TodoItem extends LitElement {
	static override styles = [
		todoStyles,
		css`
			:host {
				display: block;
			}
		`,
	];

	@property({ attribute: false })
	todo?: Todo;

	@state()
	isEditing: boolean = false;

	override render() {
		const itemClassList = {
			todo: true,
			completed: this.todo?.completed ?? false,
			editing: this.isEditing,
		};
		return html`
			<ul class="todo-list">
				<li class="${classMap(itemClassList)}">
					<div class="view">
						<input
							class="toggle"
							type="checkbox"
							.checked=${this.todo?.completed ?? false}
							@change=${this.#toggleTodo}
						/>
						<label @dblclick=${this.#beginEdit}> ${this.todo?.text} </label>
						<button @click=${this.#deleteTodo} class="destroy"></button>
					</div>
					<input
						class="edit"
						type="text"
						@change=${this.#finishEdit}
						@keyup=${this.#captureEscape}
						@blur=${this.#abortEdit}
						.value=${this.todo?.text ?? ""}
					/>
				</li>
			</ul>
		`;
	}

	#toggleTodo() {
		this.dispatchEvent(
			new EditTodoEvent({ ...this.todo!, completed: !this.todo!.completed })
		);
	}

	#deleteTodo() {
		this.dispatchEvent(new DeleteTodoEvent(this.todo!.id));
	}

	#beginEdit() {
		this.isEditing = true;
	}

	#finishEdit(e: Event) {
		const el = e.target as HTMLInputElement;
		const text = el.value;
		this.dispatchEvent(new EditTodoEvent({ ...this.todo!, text }));
		this.isEditing = false;
	}

	#captureEscape(e: KeyboardEvent) {
		if (e.key === "escape") {
			this.#abortEdit(e);
		}
	}

	#abortEdit(e: Event) {
		(e.target as HTMLInputElement).value = this.todo?.text ?? "";
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"todo-item": TodoItem;
	}
}

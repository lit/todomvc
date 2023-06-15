import { LitElement, html, css, nothing } from "lit";
import { customElement } from "lit/decorators/custom-element.js";
import { property } from "lit/decorators/property.js";
import { classMap } from "lit/directives/class-map.js";

import { todoStyles } from "./todo.css.js";
import { TodoFilter, Todos } from "./todos.js";
import { updateOnEvent } from "./utils.js";

@customElement("todo-footer")
export class TodoFooter extends LitElement {
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
	selectedFilter?: TodoFilter;

	override render() {
		return this.todoList?.all.length ?? 0 > 0
			? html` <footer class="footer">
					<span class="todo-count">
						<strong>${this.todoList?.active.length}</strong>
						items left
					</span>
					<ul class="filters">
						<li>
							${filterLink({
								text: "All",
								filter: "all",
								selectedFilter: this.selectedFilter,
							})}
						</li>
						<li>
							${filterLink({
								text: "Active",
								filter: "active",
								selectedFilter: this.selectedFilter,
							})}
						</li>
						<li>
							${filterLink({
								text: "Completed",
								filter: "completed",
								selectedFilter: this.selectedFilter,
							})}
						</li>
					</ul>
					${this.todoList?.completed.length ?? 0 > 0
						? html` <button
								@click=${this.#onClearCompletedClick}
								class="clear-completed"
						  >
								Clear Completed
						  </button>`
						: nothing}
			  </footer>`
			: nothing;
	}

	#onClearCompletedClick() {
		console.log("#onClearCompletedClick");
	}
}

function filterLink({
	text,
	filter,
	selectedFilter,
}: {
	text: string;
	filter: string;
	selectedFilter: string | undefined;
}) {
	return html`<a
		class="${classMap({ selected: filter === selectedFilter })}"
		href="#/${filter}"
		>${text}</a
	>`;
}

declare global {
	interface HTMLElementTagNameMap {
		"todo-footer": TodoFooter;
	}
}

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
			.footer {
				color: #777;
				padding: 10px 15px;
				height: 20px;
				text-align: center;
				border-top: 1px solid #e6e6e6;
			}

			.footer:before {
				content: "";
				position: absolute;
				right: 0;
				bottom: 0;
				left: 0;
				height: 50px;
				overflow: hidden;
				box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6,
					0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6,
					0 17px 2px -6px rgba(0, 0, 0, 0.2);
			}

			.todo-count {
				float: left;
				text-align: left;
			}

			.todo-count strong {
				font-weight: 300;
			}

			.filters {
				margin: 0;
				padding: 0;
				list-style: none;
				position: absolute;
				right: 0;
				left: 0;
			}

			.filters li {
				display: inline;
			}

			.filters li a {
				color: inherit;
				margin: 3px;
				padding: 3px 7px;
				text-decoration: none;
				border: 1px solid transparent;
				border-radius: 3px;
			}

			.filters li a:hover {
				border-color: rgba(175, 47, 47, 0.1);
			}

			.filters li a.selected {
				border-color: rgba(175, 47, 47, 0.2);
			}
			.clear-completed,
			.clear-completed:active {
				float: right;
				position: relative;
				line-height: 20px;
				text-decoration: none;
				cursor: pointer;
			}

			.clear-completed:hover {
				text-decoration: underline;
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
		this.todoList?.clearCompleted();
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

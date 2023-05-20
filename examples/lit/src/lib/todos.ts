export interface Todo {
	id: number;
	text: string;
	completed: boolean;
}

export type TodoFilter = "all" | "active" | "completed";

/**
 * A mutable, observable container for a todo list.
 *
 * @fires a `change` event when the todo list changes.
 */
export class Todos extends EventTarget {
	#nextId = 1;

	#todos: Array<Todo> = [];

	get all(): ReadonlyArray<Todo> {
		return this.#todos;
	}

	get active(): ReadonlyArray<Todo> {
		return this.#todos.filter((todo) => !todo.completed);
	}

	get completed(): ReadonlyArray<Todo> {
		return this.#todos.filter((todo) => todo.completed);
	}

	#notifyChange() {
		this.dispatchEvent(new Event("change"));
	}

	add(text: string) {
		console.log("add", text);
		this.#todos.push({
			text,
			completed: false,
			id: this.#nextId++,
		});
		this.#notifyChange();
	}

	delete(id: number) {
		const index = this.#todos.findIndex((todo) => todo.id === id);
		// Note: if the todo is not found, index is -1, and the >>> will flip the
		// sign which makes the splice do nothing. Otherwise, index is the item
		// we want to remove.
		this.#todos.splice(index >>> 0, 1);
		this.#notifyChange();
	}

	update(data: Todo) {
		console.log("update", data);
		const index = this.#todos.findIndex((todo) => todo.id === data.id);
		const todo = this.#todos[index];

		// Replace the list to trigger updates
		this.#todos = [
			...this.#todos.slice(0, index),
			{ ...todo, ...data },
			...this.#todos.slice(index + 1),
		];
		this.#notifyChange();
	}

	toggle(id: number) {
		const todo = this.#todos.find((todo) => todo.id === id);
		if (todo === undefined) {
			return;
		}
		todo.completed = !todo.completed;
		this.#notifyChange();
	}

	toggleAll() {
		// First pass to see if all the TODOs are completed. If all the
		// todos are completed, we'll set them all to active
		const allComplete = this.#todos.every((todo) => todo.completed);

		// Replace the list to trigger updates
		this.#todos = this.#todos.map((todo) => ({
			...todo,
			completed: !allComplete,
		}));
		this.#notifyChange();
	}
}

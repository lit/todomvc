# Lit TodoMVC Example

> Lit is a simple library for building fast, lightweight web components.

See [lit.dev](https://lit.dev) for more information

## Implementation

The Lit example uses [web components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components) to create new HTML elements that are interoperable and encapsulated. This means that the DOM is slightly different from other implementations as it contains custom elements like `<todo-list>`, and component DOM is isolated inside shadow roots. The Lit implementation also uses shadow DOM's style scoping, so it has divided us the CSS into separate modules containing only whats needed for each component (TODO).

### State management

This implementation doesn't use a state management library. It models the Todo data as a class that extends EventTarget. As that class is passed to components, they listen for changes via the `'change'` event.

Many other state management solutions are possible with Lit, including Redux, MobX, various signals libraries, etc. Using a plain class is just one of the simplest options, that's as vanilla as possible.

Mutations are made centrally by the app component. Other component fire events to notify the app of change requests.

## Building and running this example

1. `cd examples/lit`
2. `npm ci`
3. `npm run build`
4. `npm run serve`
5. Navigate your browser to http://localhost:8000

## TODO

1.  Split the CSS per component
2.  Toggle all should be checked when all todos are checked
3.  Remove extraneous HTML tags (like `<form>`), put more styling on hosts
4.  Change CSS classes for simpler selectors
5.  Move current filter state into Todos model
6.  Check focus and tab behavior
7.  Add Rollup build that chooses production Lit build and creates a single JS file
8.  Check-in node dependencies like other implementations?
9.  Add Wireit?

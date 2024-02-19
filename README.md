# UI Library with Snabbdom and Lerna

This project is a UI library implemented with Snabbdom and managed within a monorepo using Lerna. The UI library provides functionality for templating, reactivity, and lifecycle events, allowing users to create dynamic user interfaces for web applications.

## Features

### 1. Templating
- Users can define templates for views using a function that accepts inputs like state and props and returns a Virtual Node.
- The templating method is generic and adaptable to various use cases.

### 2. Reactivity
- The library includes a method named `updateState` to modify the internal state of the application.
- The `updateState` method can be called within the template function, enabling seamless reactivity in the UI.
- Event listeners are handled directly using the Snabbdom library, enhancing performance and efficiency.

### 3. Life Cycle Events
- A lifecycle mechanism is incorporated into the UI library to detect when a component is mounted.
- Users can execute functions when necessary, analogous to the `useEffect` function in React.

# The Simple Web Page: 
https://github.com/imraj20/UI-Library/assets/67505003/32ccfb50-4ad3-41a3-a10f-79db9d40004f


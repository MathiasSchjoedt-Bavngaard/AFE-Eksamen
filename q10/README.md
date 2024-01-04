# Question 10 - Native web component

**Questions:**

- Explain what a native web component is.
- Which functionality is required by the browser?
- Show how to build a native web component.
- How can Lit help with building web components?
- Discuss pros and cons of native web components.

## DELETE ME

useful when developing:
`npm install http-server -g`
`http-server -c-1` (to run the server without caching)

## What is a native web component

A native web component is a component that can be used in any web application across frameworks (and without frameworks). It consists of a custom element, and can use the shadow DOM and HTML templates.

### Custom elements

Custom elements are a way to create your own HTML elements. They are defined using the `customElements.define()` method. The method takes two arguments: the name of the element and the class that defines the element.

### Shadow DOM

Shadow DOM is a way to encapsulate the DOM and CSS of a component. It is defined using the `attachShadow()` method. The method takes one argument: the mode of the shadow DOM. The mode can be `open` or `closed`. If the mode is `open` the shadow DOM can be accessed from outside the component. If the mode is `closed` the shadow DOM can only be accessed from inside the component. The shadow DOM is rendered separately from the main DOM. This means that when a web component uses the shadow DOM the component does not collide with other elements on the page (name and styling).

### HTML templates

HTML templates are a way to define HTML that is not rendered using the `<template>` tag. The `<slot>` tag can be used to make placeholders for content that is passed to the component.

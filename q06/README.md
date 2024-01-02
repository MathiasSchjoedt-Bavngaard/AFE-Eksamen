# Q06

<!-- References to code will be made in markdown by using: See more in line XX in [name of snippet]("PATH_TO_FILE") -->

## Introduction - What is it about / what will you talk about

<!-- Cover the following points:
    - Explain what does PWA include 
        - Progressive 
        - Responsive 
        - Connectivity 
        - App-like
        - Fresh 
        - Safe 
        - Discoverable
        - Re-engageable
        - Installable 
        - Linkable 
    - 
-->

## What is A PWA

- **Progressive** - Works for every user, regardless of browser choice because it's built with progressive enhancement as a core tenet

- **Responsive** - Fits any form factor: desktop, mobile, tablet, or whatever is next.
- **Connectivity** independent - Enhanced with service workers to work offline or on
low-quality networks.
- **App-like** - Feels like an app to the user with app-style interactions and navigation because it's built on the app shell model.
- **Fresh** - Always up-to-date thanks to the service worker update process.
- **Safe** - Served via HTTPS to prevent snooping and to ensure content hasn't been tampered with.
- **Discoverable** - Is identifiable as an "application" thanks to W3C manifest and
service worker registration scope, allowing search engines to find it.
- **Re-engageable** - Makes re-engagement easy through features like push notifications.
- **Installable** - Allows users to "keep" apps they find most useful on their home screen without the hassle of an app store.
- **Linkable** - Easily share via URL, does not require complex installation.

## Lazy-loading

Modules are early loaded by default. This means that all modules are loaded when the application is loaded. This is not optimal as it can lead to performance issues.

Lazy-loading is a technique that allows you to load modules only when they are needed. You configure routes to only load when needed. Since the bundle size is smaller on the initial load it will improve the user experience significantly. Lazy loading in the router is implemented by using the loadChildren property.

See more in line 13 in [Lazy-loading](./src/app/app-routing.module.ts)

## Route information in the navigated to component

In order to access route information in the navigated to component you need to inject the ActivatedRoute service in the constructor of the component. The ActivatedRoute service contains information about the route.

See more in line 12 in [ActivatedRoute](./src/app/number/number.component.ts)

For applications where you need to know where you are in the specific component this can be useful. In our case we simply print the number of the route in the component.

See more in line 4 in [Route information in the navigated to component](./src/app/number/number.component.html)

## Route guards

Route guards are used to prevent unauthorized users from accessing certain routes. There are four types of route guards: CanActivate, CanActivateChild, CanDeactivate and CanLoad. CanActivate is used to prevent unauthorized users from accessing a route. CanActivateChild is used to prevent unauthorized users from accessing a child route. CanDeactivate is used to prevent users from leaving a route. CanLoad is used to prevent unauthorized users from loading a module.

The guard can either be synchronous or asynchronous. A synchronous guard returns a boolean value. An asynchronous guard returns an observable or a promise.

When implementing a guard you need to implement the CanActivate interface. The CanActivate interface contains a canActivate method that returns a boolean value, an observable or a promise. The canActivate method takes two parameters: the activated route snapshot and the router state snapshot. The activated route snapshot contains information about the route. The router state snapshot contains information about the router. You can also chose to implement the CanActivateChild, CanDeactivate or CanLoad interface.

See more in line 4 in [Route guards](./src/app/pick.guard.ts)

In order to use a guard in the router you need to add it to the canActivate, canActivateChild, canDeactivate or canLoad property.

See more in line 24 in [Using guards in the router](./src/app/app-routing.module.ts)

## Server-Side Rendering (SSR)

Server-Side Rendering (SSR) is a technique that allows you to render your application on the server instead of the client. This is useful for SEO and performance reasons as it allows the search engine to crawl your applications HTML.

### Pre-rendering

Pre-rendering allows you to run a client side application at build time to capture its state.

### Rehydration

Rehydration is the process of "booting up" JavaScript views on the client such that they use the server side generated HTML's DOM tree as well as the data.

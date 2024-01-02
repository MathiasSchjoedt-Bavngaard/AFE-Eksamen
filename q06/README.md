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

- **Responsive** - Fits any form factor: desktop, mobile, tablet, or whatever is next. See evt [q05](https://ninjaneer127.github.io/AFE-Eksamen/q05/)

- **Connectivity** independent - Enhanced with service workers to work offline or on
low-quality networks. see storage 

- **App-like** - Feels like an app to the user with app-style interactions and navigation because it's built on the app shell model.

- **Fresh** - Always up-to-date thanks to the service worker update process.

- **Safe** - Served via HTTPS to prevent snooping and to ensure content hasn't been tampered with.

- **Discoverable** - Is identifiable as an "application" thanks to W3C manifest and
service worker registration scope, allowing search engines to find it.

- **Re-engageable** - Makes re-engagement easy through features like push notifications.

- **Installable** - Allows users to "keep" apps they find most useful on their home screen without the hassle of an app store.
- **Linkable** - Easily share via URL, does not require complex installation.

## Storage 

To make use of a app in Offline mode its nice to save in a offline storrage like the local database. 

and example is made where we show storedData if any up until we load the data.  

See how we use this in line 5 in [cards List template](.\src\app\credit-card\credit-card-list\credit-card-list.component.html) here we "fetch" the data and then set loading and shows the stored values. 

and to see how we store and extract the data look in [cards List TS](.\src\app\credit-card\credit-card-list\credit-card-list.component.ts)

## Implementing PWA 
<!-- 
see https://hackernoon.com/building-progressive-web-application-pwa-with-angular 
 -->

We have made the installation and online status in side the Footer: ![Connections](images/Connectionstatus.png)

### Make it installable 
Add the @angular/pwd library to set up the Angular service worker. 
we make changes in these files
- package.json: The @angular/service-worker library was added.
- src/app/app.module.ts: The service worker configuration was added.
- src/index.html: Manifest file configuration and theme color was added.


### Check online status
a Important thing is the "fresh" data vibe. this is done be using the window.navigator.online se line 45-48 [code](.\src\app\footer\footer.component.ts) 

We also add a eventlistner. to see if this changes on [line 25](.\src\app\footer\footer.component.ts)

### Update App

When Downloaded a update notfication should be implemented 
this is done in [line 28-50 ](.\src\app\footer\footer.component.ts)
this uses the Service Worker Update from angular to update the version of the app.

We then make a popup as seen here:
![update](images/update.png)
and the way we make the pop up is in the teplate. but in the TS we need to tjeck what type of device we are using.
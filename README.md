# Qwik: `:root` still captured during view transitions in Chrome

A fresh `npm create qwik@2.0.0-rc.4 empty`, plus one commit that turns on view
transitions and adds an About page. Qwik is pinned to 2.0.0-rc.4.

```sh
npm install
npm run dev
```

Open it in Chrome, paste this into the console, then click "About":

```js
document.addEventListener("qviewtransition", (e) =>
  e.detail.ready.then(() =>
    console.log(getComputedStyle(document.documentElement).viewTransitionName),
  ),
);
```

It logs `root`. Going by the docs it should be `none`.

# Olumese Family Tree

A dependency-free family tree website built with HTML, CSS, and JavaScript. It works as a local static site and can also be deployed to any static web host.

## Open the site

Open `index.html` in a browser. No build step or package installation is needed.

## Add family members

Edit `family-data.js`. Each person has a unique `id`, a `name`, and optionally a `role`, `notes`, and `unions`. Each union has a `spouse` and a `children` array. Children use the same person structure, so the tree supports further generations and multiple unions.

```js
{
  id: "child-one",
  name: "Child Name",
  role: "Child of Olumese",
  unions: [
    {
      spouse: { id: "child-one-spouse", name: "Spouse Name", role: "Spouse" },
      children: []
    }
  ]
}
```

Place a child's record in the `children` array for the correct union. Keep IDs unique. A placeholder spouse can be marked with `placeholder: true` until their name is known.

# Bupecalc

Calculate and visualize dosage for various types of buprenorphine.

Designed to be used online and then printed out in landscape mode.

## TODO

* [ ] add multiple preset regimens to choose between
* [ ] refactor StripType to be, like... Drug. Or something
  * [ ] have a 'name' field
  * [ ] have a 'color' field so we don't have to keep adding all these goofy CSS classes
  * [ ] have a 'viz-shape' to be oval vs. rectangular

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.


## Adding new drugs

1. Add the drug in StripType
2. Make sure there's a corresponding style in Strip.svelte
3. Wonder if there's a way to put the color in the StripType also.
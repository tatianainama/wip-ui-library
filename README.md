# Stream frontend UI library

## Motivation

As we own the marketing website, the blog (and maybe docusaurus in the future) and we want them all to share the same design, we would like to introduce a UI Component Library (since the projects share the same technology stack).

Aside from the benefit of reusability, a UI library will also:
  - work as single source of truth
  - improve the review cycle between frontend team and designers
  - improve documentation
  - be easier to test

## Architecture

Because the frontend team spends most of the time maintaining the marketing website, it seems logical for the UI library to live in the same repository (stream), to avoid having to publish the library on every change.

Based in our current repository structure:

```
stream
├── ...
├── frontends
│   ├── ui-library
│   └── website
│                   
└── ...
```

## Requirements

The main requirements for our component library are:

- Use React
- Storybook for development/testing/documentation
- Code splitting (we don't want to import the whole library if only one component is used in the project)

## Development

A downside of having components as a private npm package is that we have to publish all the changes to use them in every project. A good solution to this is to `link` our library locally so we can test changes without publishing to npm.

An example of this workflow:

1. We need to update our `Button` component, so we go to our ui-library folder, run `yarn dev` to help us see what we are changing.
2. When we are happy with the updates, we run `yarn link` in our ui-library (we only need to run this once).
3. Switch to the main project (website or blog) and run `yarn link stream-ui-library`. This will tell us that we will be using linked package instead of the one in the npm registry.
4. Run `yarn start` in the main project, test and see if the Button changes are correct
5. We are ready to push our changes to github.

## Creation Tools

I considered the following React project skeletons:

- [Create React App](https://github.com/facebook/create-react-app): Perfect to create a React application, but not a __library__
- [Create React Library](https://www.npmjs.com/package/create-react-library): Sounds like the perfect tool, took me a lot of time to make it work and in the end had inflexible config. [Unknown future project status](https://github.com/transitive-bullshit/create-react-library/issues/171) :\
- [Neutrino React Components](https://neutrinojs.org/packages/react-components/): Recommended by React. Was working perfectly but ended up blocked with configs (perfect for __one__ component but not a library).

## Custom component library

Since working with previous tools ended up beign not as flexible as expected, I decided to try my own library configuration. I based this project on [this](https://blog.harveydelaney.com/creating-your-own-react-component-library/) and [this](https://prateeksurana.me/blog/react-component-library-using-storybook-6/) posts.

### Missing/to considerate:

- css modules + tailwind or styled components?
- publish to npm
- netlify environment if we want a live version of the storybook app (useful if we want feedback from design team)

### How to use

One of the main concerns about having a separate ui library is the development process. We don't want to add extra steps if we want to ship things fast. Said that, we still need to follow some steps to get things done:

1. Component Creation: Using `yarn template $componentName` will generate a basic skeleton for the new component (component, css, stories and test files).

```console
yarn generate MyCustomComponent

ui-library
├── ...
├── src
│   ├── components
│   │   ├── ...             
│   │   ├── MyCustomComponent             
│   │   │   ├── index.js
│   │   │   ├── MyCustomComponent.css
│   │   │   ├── MyCustomComponent.test.js
│   │   │   └── MyCustomComponent.stories.js
│   │   └── ...             
│   └── ...
└── ...
```

2. Run `yarn start` to start storybook server to see changes live
3. Same as the neutrino app, run `yarn link` to test library changes locally

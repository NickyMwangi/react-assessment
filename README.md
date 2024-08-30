# What to expect

The project was an assessment to load deliveries from an API and display them in the UI in a presentable way. Below are the features you will find in the project;

### React Hooks

- I have implemented **use-axios-instance** and **use-pagination** hook in this project. Some of the built-in react hooks that I have used throughout the applications are **useEffect, useMemo and useContext**
  These shows my understanding of the concept.

### Taiwind and chakra-UI

I love **tailwindCSS** and I have been using it in most of my web development. In this application I decided to integrate it with chakra-UI. The result was amazing and working with the two made my code fun and interesting.

### Code Reusability.

Under **utils**, I have a UI folder that stores most of the reusable components throughout the application. **Data tables** implements the use of **Tanstack Headless UI table**. I call this anywhere I need to use a responsive, well paginated table.
other UI components are \_\_Delete confirmation dialog, custom toast message, etc.

### React-Redux

In the application I have used react-redux for state-management. I have made used of store, reducer and action mostly when setting up the underlying them.

### React Packages.

In the application I have made use of numerous react packages like;

- AXIOS – for making API calls. You also used fetch.
- REACT-HOOK-FORM – Love this for the management of my input forms.
- MOMENT - date formatting
- REACT-ROUTER-DOM – Help in react routing
- REACT-PERFECT-SCROLLBAR, - manage scrolling
- REACT-SELECT – Help to implement select in the form. It helps to create a select that has many features like search
  Other packages are **CRYPTOJS, REACT-FLATPICKR, REACT-ICONS, YUP etc.**

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname
  }
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

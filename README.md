## Introduction to React 

> The Objective of this project is to pratice and study React fundamentals.
> A curse offered by Digital Innovation One - DIO and some contents were added by me through research and reading documentation.

#### Knowing and configuring React
- JSX
- Functional Programming
- Syntax
- Styles with CSS

#### Rendering Elements
- Element rendering
- React DOM
- Root Node
- Class Components 
- Function Components

#### Components and Props
- Function and class
- props
- Component composition
- Component extraction

Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.

Components come in two types: Class components and Function components.

In React, you can create distinct components that encapsulate the behavior you need. So, you might just render some of the elements depending on the state of your application. Conditional rendering in React works the same way conditions work in JavaScript.

A class component must include the extends React.Component statement. This statement creates an inheritance to React.Component, and gives your component access to React.Component's functions.


#### State and Life Cycle
- Startup
- Mounting
- Update
- Disassembly
- Ecosystem

#### Webpack
> Webpack is a module bundler
> Its main purpose is to bundle JavaScript files for usage in a browser

- Entry: point that indicates which module webpack should use to start building the internal dependency graph. By defining an entry point, webpack will find all the dependencies and do the import
- Output: this property defines the name and location of the package generated by webpack. The default directory is ./dist and the ./dist/main.js file.
- Loaders: By default webpack only understands JavaScript files, then to understand other types of files we must use Loaders which are modules that can be installed separately allowing webpack to convert these files into valid modules and add them to the dependency graph.
- Plugins: used to perform a variety of tasks such as optimizing packages, managing assets and injecting environment variables.
- Mode: In the mode attribute, the webpack execution mode is defined as production, development or none. According to the defined option, webpack activates specific optimizations. The default environment is production.
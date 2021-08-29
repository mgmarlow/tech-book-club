---
title: 'Conventional React Micro Frontends'
author: 'Graham Marlow'
date: '2021-08-28'
description: "Improve conventional micro frontends with modern tooling."
tags: micro-frontends
---

One of the first articles covered in [tech book club](https://techbookclub.dev) was [Micro Frontends](https://martinfowler.com/articles/micro-frontends.html), an approach to scaling frontend development across many independent and autonomous teams.

Although the content of the article is well-articulated, the accompanying example is lacking. It hacks [create-react-app](https://create-react-app.dev/) with an extra package to enable Webpack builds and offers no mechanism to run all of the micro frontend applications in tandem. The example is easy to follow, but inspires no confidence for a real-world scenario.

After experimenting with different tools and approaches, I think I've constructed a better scaffold for micro frontends that improves the overall developer experience. This article walks you through that approach.

You can find the complete example [here](https://github.com/mgmarlow/micronx).

## Monorepos with Nx

One of the major disadvantages to micro frontends is complexity. Rather than maintaining all of your application code in one place, that code is now spread across multiple applications and managed by separate teams. This can make collaboration on shared assets difficult and tedious.

Keeping each micro frontend within the same repository (monorepo) is one easy way to help manage this complexity. Google [famously uses this technique](https://cacm.acm.org/magazines/2016/7/204032-why-google-stores-billions-of-lines-of-code-in-a-single-repository/fulltext) to manage its billion-line codebase, relying on automation and tools to manage the trade-offs.

Rather than using create-react-app to bootstrap micro frontends, turn instead to [Nx](https://nx.dev/). Nx is a build framework that offers tools to manage a multi-application monorepo, a perfect fit for micro frontends.

Here are a few ways Nx helps manage micro frontends:

- Script orchestration: run servers/builds for multiple micro frontends concurrently with a single command.
- Share common components and code libraries conveniently without introducing lots of Webpack overhead.
- Manage consistent dependency versions.
- Run builds and tests for affected changes across micro frontends based on [dependency graphs](https://nx.dev/latest/react/core-extended/affected).

Nx is certainly not the only tool that supports monorepos, but I’ve found it to be a great fit for micro frontends thanks to its built-in React support and batteries-included functionality. [Lerna](https://lerna.js.org/) is noteworthy alternative that offers less built-in functionality at the advantage of flexibility.

## Detailed example

Nx requires only a few configuration changes to support micro frontends and you won’t need the help of an ejection tool like `react-app-rewired`.

1. Create a new Nx workspace with two React applications (one container, one micro frontend).
2. Extend Nx’s default React Webpack configuration to disable chunking and generate an asset manifest.
3. Implement conventional micro frontend components as described in the Thoughtworks article.
4. Tie it all together with a single `npm start` script.

## 1. Create the Nx workspace

Begin by creating a new Nx workspace:

```shell
npx create-nx-workspace@latest micronx

? What to create in the new workspace...
> empty
Use Nx Cloud?
> No
```

Navigate into the new `micronx` directory and create two React applications, one container and one micro frontend. It’s important to select `styled-components` (or another CSS-in-JS solution) so that your component CSS is included in the micro frontend’s JS bundle.

```shell
cd ./micronx
npm install --also=dev @nrwl/react

# Container application
nx g @nrwl/react:app container
> styled-components
> No

# Micro frontend
nx g @nrwl/react:app dashboard
> No
```

So far you've created a monorepo with two separate React applications: container and dashboard. Either React application can be served independently via its respective `nx run <app>:serve` script, but there's nothing yet in place to have them work together.

The next step sprinkles in some configuration changes that allow you to dynamically load the dashboard application as a micro frontend.

## 2. Modify micro frontend Webpack configuration

Nx stores most of its relevant configuration in the `workspace.json` file stored at the project's root.

You need to modify `workspace.json` to point the micro frontend’s Webpack configuration to a new file, `webpack.config.js`. This new file contains the configuration updates necessary to support dynamically loading the micro frontend.

Note that you don’t need to do this for the container, since the container is not a micro frontend.

```json
// workspace.json
"projects": {
  "dashboard": {
    "targets": {
      "build": {
        // ...
        "webpackConfig": "webpack.config.js"
      }
    }
  }
}
```

Now you need to create that file, `webpack.config.js`, at the root directory of the project.

This modified Webpack configuration extends the default code from [@nrwl/react](https://github.com/nrwl/nx/blob/master/packages/react/plugins/webpack.ts) to avoid losing any functionality. Following the Thoughtworks example, two modifications are needed to support conventional micro frontends:

1. Disable chunking so the container application loads one bundle per micro frontend.
2. Add `WebpackManifestPlugin` to map the generated JS output to an easy import path (taken from [react-scripts webpack configuration](https://github.com/facebook/create-react-app/blob/bb64e31a81eb12d688c14713dce812143688750a/packages/react-scripts/config/webpack.config.js#L705)).

```shell
npm install --also=dev webpack-manifest-plugin
```

```js
// webpack.config.js
const reactWebpackConfig = require('@nrwl/react/plugins/webpack')
const { WebpackManifestPlugin } = require('webpack-manifest-plugin')

function getWebpackConfig(config) {
  config = reactWebpackConfig(config)

  // Disable chunking
  config.optimization = {
    ...config.optimization,
    runtimeChunk: false,
    splitChunks: {
      chunks(chunk) {
        return false
      },
    },
  }

  // Enable asset-manifest
  config.plugins.push(
    new WebpackManifestPlugin({
      fileName: 'asset-manifest.json',
      publicPath: '/',
      generate: (seed, files, entrypoints) => {
        const manifestFiles = files.reduce((manifest, file) => {
          manifest[file.name] = file.path
          return manifest
        }, seed)
        const entrypointFiles = entrypoints.main.filter(
          fileName => !fileName.endsWith('.map'),
        )

        return {
          files: manifestFiles,
          entrypoints: entrypointFiles,
        }
      },
    }),
  )

  return config
}

module.exports = getWebpackConfig
```

Run `nx run dashboard:serve` and visit [http://localhost:4200/asset-manifest.json](http://localhost:4200/asset-manifest.json). Note that the dashboard application now only has one entry point: `main.js`.

```json
{
  "files": {
    "main.js": "/main.js",
    "main.js.map": "/main.js.map",
    "polyfills.js": "/polyfills.js",
    "polyfills.js.map": "/polyfills.js.map",
    "assets/.gitkeep": "/assets/.gitkeep",
    "favicon.ico": "/favicon.ico",
    "index.html": "/index.html"
  },
  "entrypoints": ["main.js"]
}
```

## 3. Add in micro frontend components

With Nx configured properly, the next step is to follow Thoughtworks example and introduce all of the micro frontend functionality.

The following links don't deviate from the article, but are included for completeness.

1. [Create a new component, `MicroFrontend`, in the container](https://github.com/mgmarlow/micronx/blob/main/apps/container/src/app/MicroFrontend.tsx).

2. [Use the `MicroFrontend` component to load the dashboard micro frontend in the container](https://github.com/mgmarlow/micronx/blob/main/apps/container/src/app/app.tsx).

3. [Export render functions so the dashboard micro frontend no longer renders itself to the DOM](https://github.com/mgmarlow/micronx/blob/main/apps/dashboard/src/main.tsx).

4. [Update the dashboard's `index.html` so it can still be served independently](https://github.com/mgmarlow/micronx/blob/main/apps/dashboard/src/index.html).

## 4. Tie everything together

The last step is to serve the micro frontend and container together. Add `concurrently` and modify your start script to serve the dashboard on a specific port.

```json
"start": "concurrently \"nx run container:serve\" \"nx run dashboard:serve --port=3001\""
```

Run `npm start` and you've got micro frontends.

## Working with Nx

### Serving micro frontends

Nx doesn't have out-of-the-box functionality for serving multiple applications simultaneously, which is why I resorted to `concurrently` in the above example. That said, running individual micro frontends is made easy with the Nx CLI.

- Develop micro frontends independently via `nx run <project>:serve`.
- See how they fit into the whole application via `npm start`.

### Generators

Nx ships with a [handful of generators](https://nx.dev/latest/react/react/overview#generators) that help scaffold your application. In particular, the library generator makes it really easy to share React components:

```shell
nx g lib common
```

This creates a new React library in your project's `libs/` directory with a bunch of pre-configured build settings. Included is a convenient TypeScript path alias that makes importing the library straightforward:

```js
// apps/dashboard/src/app/app.tsx
import { ComponentA, ComponentB } from '@micronx/common'
```

Nx provides additional benefits to sharing code this way by keeping track of your project's [dependency graph](https://nx.dev/latest/react/structure/dependency-graph). The relationships between your various code libraries and each dependent application can be illustrated by running `nx dep-graph`.

Internally, Nx uses this dependency graph to reduce the number of builds/tests that need to be run when changes are introduced. If you make a change to `apps/dashboard/` and run `nx affected:test`, Nx will only run tests for the Dashboard micro frontend. This becomes very powerful as the dependency graph of your project grows in complexity.

### Optimizations

Something unique to the micro frontend strategy is the duplication of common vendor dependencies and shared code libraries in the production JS bundles.

The Thoughwork's article touches on this in the ["Common Content"](https://martinfowler.com/articles/micro-frontends.html#CommonContent) section, advocating for tagging common dependencies as [Webpack externals](https://webpack.js.org/configuration/externals/) to prevent them from being included in each application's final bundle.

```js
module.exports = (config, env) => {
  config.externals = {
    react: 'React',
    'react-dom': 'ReactDOM',
  }
  return config
}
```

Once [Nx upgrades its React tools to Webpack 5](https://nx.dev/latest/react/guides/webpack-5), a new method of code optimization will be available for micro frontend projects via [Module Federation](https://webpack.js.org/concepts/module-federation/). This strategy enables building shared code libraries (`libs/`) [into the container application](https://webpack.js.org/concepts/module-federation/#components-library-as-container), removing yet another common dependency from the micro frontend bundles.

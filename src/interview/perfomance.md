# React

`https://www.codementor.io/blog/react-optimization-5wiwjnf9hj`

- use immutable data structures

- use (useMemo, useCallback, React.memo) to prevent component re-render unnecessary
  should use useMemo when: but tốn bộ nhớ

* need calculate value or find value from large list (multiple items)
* create config of component (ex: tinymce editor)
* depend on complexity of function -> large complexity -> use or vise dire

- code splitting, chunk file (webpack, rollup, browserify)
- when import library ui (like material-ui) -> import component deepest that you need and you can config to just only import components that you use
- use cdn
- for image: try resize exactly that size you will show in ui (for mobile # laptop)
- dynamic import (import when you use, ex: in handleClick...)
- lazy load with router:

  - react.lazy will automatically load the bundle containing the component when this component is first rendered
  - react.lazy takes a function that must call a dynamic import(). This must return a `Promise` which resolves to a module with a default export containing a React component.
  - Need inside `Suspense` with fallback will be shown while waiting component load
  - Can use with transitions (startTransition, useTransition), ex: we have two tab component use lazy, when we click new tab, react will waiting new component load done, after that the tab change.

- use React.lazy, Suppense with react-router, large components
- render large list with react-window npm
- list virtualization - infinite loading

  render props

- use default import (not use name import) when import component from library (mui-ui) because default import faster than name import
  `Because`: when use name import with library in reactjs, babel will transfer to default export, then get value from that export. So always import all folder that include component(function) that you need -> bundler size increase
  `Solution`:

  - you can use 'babel-plugin-transform-imports' to transfer name import to default import (example in `https://www.bharathikannan.com/blog/minimizing-lodash-bundle-size`)
  - babel-plugin-import, babel-plugin-direct-import (`https://mui.com/material-ui/guides/minimizing-bundle-size/`)

- you can use some library replace (ex: lodash-webpack-plugin for lodash)

  related with tree-shaking
  not affect with component writed by yourself

# BE

'CDN - Caching - Load balancing - db scaling - gzip';

# image

'https://99designs.com/blog/tips/image-file-types/';
'https://pageweight.imgix.com/';
'https://www.sitepoint.com/gif-png-jpg-which-one-to-use/';
const images = [
'transparency: PNG',
'animations: GIF',
'colourful images: JPG',
'simple icons, logos, illustrations: SVGs',
'Reduce PNG with TinyPNG',
'Reduce JPG with JPEG-optimizer',
'Try to choose simple illustrations over highly detailed photographs',
'Always lower JPEG image quality (30 - 60%)',
'Resize image based on size it will be displayed',
'Display different size image for different backgrounds',
'Use CDNs like imigx',
'Remove image metadata with https://www.verexif.com/',
];

# Redux

- reselect for single cache
- re-reselect for multi cache

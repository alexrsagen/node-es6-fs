# node-es6-fs
Promise wrapper written in ES6 for the Node.js filesystem API

## Installation
```
npm install es6-fs --save
```

## `FS`
Is an ES2015 [Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) around the Node.js [File System API](https://nodejs.org/dist/latest/docs/api/fs.html).

Also includes custom helper methods documented below.

## `FS` Custom asynchronous methods
##### `FS`.recursedir(dirPath[, options])
Recurses a directory and returns all paths in the directory and all subdirectories.

Options:
- `includeDirectories` &lt;boolean&gt; (Defaults to `false`) - Whether to include directories in the returned paths (otherwise only files).

Returns a promise that will resolve to an array of paths.

## `FS` Custom synchronous methods
##### `FS`.recursedirSync(dirPath[, options])
Recurses a directory and returns all paths in the directory and all subdirectories.

Options:
- `includeDirectories` &lt;boolean&gt; (Defaults to `false`) - Whether to include directories in the returned paths (otherwise only files).

Returns an array of paths.

## Basic usage

#### Write a file
```javascript
const fs = require("es6-fs");

fs.writeFile("helloworld.txt", "Hello World!")
.then(() => console.log("File written!"))
.catch(err => console.error(err));
```

#### Read a file
```javascript
const fs = require("es6-fs");

fs.readFile("helloworld.txt")
.then(contents => console.log(contents)) // Hello World!
.catch(err => console.error(err));
```
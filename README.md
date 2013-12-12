## brick

A UI Component system designed for simplicity and productivity.

## Install

```bash
$ npm install brick
```

## Introduction

Every brick is an independent UI and a separate NPM package. Create a new one by:

```bash
$ mkdir hello-world && cd hello-world
$ npm init
```

Now create the assets of your new brick:

index.html:
```html
<div class="hello-world">
  <h1>Hello world!</h1>
  This is an example app!
</div>
```

style.css:
```css
.hello-world {
  color: red;
}

.hello-world h1 {
  background: green;
}
```

index.js:
```js
var Brick = require('brick')

module.exports = Brick('index.html', 'style.css')
```

You can start serving this brick at this moment,

```bash
$ brick
Running hello-world brick at localhost:3000.
```

Or create an individual HTML file that you can staticly serve:

```bash
$ brick -o bundle.html
```

Or, you can browserify it:

```bash
$ brick -o bundle.js
```

The `bundle.js` generated by brick above will expose a function named `HelloWorld` globally. And you can insert it to anywhere in your DOM like the below example:

```html
<html>
  <head>
    <script src="bundle.js" type="text/javascript" />
    <script>
      HelloWorld().insertAfter('h1')
    </script>
  </head>
  <body>
    <h1>Welcome</h1>
  </body>
</html>
```
# Element In View

Detect when an element is visible in the browsers viewport.

## Install

###### Node

```
npm install @celsowhite/element-in-view --save
```

###### Browser

Download the library file from dist/element-in-view.umd.js and include it in your sites files.

## Setup

###### Node

```javascript
import elementInView from '@celsowhite/element-in-view';
elementInView(element, elementPart);
```

###### Browser

```html
<script src="dist/element-in-view.umd.js"></script>
<script>
	elementInView(element, elementPart);
</script>
```

## Usage

The script is flexible in that it doesn't assume when/how you are checking if an element is in view. A common use case will be during the window scroll event (see example below). If you use it for scrolling effects then it's recommended to [debounce](https://davidwalsh.name/javascript-debounce-function) the scroll event.

##### Example

```js
const elementToTrack = document.querySelctor('.element');

window.addEventListener('scroll', function() {
	let inView = elementInView(elementToTrack, 'middle');
	console.log(inView); // true/false
});
```

##### Parameters

- `element` {HTML Element} A single element we want to check the position of to see if it is in the viewport.
- `elementPart` {String} The part of the element we track to check if it is in view. Options: top, middle or bottom. Defaults to 'top'.
- `offsetPercentage` {Number} The percentage distance within the window when you want the element to be considered in view. By default, this is 0 so the element will appear when it scrolls into frame.

##### Return

{Bool} True/False

## License

MIT License © [Celso White](https://celsowhite.com)

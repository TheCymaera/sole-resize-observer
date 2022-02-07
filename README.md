# Sole Resize Observer


## Installation
Install via [NPM](https://www.npmjs.com/package/sole-resize-observer).
```shell
npm install sole-resize-observer
```

## Information
The [recommended pattern](https://github.com/WICG/resize-observer/issues/59) is to observe all elements using a single `ResizeObserver`. This library makes it easier.

```typescript
import { soleResizeObserver } from "sole-resize-observer";

const callback = ()=>{
	console.log("The element's height is:", element.clientHeight);
}

soleResizeObserver.addListener(element, callback);

soleResizeObserver.removeListener(element, callback)
```
Like the built-in `ResizeObserver`, observations are tied to the element's life cycle, thus calling `removeListener` is usually not necessary.


## License
MIT License<br/>
<br/>
All files can be used for commercial or non-commercial purposes. Do not resell. Attribution is appreciated but not due.
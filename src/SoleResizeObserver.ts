export class SoleResizeObserver {
	addListener(element: Element, callback: SoleResizeObserver.Callback) {
		if (!this._callbacks.has(element)) {
			this._callbacks.set(element, new Set([callback]));
			this._observer.observe(element);
		} else {
			this._callbacks.get(element)!.add(callback);
			callback(element);
		}
	}

	removeListener(element: Element, callback: SoleResizeObserver.Callback) {
		const list = this._callbacks.get(element);
		if (!list) return;
		if (list.size > 1) {
			list.delete(callback);
		} else {
			this._callbacks.delete(element);
			this._observer.unobserve(element);
		}
	}

	removeListeners(element: Element) {
		this._callbacks.delete(element);
		this._observer.unobserve(element);
	}

	private readonly _callbacks: WeakMap<Element, Set<SoleResizeObserver.Callback>> = new WeakMap();
	private readonly _observer = new ResizeObserver((entries)=>{
		for (const entry of entries) {
			const element = entry.target;
			const callbacks = this._callbacks.get(element);
			if (callbacks) {
				for (const callback of callbacks) callback(element);
			}
		}
	});
}

export namespace SoleResizeObserver {
	export type Callback = (element: Element)=>any;
}
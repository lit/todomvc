import { ReactiveElement } from "lit";

export const updateOnEvent =
	(_eventName: string) => (target: unknown, propertyKey: string) => {
		const descriptor = Object.getOwnPropertyDescriptor(target, propertyKey)!;
		console.log({ target, propertyKey, descriptor });
		const { get, set } = descriptor;
    const newDescriptor = {
      ...descriptor,
      set(this: ReactiveElement, v: EventTarget) {
        console.log('updateOnEvent set');
        const listener = ((this as any).__updateOnEventListener ??= () =>
          this.requestUpdate());
        const oldValue = get!.call(this);
        oldValue?.removeEventListener?.(_eventName, listener);
        v?.addEventListener?.(_eventName, listener);
        return set!.call(this, v);  
      }
    };
    Object.defineProperty(target, propertyKey, newDescriptor);
	};

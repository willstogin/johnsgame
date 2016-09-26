export class Option<T> {


	private some: T;
	private none: None;

	constructor(value: T | None) {
		if (this.isNone(value)) {
			this.none = value;
			this.some = null;
		} else {
			this.some = value;
			this.none = null;
		}
	}

	private isNone(noneOrObject: T | None): noneOrObject is None {
		return (typeof noneOrObject == "None");
	}

	public get value(): T | None {
		if (this.some) {
			return this.some;
		} else {
			return this.none;
		}
	}

	public unwrap(): T {
		if (this.some) {
			return this.some
		} else {
			throw new Error("Cannot unwrap on a None");
		}
	}

	public match(handleSome: () => void, handleNone: () => void) {
		if (this.some) {
			handleSome();
		} else {
			handleNone();
		}
	}
}

export enum None {
}


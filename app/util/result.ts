export class Result<T> {


	private ok: T;
	private err: Err;

	constructor(value: T | Err) {
		if (this.isError(value)) {
			this.err = value;
			this.ok = null;
		} else {
			this.ok = value;
			this.err = null;
		}
	}

	private isError(noneOrObject: T | Err): noneOrObject is Err {
		return (typeof noneOrObject == "Err");
	}

	public get value(): T | Err {
		if (this.ok) {
			return this.ok;
		} else {
			return this.err;
		}
	}

	public unwrap(): T {
		if (this.ok) {
			return this.ok
		} else {
			throw new Error("Cannot unwrap on an Err");
		}
	}

	public match(handleSome: () => void, handleNone: () => void) {
		if (this.ok) {
			handleSome();
		} else {
			handleNone();
		}
	}
}

export enum Err {
}

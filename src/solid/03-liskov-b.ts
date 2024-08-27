export abstract class Vehicles {
	abstract getNumberOfSeats(): number
}

export class Tesla extends Vehicles {
	constructor(private numberOfSeats: number) {
		super()
	}

	getNumberOfSeats() {
		return this.numberOfSeats
	}
}

export class Audi extends Vehicles {
	constructor(private numberOfSeats: number) {
		super()
	}

	getNumberOfSeats() {
		return this.numberOfSeats
	}
}

export class Toyota extends Vehicles {
	constructor(private numberOfSeats: number) {
		super()
	}

	getNumberOfSeats() {
		return this.numberOfSeats
	}
}

export class Honda extends Vehicles {
	constructor(private numberOfSeats: number) {
		super()
	}

	getNumberOfSeats() {
		return this.numberOfSeats
	}
}

export class Ford extends Vehicles {
	constructor(private numberOfSeats: number) {
		super()
	}

	getNumberOfSeats() {
		return this.numberOfSeats
	}
}

export abstract class Vehicle {
  abstract getNumberOfSeats(): number
}

export class Tesla extends Vehicle {
  constructor(private numberOfSeats: number) {
    super()
  }

  getNumberOfSeats(): number {
    return this.numberOfSeats
  }
}

export class Honda extends Vehicle {
  constructor(private numberOfSeats: number) {
    super()
  }

  getNumberOfSeats(): number {
    return this.numberOfSeats
  }
}

export class Toyota extends Vehicle {
  constructor(private numberOfSeats: number) {
    super()
  }

  getNumberOfSeats(): number {
    return this.numberOfSeats
  }
}

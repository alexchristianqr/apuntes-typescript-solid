interface Bird {
  eat(): void
}

interface FlyingBird extends Bird {
  fly(): void
}

interface RunningBird extends Bird {
  run(): void
}

interface SwimmerBird extends Bird {
  swim(): void
  swimmingChampionship(): void
}

export class TucanBird implements FlyingBird {
  eat(): void {
    console.log({ className: "TucanBird", method: "eat()" })
  }

  fly(): void {
    console.log({ className: "TucanBird", method: "fly()" })
  }
}

export class HumminBird implements FlyingBird {
  eat(): void {
    console.log({ className: "HumminBird", method: "eat()" })
  }

  fly(): void {
    console.log({ className: "HumminBird", method: "fly()" })
  }
}

export class OstrichBird implements RunningBird {
  eat(): void {
    console.log({ className: "OstrichBird", method: "eat()" })
  }

  run(): void {
    console.log({ className: "OstrichBird", method: "run()" })
  }
}

export class PenguinBird implements SwimmerBird {
  eat(): void {
    console.log({ className: "PenguinBird", method: "eat()" })
  }

  swim(): void {
    console.log({ className: "PenguinBird", method: "swim()" })
  }

  swimmingChampionship(): void {
    console.log({ className: "PenguinBird", method: "swimmingChampionship()" })
  }
}

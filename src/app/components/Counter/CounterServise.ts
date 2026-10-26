// внешний сервис / бизнес-логика

export interface Counter {
  getCounter: () => number;
  increment: () => void;
  decrement: () => void;
  double: () => void;
  divide: () => void;
}

export class CounterService implements Counter {
  private counter: number = 1;

  public getCounter(): number {
    return this.counter;
  }

  public increment(): void {
    this.counter += 1;
  }

  public decrement(): void {
    this.counter -= 1;
  }

  public double(): void {
    this.counter *= 2;
  }

  public divide(): void {
    this.counter /= 2;
  }
}

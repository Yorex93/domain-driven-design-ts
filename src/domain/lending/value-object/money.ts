export class Money {
  private readonly value: number;
  private readonly currency: string;

  constructor(value: number, currency: string) {
    this.value = value;
    this.currency = currency;
  }

  static of(value: number, currency: string): Money {
    return new Money(value, currency);
  }

  getValue = () => this.value;
  getCurrency = () => this.currency;
  equals = (anotherMoney: Money): boolean => {
    return (
      this.currency === anotherMoney.getCurrency() &&
      this.value === anotherMoney.getValue()
    );
  };
}

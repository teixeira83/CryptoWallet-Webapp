export class User {
  private id: string = '';

  private brl: number = 100000.0;

  private btc: number = 0.0;

  private brita: number = 0.0;

  private email: string = '';

  getBRLBalance(): number {
    return this.brl;
  }

  getBTCBalance(): number {
    return this.btc;
  }

  getBritaBalance(): number {
    return this.brita;
  }

  getUserId(): string {
    return this.id;
  }

  getEmail(): string {
    return this.email;
  }

  setBRLBalance(brl: number): void {
    this.brl = brl;
  }

  setBTCBalance(btc: number): void {
    this.btc = btc;
  }

  setBritaBalance(brita: number): void {
    this.brita = brita;
  }

  constructor(id: string, email: string) {
    this.id = id;
    this.email = email;
  }
}

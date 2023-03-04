/* This kata is about static method that should return different values.

On the first call it must be 1, on the second and others - it must be a double from previous value. */

class Class {
  static #calledNum = 0;
  static getNumber(): number {
    this.#calledNum = this.#calledNum === 0 ? 1 : this.#calledNum * 2;
    return this.#calledNum;
  }
}

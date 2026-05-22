import { UserInterface } from "./user-interface";
import { UserType } from "./user-type-alias";

export class User implements UserInterface, UserType {
  public constructor(public name: string, public age: number) {}

  public hello(): void {
    console.log(`Hi! My name is ${this.name}. And I am ${this.age} years old.`);
  }
}

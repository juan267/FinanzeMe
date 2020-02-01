class User {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // public method
  printUserInfo() {
    console.log(`name: ${this.name}, age: ${this.age}`);
  }

  getAge() {
    return this.age;
  }

  getName() {
    return this.name;
  }
}

let juan: User;

juan = new User();

juan = new User(1, 2);

juan = new User("juan", 2);

juan.printUserInfo();

juan.name;
juan.age;

juan.getName();

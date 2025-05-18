/**
 * 인터페이스
 */

interface Person {
  readonly name: string;
  age?: number;

  // sayHi: () => void;
  // sayHi: (a: number, b: number) => void; // ❌

  sayHi(): void;
  sayHi(a: number, b: number): void; // 오버로드 시그니처
}

const person: Person = {
  name: '이정환',
  sayHi: function () {
    console.log('Hi');
  },
};

person.sayHi();
person.sayHi(1, 2);

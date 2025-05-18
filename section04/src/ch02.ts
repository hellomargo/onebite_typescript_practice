/**
 * 함수 타입 표현식
 * - 함수 타입을 타입 별칭과 함께 별도로 정의할 수 있다
 */

type Operation = (a: number, b: number) => number;

const add: Operation = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;
const multiply: Operation = (a, b) => a * b;
const divide: (a: number, b: number) => number = (a, b) => a / b; // 이렇게도 쓸 수 있음

/**
 * 호출 시그니쳐
 * (콜 시그니쳐)
 */

type Operation2 = {
  (a: number, b: number): number; // 함수 타입 표현식과 동일한 기능을 한다
  name: string; // 하이브리드 타입: 호출 시그니쳐 아래에 프로퍼티를 추가 정의하는 것도 가능, 함수이자 일반 객체를 의미하는 타입으로 정의
};

const add2: Operation2 = (a, b) => a + b;
const sub2: Operation2 = (a, b) => a - b;
const multiply2: Operation2 = (a, b) => a * b;
const divide2: Operation2 = (a, b) => a / b;

// add2();
// add2.name

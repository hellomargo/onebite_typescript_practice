/**
 * 선언 합침
 */

// 타입 별칭은 동일한 스코프 내에 중복된 이름으로 선언할 수 없는 반면, 인터페이스는 가능
interface Person {
  name: string;
}

interface Person {
  name: string; // 만약 인터페이스들이 동일한 이름의 프로퍼티를 서로 다른 타입으로 정의한다면 오류가 발생
  age: number;
}

interface Developer extends Person {
  name: 'hello';
}

const person: Person = {
  name: '',
  age: 27,
};

/**
 * 모듈 보강
 */

interface Lib {
  a: number;
  b: number;
}

interface Lib {
  c: string;
}

const lib: Lib = {
  a: 1,
  b: 2,
  c: 'hello',
};

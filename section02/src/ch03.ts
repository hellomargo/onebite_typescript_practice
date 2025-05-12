// 객체 타입 - 객체 리터럴 타입
let user: {
  id?: number; // 선택적 프로퍼티(Optional Property)
  name: string;
} = {
  id: 1,
  name: '홍길동',
};

let dog: {
  name: string;
  color: string;
} = {
  name: '왈왈이',
  color: 'white',
};

// 객체의 구조를 기준으로 타입을 정의한다. > 구조적 타입 시스템
// Property based type system

// 읽기전용 프로퍼티(Readonly Property)
let config: {
  readonly apiKey: string;
} = {
  apiKey: 'AAA-BB-CCC',
};

// config.apiKey = 'abc'; // 오류 발생

// any 타입
// 특정 변수의 타입을 우리가 확실히 모를때 사용
// any 타입은 타입 검사를 받지 않는 타입이므로 모든 타입스크립트의 문법과 규칙으로부터 자유롭지만 그만큼 위험한 타입
// any 타입을 사용하지 않는것을 권장
let anyVar: any = 10;
anyVar = 'hi';
anyVar = {};

// 메서드도 제한없이 사용 가능
anyVar.toUpperCase();
anyVar.toFixed();

let num: number = 10;
num = anyVar; // number타입에 any타입의 값을 넣어도 오류 발생 하지 않음

// unknown 타입
// 변수의 타입으로 정의되면 모든 값을 할당받을 수 있게 되지만, 반대로 unknown 타입의 값은 그 어떤 타입의 변수에도 할당할 수 없고, 모든 연산에 참가할 수 없다.
// -> 오직 값을 저장하는 행위만 가능
let unknownVar: unknown;

unknownVar = '';
unknownVar = 1;
unknownVar = () => {};

// num = unknownVar; // 오류! unknown 타입의 값은 어떤 타입의 변수에도 저장할 수 없다
// unknownVar * 2 // 오류! 어떤 연산에도 참여할 수 없으며, 어떤 메서드도 사용할 수 없다.

// '타입 정제(타입 좁히기)'의 경우에만 변수에 저장 가능하다
if (typeof unknownVar === 'number') {
  num = unknownVar;
}

// >>> 특정 변수가 당장 어떤 값을 받게 될 지 모른다면 any 타입으로 정의하는 것 보단 unknown 타입을 이용하는게 훨씬 안전한 선택

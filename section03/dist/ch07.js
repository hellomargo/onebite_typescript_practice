/**
 * 타입 좁히기
 * 조건문 등을 이용해 넓은타입에서 좁은타입으로
 * 타입을 상황에 따라 좁히는 방법을 이야기
 */
// value => number : toFixed
// value => string : toUpperCase
// value => Date : getTime
// value => Person : name은 age살 입니다.
function func(value) {
    // value.toFixed(); // 오류
    // value.toUpperCase(); // 오류
    // 조건문 내부에서 변수가 특정 타입임을 보장하면 해당 조건문 내부에서는 변수의 타입이 보장된 타입으로 좁혀진다.
    // -> 타입 좁히기
    if (typeof value === 'number') {
        console.log(value.toFixed());
    }
    else if (typeof value === 'string') {
        console.log(value.toUpperCase());
    }
    else if (value instanceof Date) {
        // instanceof 타입가드 - 내장 클래스 또는 직접 만든 클래스에만 사용이 가능한 연산
        console.log(value.getTime());
    }
    else if (value && 'age' in value) {
        // in 타입 가드 - 직접 만든 타입과 함께 사용 가능
        console.log(`${value.name}은 ${value.age}살 입니다`);
    }
}
export {};
// * 타입 가드
// - if (typeof === …) 처럼 조건문과 함께 사용해 타입을 좁히는 표현

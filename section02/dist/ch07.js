// void 타입
// void -> 공허 -> 아무것도 없다.
// void -> 아무런 값도 반환하지 않음을 의미하는 타입
function func1() {
    return 'hello';
}
function func2() {
    console.log('hello');
}
// never
// never -> 존재하지 않는
// 불가능한 타입. 어떠한 값도 반환할 수 없는 상황.
function func3() {
    while (true) { }
}
function func4() {
    throw new Error();
}
let anyVar;
let a;
export {};
// never 타입은 그 어느 타입의 값도 저장할 수 없다.
// a = 1;
// a = {};
// a = "";
// a = undefined;
// a = null;
// a = anyVar;

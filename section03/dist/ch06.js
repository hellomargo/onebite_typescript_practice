/**
 * 타입 단언 (assertion)
 * - 실제로 값을 그 타입으로 바꾸는 것은 아님
 */
let person = {};
person.name = '이정환';
person.age = 27;
let dog = {
    name: '돌돌이',
    color: 'brown',
    breed: '진도',
};
/**
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언식
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 함
 */
let num1 = 10; // A(number 타입)의 값을 B(never) 타입으로 단언
let num2 = 10; // A(number 타입)의 값을 B(unknown) 타입으로 단언
// let num3 = 10 as string; // number 타입과 string 타입은 서로 슈퍼-서브 타입 관계를 갖지않으므로 단언 불가
// 다중 단언
// - 왼쪽에서 오른쪽으로 단언
// - 매우 좋지 않은 방식
let num3 = 10;
/**
 * const 단언
 */
let num4 = 10;
// 10 Number Literal 타입으로 단언됨
let cat = {
    name: '야옹이',
    color: 'yellow',
};
let post = {
    title: '게시글1',
};
// 값 뒤에 느낌표(!) 를 붙여주면 이 값이 undefined이거나 null이 아닐것으로 단언
const len = post.author.length;
export {};

/**
 * 기본 타입간의 호환성
 */
let num1 = 10;
let num2 = 10;
num1 = num2;
let animal = {
    name: '기린',
    color: 'yellow',
};
let dog = {
    name: '돌돌이',
    color: 'brown',
    breed: '진도',
};
animal = dog; // Animal 타입이 Dog 타입의 슈퍼타입
let book;
let programmingBook = {
    name: '한 입 크기로 잘라먹는 리액트',
    price: 33000,
    skill: 'reactjs',
};
book = programmingBook;
// programmingBook = book;
/*
 * 초과 프로퍼티 검사
 - 변수를 객체 리터럴로 초기화 할 때 발생
 - 타입에 정의된 프로퍼티 외의 다른 초과된 프로퍼티를 갖는 객체를 변수에 할당할 수 없도록 막는다.
 */
let book2 = {
    name: '한 입 크기로 잘라먹는 리액트',
    price: 33000,
    // skill: 'reactjs', // Book 타입에 정의되지 않은 skill 프로퍼티를 갖는 객체를 할당하려고 했으므로 초과 프로퍼티 검사가 실패
};
// 별도의 다른 변수에 보관한 다음 변수 값을 초기화 값으로 사용하면 발생하지 않는다
let book3 = programmingBook;
// 초과 프로퍼티 검사는 함수의 매개변수에도 동일하게 발생
function func(book) { }
func({
    name: '한 입 크기로 잘라먹는 리액트',
    price: 33000,
    // skill: "reactjs", // 오류 발생
});
func(programmingBook); // 검사를 피하고 싶다면 변수값을 인수로 전달하면 된다
export {};

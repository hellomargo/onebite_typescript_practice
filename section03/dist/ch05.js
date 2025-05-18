/**
 * 타입 추론
 * - 타입이 정의되어 있지 않은 변수의 타입을 자동으로 추론
 */
// 타입 추론이 가능한 상황 - 변수 선언
let a = 10; // number 타입으로 추론 // 더 범용적으로 a 라는 변수를 사용할 수 있도록 범용적이고 더 넓은 범위의 타입으로 추론하는 과정을 "타입 넓히기"
let b = 'hello'; // string 타입으로 추론
let c = {
    id: 1,
    name: '홍길동',
    profile: {
        nickname: 'honghong',
    },
    urls: ['https://honghong.com'],
};
// id, name, profile, urls 프로퍼티가 있는 객체 타입으로 추론
// 타입 추론이 가능한 상황 - 구조 분해 할당
let { id, name, profile } = c;
let [one, two, three] = [1, 'hello', true];
// 타입 추론이 가능한 상황 - 함수의 반환값
function func(message = 'hello') {
    return 'hello';
}
// 주의해야 할 상황들 - 암시적인 any 타입으로 추론
let d; // any타입
d = 10; // number타입으로 진화
d.toFixed();
d = 'hello'; // string타입으로 진화
d.toUpperCase();
// d.toFixed();
const num = 10; // number 리터럴 타입
const str = 'hello'; // string 리터럴 타입
let arr = [1, 'string']; // Union타입 (string | number)[] 타입으로 추론
export {};

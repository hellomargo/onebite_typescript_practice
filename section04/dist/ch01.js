/**
 * 함수 타입 정의
 */
// 함수를 설명하는 가장 좋은 방법
// 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 이야기
// 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과값을 반환하는지 이야기
function func(a, b) {
    return a + b; // 반환 값은 매개변수 타입으로 자동으로 추론
}
/**
 * 화살표 함수의 타입을 정의하는 방법
 */
const add = (a, b) => a + b;
/**
 * 함수의 매개변수
 */
function introduce(name = '홍길동', age, tall) {
    console.log(`name : ${name}`);
    if (typeof tall === 'number') {
        console.log(`tall : ${tall + 10}`);
    }
}
introduce('홍길동', 27, 175);
introduce('홍길동', 27);
/**
 * rest 파라미터
 */
function getSum(...rest) {
    let sum = 0;
    rest.forEach((it) => (sum += it));
    return sum;
}
getSum(1, 2, 3); // 6
export {};
// getSum(1, 2, 3, 4, 5); // 15

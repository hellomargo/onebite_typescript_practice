/**
 * Unknown 타입
 */
function unkwonExam() {
    let a = 1;
    let b = 'hi';
    let c = true;
    let d = null;
    let e = undefined;
    let unknownVar;
    // let num: number = unknownVar; // 오류 발생 (다운캐스팅)
    // let str: string = unknownVar; // 오류 발생 (다운캐스팅)
    // let bool: boolean = unknownVar; // 오류 발생 (다운캐스팅)
}
/**
 * Never 타입
 */
function neverExam() {
    function neverFunc() {
        while (true) { }
    }
    let num = neverFunc(); // 업 캐스팅
    let str = neverFunc();
    let bool = neverFunc();
    // let never1: never = 10;  // 오류 발생 (다운캐스팅)
    // let never2: never = 'string'; // 오류 발생 (다운캐스팅)
    // let never3: never = true; // 오류 발생 (다운캐스팅)
}
/**
 * Void 타입
 */
function voidExam() {
    function voidFunc() {
        console.log('hi');
    }
    let voidVar = undefined; // 업 캐스팅
}
/**
 * any 타입
 */
function anyExam() {
    let unknownVar;
    let anyVar;
    let undefinedVar;
    let neverVar;
    anyVar = unknownVar; // any타입에 한정해서 다운캐스팅이 가능
    undefinedVar = anyVar; // any타입에 한정해서 다운캐스팅이 가능
    // neverVar = anyVar; // never타입에는 어떤한 타입도 다운캐스팅 할 수 없다
}
export {};

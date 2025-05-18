/**
 * Unknown 타입
 */
function unkwonExam() {
  let a: unknown = 1;
  let b: unknown = 'hi';
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  let unknownVar: unknown;

  // let num: number = unknownVar; // 오류 발생 (다운캐스팅)
  // let str: string = unknownVar; // 오류 발생 (다운캐스팅)
  // let bool: boolean = unknownVar; // 오류 발생 (다운캐스팅)
}

/**
 * Never 타입
 */
function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  let num: number = neverFunc(); // 업 캐스팅
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  // let never1: never = 10;  // 오류 발생 (다운캐스팅)
  // let never2: never = 'string'; // 오류 발생 (다운캐스팅)
  // let never3: never = true; // 오류 발생 (다운캐스팅)
}

/**
 * Void 타입
 */

function voidExam() {
  function voidFunc(): void {
    console.log('hi');
  }

  let voidVar: void = undefined; // 업 캐스팅
}

/**
 * any 타입
 */

function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  anyVar = unknownVar; // any타입에 한정해서 다운캐스팅이 가능

  undefinedVar = anyVar; // any타입에 한정해서 다운캐스팅이 가능

  // neverVar = anyVar; // never타입에는 어떤한 타입도 다운캐스팅 할 수 없다
}

function test() {
}
let user = {
    id: 1,
    name: '홍길동',
    nickname: 'honghong',
    birth: '1990.01.01',
    bio: '안녕하세요',
    location: '서울시',
};
let countryCodes = {
    Korea: 'ko',
    UnitedState: 'us',
    UnitedKingdom: 'uk',
};
// 아무런 정의를 하지 않아도 오류 발생 하지 않음
let countryNumberAndStringCodes = {};
// let countryNumberAndStringCodes2: CountryNumberCodes2 = {}; // Korea 정의 하지 않아 오류 발생
let countryNumberAndStringCodes2 = {
    Korea: 410,
};
export {};

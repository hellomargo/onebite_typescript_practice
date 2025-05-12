// 타입 별칭
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

function test() {
  type User = string;
}

let user: User = {
  id: 1,
  name: '홍길동',
  nickname: 'honghong',
  birth: '1990.01.01',
  bio: '안녕하세요',
  location: '서울시',
};

// 인덱스 시그니처
type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: 'ko',
  UnitedState: 'us',
  UnitedKingdom: 'uk',
};

type CountryNumberCodes = {
  [key: string]: number;
};

// 아무런 정의를 하지 않아도 오류 발생 하지 않음
let countryNumberAndStringCodes: CountryNumberCodes = {};

type CountryNumberCodes2 = {
  [key: string]: number;
  // Korea: string; // 오류!
  Korea: number; // 인덱스 시그니쳐를 사용하면서 동시에 추가적인 프로퍼티를 또 정의할 때에는 인덱스 시그니쳐의 value 타입과 직접 추가한 프로퍼티의 value 타입이 호환되거나 일치해야 한다.
};

// let countryNumberAndStringCodes2: CountryNumberCodes2 = {}; // Korea 정의 하지 않아 오류 발생

let countryNumberAndStringCodes2: CountryNumberCodes = {
  Korea: 410,
};

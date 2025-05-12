// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
// 컴파일 결과 사라지지 않는다. 자바스크립트의 객체로 변환된다.
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST";
})(Role || (Role = {}));
var Language;
(function (Language) {
    Language["korean"] = "ko";
    Language["english"] = "en";
})(Language || (Language = {}));
const user1 = {
    name: '정윤지',
    role: Role.ADMIN,
    language: Language.korean,
};
const user2 = {
    name: '홍길동',
    role: Role.USER,
    language: Language.english,
};
const user3 = {
    name: '김철수',
    role: Role.GUEST,
};
console.log(user1, user2, user3);
export {};

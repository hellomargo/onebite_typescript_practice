/**
 * 인터페이스의 확장
 * (상속 이라고도 할 수 있다)
 */

interface Animal {
  name: string;
  color: string;
}

// 타입 별칭으로 정의된 객체도 확장 가능
// type Animal = {
//   name: string;
//   color: string;
// };

interface Dog extends Animal {
  isBark: boolean;
}

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  // name: 'hong'; // 프로퍼티 재정의도 가능. 타입은 같아야 한다. 원본 프로퍼티의 서브타입으로만 가능하다.
  isFly: boolean;
}

const dog: Dog = {
  name: '',
  color: '',
  isBark: true,
};

// 다중 확장
interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
  name: '',
  color: '',
  isBark: true,
  isScratch: true,
};

/**
 * 서로소 유니온 타입
 * 교집합이 없는 타입들로만 만든 유니온 타입을 말함
 */
function login(user) {
    switch (user.tag) {
        case 'ADMIN': {
            console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
            break;
        }
        case 'MEMBER': {
            console.log(`${user.name}님 현재까지 ${user.point}모았습니다`);
            break;
        }
        case 'GUEST': {
            console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문하셨습니다`);
            break;
        }
    }
}
// AsyncTask 타입을 하나로 합쳐서 작성했다면, 모든 프로퍼티가 optional(error?, response?)이어야 하고, 그 경우 런타임 오류 가능성이 높아짐.
function processResult(task) {
    switch (task.state) {
        case 'LOADING': {
            console.log('로딩 중');
            break;
        }
        case 'FAILED': {
            console.log(`에러 발생 : ${task.error.message}`);
            break;
        }
        case 'SUCCESS': {
            console.log(`성공 : ${task.response.data}`);
            break;
        }
    }
}
const loading = {
    state: 'LOADING',
};
const failed = {
    state: 'FAILED',
    error: {
        message: '오류 발생 원인은 ~~',
    },
};
const success = {
    state: 'SUCCESS',
    response: {
        data: '데이터 ~~',
    },
};
const call = (value) => { };
export {};

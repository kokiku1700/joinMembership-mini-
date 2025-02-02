// 이름 포커스 기능
const namee = document.getElementById("name");
const nameH6 = document.getElementsByClassName("nameH6");
const nameP = document.getElementsByClassName("nameP");
const nameCheckP = document.getElementsByClassName("nameCheckP");

namee.addEventListener('focusout', () => {
    // 이름 형식
    // 자음과 모음 따로 작성하면 에러
    // 한글만 가능
    const regExp = /^[가-힇]{2,4}$/;

    if ( namee.value === "" ) {
        nameCheckP[0].style.display = "none";
        nameP[0].style.display = "block";
        nameH6[0].style.color = "red";
        namee.style.border = "2px solid red";
    } else if ( !regExp.test(namee.value) ) {
        nameP[0].style.display = "none";
        nameCheckP[0].style.display = "block";
        nameH6[0].style.color = "red";
        namee.style.border = "2px solid red";
    } else {
        nameP[0].style.display = "none";
        nameCheckP[0].style.display = "none";
        nameH6[0].style.color = "rgb(29, 238, 54)";
        namee.style.border = "2px solid rgb(29, 238, 54)";
    }
});

// id 포커스 기능
const id = document.getElementById("id");
const idH6 = document.getElementsByClassName("idH6");
const idP = document.getElementsByClassName("idP");
const idPStr = document.getElementsByClassName("idP-str");

id.addEventListener('focusout', () => {

    // 처음 한 자리는 영어만 가능 
    // 그 다음부터 20자리 까지 대문자와 소문자, 숫자 가능
    // 최소 6자리부터 20자리 까지
    const regExp = /^[A-Za-z]{1}[A-Za-z0-9]{5,19}$/;

    if ( id.value === "" ) {
        idPStr[0].style.display = "none";
        idP[0].style.display = "block";
        idH6[0].style.color = "red";
        id.style.border = "2px solid red";
    } else if ( !regExp.test(id.value) ) {
        idP[0].style.display = "none";
        idPStr[0].style.display = "block";
        idH6[0].style.color = "red";
        id.style.border = "2px solid red";
    } else {
        idP[0].style.display = "none";
        idPStr[0].style.display = "none";
        idH6[0].style.color = "rgb(29, 238, 54)";
        id.style.border = "2px solid rgb(29, 238, 54)";
    }
});

// 비밀번호 포커스 기능
const pw = document.getElementById("password");
const pwH6 = document.getElementsByClassName("pwH6");
const pwP = document.getElementsByClassName("pwP");
const pwPStr = document.getElementsByClassName("pwP-str");

pw.addEventListener("focusout", () => {
    //
    const regExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;

    if ( pw.value === "" ) {
        pwPStr[0].style.display = "none";
        pwP[0].style.display = "block";
        pwH6[0].style.color = "red";
        pw.style.border = "2px solid red";
    } else if ( !regExp.test(pw.value) ) {
        pwP[0].style.display = "none";
        pwPStr[0].style.display = "block";
        pwH6[0].style.color = "red";
        pw.style.border = "2px solid red";
    } else {
        pwP[0].style.display = "none";
        pwPStr[0].style.display = "none";
        pwH6[0].style.color = "rgb(29, 238, 54)";
        pw.style.border = "2px solid rgb(29, 238, 54)";
    }
});

// 비밀번호 확인 포커스 기능
const pwCheck = document.getElementById("password-check");
const pwCheckH6 = document.getElementsByClassName("pwCheckH6");
const pwCheckP = document.getElementsByClassName("pwCheckP");

pwCheck.addEventListener("focusout", () => {
    // 위 비밀번호와 같으면 정상 처리
    // 아무 것도 입력하지 않거나 위 비밀번호와 다르면 에러
    if ( pwCheck.value === "" || pw.value !== pwCheck.value ) {
        pwCheckP[0].style.display = "block";
        pwCheckH6[0].style.color = "red";
        pwCheck.style.border = "2px solid red";
    } else if ( pw.style.border === "2px solid red" ) {
        pwCheckP[0].style.display = "block";
        pwCheckH6[0].style.color = "red";
        pwCheck.style.border = "2px solid red";
    } else {
        pwCheckP[0].style.display = "none";
        pwCheckH6[0].style.color = "rgb(29, 238, 54)";
        pwCheck.style.border = "2px solid rgb(29, 238, 54)";
    }
});

// 이메일 포커스 기능
const email = document.getElementById("email");
const emailH6 = document.getElementsByClassName("emailH6");
const emailP = document.getElementsByClassName("emailP");
const emailCheckP = document.getElementsByClassName("emailCheckP");

email.addEventListener("focusout", () => {
    // 이메일 형식이다. 
    // @ 앞에 아이디는 소문자와 숫자만 가능
    // @ 뒤에 주소는 소문자와 영어만 가능 그리고 . 뒤는 소문자만 가능
    const regExp = /^[a-z0-9\.\-_]+@([a-z0-9\-]+\.)+[a-z]{2,6}$/;

    if ( email.value === "" ) {
        emailCheckP[0].style.display = "none";
        emailP[0].style.display = "block";
        emailH6[0].style.color = "red";
        email.style.border = "2px solid red";
    } else if ( !regExp.test(email.value) ) {
        emailP[0].style.display = "none";
        emailCheckP[0].style.display = "block";
        emailH6[0].style.color = "red";
        email.style.border = "2px solid red";
    } else {
        emailP[0].style.display = "none";
        emailCheckP[0].style.display = "none";
        emailH6[0].style.color = "rgb(29, 238, 54)";
        email.style.border = "2px solid rgb(29, 238, 54)";
    }
});

// 이 버튼을 클릭하면 모두 초기화된다.
const cancelBtn = document.getElementsByClassName("cancelBtn");

function init () {
    namee.value = ""
    nameP[0].style.display = "none";
    nameCheckP[0].style.display = "none";
    nameH6[0].style.color = "#aaa";
    namee.style.border = "2px solid #aaa";

    id.value = "";
    idP[0].style.display = "none";
    idPStr[0].style.display = "none";
    idH6[0].style.color = "#aaa";
    id.style.border = "2px solid #aaa";

    pw.value = "";
    pwP[0].style.display = "none";
    pwPStr[0].style.display = "none";
    pwH6[0].style.color = "#aaa";
    pw.style.border = "2px solid #aaa";

    pwCheck.value = "";
    pwCheckP[0].style.display = "none";
    pwCheckH6[0].style.color = "#aaa";
    pwCheck.style.border = "2px solid #aaa";

    email.value = "";
    emailP[0].style.display = "none";
    emailCheckP[0].style.display = "none";
    emailH6[0].style.color = "#aaa";
    email.style.border = "2px solid #aaa";
}

cancelBtn[0].addEventListener('click', init);

// 확인 버튼 클릭 시 입력 정보가 모두 정확하면 
// 로컬 스토리지에 저장
const submitBtn = document.getElementsByClassName("submitBtn");
const formAll = document.getElementsByClassName("formAll");
let submitCheck = [namee, id, pw, pwCheck, email];
let submitBool = false;

submitBtn[0].addEventListener('click', () => {
    for ( let i = 0; i < submitCheck.length; i++ ) {
        if ( submitCheck[i].style.border !== "2px solid rgb(29, 238, 54)" ) {
            submitCheck[i].focus();
            submitBool = false;
            break;
        } else {
            submitBool = true;
        }
    }
    if ( submitBool === true ) {
        let key = id.value;
        let valueV = 
        {
            "이름": namee.value,
            "패스워드": pw.value,
            "이메일": email.value 
        };
        let objValue = JSON.stringify(valueV);
        localStorage.setItem(key, objValue);
        alert(`
            환영합니다. ${namee.value}님
            id: ${id.value}
            pw: ${pw.value}
            email: ${email.value}
            `);
        init();
    }
});
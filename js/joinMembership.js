// 이름 포커스 기능
const namee = document.getElementById("name");

namee.addEventListener('focusout', () => {
    const nameH6 = document.getElementsByClassName("nameH6");
    const nameP = document.getElementsByClassName("nameP");
    
    if ( namee.value === "" ) {
        nameP[0].style.display = "block";
        nameH6[0].style.color = "red";
        namee.style.border = "2px solid red";
    } else {
        nameP[0].style.display = "none";
        nameH6[0].style.color = "rgb(29, 238, 54)";
        namee.style.border = "2px solid rgb(29, 238, 54)";
    }
});

// id 포커스 기능
const id = document.getElementById("id");

id.addEventListener('focusout', () => {
    const idH6 = document.getElementsByClassName("idH6");
    const idP = document.getElementsByClassName("idP");
    
    if ( id.value === "" ) {
        idP[0].style.display = "block";
        idH6[0].style.color = "red";
        id.style.border = "2px solid red";
    } else {
        idP[0].style.display = "none";
        idH6[0].style.color = "rgb(29, 238, 54)";
        id.style.border = "2px solid rgb(29, 238, 54)";
    }
});

// 비밀번호 포커스 기능
const pw = document.getElementById("password");

pw.addEventListener("focusout", () => {
    const pwH6 = document.getElementsByClassName("pwH6");
    const pwP = document.getElementsByClassName("pwP");
    
    if ( pw.value === "" ) {
        pwP[0].style.display = "block";
        pwH6[0].style.color = "red";
        pw.style.border = "2px solid red";
    } else {
        pwP[0].style.display = "none";
        pwH6[0].style.color = "rgb(29, 238, 54)";
        pw.style.border = "2px solid rgb(29, 238, 54)";
    }
});

// 비밀번호 확인 포커스 기능



// 이메일 포커스 기능
const email = document.getElementById("email");

email.addEventListener("focusout", () => {
    const emailH6 = document.getElementsByClassName("emailH6");
    const emailP = document.getElementsByClassName("emailP");
    
    if ( email.value === "" ) {
        emailP[0].style.display = "block";
        emailH6[0].style.color = "red";
        email.style.border = "2px solid red";
    } else {
        emailP[0].style.display = "none";
        emailH6[0].style.color = "rgb(29, 238, 54)";
        email.style.border = "2px solid rgb(29, 238, 54)";
    }
});
const NAME = "CarlosThomaz";
const PASSWORD = "12345";

function validateForm() {
    let name = document.getElementById("user-input").value;
    let pass = document.getElementById("pass-input").value;

    if (name == "") {
        alert("Preencha todos os campos");
        return false;
    }

    if (pass == "") {
        alert("Preencha todos os campos");
        return false;
    }

    return validateCredential(name, pass);

}

function validateCredential(name, pass) {

    if(name != NAME) {
        alert("usuário ou senha incorretos");
        return false;
    }

    if(pass != PASSWORD) {
        alert("usuário ou senha incorretos");
        return false;
    }

    turnOnGreetings();

    return true;

}

function turnOnGreetings() {
    const loginForm = document.getElementById("loginForm");
    loginForm.style.opacity = 0;

    const greetings = document.getElementById("greetings");
    greetings.style.opacity = 1;
}

function reset() {
    document.getElementById("user-input").value = "";
    document.getElementById("pass-input").value = "";
}
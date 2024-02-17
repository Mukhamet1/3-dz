
document.getElementById("loginForm").addEventListener("submit", function (event) {
    let username = document.getElementById("username");
    let password = document.getElementById("password");
    let btn = document.getElementById('btn')

    if (username.trim() === "" && password.trim() === "") {
        event.preventDefault();
        alert("Пожалуйста, заполните все поля.");
    }
});
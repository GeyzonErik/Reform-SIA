function loginButton() {
    if(document.querySelector("#login").value == '') {
        alert('por favor, digite um Usuario GitHub para continuar...');
    }else {
        location.replace("/Pagina Geyzon/pages/menuPrincipal.html");
        localStorage.setItem('user', document.querySelector('#login').value);
    }
}

function enterProfile() {
    location.replace("./perfil.html");
}

function exitAcount() {
    location.replace("/Pagina Antonio/login.html");
}

function backMenu() {
    location.replace("/Pagina Geyzon/pages/menuPrincipal.html");
}

function openManual() {
    window.open("/Pagina Geyzon/assets/pdf/Manual_do_Aluno_Wyden_2021-2.pdf");
}

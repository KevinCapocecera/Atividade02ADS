var menuBtn = document.getElementById("menu-btn");
var menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuBtn.textContent = menu.classList.contains('active') ? 'close' : 'menu';
})
document.addEventListener("DOMContentLoaded", () => {
    var cpf = document.getElementById("cpf");
    var telefone = document.getElementById("telefone");
    var cep = document.getElementById("cep");

    cpf.addEventListener("input", e => {
        let v = e.target.value.replace(/\D/g, "");
        if (v.length > 11) v = v.slice(0, 11);
        v = v.replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
        e.target.value = v;
    });

    telefone.addEventListener("input", e => {
        let v = e.target.value.replace(/\D/g, "");
        if (v.length > 11) v = v.slice(0, 11);
        v = v.replace(/(\d{2})(\d)/, "($1) $2")
            .replace(/(\d{5})(\d)/, "$1-$2");
        e.target.value = v;
    });

    cep.addEventListener("input", e => {
        let v = e.target.value.replace(/\D/g, "");
        if (v.length > 8) v = v.slice(0, 8);
        v = v.replace(/(\d{5})(\d)/, "$1-$2");
        e.target.value = v;
    });
})
function validarEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validarCpf(cpf) {
    return /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf);
}

function validarTelefone(telefone) {
    return /^\(\d{2}\) \d{4}-\d{4}$/.test(telefone);
}

function validarCep(cep) {
    return /^\d{5}-\d{3}$/.test(cep);
}

function validarFormulario() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var cpf = document.getElementById("cpf").value;
    var telefone = document.getElementById("telefone").value;
    var nascimento = document.getElementById("nascimento").value;
    var endereco = document.getElementById("endereco").value;
    var cep = document.getElementById("cep").value;
    var cidade = document.getElementById("cidade").value;
    var estado = document.getElementById("estado").value;

    if (nome === "" || email === "" || cpf === "" || telefone === "" || nascimento === "" || endereco === "" || cep === "" || cidade === "" || estado === "") {
        alert("Por favor, preencha todos os campos.");
        return false;
    }

    if (!validarEmail(email)) {
        alert("Por favor, insira um e-mail válido.");
        return false;
    }

    if (!validarCpf(cpf)) {
        alert("Por favor, insira um CPF válido.");
        return false;
    }

    if (!validarTelefone(telefone)) {
        alert("Por favor, insira um telefone válido.");
        return false;
    }

    if (!validarCep(cep)) {
        alert("Por favor, insira um CEP válido.");
        return false;
    }

    return true;
}
function validarSenha(senha) {
    return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(senha);
}

document.getElementById("submit").addEventListener("click", function (event) {
    if (!validarEmail(document.getElementById("email").value)) {
        alert("Por favor, insira um e-mail válido.");
        return false;
    }
    if(!validarSenha(document.getElementById("senha").value)){
        alert("Por favor, insira uma senha valida");
        return false;
    }
    window.location.href = "index.html";
    alert("Login realizado com Sucesso")

});
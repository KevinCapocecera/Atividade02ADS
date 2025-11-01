const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuBtn.textContent = menu.classList.contains('active') ? 'close' : 'menu';
})
document.addEventListener("DOMContentLoaded", () => {
    const cpf = document.getElementById("cpf");
    const telefone = document.getElementById("telefone");
    const cep = document.getElementById("cep");

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
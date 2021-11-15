var element = document.body;
const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");

if (darkThemeMq.matches) {
    element.classList.toggle("dark-mode");
} else {
    element.classList.toggle("body");
}

//o dark mode segue o tema do sistema ex: se o seu S.O estiver em white mode o site gonna be branco else vai ficar dark,e é isso

//animações
anime({
    targets: '.header',
    opacity: [0, 1],
    duration: 1500,
    easing: 'linear',
});

anime({
    targets: '.requerimentos',
    opacity: [0, 1],
    duration: 1500,
    easing: 'linear',
});

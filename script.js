// Obtém o idioma do navegador (exemplo: "pt-BR", "en-US")
const idioma = navigator.language || navigator.userLanguage;

// Define os idiomas suportados e suas respectivas pastas
const idiomasSuportados = {
    "pt": "pt-BR/index.html", // Versão em português
    "en": "en-US/index.html"  // Versão em inglês
};

// Obtém o código do idioma principal (ex: "pt" de "pt-BR")
const idiomaPrincipal = idioma.split('-')[0];

// Se o idioma for diferente de inglês e houver uma versão correspondente, redireciona
if (idiomaPrincipal !== "en" && idiomasSuportados[idiomaPrincipal]) {
    window.location.href = idiomasSuportados[idiomaPrincipal];
}

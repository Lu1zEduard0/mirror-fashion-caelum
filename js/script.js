// Isso será chamado quando o site for carregado

window.onload = (event) => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")

    // Primeiro verifica o esquema de cores baseado no armazenamento local do usuário 

    if (localStorage.getItem('theme') === 'dark' || 'light')
        changeTheme(localStorage.getItem('theme'))
    else {
        if (mediaQuery.matches)
            changeTheme('dark')
        else
            changeTheme('light')
    }

    // Adiciona listener para mudança de preferência do esquema de cores do usuário em tempo real  

    mediaQuery.addListener(e => {
    if (e.matches)
        changeTheme('dark')
    else
        changeTheme('light')
})
  }


// Função para alternar o tema

function toggleTheme() {
    if (document.documentElement.getAttribute('data-theme') === 'dark')
        changeTheme('light')
    else
        changeTheme('dark')
}


// Função para mudar o tema

function changeTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme) 

    // Define o tema do usuário no armazenamento local
    
}



//Verificar Local Sotrage them
/*
var currTheme = localStorage.getItem('theme');
var root = document.querySelector('html');

if (currTheme === '' || !currTheme || currthem === null) {
    //Se estiver vazio setar o Default
    localStorage.setItem('theme', 'light');
    currTheme = localStorage.getItem('theme');
    root.setAttribute('data-theme', currTheme);

} else {
    //Se não estiver vazio capturar o valor e setar data-theme
    root.setAttribute('data-theme', currTheme);
}*/

/*var content = document.getElementsByTagName('body')[0];  //  Seleciona a tag do HTML BODY* para ser modificada o CSS
var contentFigure = document.getElementsByTagName('figure'); // Preciso selecionar todas as tag FIGURE para modificar todas ao mesmo tempo | COMO ???
var darkMode = document.getElementById('dark-change'); //  Seleciona a ID  do dark-change* botão para ser modificada o CSS para preto | dark

// 

darkMode.addEventListener('click', function () {
    darkMode.classList.toggle('active');
    content.classList.toggle('night');
    contentFigure.classList.toggle('night');
})*/
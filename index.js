function checkTheme(){
    const storedTheme = localStorage.getItem('tema');
    if(storedTheme){
        document.body.setAttribute('data-tema', temaArmazenado);
    }
}

function changeTheme(){
    const theme = document.body.getAttribute('data-tema');
    const newTheme = theme == 'dark' ? 'main' : 'dark'
    document.body.setAttribute("data-tema", newTheme);
    localStorage.setItem('theme', newTheme);
}

function copy(htmlContent){
    const content = document.getElementById(htmlContent).textContent;
    navigator.clipboard.writeText(content).then(()=>{
        alert('Copiado para a área de transferência');
    }).catch(error=>alert('Erro ao copiar', error));
}

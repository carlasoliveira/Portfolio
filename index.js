function verificarTema(){
    const temaArmazenado = localStorage.getItem('tema');
    if(temaArmazenado){
        document.body.setAttribute('data-tema', temaArmazenado);
    }
}

function alterarTema(){
    const tema = document.body.getAttribute('data-tema');
    const novoTema = tema == 'dark' ? 'main' : 'dark'
    document.body.setAttribute("data-tema", novoTema);
    localStorage.setItem('tema', novoTema);
}

function copy(htmlContent){
    const content = document.getElementById(htmlContent).textContent;
    navigator.clipboard.writeText(content).then(()=>{
        alert('Copiado para a área de transferência');
    }).catch(error=>alert('Erro ao copiar', error));
}
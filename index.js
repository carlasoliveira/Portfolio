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
<<<<<<< HEAD
=======
}

function copiarEmail(){
    const conteudo = document.getElementById('email').textContent;
    navigator.clipboard.writeText(conteudo).then(()=>{
        alert('Copiado para a área de transferência');
    }).catch(error=>alert('Erro ao copiar', error));
>>>>>>> 05736f20a5f27678f4e2dd7300e37b2ea2d9cede
}
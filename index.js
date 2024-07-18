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

function copiarWhatsApp(){
    const conteudo = document.getElementById('whatsapp').textContent;
    navigator.clipboard.writeText(conteudo).then(()=>{
        alert('Copiado para a área de transferência');
    }).catch(error=>alert('Erro ao copiar', error));
}

function copiarEmail(){
    const conteudo = document.getElementById('email').textContent;
    navigator.clipboard.writeText(conteudo).then(()=>{
        alert('Copiado para a área de transferência');
    }).catch(error=>alert('Erro ao copiar', error));
}
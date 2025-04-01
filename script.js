'use strict'

const centro = document.getElementById('barraCentral')
const lateral = document.getElementById('barraLateral')
const footer = document.getElementById('barraEmbaixo')

async function pesquisarContatos(){
    const url = `http://localhost:8080/v1/whatsapp/contatos/filtro?number=11987876567` // url da api 

    const response  = await fetch(url) // fetch -> faz requisições web (conversa com o back)
    const data      = await response.json() // chamar apenas o json
    return data
    // alert (data)
}

// Função para criar as imgs dentro da DIV 
function criarContatos(link){ // Recebe o objeto 

    const divContato = document.createElement('div')
    divContato.className = 'divContato'

    const divText = document.createElement('div')
    divText.className = 'divText'

    // Criando imagem do contato
    const imgContato = document.createElement('img')
    imgContato.src = './img/perfil.png'
    
    // Criando nome contato
    const nomeContato = document.createElement('p') 
    nomeContato.textContent = link.contato 
    divText.appendChild(nomeContato) 

    // Criando descrição do contato
    const descricaoContato = document.createElement('span')
    descricaoContato.textContent = link.descricao_contato
    divText.appendChild(descricaoContato)

    divContato.appendChild(imgContato)
    divContato.appendChild(divText)

    lateral.appendChild(divContato)
}

async function preencherTela(){
    const contatos = await pesquisarContatos()

    contatos.forEach (criarContatos)
}

preencherTela()
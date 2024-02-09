const perguntas = [
    {
      pergunta: "O que significa 'DOM' em JavaScript?",
      respostas: [
        "Documento de Objeto Modelo",
        "Documento de Organização Mínima",
        "Documento de Objeto Manipulador",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do método 'addEventListener' em JavaScript?",
      respostas: [
        "Para adicionar um novo elemento ao documento",
        "Para escutar eventos e executar um código quando ocorrem",
        "Para criar uma nova função",
      ],
      correta: 1
    },
    {
      pergunta: "O que significa 'IIFE' em JavaScript?",
      respostas: [
        "Função Interna Invocada Imediatamente",
        "Expressão Incremental de Função Instantânea",
        "Interação Inicial de Função Integrada",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a diferença entre '==' e '===' em JavaScript?",
      respostas: [
        "Não há diferença, ambos são idênticos",
        "'===' compara o valor e o tipo, enquanto '==' compara apenas o valor",
        "'==' compara o valor e o tipo, enquanto '===' compara apenas o valor",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do método 'querySelector'?",
      respostas: [
        "Para selecionar vários elementos do DOM",
        "Para selecionar um único elemento do DOM usando um seletor CSS",
        "Para selecionar um elemento com base em seu ID",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a maneira correta de declarar uma variável em JavaScript?",
      respostas: [
        "let myVar = 10;",
        "variável myVar = 10;",
        "myVar: 10;",
      ],
      correta: 0
    },
    {
      pergunta: "O que é uma função de callback em JavaScript?",
      respostas: [
        "Uma função que é chamada antes de outra função",
        "Uma função que é passada como argumento para outra função e é executada após algum evento",
        "Uma função que não retorna nenhum valor",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o resultado da expressão '3 + 2 + '5' em JavaScript?",
      respostas: [
        "Erro de sintaxe",
        "10",
        "325",
      ],
      correta: 2
    },
    {
      pergunta: "O que faz o operador 'typeof' em JavaScript?",
      respostas: [
        "Retorna o tipo de dado de uma variável",
        "Concatena duas strings",
        "Verifica se dois valores são iguais",
      ],
      correta: 0
    },
    {
      pergunta: "Como você converte uma string em um número em JavaScript?",
      respostas: [
        "stringToNumber('123')",
        "parseInt('123')",
        "toNumber('123')",
      ],
      correta: 1
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + '  de ' + totalDePerguntas
  
  
  // lupi ou laço de repetição
  for(const item of perguntas) {
   const quizitem = template.content.cloneNode(true)
   quizitem.querySelector('h3').textContent = item.pergunta
  
  for(let resposta of item.respostas){
    const dt = quizitem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent =resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
     const estaCorreta = event.target.value == item.correta
  
     corretas.delete(item)
     if(estaCorreta) {
       corretas.add(item)
     }
  
     mostrarTotal.textContent = corretas.size + '  de ' + totalDePerguntas
    }
  
  // querySelector é uma ferramenta pra buscar informações no html 
    quizitem.querySelector('dl').appendChild(dt)
  
  }
  
  quizitem.querySelector('dl dt').remove()
  
  
  // coloca a pergunta na tela 
  quiz.appendChild(quizitem)
  }
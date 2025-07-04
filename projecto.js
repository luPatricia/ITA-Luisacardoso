let alunos = [];

function calcularsituacao(media){
    if (media >= 10){
        return "Aprovado"
    } else if(media >= 8){
        return "Recuperacao";
    }else {
        return "Reprovado";
    }
}

function cadastro(){
    if (alunos.length >= 30){
        alert("Excedeu o limite de cadastros");
        return;
    }

    let nome = document.getElementById("nome").value;
    let idade = parseInt(document.getElementById("idade").value);
    let sexo = document.getElementById("sexo").value;
    let nota1 = parseFloat(document.getElementById("nota1").value);
    let nota2 = parseFloat(document.getElementById("nota2").value);
    let media = (nota1+nota2)/2;
    let situacao = calcularsituacao(media);


    alunos.push ({nome, idade, sexo, nota1, nota2, media, situacao});
    limparCampos();
    actualizarLista();
    mostrarRelatorios();
}
    function limparCampos(){
     document.getElementById("nome").value = "";
     document.getElementById("idade").value = "";
     document.getElementById("sexo").value = "";
     document.getElementById("nota1").value = "";
     document.getElementById("nota2").value = "";
    }

    function actualizarLista(){
        const body = document.querySelector("#lista tbody");
        body.innerHTML = "";
        alunos.forEach((aluno, index) => {
            body.innerHTML += `<tr>
                <td>${index +1}</td>
                <td>${aluno.nome}</td>
                <td>${aluno.idade}</td>
                <td>${aluno.sexo}</td>
                <td>${aluno.nota1}</td>
                <td>${aluno.nota2}</td>
                <td>${aluno.media.toFixed(1)}</td>
                <td>${aluno.situacao}</td>
                <td>
            <button onclick="editarAluno(${index})">Editar</button>
            <button onclick="removerAluno(${index})">Remover</button>
                </td>
            </tr>`;
        });
    }

    function mostrarRelatorios(){
        let texto = "";
        let total = alunos.length;
        if(total === 0){
            return document.getElementById("relatoriosF").innerHTML = "";
        }

        let  soma = 0, maior = -Infinity, menor = Infinity;
        let  aprovados = 0, reprovados = 0, recuperacao = 0, maior18 = 0;

          for(let i = 0; i < alunos.length; i++){
            let a = alunos[i];
            texto += `${i+1}. ${a.nome} | Idade: ${a.idade} | Sexo: ${a.sexo} | n1: ${a.nota1}| n2${a.nota2}| media: ${a.media}| situação: ${a.situacao}\n`;
               soma += a.media;
            if(a.media > maior){
                maior = a.media;
            }
            if(a.media < menor){
                menor = a.media;
            }

            if (a.situacao === "Aprovado"){
                aprovados++;
            } else if(a.situacao === "Reprovado"){
                reprovados++;
            }else{
                recuperacao++;
            }

            if(a.idade > 18){
                maior18++;
            }
        }
         let media_geral = soma/total;

         texto += `MédiaGeral:${media_geral}\n Maior média:${maior}\n menor média${menor}`
         texto += `Total Aprovados: ${aprovados}\n Total reprovados: ${reprovados}\n Total em recuperação:${recuperacao} Total com mais de 18 anos${maior18}`

         document.getElementById("relatoriosF").innerText = texto;
  }
          

       

    
 
    function buscarAluno(){
         let nome_dado = document.getElementById("buscar").value.trim().toLowerCase();
         if (!nome_dado){
            return alert("Digite um nome para verificar");
         }
         let encontrado = alunos.find(aluno => aluno.nome.toLowerCase() === nome_dado);

        
         if (encontrado) {
      alert(`Nome: ${encontrado.nome}\nIdade: ${encontrado.idade}\nSexo: ${encontrado.sexo}\nNota1: ${encontrado.nota1}\nNota2: ${encontrado.nota2}\nMédia: ${encontrado.media.toFixed(1)}\nSituação: ${encontrado.situacao}`);
    } else {
      alert("Aluno não encontrado");
    }

  }

    function editarAluno(index){
        let aluno = alunos[index];
        let novoNome = prompt("Novo nome:", aluno.nome);
        let novaIdade = parseInt(prompt("Nova idade: ", aluno.idade));
        let novoSexo = prompt("Novo sexo: ", aluno.sexo);
        let novanota1 = parseFloat(prompt("Nova nota1:", aluno.nota1));
        let novanota2 = parseFloat(prompt("Nova nota2: ", aluno.nota2));

        if(!novoNome || isNaN(novaIdade) || !novoSexo || isNaN(novanota1) || isNaN(novanota2) ){
            alert("Dados inválidos");
            return;
        }
       
        let  novaMedia = (novanota1+novanota2)/2;
        let novaSituacao = calcularsituacao(novaMedia);

        alunos[index] ={
            nome: novoNome, idade: novaIdade, sexo: novoSexo,
            nota1: novanota1, nota2: novanota2, media: novaMedia,
            situacao: novaSituacao
        };

        actualizarLista();
        mostrarRelatorios();

    }

    function removerAluno(index){
        alunos.splice(index, 1);
        actualizarLista();
        mostrarRelatorios();
    }

 function ordenarNome(){
     for(let i = 0; i < alunos.length -1; i++){
        for(let j = 0; j < alunos.length -1-i; j++){
            if(alunos[j].nome.toLowerCase() > alunos[j+1].nome.toLowerCase()){
                let aux = alunos[j];
                  alunos[j] = alunos[j+1];
                  alunos[j+1] = aux;
            }
        }
     }
     actualizarLista();
 }

 function ordenarMedia(){
     for(let i = 0; i < alunos.length -1; i++){
        for(let j = 0; j < alunos.length-1-i; j++){
            if(alunos[j].media < alunos[j+1].media){
                let aux = alunos[j];
                  alunos[j] = alunos[j+1];
                  alunos[j+1] = aux;
            }
        }
        actualizarLista();
     }

     
 }


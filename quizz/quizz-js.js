let perguntas = [
{
    titulo: 'Como minhas irmãs se chamam chama?',
    alternativas: ['Polly Brenda Margarina', 'Polly Breno e Marina', 'Polly Brenda e Marina', 'Poli Brena Marina'],
    correta: 2
},

{
    titulo: 'Qual o nome dos meus pais?',
    alternativas: ['Pablo e Monalisa', 'Michelle e pablo', 'Fabio e Brenda', 'Monalisa e Hugo'],
    correta: 1
},

{
    titulo: 'Qual Comida eu gosto mais?',
    alternativas: ['Passaporte', 'Japa', 'Miojo', 'Pizza'],
    correta: 1
},

{
    titulo: 'Quantos animais de estimação eu tive?',
    alternativas: ['0', '2', '3', '5'],
    correta: 1
},

{
    titulo: 'Como é meu apelido no meio dos meus amigos?',
    alternativas: ['Matheusinho', 'Anão', 'Sonic', 'Cabeça'],
    correta: 1
},

{
    titulo: 'Na época do meu 3º ano, quantos anos eu tinha?',
    alternativas: ['16', '17', '18', '19'],
    correta: 2
},

{
    titulo: 'Quantas medalhas eu tenho?',
    alternativas: ['44', '45', '46', '47'],
    correta: 2
},

{
    titulo: 'Qual meu time do coração?',
    alternativas: ['São Paulo', 'Corinthians', 'Palmeiras', 'Flamengo'],
    correta: 0
},

{
    titulo: 'Qual o meu trabalho?',
    alternativas: ['Adminsitrativo', 'Auxiliar de limpeza', 'Agente de compas', 'Planejador Licitatório'],
    correta: 3
},

{
    titulo: 'Qual área estou me especializando?',
    alternativas: ['Engenheiro', 'Advogado', 'Designer', 'Programação'],
    correta: 3
},

{
    titulo: 'Pronta para a pergunta mais importante?!',
    alternativas: ['Sim', 'Não', 'Talvez', '-'],
    correta: 0
},


]

let app = {
    start: function(){
        this.Atualpos = 0;
        this.Totalpontos = 0;
        this.Erros = 0;

        let alts = document.querySelectorAll('.alternativa');
        alts.forEach((element, index)=>{
            element.addEventListener('click', ()=>{
                this.checaResposta(index);
            })
        })
        this.atualizaPontos();
        app.mostraquestao(perguntas[this.Atualpos]);
    },

    mostraquestao: function(q){
        this.qatual = q;
        //mostrando titulo
        let titleDiv = document.getElementById('titulo');
        titleDiv.textContent = q.titulo;
        //mostrando alternativas
        let alts = document.querySelectorAll('.alternativa');
        alts.forEach(function(element, index){
            element.textContent = q.alternativas[index];
        })
    },

    checaResposta: function(user){
        if(this.qatual.correta == user){
            console.log("Correto");
            this.Totalpontos++;
        }else{
            console.log("Errado");
            this.Erros++;
        }
        this.atualizaPontos();
        this.Proximaperg();
        this.mostraquestao(perguntas[this.Atualpos]);
    },

    Proximaperg: function(){
        this.Atualpos++;
        if(this.Atualpos == perguntas.length){
            if(this.Totalpontos == 11){
                location.href = "../pergunta/index.html";
            }else{
                alert(`Tente novamente! Você errou um total de: ${this.Erros}`);
                location.href = "./quizz.html";
            }
        }
    },

    atualizaPontos: function(){
        let scoreDiv = document.getElementById('pontos');
        if(this.Totalpontos >= 0)
        scoreDiv.textContent = `Sua pontuação é: ${this.Totalpontos}`;
    }

}
app.start();
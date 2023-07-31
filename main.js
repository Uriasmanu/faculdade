// determina aprovados para a segunda etapa
function primeiraEtapa(acertos_na_prova, 
                          semestres_cursados){
  /*   
  * Help: 
  * acertos_na_prova recebe a quantidade de acertos na prova
  * semestres_cursados: semestres cursados
  */
  // regras para aprovação
  const total_de_questoes = 20 
  const nota_minima_aprovacao = 0.7 
  const minimo_semestres = 3
 
  // calcula a nota %
  let nota = acertos_na_prova / total_de_questoes
  
  // calcula se vai ser aprovado ou não
  if((nota > nota_minima_aprovacao) &&
         (semestres_cursados >= minimo_semestres)){
    return "aprovado";
  }
  else{
    return "reprovado";
  }
}
let acertos = prompt('Digite a quantidade de acertos na prova: ');
let semestre = prompt('Digite o semestre que esta cursand: ');

let resultado = primeiraEtapa(acertos, semestre);

alert(`Você foi ${resultado} na primeira etapa da entrevista`);


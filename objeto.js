objeto = {
    "chave1":1,
    "chave2":2,
    "chave3":3
}
 
// 1ª forma de acesso 
valor_chave_1 = objeto.chave1 
console.log("O valor da chave1 é", valor_chave_1)  // O valor da chave1 é 1
 
// 2ª forma de acesso
valor_chave_2 = objeto['chave2']
console.log("O valor da chave2 é", valor_chave_2) // O valor da chave2 é 2

objeto1 = {
    "chave1":{ "camada1_1":5 },
    "chave2":['abacate', 'bola', 'cavalo']
}

valor_1 = objeto1.chave1.camada1_1
console.log(valor_1)  //5

// Imprimindo o 2º elemento do array da chave2
valor_2 = objeto1.chave2[1]
console.log(valor_2)  // bola
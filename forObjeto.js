objeto = {    
    "chave1":{ "camada1_1":5 },
    "chave2":['abacate', 'bola', 'cavalo']
}
for(i in objeto){
    chave = i             // coleta a chave
    valor = objeto[i]     // pega o valor correspondente a chave
    console.log(chave, "->", valor) // imprime chave e valor atual
}
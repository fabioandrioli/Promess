console.log("Pediu uber")


let aceitar = false;
const promessa = new Promise((resolve,reject) => {
    if(aceitar)
        return resolve("O carro chegou");
    return reject("Pedido negado!")
})

console.log("Aguardando")

promessa.then(result => console.log(result))
        .catch(error => console.log(error))
        .finally(() => console.log("processo terminado"))


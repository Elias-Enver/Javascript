function abs(x) {
    if (x>=0){
        return x 
    }else {
        return -x
    }

function farrr(n) { 
    var product = 1
    while(n > 1){
        product *= n; // Atalho para product = product * n;
        n--; // Atalho para n = n – 1
        } // Fim do laço
        return product; // Retorna o produto
    }
}

var pr = 1
function fatorial(n){
    while (n >1){
        pr *= n
        console.log(`${n} X `)
        n --
    }
    return pr
}

fatorial(5)




const btn_gravar = document.getElementById('btn_gravar')
const btn_cancelar = document.getElementById('btn_cancelar')
const f_dtnasc = document.getElementById('f_dtnasc')
const f_nome = document.getElementById('f_nome')
const f_celular = document.getElementById('f_celular')
const f_email = document.getElementById('f_email')


btn_gravar.addEventListener('click',(evt)=>{
    const dados={
        "f_nome":f_nome.value,
        "f_celular":f_celular.value,
        "f_email":f_email.value,
        "f_dtnasc":f_dtnasc.value,
    }

   
    const cabecalho={
        method:'POST',
        body:JSON.stringify(dados)
    }


    const endpoint="http://127.0.0.1:1880/addcontatos"
    fetch(endpoint,cabecalho)
    .then(res=>{
        if(res.status==200){
            console.log('ok')
            reset()
        }else{
            alert('Erro ao Gravar Mensagem ao bancos')
        }
    })

});


btn_cancelar.addEventListener('click',(evt)=>{
    reset()
})

const reset=()=>{
    f_nome.value=""
    f_celular.value=""
    f_email.value=""
    f_dtnasc.value=""
    f_nome.focus()
}

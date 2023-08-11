
const dados = document.querySelector('#dados')
const fundopopup=document.querySelector('#fundopopup')
const btn_gravar = document.querySelector('#btn_gravar')
const btn_cancelar=document.querySelector('#btn_cancelar')
const f_id = document.querySelector('#f_id')
const f_nome = document.querySelector('#f_nome')
const f_celular = document.querySelector('#f_celular')
const f_email = document.querySelector('#f_email')
const f_dtnasc = document.querySelector('#f_dtnasc')

 btn_gravar.addEventListener('click',(evt)=>{
    const edicao = {
        "f_id":f_id.value,
         "f_nome":f_nome.value,
        "f_celular":f_celular.value,
        "f_email":f_email.value,
        "f_dtnasc":f_dtnasc.value,

    }

 
      const cabecalho={
        method:'POST',
        body:JSON.stringify(edicao)

    }
    const endpoint = `http://127.0.0.1:1880/editarcontatos/${f_id.value}`
    fetch(endpoint,cabecalho)
    .then(res=>{
     if(res.status==200){
         prencherDGV()
         alert('Dados atualizados com sucesso')
     }else{
        alert('Erro ao atualizar dados')
     }
 
    })
    fundopopup.classList.add('ocultar')

})

btn_cancelar.addEventListener('click',(evt)=>{
    fundopopup.classList.add('ocultar')
})



const prencherDGV=()=>{
 
   
    let endpointt=`http://127.0.0.1:1880/pesquisartodoscontatos`
    fetch(endpointt)
    .then(res=>res.json())
    .then(res=>{
        dados.innerHTML=""
        res.forEach(el => {
            const linha=document.createElement('div')
            linha.setAttribute('class','linhadados')
           
            const c1=document.createElement('div')
            c1.setAttribute('class','coluna c1 c_dado')
            c1.innerHTML=el.n_contato_contato
            linha.appendChild(c1)

            const c2=document.createElement('div')
            c2.setAttribute('class','coluna c2 c_dado')
            c2.innerHTML=el.s_nome_contato
            linha.appendChild(c2)

            const c3=document.createElement('div')
            c3.setAttribute('class','coluna c3 c_dado')
            c3.innerHTML=el.s_celular_contato
            linha.appendChild(c3)

            const c4=document.createElement('div')
            c4.setAttribute('class','coluna c4 c_dado')
            c4.innerHTML=el.s_email_contato
            linha.appendChild(c4)

            
            const c5=document.createElement('div')
            c5.setAttribute('class','coluna c5 c_dado' )
            c5.innerHTML=el.dt_dtnasc_contato
            linha.appendChild(c5)

            const c6=document.createElement('div')
            c6.setAttribute('class','coluna c6 c_op')
            const imgdelete=document.createElement('img')
            imgdelete.setAttribute('src','lix.png')
            imgdelete.setAttribute('class','iconeop')
            imgdelete.addEventListener('click',(evt)=>{
                const id=evt.target.parentNode.parentNode.firstChild.innerHTML
                
                removercontato(id)
            })
            const imgeditar=document.createElement('img')
            imgeditar.setAttribute('src','editar.svg')
            imgeditar.setAttribute('class','iconeop')
            imgeditar.addEventListener('click',(evt)=>{
                const dados = evt.target.parentNode.parentNode.childNodes
                
             
                
                f_id.value = dados[0].innerHTML
                 f_nome.value =dados[1].innerHTML
                 f_celular.value=dados[2].innerHTML
                 f_email.value=dados[3].innerHTML
                 f_dtnasc.value=dados[4].innerHTML

              
               
            
                fundopopup.classList.remove('ocultar')

                
            })
            c6.appendChild(imgdelete)
            c6.appendChild(imgeditar)
            linha.appendChild(c6)





            dados.appendChild(linha)

            

           
            
        });
    })
}
prencherDGV()



const removercontato=(id)=>{
   const endpoint = `http://127.0.0.1:1880/deletarcontatos/${id}`
   fetch(endpoint)
   .then(res=>{
    if(res.status==200){
        prencherDGV()
    }

   })



   
}


 
let contatos = []
const destinoDom =document.getElementById('listacontatos')
//criar objeto literal com propriedade e função
let contato={
    getTodosContatos:function(){
        return contatos
    },
    getContato:function(i_cont){
        return contatos[i_cont]
    },
    addContato:function(novocontato){
       this.destinoDom =document.getElementById('listacontatos');
        const cont={
            nome:novocontato.nome,
            telefone:novocontato.telefone,
            email:novocontato.email,
        }
        
        
        contatos.push(cont)
        destinoDom.innerHTML=""
        console.log(contatos)
    
       
       contatos.forEach((e)=>{
            const div = document.createElement('div')
            div.setAttribute('class','contato')
            const p_nome=document.createElement('p')
            p_nome.innerHTML=e.nome
            const p_telefone=document.createElement('p')
            p_telefone.innerHTML=e.telefone
            const p_email=document.createElement('p')
            p_email.innerHTML=e.email
            
            
           
            const btn= document.createElement("img")
            btn.setAttribute("src","lix.png")
            btn.setAttribute('class','lixeira')
            btn.addEventListener('click',(evt)=>{
                console.log(evt.target.parentNode)
                destinoDom.removeChild(evt.target.parentNode)
                this.excluircontato(evt.target.parentNode.children[0].innerHTML,evt.target.parentNode)
            })

            div.appendChild(p_nome)
            div.appendChild(p_email)
            div.appendChild(p_telefone)
            div.appendChild(btn)
            destinoDom.appendChild(div)

       })
       

    },
    excluircontato:function(clicado,onde){
      
        contatos=contatos.filter((ele,ind)=>{
            return ele.nome != clicado       
             })//else{              
            //     this.addContato(ele,destinoDom)
     
            // }
            
            console.log(contatos)
            
            return contatos
           
            
        
        
       
      
    }
}

export default contato

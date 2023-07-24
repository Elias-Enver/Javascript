import {contatos} from "./bancocontatos.js";

//criar objeto literal com propriedade e função
let contato={
    getTodosContatos:function(){
        return contatos
    },
    getContato:function(i_cont){
        return contatos[i_cont]
    },
    addContato:function(novocontato,destinoDom){
        const cont={
            nome:novocontato.nome,
            telefone:novocontato.telefone,
            email:novocontato.email,
        }
        
        
        contatos.push(cont)
        const div = document.createElement('div')
        div.setAttribute('class','contato')
        const p_nome=document.createElement('p')
        p_nome.innerHTML=novocontato.nome
        const p_telefone=document.createElement('p')
        p_telefone.innerHTML=novocontato.telefone
        const p_email=document.createElement('p')
        p_email.innerHTML=novocontato.email
        div.appendChild(p_nome)
        div.appendChild(p_email)
        div.appendChild(p_telefone)
        destinoDom.appendChild(div)

    }
}

export default contato

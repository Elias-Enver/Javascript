const cabecalho = document.querySelector('#cabecalho')
const menu = document.querySelector('#menu')
const principal = document.querySelector('#principal')
const btn_home = document.querySelector('#btn_home')
const btn_novo = document.querySelector('#btn_novo')
const btn_pesquisar = document.querySelector('#btn_pesquisar')
const btn_gestao = document.querySelector('#btn_gestao')
const btn_sobre = document.querySelector('#btn_sobre')


btn_novo.addEventListener('click',(evt)=>{
    abrirAba(evt.target,'./novo.html')

   //abaixo serve para abrir o arquivo no , local indicado 

})

btn_home.addEventListener('click',(evt)=>{
    abrirAba(evt.target,'./home.html')

  

})

btn_pesquisar.addEventListener('click',(evt)=>{
    abrirAba(evt.target,'./pesquisar.html')


})

btn_gestao.addEventListener('click',(evt)=>{
    abrirAba(evt.target,"./gestao.html")

   
   
})
btn_sobre.addEventListener('click',(evt)=>{
    abrirAba(evt.target,"./sobre.html")

 
})

const abrirAba=(el,url)=>{
    const todaabas =[...document.querySelectorAll('.aba')]
    todaabas.map((e)=>{
        e.classList.remove('abaSelecionada')
        
    })
    el.classList.add('abaSelecionada')
    window.open(url,'if_principal')
}


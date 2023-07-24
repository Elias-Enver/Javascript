import {Cxmsg} from "./topo.js"

const config={
  cor:'#899',
  tipo:"ok",
  comando_sn:()=>{},
  textos:['SIM','NÃO']
}

const fsim=()=>{
    console.log('poderia colocar qualquer comando')
}


const btn_mostrarcxmsg=document.querySelector('#btn_mostrarcxmsg')
const btn_mostrarcxmsg1=document.querySelector('#btn_mostrarcxmsg1')
const btn_mostrarcxmsg2=document.querySelector('#btn_mostrarcxmsg2')


btn_mostrarcxmsg.addEventListener('click',()=>{
    config.tipo='ok'
    Cxmsg.mostrar(config,'sou lindo','filho de Deus')

})

btn_mostrarcxmsg1.addEventListener('click',()=>{
    config.tipo='sn'
    config.comando_sn=()=>{fsim()}
    Cxmsg.mostrar(config,"Jesus",'Jesus é lindo')

})
btn_mostrarcxmsg2.addEventListener('click',()=>{
    config.tipo='sn'
    config.comando_sn=()=>{}
    config.textos=["OK","CANCELAR"]
    Cxmsg.mostrar(config,"Meu futuro","serei um grande programador")

})


class Cxmsg{
    static cor="#888"
    static destino=null
    static divmsg=null
    static tipo=null
    static comando_sn=null
    static textos=[]
    

    static mostrar=(config,titulo,texto)=>{
        this.cor=config.cor
        this.tipo=config.tipo
        this.textos=config.textos
        this.comando_sn=()=>{config.comando_sn()}
        this.destino=document.body
        this.titulo=titulo
        this.texto=texto
        this.divmsg=document.createElement('div')
       
        this.divmsg.setAttribute('id','divmsg')
        //this.divmsg.setAttribute('style','estilo_divmsg')
        this.destino.prepend(this.divmsg)

        const areaCxmsg=document.createElement('div')
        
        
        areaCxmsg.setAttribute('id','areaCxmsg')
        this.divmsg.appendChild(areaCxmsg)

        const titulocxmsg=document.createElement('div')
        titulocxmsg.setAttribute('id','titulocxmsg')
        areaCxmsg.appendChild(titulocxmsg)
        titulocxmsg.innerHTML=this.titulo

        const corpocxmsg=document.createElement('div')
        corpocxmsg.setAttribute('id','corpocxmsg')
        areaCxmsg.appendChild(corpocxmsg)
        corpocxmsg.innerHTML=this.texto

        const rodapecxmsg=document.createElement('div')
        rodapecxmsg.setAttribute('id','rodapecxmsg')
        const estilo_cor = 
        'background-color:'+this.cor+';'+
        rodapecxmsg.setAttribute('style','estilo_cor')
        areaCxmsg.appendChild(rodapecxmsg)

        if(this.tipo=="ok"){
            const btn_ok = document.createElement('button')
            btn_ok.setAttribute('id','btn_ok')
            btn_ok.innerHTML="ok"
            btn_ok.addEventListener('click',(evt)=>{
                this.ocultar() 
            })
            rodapecxmsg.appendChild(btn_ok)
        }else if(this.tipo=="sn"){
            const btn_sim = document.createElement('button')
            btn_sim.setAttribute('id','btn_ok')
            btn_sim.innerHTML=this.textos[0]
            btn_sim.addEventListener('click',(evt)=>{
                this.comando_sn()
                this.ocultar()
            })
            rodapecxmsg.appendChild(btn_sim)
            const btn_nao = document.createElement('button')
            btn_nao.setAttribute('id','btn_ok')
            btn_nao.innerHTML=this.textos[1]
            btn_nao.addEventListener('click',(evt)=>{
                this.ocultar()
            })
            rodapecxmsg.appendChild(btn_nao)

        }
        
    

     

    }
    static ocultar=()=>{
        this.divmsg.remove()
        
    }
}

export{Cxmsg}
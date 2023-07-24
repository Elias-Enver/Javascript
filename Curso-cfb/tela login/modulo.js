
class login{
    
    static locado=false;
    static matLogado=null;
    static nomeLogado=null;
    static acessoLogado=null;
    static estilocss=null;
    static callback_ok=null;
    static callback_Nok=null;
    static config={
        cor:'#048',
        img:""
    };
    
    static endpoint= "https://login--eliasenver.repl.co/";
    //https://login--eliasenver.repl.co/?matricula=123&senha=321

    static login=(callback_ok,callback_Nok,config=null)=>{
        if(config!=null){
            this.config=config;
        }
        this.callback_ok=()=>{callback_ok()}
        this.callback_Nok=()=>{callback_Nok()}        
        
        this.estilocss=
        ".fundologin{display: flex;justify-content: center;align-items: center;width: 100%;height: 100vh;position: absolute;top: 0px;     left: 0px;background-color: rgba(0,0,0,0.75);box-sizing: border-box;}"+
        ".baselogin{display: flex;justify-content: center;align-items: stretch;width: 80%;box-sizing: inherit;}"+
       " .elementoslogin{display: flex;justify-content: center;align-items: flex-start;flex-direction: column;width: 50%;    background-color: #eee;padding: 10px;border-radius: 10px 0px 0px 10px;box-sizing: inherit;}"+

       " .logologin{display: flex;justify-content: center;align-items: center;width: 60%;background-color: #bbb;padding: 10px;border-radius: 0px 10px 10px 0px;box-sizing: inherit;}"+
       " img{width: 50%;box-sizing: inherit;}"+
      " .campologin{display: flex; justify-content: flex-start;align-items: flex-start;box-sizing: inherit;margin-bottom: 10px;}"+
        "label{font-size: 15px;}"+
       " input{font-size: 15px;padding: 5px;border-radius: 5px;}"+
        ".botoeslogin{display: flex;justify-content: space-around;align-items: center;width: 100%;box-sizing: inherit;}"+
       ` button{cursor: pointer;background-color: ${this.config.cor};color: white;border-radius: 50px;padding: 10px;width: 80px;margin-top: 10px;box-sizing: inherit;}`

       const estilo = document.createElement('style');
       estilo.setAttribute('id',"estilogin")
       estilo.setAttribute('rel',"stylesheet")
       estilo.setAttribute('type',"text/css")
       estilo.innerHTML=this.estilocss;
       document.head.appendChild(estilo);

       const fundologin=document.createElement('div');
       fundologin.setAttribute('id','fundologin');
       fundologin.setAttribute('class','fundologin');
       document.body.prepend(fundologin)

       const baselogin=document.createElement('div');
       baselogin.setAttribute('id','baselogin');
       baselogin.setAttribute('class','baselogin');
       fundologin.appendChild(baselogin);

       const elementoslogin=document.createElement('div');
       elementoslogin.setAttribute('id','elementoslogin');
       elementoslogin.setAttribute('class','elementoslogin');
       baselogin.appendChild(elementoslogin);

       const campologinusername=document.createElement('div');
       campologinusername.setAttribute('id','campologinName');
       campologinusername.setAttribute('class','campologin');
       elementoslogin.appendChild(campologinusername);

       const labelusername=document.createElement('label');
       labelusername.innerHTML="Username"
       campologinusername.appendChild(labelusername);

       const inputusername=document.createElement('input');
       inputusername.setAttribute('id','f_username');
       inputusername.setAttribute('type','text');
       inputusername.setAttribute('name','f_username');
       campologinusername.appendChild(inputusername);

       const campologinsenha=document.createElement('div');
       campologinsenha.setAttribute('id','campologinsenha');
       campologinsenha.setAttribute('class','campologin');
       elementoslogin.appendChild(campologinsenha);

       const labelusenha=document.createElement('label');
       labelusenha.innerHTML="Senha"
       campologinsenha.appendChild(labelusenha);

       const inputsenha=document.createElement('input');
       inputsenha.setAttribute('id','f_senha');
       inputsenha.setAttribute('type','password');
       inputsenha.setAttribute('name','f_senha');
       campologinsenha.appendChild(inputsenha);

       const botoeslogin = document.createElement('div');
       botoeslogin.setAttribute('class','botoeslogin');
       elementoslogin.appendChild(botoeslogin);

       const btn_login = document.createElement('button');
       btn_login.setAttribute('id','btn_login');
       btn_login.innerHTML = "Login"
       btn_login.addEventListener('click',(evt)=>{
            this.verficalogin();
            });
       botoeslogin.appendChild(btn_login);
      

       const btn_cancelar = document.createElement('button');
       btn_cancelar.setAttribute('id','btn_cancelar');
       btn_cancelar.innerHTML = "Cancelar";
       btn_cancelar.addEventListener('click',(evt)=>{
        this.fechar();
        console.log('teste')
       });
       botoeslogin.appendChild(btn_cancelar);

       const logologin = document.createElement('div');
       logologin.setAttribute('id','logologin');
       logologin.setAttribute('class','logologin');
       baselogin.appendChild(logologin);

       const imglogo = document.createElement('img');
       imglogo.setAttribute('src',this.config.img);
       imglogo.setAttribute('title','CFB Cursos');
       logologin.appendChild(imglogo);
       


    }
    static verficalogin=()=>{
        const mat = document.getElementById('f_username').value;
        let pas=document.getElementById('f_senha').value;

        const endpoint = `https://login--eliasenver.repl.co/?matricula=${mat}&senha=${pas}`

        fetch(endpoint)
        .then(res=>res.json())
        .then(res=>{
            if(res){
                this.logado=true;
                this.matLogado=mat;
                this.nomeLogado=res.nome;
                this.acessoLogado=res.acesso;
                this.callback_ok()
                this.fechar()
            }else{
                this.logado=false;
                this.matLogado=null;
                this.nomeLogado=null;
                this.acessoLogado=null;
                this.callback_Nok()
               
               
            }
        })
    }



    static fechar =()=>{

        const fundologin=document.querySelector('#fundologin')
        fundologin.remove()

        const id_estilogin=document.querySelector('#estilogin')
        id_estilogin.remove()
    }
}






       
    



export{login};
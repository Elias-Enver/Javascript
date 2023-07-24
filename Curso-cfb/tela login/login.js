import { login } from "./modulo.js";
import { Cxmsg } from "../caixa msg/topo.js";

const callback_ok=()=>{
   
   

}

const callback_Nok=()=>{
    const config={
        cor:"#800",
        tipo:'ok',}
        Cxmsg.mostrar(config,'Erro','login Não efetuado')

}

login.login(callback_ok,callback_Nok)
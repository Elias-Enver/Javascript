class Cursos{
    static cursos=['javascript','html','css','arduino','raspberyy','java']
    constructor(){}
    static gettodoscurso=()=>{
        return this.cursos
    }
    static getcurso=()=>{
        return this.cursos[i.Cursos]
    }
    static addcurso(novocurso){
        this.cursos.push(novocurso)
    }
    static apagarCursos(){
        this.cursos=[]
    }
}

export default Cursos

// posso usar os membros static sem ter que instarcinar objetos para classe .
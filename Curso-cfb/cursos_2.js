const cursos=['javascript','html','css','arduino','raspberyy','java']
const carros=['golf','polo','t-cross','onix','pegeout','arco','chronos']




//outra forma de exportar

function getcurso(){
    return cursos
}

export{cursos,getcurso}

export default function gettodos(){
    return cursos
}





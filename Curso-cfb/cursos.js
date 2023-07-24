const cursos=['javascript','html','css','arduino','raspberyy','java']
const carros=['golf','polo','t-cross','onix','pegeout','arco','chronos']

// pode exportar assim, exportação padrão é so um uma

// const getTodoscuros=()=>{
//     return cursos
// }
// export default getTodoscuros

// para exportar alguma coisa do módulo.
//export{cursos,getTodoscuros}//pode assim
export{cursos}

//outra forma de exportar

export default function todoscursos(){
    return cursos
}





// importação nomeada
//não é possivel renomear quem foi exportado padrao
//renomeou cursos com c e get curso
// ai na hora de chamar . pode chamar so com novos nomes
//tambem pode ser renomeado todo modulo
//import{cursos as c,getcurso as gc} from "./curso_2.js"

//pode renomear todo modulo com * ,pega tudo que esta sendo exportado.

import*as cursos from "./cursos_2.js"

// ai para usar o modulo usase Curso.(ponto) e pega o que se quer utilizar 

cursos.getcurso

//para usar defaut
cursos.default




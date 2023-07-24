// é possivel fazer isso com qualquer elemento , nesse exemplo será com header
const head=document.head
const body =document.body

const estilo ="<link rel='stylesheet' type='text/css' href='topo.css'>'</link>"
head.innerHTML+=estilo
const topo = document.createElement('div')
topo.setAttribute('id','topo')
topo.setAttribute('class','topo')

body.prepend(topo) // mesmo que append porem ele adiciona no inicio

const logo=
"<div id='logo' class='logo'>"+
    "<img src='olho e.png'title='CFB CURSOS'/>"+
"</div>"
topo.innerHTML += logo

const login = 
"<div id='login' class='login'>"+
    "<p id='matricula'>Matricula:<span></span>"+
    "<p id='nome'>Nome:<span></span></p>"+
"</div>"
topo.innerHTML+=login

// na aula 2 , foi feito o exemplo de fazer a formataçaõ css no java . script . para isso.
//const estilo =
//   " display: flex;"+
  //  "justify-content: space-between;"+
   // "align-items: center;"+
  // " background-color: #eee;"+

  // no caso do login que foi feito o html in line . o stilo é passado inline . style = "+nome do estilo+"
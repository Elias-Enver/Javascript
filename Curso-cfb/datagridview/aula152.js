

const configdgv={
    endpoint :'produtos.json',
    idDestino:"dgvdados",

}

const dgv=(configdgv)=>{
    const dgvdados = document.getElementById(configdgv.idDestino)
    dgvdados.innerHTML="";
    fetch(configdgv.endpoint)
    .then(res=>res.json())
    .then(res=>{
        res.forEach(el => {
            const dgvlinha=document.createElement('div');
            dgvlinha.setAttribute('class','dgvlinha')
            
            const c1=document.createElement('div');
            c1.setAttribute('class','coluna c1');
            c1.innerHTML=el.id;
            dgvlinha.appendChild(c1)

            const c2=document.createElement('div');
            c2.setAttribute('class','coluna c2');
            c2.innerHTML=el.produto;
            dgvlinha.appendChild(c2)

            const c3=document.createElement('div');
            c3.setAttribute('class','coluna c3');
            c3.innerHTML=el.marca;
            dgvlinha.appendChild(c3)
            
            const c4=document.createElement('div');
            c4.setAttribute('class','coluna c4');
            c4.innerHTML=el.modelo;
            dgvlinha.appendChild(c4)

            const c5=document.createElement('div');
            c5.setAttribute('class','coluna c5');
            dgvlinha.appendChild(c5)

            const imgDelete=document.createElement('img');
            imgDelete.setAttribute('class','dgvicone');
            imgDelete.setAttribute('src','lixeira.svg');
            c5.appendChild(imgDelete)

            const imgEditar=document.createElement('img');
            imgEditar.setAttribute('class','dgvicone');
            imgEditar.setAttribute('src','editar.svg');
            c5.appendChild(imgEditar)
            
            const imgExibir=document.createElement('img');
            imgExibir.setAttribute('class','dgvicone');
            imgExibir.setAttribute('src','exibir.svg');
            c5.appendChild(imgExibir)


            dgvdados.appendChild(dgvlinha)
            
            
            
        });

    })
}
dgv(configdgv)


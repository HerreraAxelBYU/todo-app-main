const body = document.querySelector('#body');
const main = document.querySelector('#main-image');
const icono = document.querySelector('#icon');
const icono2 = document.querySelector('#icon2');
const input = document.querySelector('#input');
const notas = document.querySelector('#notes');


// ACTIVAR DARK MODE
icono.addEventListener('click', () => {

    let p = document.querySelectorAll('p');

    // AÑADIENDO ESTILOS DARK
    body.classList.toggle('bg-[#161722]');
    main.classList.toggle('dark_picture');
    input.classList.toggle('bg-[#25273C]');
    notas.classList.toggle('bg-[#25273C]');
    
    p.forEach(notita => {
        notita.classList.toggle('text-[#CACDE8]');
    });

    console.log(p)

    // CAMBIAR ICONOS -- LUNA / SOL 
    if (icono.src === 'http://127.0.0.1:5500/images/icon-moon.svg') {
        icono.src = '/images/icon-sun.svg'
        
    } else if (icono.src === 'http://127.0.0.1:5500/images/icon-sun.svg') {
        icono.src = '/images/icon-moon.svg';
    }

});

input.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        
        agregarNotas(input.value)

        if (input.value == "") {
            alert('Escriba una nota');
        }

        input.value = "";
    }

    
});





// LISTA DE TODO APP
function agregarNotas(parrafo) {

    // CREAR ELEMENTOS
    let lista = document.createElement('li');
    let div = document.createElement('div');
    let div2 = document.createElement('div');
    let button = document.createElement('button');
    let paragraph = document.createElement('p');
    let img = document.createElement('img');

    // AÑADIENDO ESTILO
    lista.classList.add('w-full','list-none');
    div.classList.add('w-full', 'flex', 'justify-between', 'px-6', 'py-2');
    button.classList.add('w-[16px]', 'h-[16px]', 'border', 'border-black', 'rounded-full');
    img.classList.add('w-[16px]', 'h-[16px]');
    paragraph.classList.add('text-[#161722]');


    // VALOR DE LA NOTA A AGREGAR
    paragraph.textContent = parrafo;
    img.src = "./images/icon-cross.svg";

    // ORDENANDO ELEMENTOS
    div.appendChild(button);
    div.appendChild(paragraph);
    div.appendChild(img);
    lista.appendChild(div)

    // COLOCANDO LISTA
    notas.appendChild(lista)

}




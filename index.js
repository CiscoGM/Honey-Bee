let textDisplay=document.getElementById("lista1")


let elementosTelefono=['monitoreo de temperatura','monitoreo de humedad', 
              'notificacion sobre la actividad de las abejas',
            'peso de la colmena','agregar colmenas mediante uso de qr']

//funcion para que se vaya agregando uno por uno
function mostrarElementos(index){
    if (index < elementosTelefono.length) {
        var nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = elementosTelefono[index];
        textDisplay.appendChild(nuevoElemento);
        
        //mostraremos los elementos uno por uno con delay 
        setTimeout(function() {
            mostrarElementos(index + 1);
        }, 700);
  
    }
}
function startAnimation(entries, observer) {
    if (entries[0].isIntersecting) {
      mostrarElementos(0);
      observer.unobserve(textDisplay);
    }
  }
  
  var observer = new IntersectionObserver(startAnimation);
  observer.observe(textDisplay);

  setInterval(function(){
    var lista=textDisplay.querySelectorAll('li')
    lista.forEach(item=>{
        textDisplay.removeChild(item)
    })
    observer.observe(textDisplay)
  },6000)

  let hamburger=document.querySelector('.hamburger')
  let navlinks=document.getElementById('nav-list')
  let links=document.querySelectorAll('.links')

  hamburger.addEventListener('click',()=>{
    navlinks.classList.toggle('hide');
    hamburger.classList.toggle('lines-rotate')
  })

  for(let i=0;i<links.length;i++){
    links[i].addEventListener('click',()=>{
      navlinks.classList.add('hide');
    })
  }




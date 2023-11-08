var textDisplay=document.getElementById("lista1")


var elementosTelefono=['monitoreo de temperatura','monitoreo de humedad', 
              'notificacion sobre la actividad de las abejas',
            'peso de la colmena','agregar colmenas mediante uso de qr']

//funcion para simular el efecto de maquina de escribir 
function mostrarElementos(index){
    if (index < elementosTelefono.length) {
        var nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = elementosTelefono[index];
        textDisplay.appendChild(nuevoElemento);
        
        //mostraremos los elementos uno por uno con delay 
        setTimeout(function() {
            mostrarElementos(index + 1);
        }, 500);
  
    }else{
       // mostraremos todos los elementos una vez acabado
       setTimeout(function() {
        var todosLosElementos = document.createElement("li");
        todosLosElementos.textContent = elementos.join(', ');
        textDisplay.appendChild(todosLosElementos);
    }, 1000);
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
  },5000)
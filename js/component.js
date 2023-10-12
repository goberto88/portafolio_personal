document.addEventListener('DOMContentLoaded', function() {
    var imagenes = ["a","b","c"];
    var  galeria = document.getElementById("galeria");
    
    for(imagen of imagenes){
        galeria.innerHTML +=`
        
            <div class="gallery-card">
                <a href="../images/${imagen}.jpg" data-lightbox="roadtrip" data-target="#id${imagen}">
                <img class="img-fluid" src="../images/${imagen}.jpg" alt="imagen">
                </a>
            </div>
        
        `
    }
    })

document.addEventListener('DOMContentLoaded', function() {
    var imagenes = [4,5,6,7,8,9,10,11,12,13,14,15];
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
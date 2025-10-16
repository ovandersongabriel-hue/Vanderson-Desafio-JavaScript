
let carouselArr = [];



class Carousel {
    
    constructor(img, texto, link){
        this.img = img;
        this.texto = texto;
        this.link = link;
    }
    
      
    static Start(arr){
        if(arr && arr.length > 0){

            if(arr.length > 0){
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel._arr = arr;
                Carousel.Next(); 
                Carousel._interval = setInterval(function(){ Carousel.Next(); },3000);
            }
            
        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    static Next(){
    
        const carousel = document.getElementById('carousel');
        const carouselTitle = document.getElementById('carousel-title');
        const atual = Carousel._arr[Carousel._sequence]

        carousel.innerHTML = `<a href="${atual.link}"><img src = "img/${atual.img}" alt =""></a>`;
        carouselTitle.innerHTML = `<p href = "${atual.link}">${atual.texto}</p>`;
        Carousel._sequence++;
        if(Carousel._sequence>=Carousel._size){
            Carousel._sequence = 0;
        }
    }

    static next() {
        // Incrementa o índice
        this.currentIndex++;
        
        // Se o índice passar do último item, volta para o primeiro (efeito de loop)
        if (this.currentIndex >= this.items.length) {
            this.currentIndex = 0;
        }
        
        // Mostra o novo item
        this.displayCurrent();
    }

    // ---- FUNÇÃO PARA VOLTAR (BOTÃO ESQUERDO) ----
    static previous() {
        // Decrementa o índice
        this.currentIndex--;

        // Se o índice for menor que o primeiro item, vai para o último (efeito de loop)
        if (this.currentIndex < 0) {
            this.currentIndex = this.items.length - 1;
        }

        // Mostra o novo item
        this.displayCurrent();
    }
}


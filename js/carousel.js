
let carouselArr = [];



class Carousel {

    img;
    texto;
    link;
    
    constructor(img, texto, link){
        this.img = img;
        this.texto = texto;
        this.link = link;
    }
    
      
    static Start(arr){
        if(arr && arr.length > 0){

            if(arr.length > 0){
                Carousel._sequence = 0;
                Carousel.arr = arr 
                Carousel._size = arr.length;
                Carousel.escrever(); 
                Carousel._interval = setInterval(function(){ Carousel.Next(); },3000);
            }
            
        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    static escrever () {
        const carousel = document.getElementById('carousel');
        const carouselTitle = document.getElementById('carousel-title');
        const atual = carouselArr[Carousel._sequence];

        carousel.innerHTML = `<a href="${atual.link}"><img src="img/${atual.img}" alt =""></a>`;
        carouselTitle.innerHTML = `<a href ="${atual.link}">${atual.texto}</a>`;
        
        
    }

    static Next(){
        Carousel.escrever();
        Carousel._sequence++;
        console.log(Carousel._sequence)
        if(Carousel._sequence>=Carousel._size){
            Carousel._sequence = 0;
        }
    }

    static next() {
        // Incrementa o índice
        Carousel._sequence++;
        
        // Se o índice passar do último item, volta para o primeiro (efeito de loop)
        if (Carousel._sequence > Carousel._size) {
            Carousel._sequence = 0;
        }
        Carousel.escrever();
        
    }

    // ---- FUNÇÃO PARA VOLTAR (BOTÃO ESQUERDO) ----
    static previous() {
        // Decrementa o índice
        Carousel._sequence--;

        // Se o índice for menor que o primeiro item, vai para o último (efeito de loop)
        if (Carousel._sequence < 0) {
            Carousel._sequence = Carousel._size - 1;
        }
        Carousel.escrever();
     

        
    }
    
    
}

   

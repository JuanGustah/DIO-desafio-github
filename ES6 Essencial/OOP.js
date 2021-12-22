//Funções são as classes
function Animal(qtdPatas){
    this.qtdPatas=qtdPatas;
    this.movimentar=function(){}
}
//Herança
function Cachorro(morde){
    //Chamando construtor de Animal
    Animal.call(this,4);

    this.morde=morde;
    this.latir=function(){
        console.log("au au")
    }
}

const caramelo=new Cachorro(false);

//ou

function Animal(){}

Animal.prototype.qtdPatas=0;
Animal.prototype.movimentar=function(){}

function Cachorro(morde){
    this.qtdPatas=4;
    this.morde=morde;
}
Cachorro.prototype= Object.create(Animal);
Cachorro.prototype.latir=function(){
    console.log("au au")
}

/*
 A grande diferença da primeira para segunda é que toda vez que instanciamos
 um animal a mesma propriedade de latir é criada, enquanto na segunda ela só 
 é criada uma vez.
*/
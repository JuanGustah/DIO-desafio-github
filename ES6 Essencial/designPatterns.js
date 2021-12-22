//Factory
//Classes que retornam objetos

function Factory(idade){
    return {
        nome:"Josué",
        idade
    }
}
const pessoa= Factory(17);

// Singleton

function Pessoa(){
    if(!Pessoa.instance){
        Pessoa.instance=this;
    }
    return Pessoa.instance;
}

// Observer

function Observable(){
    this.observers=[];
    this.subscribe=function(fn){
        this.observers.push(fn)
    }
    this.notify=function(fn){
        this.observers.forEach(observer=>observer(data))
    }
    this.unsubscribe=function(fn){
        this.observers=this.observers.filter(observer=>observer!==fn)
    }
}

// Modules

function Routes(){}

export default Routes;
import Routes from './designPatterns';
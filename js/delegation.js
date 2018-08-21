/*====== Delegation or Pseudoclassical Inheritance =======*/


function Programmer() {
    this.name = 'Unknown';
}

Programmer.prototype.introduce = function() {
    return 'Hello! My name is ' + this.name;
}

Programmer.prototype.getType = function() {
    return this.type
}

function FrontDev(name) {
    this.name = name;
    this.type = 'Frontend developer';

}

function FullStackDev(name) {
    this.name = name;
    this.type = 'FullStack developer';
}

FullStackDev.prototype = Object.create(Programmer.prototype);

FullStackDev.prototype.additionalInfo = function(sometext) {
    return 'I`m ' + this.type + ' and I like ' + sometext
}

FrontDev.prototype = Object.create(Programmer.prototype);


var nastya = new FrontDev('Nastya');
console.log(nastya)

var petro = new FullStackDev('Petro');
console.log(petro)


/* ES6 */

class Programmer {
    constructor() {
        this.name = 'Unknown'
    }
    introduce() {
        return 'Hello! My name is ' + this.name;
    }
    getType() {
        return this.type
    }
}

class FrontDev extends Programmer {
    constructor(name) {
        this.name = name;
        this.type = 'Frontend developer';
    }
}

class FullStackDev extends Programmer {
    constructor(name) {
        this.name = name;
        this.type = 'Frontend developer';
    }
    additionalInfo(sometext) {
        return 'I`m ' + this.type + ' and I like ' + sometext
    }
}

/* Factory */


var prototypeObject = {
    introduce: function() {
       return 'Hello! My name is ' + this.name;
    },
    getType: function() {
       return this.type
    }
}

function Programmer(name) {
    return Object.assign(Object.create(prototypeObject), name)
}


function FrontDev(name) {
    this.name = name;
    this.type = 'Frontend developer';
}


function FullStackDev(name) {
    this.name = name;
    this.type = 'FullStack developer';
}

var frontend = new FrontDev('Nastya');


var nastya = Programmer(frontend);

console.log(nastya)
function Programmer(name, type) {
    var obj = {};
    obj.name = name || 'Unknown';
    obj.type = type || 'Unknown';

    obj.introduce = function() {
        return 'Hello! My name is ' + obj.name;
    };
    obj.getType = function() {
        return obj.type
    }

    return obj;
}


function FrontDev(name) {
    var obj = Programmer(name);
    obj.type = 'Frontend developer';
    return obj
}

function FullStackDev(name) {
    var obj = Programmer(name)
    obj.type = 'FullStack developer';
    obj.additionalInfo = function(sometext) {
        return 'I`m ' + obj.type + ' and I like ' + sometext
    }
}


var front = FrontDev('Nastya');
console.log(front)




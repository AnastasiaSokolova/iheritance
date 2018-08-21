var programmer = {
    name: 'Unknown',
    type:  'Unknown',

    introduce: function() {
        return 'Hello! My name is ' + this.name;
    },

    getType: function() {
        return this.type
    }
}


var frontend = Object.create(programmer, {
   name: {value: 'Nastya'},
   type: {value: 'Frontend developer'}
});

var fullstack = Object.create(programmer, {
    name: {value:'petro'},
    type: {value: 'Fullstack developer'}
});


console.log(fullstack);

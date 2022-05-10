let obj = {
    name:'Alex',
    age: 18,
    natitonality:'British'
}
obj.maritalStatus = 'single'
obj.job = 'student'
obj.sayHi = function(){
    console.log('hello, '+ this.name)
}
function greet (){
    console.log('good morning!')
}
obj.greet = greet 

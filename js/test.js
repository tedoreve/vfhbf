var drink = ' Energy Drink'
var lyrics = ''
var cans = 99
var fido = {
  name:'fido',
  weight:40,
  breed:'mixed',
  loves:['walks','fetching balls']
}

function Dog(name, breed, weight){
  this.name   = name
  this.breed  = breed
  this.weight = weight
  this.bark   = function(){
    if (this.weight > 25){
      alert(this.name + ' says Woof!')
    }else{
      alert(this.name + ' say Yip!')
    }
  }
}

var fido = new Dog('fido','mixed',38)
var tiny = new Dog('tiny','chawalla',8)
div = document.getElementById('xxx')

div.innerHTML = 'xxx'

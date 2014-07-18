var Tamagatchi = {
  initialize: function(name){
    this.name = name;
  },
  foodlevel: 20,
  sleeplevel: 20,
  bathroomlevel: 0,
  timePasses: function(){

    this.foodlevel -= 1;
    this.sleeplevel -= 1;
    this.bathroomlevel +=1;
    return [this.foodlevel-=1, this.sleeplevel-=1,this.bathroomlevel+=1 ]
  },
  isAlive: function(){
    if ((this.foodlevel > 0) && (this.sleeplevel > 0) && (this.bathroomlevel < 20)) {
      return true;
    } else {
    return false;
   }
  },
  isDead: function(){
        if (this.foodlevel < 1 || this.sleeplevel <1 || this.bathroomlevel >= 20) {
      return true;
    } else {
      return false;
    }
  },
  feedIt: function(){
    return this.foodlevel+=1;
  },
  taketoBathroom: function() {
    return this.bathroomlevel = 0;
  },
  putToBed: function(){
    return this.sleeplevel = 20;
  }

};
var myPet = Object.create(Tamagatchi);
myPet.initialize("Rover");

$(document).ready(function(){

 $("#start").click(function() {

   var myPet = Object.create(Tamagatchi);
   myPet.name = "John";

$("#feed-me").click(function(){
    myPet.feedIt();
    $("td#food-level").text(myPet.foodlevel);
});

$("#bedtime").click(function(){
    myPet.putToBed();
    $("td#sleep-level").text(myPet.sleeplevel);
 })

 $("#bathroom").click(function(){
    myPet.taketoBathroom();
    $("td#bladder-level").text(myPet.bathroomlevel);
  });

var counter = window.setInterval(function(){
  myPet.timePasses();
   $("td#food-level").text(myPet.foodlevel);
   $("td#sleep-level").text(myPet.sleeplevel);
   $("td#bladder-level").text(myPet.bathroomlevel);
  if ((myPet.foodlevel < 1) || myPet.sleeplevel <1 || myPet.bathroomlevel >= 20){
  alert("DEAD");
  window.clearInterval(counter)};
}, 2000);
});

});






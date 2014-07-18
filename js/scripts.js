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
  }
};
 //console.log(Tamagatchi.isAlive());
// console.log(Tamagatchi.isDead());
// console.log(Tamagatchi.foodlevel);

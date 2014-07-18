describe("Tamagatchi", function() {
  describe("initialize", function () {
    it("Sets the name of the Pet and it's survival levels", function() {
      var myPet = Object.create(Tamagatchi);
      myPet.initialize("Rover");
      myPet.name.should.equal("Rover");
      myPet.foodlevel.should.equal(20);
      myPet.sleeplevel.should.equal(20);
      myPet.bathroomlevel.should.equal(0);
    });
  });
  describe("timePasses", function(){
    it("decreases the food level for the pet by 1", function() {
      var myPet = Object.create(Tamagatchi);
      myPet.initialize("Rover");
      myPet.timePasses();
      myPet.foodlevel.should.equal(19);
      myPet.sleeplevel.should.equal(19);
      myPet.bathroomlevel.should.equal(1);
    });
    describe("isAlive", function(){
      it("is alive if food level is greater than zero and bathroom level is less than 20 and sleepllevel is greater than 0", function(){
        var myPet = Object.create(Tamagatchi);
        myPet.initialize("Rover");
        myPet.isAlive().should.equal(true);
      });
    });
    describe("isDead", function(){
      it("It is dead if the food level is 0 or the sleep level is zero or the bathroom level is 20", function(){
        var myPet = Object.create(Tamagatchi);
        myPet.initialize("Rover");
        myPet.isDead().should.equal(false);
      });
    });
    describe("isDead", function(){
      it("It is dead if the food level is 0 or the sleep level is zero or the bathroom level is 20", function(){
        var myPet = Object.create(Tamagatchi);
        myPet.initialize("Rover");
        myPet.foodlevel = 0;
        //console.log(myPet.foodlevel);
        //console.log(myPet.isDead());
        //console.log(myPet.isAlive());
        myPet.isDead().should.equal(true);
      });
    });
    describe("feedIt", function() {
      it("It should increase the food level by 1", function() {
        var myPet = Object.create(Tamagatchi);
        myPet.initialize("Rover");
        myPet.feedIt().should.equal(21);
      })
    })
    describe("taketoBathroom", function() {
      it("It should set the bathroom level to 0", function() {
        var myPet = Object.create(Tamagatchi);
        myPet.initialize("Rover");
        myPet.taketoBathroom().should.equal(0);
      })
    })
    describe("putToBed", function() {
      it("Should set the sleep level to 20", function() {
        var myPet = Object.create(Tamagatchi);
        myPet.initialize("Rover");
        myPet.putToBed().should.equal(20);
      })
    })
  });
});

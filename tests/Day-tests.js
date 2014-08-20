var expect = chai.expect;

describe("Day", function(){
    var daysContainer = [];
   describe("constructor", function(){
       before(function(){
          daysContainer = [];
       });
      it("should have id", function(){
        var day = new Day(daysContainer);
        expect(day.getId()).to.not.be.undefined;
      });
      it("two days should have different id's", function(){
        var day1 = new Day(daysContainer);
        daysContainer.push(day1);

        var day2 = new Day(daysContainer);

        expect(day1.getId()).to.not.equal(day2.getId());
      });
      it("should throw exceptions about days container", function(){
         expect(function(){new Day()}).to.throw("Day container is necessary");
      });
      it("default name value should be `undefined`", function(){
         var day = new Day(daysContainer);
         expect(day.getName()).to.be.undefined;
      });
      it("name should be `poniedzialek`",function(){
         var day = new Day(daysContainer,{name: "poniedzialek"});
         expect(day.getName()).to.equal("poniedzialek");
      });
   });
});
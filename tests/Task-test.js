var expect = chai.expect;

describe("Task", function(){
   var task;

    beforeEach(function(){
        task = new Task("zad");
    });

   describe("constructor", function(){
      it("should throw exception when no name", function(){
        expect(function(){new Task();}).to.throw("need name");
      });
      it("should have default id", function(){
         expect(task.getId()).to.not.be.undefined;
      });
      it("id should be `undefined` when get not by `getId`",function(){
        expect(task.id).to.be.undefined;
      });
      it("should `done` status default to be false", function(){
         expect(task.isDone()).to.be.false;
      });
      it("done should be `undefined` when get not by `isDone`", function(){
        expect(task.done).to.be.undefined;
      });
   });
   describe("method", function(){
       it("should set `done` to true", function(){
           task.markAsDone();
           expect(task.isDone()).to.be.true;
       });
       it("should set `done` to false", function(){
           task.markAsDone();
           expect(task.isDone()).to.be.true;
           task.markAsNotDone();
           expect(task.isDone()).to.be.false;
       });
   });
});
var expect = chai.expect;

describe("Task list", function(){
    var list;
    var task;
    beforeEach(function(){
       list = new TaskList();
       task = new Task("zad");
    });

    describe("constructor", function(){
       it("default should be empty", function(){
          expect(list.length).to.equal(0);
       });
    });

    describe("method", function(){
        var  wrongObjectException = "wrong type of object";
       it("after add task length should be increment", function(){
          list.add(task);
           expect(list.length).to.equal(1);
       });
       it("after remove task length should be decrement", function(){
           list.add(task);
           expect(list.slice(0).length).to.equal(1);
           list.remove(task.getId());
           expect(list.length).to.equal(0);
       });
        it("should check is all task are done and return true", function(){
            task.markAsDone();
            list.add(task);
            var task2 = new Task("z1");
            task2.markAsDone();
            list.add(task2);
            var task3 = new Task("z2");
            task3.markAsDone();
            list.add(task3);

            expect(list.isAllDone()).to.be.true;
        });
        it("should check is all task are done and return false", function(){
            task.markAsDone();
            list.add(task);
            var task2 = new Task("z1");
            task2.markAsDone();
            list.add(task2);
            var task3 = new Task("z2");
            list.add(task3);

            expect(list.isAllDone()).to.be.true;
        });
       it("should mark all task on done", function(){
           list.add(task);
           list.add(new Task("z1"));
           list.add(new Task("z2"));
           list.add(new Task("z3"));

           list.allDone();

           expect(list.isAllDone()).to.be.true;
       });
       it("should mark all task to undone", function(){
           list.add(task);
           list.add(new Task("z1"));
           list.add(new Task("z2"));
           list.add(new Task("z3"));

           list.allDone();

           expect(list.isAllDone()).to.be.true;

           list.allUndone();
           expect(list.isAllDone()).to.be.false;
       });
        it("should add only task object (add)", function(){
            var string = "napis";
             expect(function(){list.add(string)}).to.throw(wrongObjectException);
        });
        it("should add only task object (push)", function(){
            var string = "napis";
            expect(function(){list.push(string)}).to.throw(wrongObjectException);
        });
        it("should add only task object (splice)", function(){
            var string = "napis";
            expect(function(){list.splice(0,0,string)}).to.throw(wrongObjectException);
        });
    });
});
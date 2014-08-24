var TaskList = (function(){
    var uid = 0;
    var privateFields = {};

    var  wrongObjectException = "wrong type of object";

    var _ = function(f){
        if(!privateFields[f.__uid]){
            f.__uid = uid++;
            privateFields[f.__uid] = {};
        }

        return privateFields[f.__uid];
    }

    var TaskList = function(){
        Array.call(this);
    };

    TaskList.prototype = Object.create(Array.prototype);
    TaskList.prototype.constructor = TaskList;

    TaskList.prototype.add = function(task) {
        if(!(task instanceof  Task)){
            throw wrongObjectException;
        }
       this.splice(0,0,task);
    };

    TaskList.prototype.push = function(task){
        if(!(task instanceof  Task)){
            throw wrongObjectException;
        }
        Array.prototype.push.call(this,task);
    };

    TaskList.prototype.splice = function(){
        var tasks;

        if(arguments.length > 2){
           tasks = Array.prototype.slice.call(arguments, 2);
        }

        for(var key in tasks){
            if(!(tasks[key] instanceof Task)){
                throw wrongObjectException;
            }
        }

      Array.prototype.splice.apply(this, arguments);

    };

    TaskList.prototype.remove = function(taskId) {
        var index = -1;
        for(var key in this){
            if(this[key].getId() === taskId){
                index = key;
                break;
            }
        }

        this.splice(index,1);
    };

    TaskList.prototype.allDone = function(){
        for(var key in this){
            if(parseInt(key)){
                this[key].markAsDone();
            }
        }
    };

    TaskList.prototype.allUndone = function(){
        for(var key in this){
            if(parseInt(key)){
                this[key].markAsNotDone();
            }
        }
    }

    TaskList.prototype.isAllDone = function(){
        var all = true;
        for(var key in this){
            if(parseInt(key) && !this[key].isDone()){
               all = false;
               break;
            };
        }
        return all;
    }

    return TaskList;
}());
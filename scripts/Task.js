var Task = (function(){

    var globalId = 0;
    var uid = 0;
    var privateFields = {};

    var _ = function(f){
        if(!privateFields[f.__uid]){
            f.__uid = uid++;
            privateFields[f.__uid] = {};
        }

        return privateFields[f.__uid];
    }

    var Task = function(name){
        if(!name){
            throw "need name";
        }
        this.name = name;
        _(this).id = ++globalId;
        _(this).done = false;
    };

    Task.prototype.getId = function(){
       return _(this).id;
    };

    Task.prototype.isDone = function(){
        return _(this).done;
    };

    Task.prototype.markAsDone = function() {
        _(this).done = true;
    }

    Task.prototype.markAsNotDone = function(){
        _(this).done = false;
    };

    return Task;
}());
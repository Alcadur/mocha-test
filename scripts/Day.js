var Day = (function(){

    var guid = 0;
    var privateArea = {};

    var _ = function(f){
        if(!privateArea[f.__guid]){
            f.__guid = guid++;
            privateArea[f.__guid] = {};
        }

        return privateArea[f.__guid];
    };

    var day = function(daysContainer, options){
        var self = this;

        _(this).id = this.generateId(daysContainer);
        _(this).name = options?options.name:undefined;

    };

    day.prototype.getId = function(){
        return _(this).id;
    }

    day.prototype.getName = function(){
        return _(this).name;
    }

    var a = 1;
    day.prototype.generateId = function(daysContainer){
        if(!daysContainer){
           throw "Day container is necessary";
        }
        return checkId(1);
        function checkId(id){
            for(index in daysContainer){
                if(id <= daysContainer[index].getId()){
                    return checkId(id+1);
                }
            }

            return id;
        }
    }

    return day;
}());
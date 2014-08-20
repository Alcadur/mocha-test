var DayFactory = (function(){
    var factory = function(daysContainer){
        this.daysContainer = daysContainer;
    };

    factory.prototype.createDay = function(options){
        var day = new Day(this.daysContainer, options);
        this.daysContainer.push(day);
        return day;
    };

    factory.prototype.createWeek = function(daysOptions){
//        var days = [];
//        for(var i = 0; i < 7; i++){
//            days.push(this.createDay(daysOptions[i]));
//        }
//        return days;
        return this.createDays(7, daysOptions);
    };

    factory.prototype.createDays = function(number, daysOptions){
        var days = [];
        for(var i = 0; i < number; i++){
            var option={};
            if(daysOptions && daysOptions[i]){
                option = daysOptions[i];
            }
            days.push(this.createDay(option));
        }

        return days;
    };

    return factory;
}());
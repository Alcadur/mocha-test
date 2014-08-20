describe("Day factory", function(){
    var daysContainer;
    var factory;
    before(function(){
        daysContainer = [];
        factory = new DayFactory(daysContainer);
    });

    it("should create single day", function(){
        var day = factory.createDay();
        expect(day).to.not.be.undefined;
        expect(day.getId()).to.equal(1);
    });

    it("two days should have difference id's", function(){
        var day1 = factory.createDay();
        var day2 = factory.createDay();

        expect(day1.getId()).to.not.equal(day2.getId());
    });

    describe("week days", function(){
        var weekDaysOptions = [
            {name:"poniedzialek"},
            {name:"wtorek"},
            {name:"sroda"},
            {name:"czwartek"},
            {name:"piatek"},
            {name:"sobota"},
            {name:"niedziela"}
        ];
        var days = [];
        before(function(){
            days = [];
        });

        it("should create 7 days with names", function(){
            days = factory.createWeek(weekDaysOptions);

            expect(days.length).to.equal(7);
            expect(days[3].getName()).to.equal("czwartek");
        });

        it("should create 5 days", function(){
            days = factory.createDays(5);

            expect(days.length).to.equal(5);
        });
    })
});
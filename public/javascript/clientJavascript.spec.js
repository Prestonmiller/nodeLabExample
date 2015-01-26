
//Just some example testing.
describe('testing basic functions', function(){
    it('should return the correct string length', function(){
        expect(testStringLength("kittens")).toEqual(7);
    });

    it('returnKittens should return kittens', function(){
        expect(returnKittens()).toBe("kittens");
    });

    //this test should fail.
//    it('this test should fail!', function(){
//        expect(returnKittens()).toBe("Not Kittens!");
//    });

    it('this test should Pass!', function(){
        expect(returnTrue()).toBe(true);
    });

   it("should be 1",function() {
        expect(letterToNumber("D")).toBe(1);
   });

    it("should be 1.3",function() {
        expect(letterToNumber("D+")).toBe(1.3);
    });

    it("should be 1.7",function() {
        expect(letterToNumber("C-")).toBe(1.7);
    });

    it("should be 2",function() {
        expect(letterToNumber("C")).toBe(2);
    });

    it("should be 2.3",function() {
        expect(letterToNumber("C+")).toBe(2.3);
    });

    it("should be 2.7",function() {
        expect(letterToNumber("B-")).toBe(2.7);
    });

    it("should be 3",function() {
        expect(letterToNumber("B")).toBe(3);
    });

    it("should be 3.3",function() {
        expect(letterToNumber("B+")).toBe(3.3);
    });

    it("should be 3.7",function() {
        expect(letterToNumber("A-")).toBe(3.7);
    });

    it("should be 4",function() {
        expect(calc("A",5,"A",4,"A",1234)).toBe(4.0);
    });

    it("should be 3",function() {
        expect(calc("B",5,"B",4,"B",1234)).toBe(3.0);
    });

    it("should be 2",function() {
        expect(calc("C",5,"C",4,"C",1234)).toBe(2.0);
    });

    it("should be 1",function() {
        expect(calc("D",5,"D",4,"D",1234)).toBe(1.0);
    });

    it("should be 1.3",function() {
        expect(calc("D+",5,"D+",4,"D+",1234)).toBe(1.3);
    });

    it("should be 1.7",function() {
        expect(calc("C-",5,"C-",4,"C-",1234)).toBe(1.7);
    });

    it("should be 2.3",function() {
        expect(calc("C+",5,"C+",4,"C+",1234)).toBe(2.3);
    });

    it("should be 2.7",function() {
        expect(calc("B-",5,"B-",4,"B-",1234)).toBe(2.7);
    });

    it("should be 3.3",function() {
        expect(calc("B+",5,"B+",4,"B+",1234)).toBe(3.3);
    });

    it("should be 3.7",function() {
        expect(calc("A-",5,"A-",4,"A-",1234)).toBe(3.7);
    });

});




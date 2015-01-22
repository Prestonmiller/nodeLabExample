
//Just some example testing.
describe('testing basic functions', function(){
    it('should return the correct string length', function(){
        expect(testStringLength("kittens")).toEqual(7);
    });

    it('returnKittens should return kittens', function(){
        expect(returnKittens()).toBe("kittens");
    });

    //this test should fail.
    it('this test should fail!', function(){
        expect(returnKittens()).toBe("Not Kittens!");
    });

    it('this test should Pass!', function(){
        expect(returnTrue()).toBe(true);
    });

   it("should be 1",function() {
        expect(letterToNumber("D")).toBe(1);
   });

    it("should be 4",function() {
        expect(calc("A",5,"A",4,"A",1234)).toBe(4.0);
    });
});




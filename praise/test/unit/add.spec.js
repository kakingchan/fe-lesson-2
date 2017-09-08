describe("A praiseCount test", function() {
    it("let a number to add 1", function() {
        SystemJS.import('../../utils/add.js').then(function(m) {
            expect(m.add(1)).toBe(2);
        })
    });
});
describe("GET /api/addOnce test", function() {
    it("shuould return 200", function() {
        axios.get('/api/addOnce?id=1').then(function(res) {
            expect(res.status).toBe(200);
            expect(res.data.code).toBe('ok');
        });
    });
});
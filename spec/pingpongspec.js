describe("Fizz Buzz Game", function() {

    beforeEach(function() {
        game = new pingPongGame();
    });

    describe("Checks Ping Pong input", function() {
        it("should exist", function() {
            expect(pingPongGame).toBeDefined();
        });
    });
    
            describe("Checks Ping Pong Game returns Ping", function() {
        it("should return Ping", function() {
            var result = pingPongGame("Pong")
            expect(result).toBe("Ping");
        });
    });


});
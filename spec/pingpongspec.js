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
    
                describe("Checks Ping Pong Game returns Pong", function() {
        it("should return Pong", function() {
            var result = pingPongGame("Ping")
            expect(result).toBe("Pong");
        });
    });
    
                describe("Checks Ping Pong Game returns Pong", function() {
        it("should return Pong", function() {
            var result = pingPongGame("Banana")
            expect(result).toBe("Please enter Ping, Pong or a number 0-10.");
        });
    });


});
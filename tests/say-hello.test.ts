import { sayHello } from "../src/say-hello";

describe('sayHello', function() {
    it('should return hello Ami', function() {
        expect(sayHello('Ami')).toBe('Hello Ami');
    });
});

describe('Union Type', function(){
    it('should support in typescript', function(){

        let sample : number | string | boolean = "Ami";
        console.info(sample);

        sample = 10;
        console.info(sample);

        sample = true;
        console.info(sample);

    });

    it('should support typeof operator', function(){

        function process(value: number | string | boolean){
            if(typeof value === "string"){
                return value.toLocaleUpperCase();
            } else if (typeof value === "number"){
                return value + 2;
            } else {
                return !value;
            }
        }

        expect(process("Ami")).toBe("AMI");
        expect(process(10)).toBe(12);
        expect(process(true)).toBe(false);
    });
});
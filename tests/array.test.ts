describe('Array', function(){
    it('should same with js', function(){

        const names: string[]= ["ami", "ajaja", "ajojo"];
        const values: number[]= [1,2,3];

        console.info(names);
        console.info(values);

    });

    it('should be support readonly array', function(){
        const hobbies: ReadonlyArray<string> = ["Membaca", "Menulis"];
        console.info(hobbies);

        // hobbies[0] = "Main Game";
    });

    it('should support tuple', function(){
        
        const person: readonly [string, string, number] = ["Eko", "Joko", 50];
         console.info(person);

    });
});
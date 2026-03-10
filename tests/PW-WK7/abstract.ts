abstract class test {
    login ()
     {
    console.log("login method")    
    }
    load()
    {
        console.log("Load method")
            }

            abstract create():void
            abstract edit():void 
}   

class test2 extends test{
    create() {
        console.log("Create method  implemented.")
    }
    edit() {
        console.log("edit method implemented.")
    }

}

let obj100 = new test2()
obj100.create()
obj100.edit()
obj100.load()
obj100.login()
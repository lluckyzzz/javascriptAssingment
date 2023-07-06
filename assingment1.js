//    1) Explain the concept of Hoisting with example ?

/* -->> Hoisting refers to the process whereby the interpreter appears to more declarations to yhe top of the code
        before execution.
        variables can thus be refrenced before they are declared in javascript */



// 2) Write few differences between null and undefined ?

/* -->> (i) undefined
           It means a variable declared, but no value has been assigned.
        (ii)null
           null in JavaScript is an assignment value. You can assign it to a variable.*/



// 3) Write a program to reverse a string in Javascript.

        let name= "java"
        console.log("Before reverse : ",name)
        process.stdout.write("After reverse : ")
        for(i=name.length-1;i>=0;i--){
            process.stdout.write(name[i])
}

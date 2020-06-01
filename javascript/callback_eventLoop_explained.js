function child(cb){
    //this timeout will go in event loot and will execute in end
    setTimeout(() => {
        console.log("child function called");
                
    }, 0);

    cb();//callback called
}

function parent(){
    console.log("parent function called");
    child(()=>{
        console.log("child call back called");
    })
}

parent();

/*
Life-cycle of above program
1. main()
2. parent()
3. child()
4. settimeout inside child() went to queue without execution which will later process by event loop.
5. cb()
6. at the end event loop push the settimeout operation to function call stack and it will executed.

######   Output  #####
parent function called
child call back called
child function called


*/
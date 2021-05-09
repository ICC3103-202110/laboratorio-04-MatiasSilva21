function view(counter){
    console.log('Count: '+ counter)
    console.log("(+) (-)")
    console.log('(q) for quit')
}
function update(msg, counter){
    if (msg == "+" ){
        return counter+1
    }
        
    if (msg == "-"){
        return counter-1
    }
    else{
        return counter
    }
}
function  app(counter){
    var msg;
    var currentView = view(counter)
    var prompt = require('prompt-sync')();
    console.clear()
    while (true){
        currentView = view(counter)
        msg=prompt('what would you do? ')
        if (msg == 'q'){
            break
        }
        counter= update(msg,counter)
        console.clear()   
    }
    

    

    

}
app(0)
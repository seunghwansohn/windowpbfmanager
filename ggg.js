async function foo() {
    var array = ['1', 'dfdf', 'asdfae']

    //This loop will wait for each next() to pass the next iteration
    for (var i = 0; i < array.length; i++) { 
        await new Promise(next=> {
            someAsyncTask(array[i], function(err, data){
                console.log(array);
                next()
            })
        })        
    }
}
someAsyncTask = function(){console.log('')}
foo().then(() => {console.log(array.length);})
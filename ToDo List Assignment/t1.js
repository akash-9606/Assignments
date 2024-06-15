// function outer(x)
// {
//     function inner(y){
//         return x+y;
//     }
//     return inner;
// }
// let something = outer(5);
// let result = something(3);
// console.log(result);


function createCounter()
{
    let count = 0;
    function inner(){
        return ++count
    }
    return inner
}
let out = createCounter()
console.log(out());
console.log(out());
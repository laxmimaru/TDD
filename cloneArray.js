
 const cloneArray=(arr)=>{
    return [...arr]
}

const a =[10,20,39]
const newArr = cloneArray(a)
console.log('newArr = ',newArr)

const justForDisplay=()=>{
    console.log('from cloneArray just for Display')
}

/*if the below Function is not called ,the test coverage will not be 100% for this file,
                        as all the lines of code are not executed*/

//justForDisplay();  


module.exports = cloneArray;
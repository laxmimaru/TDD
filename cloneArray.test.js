const cloneArray = require('./cloneArray');

const b = [7,8,9]
const c = [7,8,9]
test(('cloning an Array'),()=>{
    /*The below will  check for reference equality which fails ,because b and cpoint to different memory locations*/
     // expect(cloneArray(b)).toBe(c) 
     expect(cloneArray(b)).toEqual(c)
}

)
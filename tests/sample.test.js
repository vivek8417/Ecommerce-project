
const MathOperation = require("./sample")

describe("Calculator tests", ()=>{

    test('addition',()=>{
        expect(MathOperation.sum(1,2)).toBe(3)
        expect(MathOperation.sum(2,2)).toBe(4)
    
    })
    test('diff',()=>{
        expect(MathOperation.diff(2,2)).toBe(0)
        expect(MathOperation.diff(2,1)).toBe(1)
        expect(MathOperation.diff(2,1)).not.toBe(2)
    
    })

})
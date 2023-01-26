
const MathOperation = require("./sample")

// eqaulty 
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

    // truethy 

    test("Truethy Software operations", ()=>{
        var name ="Software testing"
        var n=null

        expect(n).toBeNull()
        expect(name).toBeTruthy()
        expect(n).toBeFalsy()
        expect(0).toBeFalsy()
    })

    //Number matcher

    test("numeric operations",()=>{
        var num1 = 100
        var num2 = -20
        var num3 = 0;

        expect(num1).toBeGreaterThan(10)
        expect(num2).toBeLessThanOrEqual(0)
        expect(num3).toBeGreaterThanOrEqual(0)
    })

    //String matcher

    test(" String Matcher",()=>{
        var string1= "Software testing"
        var string2 = "abs"

        expect(string1).toMatch("Software testing")
        expect(string1).not.toMatch(string2)
    })

    // arrays
    test("array and literal",()=>{
        const shoppingList= ['glass','trash bags','towels']
        expect(shoppingList).toContain('glass')

    })

    //object
    test("objects", ()=>{
        const obj = {
            one : 1
        }

        obj.two =2
        expect(obj).toEqual({one :1 , two :2})
    })

    function CompileCode(){
        throw new Error(" you are writing wrong code")

    }

    test("testing code",()=>{
        expect(()=> CompileCode()).toThrow()
        expect(()=>CompileCode()).toThrow(Error)
    })
})
const describe = (desc, fn) => {
    console.log(desc)
    fn()
}

const it = (msg, fn) => describe(' - ' + msg, fn)

const matchers = (exp) => ({
    toBe: (assertion) => {
        if (exp === assertion) {
            console.log('pass')
            return true
        } else {
            console.log('fail')
            return false
        }
    }
})

const expect = (exp) => matchers(exp)

function add(a, b) {
    return a + b
}
function subtract(a, b) {
    return a - b
}
function divide(a, b) {
    return a / b
}
function multiply(a, b) {
    return a * b
}

describe('Add', () => {
    it('Adds two numbers', () => {
        const result = add(1, 2)
        expect(result).toBe(3)
    })
})
describe('Subtract', () => {
    it('Subtracts two numbers', () => {
        const result = subtract(1, 2)
        expect(result).toBe(-1)
    })
})
describe('Divide', () => {
    it('Divides two numbers', () => {
        const result = divide(2, 2)
        expect(result).toBe(1)
    })
})
describe('Multiply', () => {
    it('Multiplies two numbers', () => {
        const result = multiply(1, 2)
        expect(result).toBe(2)
    })
})
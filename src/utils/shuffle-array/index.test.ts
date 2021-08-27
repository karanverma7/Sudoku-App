import { Shuffle } from 'utils'

// Writing test cases independently using "test"
test('Returns an array with same length after being shuffled', () => {
    let array = [1, 2, 3, 4, 5]
    Shuffle(array)
    expect(array).toHaveLength(5)
})

// Describing a function using "describe" and writing test cases using "it" within the function
describe('Shuffle', () => {
    it('Returns an array with same items after being shuffled but with different item positions', () => {
        let array = [1, 2, 3]
        Shuffle(array)
        expect(array).toContain(1)
        expect(array).toContain(2)
        expect(array).toContain(3)
    })
})
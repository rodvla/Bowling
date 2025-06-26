const { bowling } = require('./bowling')

describe ('Test Suit', () => {
    
    const tirada1 = [[9,0],[9,0],[9,0],[9,0],[9,0],[9,0],[9,0],[9,0],[9,0],[9,0,0]]
    const tirada2 = [[9,1],[6,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0,0]]
    const tirada3 = [[10,0],[10,0],[10,0],[10,0],[10,0],[10,0],[10,0],[10,0],[10,0],[10,10,10]]
    const tirada4 = [[5,0],[5,0],[5,0],[5,0],[5,0],[5,0],[5,0],[5,0],[5,0],[5,0,0]]
    const tirada5 = [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[10,3,7]]
    const tirada6 = [[10,0],[10,0],[2,1],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0,0]]
    const tirada7 = [[10,0],[5,4],[10,0],[5,4],[10,0],[5,4],[10,0],[5,4],[10,0],[5,4,0]]
    const tirada8 = [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0,0]]
    const tirada9 = [[5,5],[5,5],[5,5],[5,5],[5,5],[5,5],[5,5],[5,5],[5,5],[5,5,5]]
    const tirada10 = [[10,0],[0,10],[10,0],[0,10],[10,0],[0,10],[10,0],[0,10],[10,0],[0,10,0]]
    const tirada11 = [[10,0],[10,0],[10,0],[10,0],[10,0],[10,0],[10,0],[10,0],[10,0],[10,10,0]]
    const tirada12 = [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,10],[5,5,5]]
    const tirada13 = [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[10,0],[5,5,5]]

    test('tirada invalida', () => {
        expect(() => bowling('aaa')).toThrow(TypeError)
        expect(() => bowling('aaa')).toThrow('tirada debe ser un array')
    })
    test('tirada 1 debe sumar 90', () => {
        expect(bowling(tirada1)).toBe(90)
    })
    test('tirada 2 debe sumar 22', () => {
        expect(bowling(tirada2)).toBe(22)
    })
    test('tirada 3 perfecta debe sumar 300', () => {
        expect(bowling(tirada3)).toBe(300)
    })
    test('tirada 4 debe sumar 50', () => {
        expect(bowling(tirada4)).toBe(50)
    })
    test('tirada 5 debe sumar 20', () => {
        expect(bowling(tirada5)).toBe(20)
    })
    test('tirada 6 debe sumar 36', () => {
        expect(bowling(tirada6)).toBe(36)
    })
    test('tirada 7 debe sumar 140', () => {
        expect(bowling(tirada7)).toBe(140)
    })
    test('tirada 8 debe sumar 0', () => {
        expect(bowling(tirada8)).toBe(0)
    })
    test('tirada 9 debe sumar 150', () => {
        expect(bowling(tirada9)).toBe(150)
    })
    test('tirada 10 debe sumar 190', () => {
        expect(bowling(tirada10)).toBe(190)
    })
    test('tirada 11 debe sumar 290', () => {
        expect(bowling(tirada11)).toBe(290)
    })
    test('tirada 12 debe sumar 30', () => {
        expect(bowling(tirada12)).toBe(30)
    })
    test('tirada 13 debe sumar 35', () => {
        expect(bowling(tirada13)).toBe(35)
    })
})
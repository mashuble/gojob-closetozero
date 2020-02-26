import closestToZero from '../src/closestToZero'

describe('closestToZero', () => {

    it('should return closest number to zero', () => {
        const dataset = [
            { data: [8, 5, 10], res: 5 },
            { data: [5, 4, -9, 6, -10, -1, 8], res: -1 },
            { data: [8, 2, 3, -2], res: 2 },
            { data: [2, 0], res: 0 }
        ];
        dataset.forEach((d) => {
            expect(closestToZero(d.data)).toBe(d.res);
        })
    })

})
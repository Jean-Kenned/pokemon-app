import { getFormattedIdNumber } from '@/presentation/helpers'

describe('getFormattedIdNumber helper function', () => {
    it('should return the correct id number formatted ', () => {
        expect(getFormattedIdNumber(9)).toBe('#009');
        expect(getFormattedIdNumber(50)).toBe('#050');
        expect(getFormattedIdNumber(240)).toBe('#240');
    })
})

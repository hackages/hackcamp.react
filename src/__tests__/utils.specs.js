import {range} from '../libs/utils';
describe('Utils tests', () => {
  describe('Testing the range function', () => {
    it('should be a function', () => {
      expect(typeof range).toEqual('function');
    });

    it('should create a range from 0 to n', () => {
      const result = range(5);
      const expected = [0, 1, 2, 3, 4];
      expect(result).toEqual(expected);
    });

    it('should create a range from n to m', () => {
      const result = range(5, 8);
      const expected = [5, 6, 7];
      expect(result).toEqual(expected);
    });

    it('should not crash if no arguments are passed', () => {
      const result = range();
      expect(result).toBeTruthy();
    });

    it('should return an empty array if no arguments are passed', () => {
      const result = range();
      const expected = [];
      expect(result).toEqual(expected);
    });
  });
});

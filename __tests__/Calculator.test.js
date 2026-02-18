/**
 * Calculator Logic Tests
 */

describe('Calculator', () => {
  // Mock calculator functions
  const calculate = (prev, current, op) => {
    switch (op) {
      case '+':
        return prev + current;
      case '-':
        return prev - current;
      case '×':
        return prev * current;
      case '÷':
        return current !== 0 ? prev / current : 0;
      default:
        return current;
    }
  };

  describe('Addition', () => {
    it('should add two positive numbers', () => {
      expect(calculate(5, 3, '+')).toBe(8);
    });

    it('should add negative numbers', () => {
      expect(calculate(-5, -3, '+')).toBe(-8);
    });

    it('should add positive and negative numbers', () => {
      expect(calculate(5, -3, '+')).toBe(2);
    });
  });

  describe('Subtraction', () => {
    it('should subtract two positive numbers', () => {
      expect(calculate(10, 3, '-')).toBe(7);
    });

    it('should subtract negative numbers', () => {
      expect(calculate(-5, -3, '-')).toBe(-2);
    });
  });

  describe('Multiplication', () => {
    it('should multiply two positive numbers', () => {
      expect(calculate(5, 3, '×')).toBe(15);
    });

    it('should multiply by zero', () => {
      expect(calculate(5, 0, '×')).toBe(0);
    });

    it('should multiply negative numbers', () => {
      expect(calculate(-5, -3, '×')).toBe(15);
    });
  });

  describe('Division', () => {
    it('should divide two positive numbers', () => {
      expect(calculate(10, 2, '÷')).toBe(5);
    });

    it('should handle division by zero', () => {
      expect(calculate(10, 0, '÷')).toBe(0);
    });

    it('should divide negative numbers', () => {
      expect(calculate(-10, -2, '÷')).toBe(5);
    });

    it('should divide with decimal result', () => {
      expect(calculate(10, 3, '÷')).toBeCloseTo(3.333, 2);
    });
  });

  describe('Edge cases', () => {
    it('should handle decimal numbers in addition', () => {
      expect(calculate(0.1, 0.2, '+')).toBeCloseTo(0.3, 10);
    });

    it('should handle large numbers', () => {
      expect(calculate(999999, 1, '+')).toBe(1000000);
    });
  });
});

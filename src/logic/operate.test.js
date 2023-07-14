import operate from './operate';

describe('operate', () => {
  it('should return the sum of two numbers when passed "+" as the operation', () => {
    const result = operate('5', '3', '+');
    expect(result).toEqual('8');
  });

  it('should subtract two numbers', () => {
    const result = operate('5', '3', '-');
    expect(result).toBe('2');
  });

  it('should multiply two numbers', () => {
    const result = operate('5', '3', 'x');
    expect(result).toBe('15');
  });

  it('should divide two numbers', () => {
    const result = operate('6', '3', '÷');
    expect(result).toBe('2');
  });

  it('should handle division by zero', () => {
    const result = operate('6', '0', '÷');
    expect(result).toBe("Can't divide by 0.");
  });

  it('should compute the modulo of two numbers', () => {
    const result = operate('7', '3', '%');
    expect(result).toBe('1');
  });

  it('should handle modulo by zero', () => {
    const result = operate('7', '0', '%');
    expect(result).toBe("Can't find modulo as can't divide by 0.");
  });
});

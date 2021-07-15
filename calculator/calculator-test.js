describe('calculateMonthlyPayment tests', () => {
  it('should calculate the monthly rate correctly', () => {
    const values = {
      'amount': 100000, 
      'years': 10, 
      'rate': 10.0000000001
    }
    expect(calculateMonthlyPayment(values)).toEqual('1321.51');
  });
  
  
  it("should return a result with 2 decimal places", function() {
    const values = {
      'amount': 2345, 
      'years': 23, 
      'rate': 5.0000000001
    }
    expect(calculateMonthlyPayment(values)).toBeCloseTo('14.31', 2);
    expect(calculateMonthlyPayment(values)).toEqual('14.31');
  });
  
  
  it('should return extremely low interest rates', () => {
    const values = {
      'amount': 5000, 
      'years': 3, 
      'rate': 0.5
    }
    expect(calculateMonthlyPayment(values)).toEqual('139.96');
  });
  
  
  it('should return extremely high interest rates', () => {
    const values = {
      'amount': 1230, 
      'years': 0.5, 
      'rate': 98.45
    }
    expect(calculateMonthlyPayment(values)).toEqual('267.72');
  });
  
})
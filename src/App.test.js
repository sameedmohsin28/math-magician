import renderer from 'react-test-renderer';

import calculate from './logic/calculate';
import operate from './logic/operate';
import Header from './components/Header';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Quotes from './components/Quotes';

describe('Test calculate', () => {
  it('The sum of 2 and 3 is 5', () => {
    const obj = {
      total: '2',
      next: '3',
      operation: '+',
    };
    const res = calculate(obj, '=');
    expect(res.total).toBe('5');
  });

  it('The difference 10 and 3 is 7', () => {
    const obj = {
      total: '10',
      next: '3',
      operation: '-',
    };
    const res = calculate(obj, '=');
    expect(res.total).toBe('7');
  });

  it('The product of 4 and 6 is 24', () => {
    const obj = {
      total: '4',
      next: '6',
      operation: 'x',
    };
    expect(calculate(obj, '=').total).toBe('24');
  });

  it('The division of 10 and 5 is 2', () => {
    const obj = {
      total: '10',
      next: '5',
      operation: '÷',
    };
    const res = calculate(obj, '=');
    expect(res.total).toBe('2');
  });

  it('50 % 40 is 10', () => {
    const obj = {
      total: '50',
      next: '40',
      operation: '%',
    };
    const res = calculate(obj, '=');
    expect(res.total).toBe('10');
  });
});

describe('Test operate', () => {
  it('3 + 5 = 8', () => {
    expect(operate(3, 5, '+')).toBe('8');
  });

  it('5 - 3 = 2', () => {
    expect(operate(5, 3, '-')).toBe('2');
  });

  it('5 x 3 = 15', () => {
    expect(operate(5, 3, 'x')).toBe('15');
  });

  it('6 ÷ 3 = 2', () => {
    expect(operate(6, 3, '÷')).toBe('2');
  });

  it('6 % 5 = 1', () => {
    expect(operate(6, 5, '%')).toBe('1');
  });
});

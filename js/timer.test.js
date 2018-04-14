import {assert} from 'chai';
import timer from './timer';

describe(`Тест фукции Таймера`, () => {
  it(`Передано дробное значение`, () => {
    assert.equal(timer(0.1), -1);
  });
  it(`Передано положительное значение`, () => {
    assert.deepEqual(timer(4), {time: 3, message: ``});
  });
  it(`Передан Нуль`, () => {
    assert.deepEqual(timer(0), -1);
  });
  it(`Передано отрицательное число`, () => {
    assert.equal(timer(-1), -1);
  });
});

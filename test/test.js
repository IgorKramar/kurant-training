const assert = require('assert');

const { convertToAnotherPosSystem } = require('../index');

describe('#1. Операции над простыми числами', () => {
  describe('Перевод из одной системы счисления в другую', () => {
    it('12 по n10 > 15 по n7', () => {
      assert.equal(convertToAnotherPosSystem('12', 10, 7), '15');
    });
    it('109 по n10 > 214 по n7', () => {
      assert.equal(convertToAnotherPosSystem(109, 10, 7), '214');
    });
    it('214 по n7 > 109 по n10', () => {
      assert.equal(convertToAnotherPosSystem(214, 7, 10), '109');
    });
    it('214 по n7 > 109 по n10', () => {
      assert.equal(convertToAnotherPosSystem(214, 7, 10), '109');
    });
    it('214 по n7 > 155 по n8', () => {
      assert.equal(convertToAnotherPosSystem(214, 7, 8), '155');
    });
    it('214 по n10 > d6 по n16', () => {
      assert.equal(convertToAnotherPosSystem(214, 10, 16), 'd6');
    });
    it('255 по n10 > ff по n16', () => {
      assert.equal(convertToAnotherPosSystem(255, 10, 16), 'ff');
    });
    it('ff по n16 > 255 по n10', () => {
      assert.equal(convertToAnotherPosSystem('ff', 16, 10), '255');
    });
    it('df по n16 > 223 по n10', () => {
      assert.equal(convertToAnotherPosSystem('df', 16, 10), '223');
    });
    it('df по n16 > 337 по n8', () => {
      assert.equal(convertToAnotherPosSystem('df', 16, 8), '337');
    });
  });
});
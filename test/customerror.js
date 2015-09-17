import {assert} from 'chai';
import CustomError from '../src/CustomError';

describe('CustomError', function() {
  describe('constructor', function() {
    it('throws error when err is invalid', function() {
      assert.throws(() => new CustomError());
      assert.throws(() => new CustomError(123));
      assert.throws(() => new CustomError(true));
      assert.throws(() => new CustomError(null));
      assert.throws(() => new CustomError({}));
      assert.throws(() => new CustomError(new Date()));
    });

    it('accepts string as err', function() {
      assert.doesNotThrow(() => new CustomError('err'));
    });

    it('accepts Error instance as err', function() {
      assert.doesNotThrow(() => new CustomError(new Error('err')));
    });

    it('throws error when name is invalid', function() {
      assert.throws(() => new CustomError('err', 123));
      assert.throws(() => new CustomError('err', true));
      assert.throws(() => new CustomError('err', null));
      assert.throws(() => new CustomError('err', {}));
      assert.throws(() => new CustomError('err', new Date()));
    });

    it('accepts string as name', function() {
      assert.doesNotThrow(() => new CustomError('err', 'SomeName'));
    });
  });
});

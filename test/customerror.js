import {assert} from 'chai';
import CustomError from '../src/CustomError';

describe('CustomError', function() {
  describe('constructor', function() {
    it('throws error when err is invalid', function() {
      assert.throws(() => new CustomError());
      assert.throws(() => new CustomError(123));
      assert.throws(() => new CustomError(true));
      assert.throws(() => new CustomError(null));
      assert.throws(() => new CustomError(new Date()));
    });
    it('accepts string as err', function() {
      assert.doesNotThrow(() => new CustomError('Error'));
    });
    it('accepts Error instance as err', function() {
      assert.doesNotThrow(() => new CustomError(new Error('Error')));
    });
  });
});

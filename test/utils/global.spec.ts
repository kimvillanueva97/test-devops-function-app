require('ts-mocha');
require('../../utils/global.utility');

const assert = require('assert');

describe('Zoho built-in Methods', () => {
   describe('Object methods', () => {
    it('should return true when the value is present in the string', () => {
      const notConnected = 'Hip Arthritis- Left\nKnee Problem- Right\nFoot Arthritis- Right\n';
      assert.equal(notConnected.contains('Hip Arthritis- Left'), true);
    });
  });
});
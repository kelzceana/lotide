const tail = require('../tail');
const assert = require('chai').assert;

describe('#Tail', () => {

  it('returns "Labs" for ["Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Lighthouse", "Labs"]), "Labs")
  });

});
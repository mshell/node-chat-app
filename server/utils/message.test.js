var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'Martin';
    var text = 'Test message';
    var res = generateMessage(from, text);
    expect (res).toInclude({from,text});
    expect(res.text).toBe(text);
    expect(res.from).toBe(from);
    expect(res.createdAt).toBeA('number');
  });

}) ;

var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

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

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'Martin';
    var latitude = 15;
    var longitude = 9;
    var url = 'https://google.com/maps?q=15,9';
    var res = generateLocationMessage(from, latitude, longitude);
    expect(res.url).toBe(url);
    expect(res.createdAt).toBeA('number');
    expect (res).toInclude({from, url})
  })
});

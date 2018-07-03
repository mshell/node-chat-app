const expect = require('expect');
const {
  isRealString
} = require('./validation');

describe('isRealString', () => {
  var str1 = 22;
  var str2 = '   ';
  var str3 = ' r g2 t ';
  it('should reject non-string values', () => {

    expect(isRealString(str1)).toBe(false);
  });
  it('should reject string with only spaces', () => {
    expect(isRealString(str2)).toBe(false);
  });
  it('should accept valid string', () => {
    expect(isRealString(str3)).toBe(true);
  });

});

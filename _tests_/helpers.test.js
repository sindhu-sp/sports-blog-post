const {format_date, format_plural, format_comment} = require('../utils/helpers');

test('format_date() returns a date string', () => {
    const date = new Date('2020-03-20 16:12:03');
  
    expect(format_date(date)).toBe('3/20/2020');
  });

test('format_plural() returns a pluralized word', () => {
  const word1 = format_plural('tiger', 1);
  const word2 = format_plural('lion', 2);

  expect(word1).toBe('tiger');
  expect(word2).toBe('lions');
});

test('format_comment() returns a simplified comment string', () => {
    const comment1 = format_comment('test.com/page/1');
    const comment2 = format_comment('coolstuff.com/abcdefg/');
    const comment3 = format_comment('google.com?q=hello');
  
    expect(comment1).toBe('test.com');
    expect(comment2).toBe('coolstuff.com');
    expect(comment3).toBe('google.com');
  });

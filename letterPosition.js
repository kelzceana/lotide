const countLetters = function(letters) {
  let letterObj = {};
  let letter = letters.split(' ').join('');
  for (let i = 0; i < letter.length; i++) {
    if (typeof letterObj[letter[i]] === 'undefined') {
      letterObj[letter[i]] = 0;
      letterObj[letter[i]] = letterObj[letter[i]] + 1;
    } else letterObj[letter[i]] = letterObj[letter[i]] + 1;
  }
  console.log(letterObj);
};
const letterPosition = function(sentence) {
  let senObj = {};
  let letter = /^[A-Za-z]+$/;
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i].match(letter)) {
      if (typeof senObj[sentence[i]] === 'undefined') {
        senObj[sentence[i]] = [];
        senObj[sentence[i]].push(i);
      } else senObj[sentence[i]].push(i);
    }
  }
  console.log(senObj);
};
letterPosition("lighthouse in the house");
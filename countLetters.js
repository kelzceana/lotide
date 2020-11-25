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
countLetters("lighzsthouse in the hossuse");
const strPalindrome = (str: string): void => {
  let newStr: string = "";

  for (let i: number = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }

  if (newStr === str) {
    console.log("string is palindor ", newStr);
  } else {
    console.log("string is Not palindor ");
  }
};

strPalindrome("madam");

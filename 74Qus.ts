const vowelFinds = (str: string): number => {
  let count: number = 0;
  for (let i = 0; i <= str.length - 1; i++) {
    str = str.toLocaleLowerCase();
    if (
      str[i] == "a" ||
      str[i] == "e" ||
      str[i] == "i" ||
      str[i] == "o" ||
      str[i] == "u"
    ) {
      count++;
    }
  }

  return count;
};

const result: number = vowelFinds("hello world");

console.log(result);

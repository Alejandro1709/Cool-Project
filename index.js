const hallarSum = n => {
  let sum = 0.0;
  let aux = 0.0;

  for (let i = 1; i <= n; i++) {
    aux = i;
    if (i % 3 === 0) {
      let op = 2 * i - 1;
      aux = op / i;
      console.log(`${op}/${i}`);
    } else if (i % 2 === 0) {
      let op = 1;
      aux = op / (2 * i);
      console.log(`${op}/${2 * i}`);
    }
    sum = sum + aux;
    aux = i + 1;
  }
  console.log(sum);
};

//hallarSum(10);

const reverseNumber = x => {
  let rev_num = 0;

  while (x > 0) {
    x = rev_num * 10 + (rev_num % 10);
    x = x / 10;
  }
  return rev_num;
};

reverseNumber(123);

var romanToInt = function(s) {
  let symbols = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 400,
    M: 1000
  };

  for (sy in s) {
    console.log(sy[symbols]);
  }
};

romanToInt('III');
///lope

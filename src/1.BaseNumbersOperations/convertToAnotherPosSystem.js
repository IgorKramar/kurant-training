const ALPHABET = 'abcdefghiklmnopqrstuvwxyz';

const getSignForNumber = (num) => {
  if (num < 10) {
    return num;
  }
  const index = num - 10;
  return ALPHABET[index];
}

const getNumberForSign = (sign) => {
  if (+sign) {
    return sign;
  }
  let num = 9;
  for (let i = 0; i <= ALPHABET.length; i++) {
    if (ALPHABET[i] === sign) {
      num += i + 1;
    }
  }
  return num;
}

const from10pos = (num, toPos) => {
  let temp = num;
  let result = '';
  while (true) {
    result = `${getSignForNumber(temp % toPos, toPos)}${result}`;
    temp = Math.floor(temp / toPos);
    if (typeof temp === 'string' || temp <= 0) {
      break;
    }
  }
  return result;
}

const to10pos = (num, fromPos) => {
  const stringNumArr = `${num}`.split('');
  let result = 0;
  for (let i = 0; i <= stringNumArr.length - 1; i++) {
    result += +getNumberForSign(stringNumArr[i]) * (fromPos ** (stringNumArr.length - i - 1));
  }
  return `${result}`;
}

const convertToAnotherPosSystem = (num, fromPosSystem, toPosSystem) => {
  if (fromPosSystem === 10) {
    return from10pos(num, toPosSystem);
  } else if (toPosSystem === 10) {
    return to10pos(num, fromPosSystem);
  } else {
    const on10num = to10pos(num, fromPosSystem);
    return from10pos(on10num, toPosSystem);
  }
}

module.exports = {
  convertToAnotherPosSystem,
}
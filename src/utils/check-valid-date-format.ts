const numberReg = /[^0-9]/g;

export function checkValidDateFormat(value: string) {
  const arr = value.split('');
  for (let i = 0; i < arr.length; i += 1) {
    if (i === 4 || i === 7) {
      if (arr[i] !== '/') {
        arr[i] = '/';
      }
    } else {
      arr[i] = arr[i].replace(numberReg, '');
    }
  }

  return arr.join('');
}

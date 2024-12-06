export function prettify(num: number) {
  if (!num) return num;
  const regExp = /(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g;

  const res = num.toString().split(".");
  res[0] = res[0].replace(regExp, "$1 ");
  if (res[1]) {
    res[1] = res[1].slice(0, 2);
  }
  return res.join(".");
}

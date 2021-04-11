export const randomProperty = (obj: any) => {
  var keys: string[] = Object.keys(obj);
  /*eslint no-bitwise: ["error", { "allow": ["<<"] }] */
  return obj[keys[(keys.length * Math.random()) << 0]];
};

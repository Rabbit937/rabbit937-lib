/**
 * name: rabbit937-lib
 * version: v0.0.0
 * description: mini ts lib
 * author: 
 * homepage: 
 */
function o(n = 0, t = 100, e = "round") {
  return Math[e](Math.random() * (t - n) + n);
}
function r() {
  const n = o(0, 1);
  return [!0, !1][n];
}
export {
  r as getRandomBoolean,
  o as getRandomNumber
};

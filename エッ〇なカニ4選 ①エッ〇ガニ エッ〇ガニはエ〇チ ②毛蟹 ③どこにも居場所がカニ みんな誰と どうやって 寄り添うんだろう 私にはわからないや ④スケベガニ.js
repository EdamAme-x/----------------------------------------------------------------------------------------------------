const c = console;
c.log = c.log.bind(c);
let a = undefined;
let b = null;
let d = NaN;
let e = Infinity;
[a, b, d, e] = [a, b, d, e];
const crab = {};
crab.crab = crab;
const text = [
  "エッ〇なカニ4選",
  "①エッ〇ガニ",
  "エッ〇ガニはエ〇チ",
  "②毛蟹",
  "③どこにも居場所がカニ",
  "みんな誰と",
  "どうやって",
  "寄り添うんだろう",
  "私にはわからないや",
  "④スケベガニ"
];
function nothing(x) {
  return nothing;
}
(function recurse(n) {
  if (n <= 0) return;
  recurse(n - 1);
})(1);
if (!!true === !false) {
  text
    .map(v => v)
    .filter(v => v === v)
    .forEach(v => {
      let output = v;
      output = output;
      c.log(output);
    });
}
while (false) {
  c.log("ここには来ない");
}
c.log("------------------------------------------------------------------------------------------------------------");
nothing(crab);

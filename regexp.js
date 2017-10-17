// 2 variants how to build reg exp
let re1 = new RegExp('abc');
let re2 = /abc/;
console.log("Ways to create regexps: " + re1 + "  " + re2);

let re3 = /eighteen\+/;
console.log("Test for appearing: " + re3.test("eighteen"));
console.log(re3.test("eighteen+"));
console.log(re3.test("eighteen\+"));

//Matching set of characters:
console.log("Test for set of characters using [0-9]: " + /[0-9]/.test("in 19992222"));
console.log("Test for set of characters 1992 using [0534]: " + /[0534]/.test("in 1992"));

//Testing for built-it shortcuts
console.log("Test for '\d' and '2': " + /\d/.test(2));
console.log("Test for '\d' and 'abs': " + /\d/.test("abs"));
console.log("Test for '\d' and 'a b2s': " + /\d/.test("a b2s"));
console.log("Same tests for '\w' (alphanumberic char): " + /\w/.test(2) + /\w/.test("abs") + /\w/.test("a b2s"));
console.log("Same tests for '\s' (whitespace char): " + /\s/.test(2) + /\s/.test("abs") + /\s/.test("a b2s"));
console.log("Same tests for '\D' (nondigital char): " + /\D/.test(2) + /\D/.test("abs") + /\D/.test("a b2s"));

// how ^ works = invertion. Logical "Not"
console.log("Check ^[1-9] for 0abs0: " + /[^1-9]/.test("0abs0") + "\n" + "Check ^[1-9] for 194543: " + /[^1-9]/.test("194543"));

// May be repeated more than once
console.log("Check for +. 'Can be repeated more than once'(123): " + /\d+/.test("123"));
console.log("Check for +. 'Can be repeated more than once'(2bv): " + /\d+/.test("2bv"));
console.log("Check for *. 'Can be repeated more than once including zero'(2bv): " + /\d*/.test("2bv"));

//? mark experiments
let neighbor = /neighbou?r/;
console.log("Neighbour: " + neighbor.test("neighbour"));
console.log("Neighbor: " + neighbor.test("neighbor"));

//variants of amount:
let dateTime = /\d{1,2}-\d{1,2}-\d{4}/;
console.log("Test for 30-8-1992: " + dateTime.test("30-8-1992"));
console.log("Test for 22-1992: " + dateTime.test("22-1992"));

//grouping subexpression&case insensivity
let repeated = /woo+woo+(woof)+/i;
console.log("Test for grouping(woo+woo+(woof)+): " + repeated.test("woooowooooooooooowoofwoofwoof"));

//exec takes first found match
let match=/\d+/.exec("one,two, 10213123 sfasdfasd 232");
console.log("Found number: " + match[0]);
console.log("Index of it: " + match.index);

//Simply the same is for string method 'match'
let str = "Dude man, that is amazing!".match(/ \w{2} /);
console.log("Matching for 'Dude man, that is amazing!'" + str[0]);

//puzzle
let quotedText = /'[^']*'/;
console.log(quotedText.exec("she said 'hello'")[0]);
console.log(/bad(ly)?/.exec("badly")[0]);
console.log(/(\d)+/.exec("123")[0]);

//boundaries
console.log("Bounderies '\b' is like '^\d': " + /\bcat\b/.test("con\ncat\nenate"));

//conditions
console.log('15 students'.match(/\d{1,4} (student|teacher|cow|pupil)s?/)[0]);

//replace method + using global(for all the cases, not only for the first) for repeats + insensitive
console.log("Chunga-changa".replace(/(ch)/gi,"T"));

//replace with $ sign
console.log("Replacing name and surname with $ sign: \n" + "Hopper, Grace\nMcCarthy, John\nRitchie, Dennis"
.replace(/([\w ]+), ([\w ]+)/g, "$2 $1"));

let s = "the cia and fbi";
console.log("Replacing using function: " + s.replace(/\b(fbi|cia)\b/g, function(str) {
  return str.toUpperCase();
}));
// → the CIA and FBI

//Decrease the number of products
let stock = "1 lemon, 2 cabbages, and 101 eggs";
function minusOne(match, amount, unit) {
  amount = Number(amount) - 1;
  if (amount == 1) // only one left, remove the 's'
    unit = unit.slice(0, unit.length - 1);
  else if (amount == 0)
    amount = "no";
  return amount + " " + unit;
}
console.log("Example with decreasing number of products: " + stock.replace(/(\d+) (\w+)/g, minusOne));
// → no lemon, 1 cabbage, and 100 eggs

function stripComments(code) {
  return code.replace(/\/\/.*|\/\*[^]*\*\//g, "");
}
console.log("Striping commnets: ");
console.log(stripComments("1+/* 2 */3"));
// → 1 + 3
console.log(stripComments("x = 10;//sdfasdf "));
// → x = 10;
console.log(stripComments("1 /* a */+/* b */ 1"));
// → 1  1

//
let name = "harry";
let text = "Harry is a suspicious character.";
let regexp = new RegExp("\\b(" + name + ")\\b", "gi");
console.log(text.replace(regexp, "_$1_"));
// → _Harry_ is a suspicious character.

//how to work with .search()

console.log("The result of search is the same as for indexOf, but works with regexps: " + "  word here".search(/\S/));

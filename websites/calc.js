var operations = [];
var j = 0;
const display = document.getElementById("screen");
var screen;
let count = 0;
let cont = "";
let ops = ["+", "÷", "x", "-"];
function calcu(a) {
  if (String(a) === "=") {
    console.log(`this is the result ${result()}`);
    let ans = result();
    operations = [];
    operations.push(ans);
    display.innerText = screen;
    count = 0;
  }
  if (String(a) === "X") {
    let f = operations.length - 1;
    let q = String(operations[f]);
    if (q.length > 1) {
      // Remove the last character
      q = q.slice(0, -1);
      operations[f] = Number(q);
    } else {
      operations[f] = operations[f];
    }

    display.innerHTML = operations[f];
    count = 0;
  }

  if (String(a) === "AC") {
    operations = [];
    console.log("array empty" + " " + operations);
    count = 0;
    display.innerText = null;
  }
  if (String(a) === ".") {
    let f = operations.length - 1;
    let q = String(operations[f]);
    let fad = q + ".";
    operations[f] = fad;
  }
  let num = a;
  if (typeof a == "number") {
    console.log(count);
    var x;
    if (count > 0) {
      if (count > 1) {
        let one = operations.pop(a);
        let sandigit = one + "" + a;
        console.log("this is 3 digit number" + " " + sandigit);
        let rlNum = Number(sandigit);
        operations.push(rlNum);
        j = String(operations);
        let stringarray = j.replace(/,/g, " ");

        display.innerHTML = stringarray;
      } else {
        let one = operations.pop(a);
        let j = one + "" + a;
        console.log(j + "  " + "type of j is" + " " + typeof j);
        let rlNum = Number(j);
        x = rlNum;

        console.log("this is 2 digit number" + " " + rlNum);
        operations.push(rlNum);
        j = String(operations);
        let stringarray = j.replace(/,/g, " ");

        display.innerHTML = stringarray;
      }
    } else {
      operations.push(a);
      j = String(operations);
      let stringarray = j.replace(/,/g, " ");

      display.innerHTML = stringarray;
    }

    count++;
  } else if (
    String(a) === ops[0] ||
    String(a) === ops[1] ||
    String(a) === ops[2] ||
    String(a) === ops[3]
  ) {
    console.log(a);
    operations.push(a);
    j = String(operations);
    let stringarray = j.replace(/,/g, " ");

    display.innerHTML = stringarray;
    let c = operations;
    count = 0;
  } else {
    console.log(`this aint op ${a}`);
  }
}

function result() {
  console.log(operations);
  let rex;
  for (i = 0; i < operations.length; i++) {
    if (operations[i] == "+") {
      console.log("this is " + "" + operations);
      console.log(operations[i - 1], "and", operations[i + 1]);
      rex = operations[i - 1] + operations[i + 1];
      screen = ` ${rex}`;
      return rex;
    } else if (operations[i] == "x") {
      rex = operations[i - 1] * operations[i + 1];
      screen = ` ${rex}`;
      return rex;
    } else if (operations[i] == "-") {
      rex = operations[i - 1] - operations[i + 1];
      screen = ` ${rex}`;
      return rex;
    } else if (operations[i] == "÷") {
      rex = operations[i - 1] / operations[i + 1];
      screen = ` ${rex}`;
      return rex;
    }
  }
}

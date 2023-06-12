let string = "11+133*466/66-7%4";
let plus = "+";
let minus = "-";
let times = "*";
let div = "/";
let pourcent = "%";
let none = Infinity;

// Fonction de tri d'un tableau
function sort(tab) {
  let tab1 = [...tab];
  for (let j = 0; j < tab1.length; j++) {
    let min = tab1[0];
    for (let i = 1; i < tab1.length - j; i++) {
      if (tab1[i] < tab1[i - 1]) {
        min = tab1[i];
        tab1[i] = tab1[i - 1];
        tab1[i - 1] = min;
      }
    }
  }
  return tab1;
}

// Fonction pour trouver les indices des opérations
const pivot = (string) => {
  let pivot = [none, none, none, none, none];
  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) === times) {
      pivot[0] = i;
    } else if (string.charAt(i) === div) {
      pivot[1] = i;
    } else if (string.charAt(i) === minus) {
      pivot[2] = i;
    } else if (string.charAt(i) === plus) {
      pivot[3] = i;
    } else if (string.charAt(i) === pourcent) {
      pivot[4] = i;
    }
  }
  return pivot;
};

// Fonction de calcul
const calculate = (string) => {
  let piv = pivot(string);
  console.log("pivot : " + piv);
  let sortPiv = sort(piv);
  console.log("sorted piv : " + sortPiv);

  let index = 0;
  for (let i = 0; i < sortPiv.length - 2; i++) {
    if (sortPiv[i] !== none) {
      const left = string.slice(index, piv[i]);
      let right = string.slice(piv[i] + 1, sortPiv[i + 2]);
      index = sortPiv[i + 2] + 1;

      console.log("left" +left);
      console.log("right"+right);
    }
  }
};


  
  const a = '(13 + 17) / 3*3'
  
  console.log(computeResult(a)) // Should display 10

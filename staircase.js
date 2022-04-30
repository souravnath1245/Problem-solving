let hash = "";
let n = 4;

for (let i = 1; i <= n; i++) {
  for (let j = n - 1; j >= i; j--) {
    hash += "*";
  }
  for (let h = 1; h <= i; h++) {
    hash += "#";
  }
  hash += "\n";
}

console.log(hash);

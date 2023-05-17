let n = 40;

let espaço =  (n - 1);


for (let i = 0; i < n; i++) {

    console.log(" ".repeat(espaço - i) + "#".repeat(1 + (i * 2)) + " ".repeat(espaço - i) + i);
}

function add() {
    let n1, n2, sum;
    n1 = parseInt(document.getElementById("firstnumber").value);
    n2 = parseInt(document.getElementById("secondnumber").value);
    sum = n1 + n2;
    document.getElementById("result").value = sum;
  }


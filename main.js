function addNum() {
    num1 = parseInt(document.frmadd.txt1.value);
    num2 = parseInt(document.frmadd.txt2.value);
    num3 = num1 + num2;
    document.frmadd.txt3.value = num3;
  }
  function subNum() {
    num1 = parseInt(document.frmadd.txt1.value);
    num2 = parseInt(document.frmadd.txt2.value);
    num3 = num1 - num2;
    document.frmadd.txt3.value = num3;
  }
  function mulNum() {
    num1 = parseInt(document.frmadd.txt1.value);
    num2 = parseInt(document.frmadd.txt2.value);
    num3 = num1 * num2;
    document.frmadd.txt3.value = num3;
  }
  function divNum() {
    num1 = parseInt(document.frmadd.txt1.value);
    num2 = parseInt(document.frmadd.txt2.value);
    num3 = num1 / num2;
    document.frmadd.txt3.value = num3;
  }
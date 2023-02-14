function calculate() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var operator = document.querySelector('input[name="operator"]:checked').value;
    
    if (isNaN(num1) || isNaN(num2)) {
      alert("Introduceti numai valori numerice in ambele casute!");
    } else {
      switch (operator) {
        case "+":
          var result = parseFloat(num1) + parseFloat(num2);
          break;
        case "-":
          var result = parseFloat(num1) - parseFloat(num2);
          break;
        case "*":
          var result = parseFloat(num1) * parseFloat(num2);
          break;
        case "/":
          if (num2 == 0) {
            alert("Impartirea la 0 nu este permisa!");
          } else {
            var result = parseFloat(num1) / parseFloat(num2);
          }
          break;
        default:
          alert("Alege o operatie valida!");
      }
      document.getElementById("result").innerHTML = "Rezultatul operatiei este " + result;
    }
  }
console.log('Javascript is Loaded!');

function validateCpf(cpf_in) {
  cpf = cpf_in.replace("-", ".").split(".").join("");
  console.log(cpf); 

  if (cpf.length != 11) {
    return false;
  } else {

    // first digit validation

    var numbers = cpf;
    console.log("numbers are: " + numbers);
    var digits = cpf.substring(9);

    var sum = 0;
    for (var i = 10; i > 1; i--) {
      sum += numbers.charAt(10 - i) * i;
    }

    var result = (sum % 11) < 2 ? 0 : 11 - (sum % 11);
    console.log("fisrt digits is " + result);

    if (result != digits.charAt(0)) {
      return false
    }

    // second digit validation

    sum = 0;
    numbers = cpf.substring(9);

    for (var k = 11; k > 1; k--) {
      sum += numbers.charAt(11 - k) * k;

    }

    var result = (sum % 11) < 2 ? 0 : 11 - (sum % 11);
    console.log("second digits is " + result);

    if (result != digits.charAt(1)) {
      return false;
    }

    return true;
  }
}


function validation() {
  console.log('Validation in progress...')
  document.getElementById('success').style.display = 'none';
  document.getElementById('error').style.display = 'none';


  var cpf = document.getElementById("cpf_input").value;

  var validationResult = validateCpf(cpf);

  if (validationResult) {
    document.getElementById("success").style.display = "block";
  } else {
    document.getElementById("error").style.display = "block";
  }
}
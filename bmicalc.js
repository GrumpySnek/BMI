var bmi;

function bmiCalculator (weight, height) {
    bmi = Math.floor((weight) / (height * height));
    return bmi;
}


document.getElementById('calculate').onclick = function(){
    bmiCalculator(document.getElementById('weight').value, document.getElementById('height').value);
    document.getElementById('bmiresult').innerHTML= "Your BMI = " + bmi + ".";
    if (bmi < 18) {
        document.getElementById('meaning').innerHTML = "Your BMI classifies you as being underweight.";
    } else if (bmi > 18 && bmi <= 25) {
        document.getElementById('meaning').innerHTML = "Your BMI classifies you as being in a healthy weight range.";
    } else if (bmi > 25 && bmi <= 30) {
        document.getElementById('meaning').innerHTML = "Your BMI classifies you as being overweight."
    } else {
        document.getElementById('meaning').innerHTML = "Your BMI classifies you as being in the obesity range."
    }
    console.log(bmi);
}












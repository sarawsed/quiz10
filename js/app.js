const weight = prompt("Enter Your Weight (kg) :");
const height = prompt("Enter Your Height (meter) :");
if (weight && height) {
  const BMI = Number(weight) / Number(height) ** 2;
  if (BMI < 18.5) {
    alert("you are underweight");
  } else if (BMI >= 18.5 && BMI <= 24.9) {
    alert("you are normal");
  } else if (BMI >= 25 && BMI <= 29.9) {
    alert("you are overweight");
  } else {
    alert("you are obese");
  }
} else {
  alert("Please Enter Weight & Height Properly");
}
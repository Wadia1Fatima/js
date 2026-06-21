const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevents page reload on submit

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (isNaN(height) || height <= 0) {
        results.innerHTML = `Please enter a valid Height`;
    }
    else if (isNaN(weight) || weight <= 0) {
        results.innerHTML = `Please enter a valid Weight`;
    }
    else {
        const BMI = (weight / ((height * height) / 10000)).toFixed(2);
        
        if (BMI < 18.6) {
            results.innerHTML = `<span>${BMI}, You are underweight!!</span>`;
        }
        else if (BMI >= 18.6 && BMI <= 24.9) {
            results.innerHTML = `<span>${BMI}, You are in normal range!!</span>`;
        }
        else {
            results.innerHTML = `<span>${BMI}, You are overweight!!</span>`;
        }
        console.log(`result: ${BMI}`);
    }
});
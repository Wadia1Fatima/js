const form = documnet.querySelector('form')

form.addEventListener( function(values) {
    const height = parseInt(documnet.querySelector('#heigt').values)
    const weight = parseInt(documnet.querySelector('#weigt').values)
    const results = documnet.querySelector('#results')

    if(height == '' || height <= 0 || isNaN(height)){
        results.innerHTML = `Please enter a valid Height`
    }
    else if(weight == '' || weight <= 0 || isNaN(weight)) {
        results.innerHTML = `Please enter a valid Weight`
    }
    else {
        const BMI = (weight / ((height*height)/10000)).toFixed(2)
        if(BMI < 18.6){
            results.innerHTML = `<span>${BMI}, You are underweight!!</span>`
        }
        else if(BMI >= 18.6 && BMI <= 24.9){
            results.innerHTML = `<span>${BMI}, You are in normal range!!</span>`
        }
        else {
            results.innerHTML = `<span>${BMI}, You are overweight!!</span>`
        }
    }
})
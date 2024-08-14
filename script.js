document.getElementById('Repayment').addEventListener('change', function() {
    document.querySelector('.repay-radio').classList.add('red-background');
    document.querySelector('.interest-radio').classList.remove('red-background');
});

document.getElementById('Interest').addEventListener('change', function() {
    document.querySelector('.interest-radio').classList.add('red-background');
    document.querySelector('.repay-radio').classList.remove('red-background');
});

//Invalid Input

document.querySelector('.input-button').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default action of the link

    // Clear previous error messages
    document.querySelectorAll('.error-message').forEach(function(error) {
        error.style.display = 'none';
    });
    
    // Get the inputs
    var mortgageAmount = document.getElementById('Mortgage');
    var mortgageTerm = document.getElementById('term');
    var interestRate = document.getElementById('rate');
    var mortgageType = document.querySelector('input[name="mortgageType"]:checked');
    var dollar= document.querySelector('.dollar');
    var years =  document.querySelector('.years');
    var percent =  document.querySelector('.percent')
    var isValid = true;

    // Validate Mortgage Amount
    if (!mortgageAmount.value) {
        document.getElementById('mortgageError').textContent = "Please enter a mortgage amount.";
        document.getElementById('mortgageError').style.display = 'block';
        mortgageAmount.classList.add('invalid');
        dollar.style.backgroundColor="#ce2525";
        dollar.style.color="white";
        isValid = false;
    } else {
        mortgageAmount.classList.remove('invalid');
    }

    // Validate Mortgage Term
    if (!mortgageTerm.value) {
        document.getElementById('termError').textContent = "Please enter a mortgage term.";
        document.getElementById('termError').style.display = 'block';
        mortgageTerm.classList.add('invalid');
        years.style.backgroundColor="#ce2525";
        years.style.color="white";
        isValid = false;
    } else {
        mortgageTerm.classList.remove('invalid');
    }

    // Validate Interest Rate
    if (!interestRate.value) {
        document.getElementById('rateError').textContent = "Please enter an interest rate.";
        document.getElementById('rateError').style.display = 'block';
        interestRate.classList.add('invalid');
        percent.style.backgroundColor="#ce2525";
        percent.style.color="white";
        isValid = false;
    } else {
        interestRate.classList.remove('invalid');
    }

    // Validate Mortgage Type
    if (!mortgageType) {
        document.getElementById('typeError').textContent = "Please select a mortgage type.";
        document.getElementById('typeError').style.display = 'block';
        document.querySelectorAll('input[name="mortgageType"]').forEach(function(radio) {
            radio.classList.add('invalid');
        });
        isValid = false;
    } else {
        document.querySelectorAll('input[name="mortgageType"]').forEach(function(radio) {
            radio.classList.remove('invalid');
        });
    }

    if (isValid) {
        // Perform calculation or redirect
        console.log("Calculation successful! Proceed with the logic here.");
    }
     
    // 
     
     // Get values from the form
     const amount = parseFloat(mortgageAmount.value);
     const termYear = parseFloat(document.getElementById('term').value);
     const interest = parseFloat(document.getElementById('rate').value) / 100 / 12;
 
     // Check if inputs are valid
     if (isNaN(amount) || isNaN(termYear) || isNaN(interest)) {
         alert("Please enter valid numbers.");
         return;
     }
 
     console.log("Amount:", amount);
     console.log("Term in years:", termYear);
     console.log("Monthly Interest Rate:", interest);
 
     const payments = termYear * 12;
     console.log("Number of Payments:", payments);
 
     // Calculate monthly payment
     const x = Math.pow(1 + interest, payments);
     const monthlyPayment = (amount * x * interest) / (x - 1);
     console.log("Monthly Payment:", monthlyPayment);
 
     const totalPayment = monthlyPayment * payments;
     console.log("Total Payment:", totalPayment);

     const totalInterest = totalPayment - amount ;

     const monthlyInterest = totalInterest / 300; 
     
    


    let rightSide=document.querySelector('.right-side');
    
    const choice1=document.getElementById('Repayment');
    const choice2=document.getElementById('Interest');
    
    if(choice1.checked == true){
        rightSide.innerHTML='';
        const resultsContent = `
        <h1 class="results">Your results</h1>
        <p class="result_p">Your results are shown below based on the information you provided. 
        To adjust the results, edit the form and click “calculate repayments” again.</p>
        <div class="black-box">
        <span>Your monthly repayments</span>
        <h1>$${monthlyPayment.toFixed(4)}</h1>
        
        <span>Total you'll repay over the term:</span>
        <h5>$${totalPayment.toFixed(4)}</h5>
        </div>
        `;
        rightSide.innerHTML=resultsContent;
    
    }else if (choice2.checked == true){
        rightSide.innerHTML='';
        const resultsContent = `
        <h1 class="results">Your results</h1>
        <p class="result_p">Your results are shown below based on the information you provided. 
        To adjust the results, edit the form and click “calculate repayments” again.</p>
        <div class="black-box">
        <span>Your monthly Interest</span>
        <h1>$${monthlyInterest.toFixed(4)}</h1>
        
        <span>Total Interest you'll repay over the term:</span>
        <h5>$${totalInterest.toFixed(4)}</h5>
        </div>`;
        rightSide.innerHTML=resultsContent;
    }
 });

// Optional: Clear all inputs when "Clear All" is clicked
document.getElementById('clearAll').addEventListener('click', function(event) {
    event.preventDefault();
    
    location.reload();
});


function mutualFund() {
    var i = parseFloat(document.getElementById('initial_investment').value);
    var m = parseFloat(document.getElementById('monthly_contribution').value);
    var r = parseFloat(document.getElementById('annual_compound_rate').value) / 100;
    var y = parseFloat(document.getElementById('number_of_years').value);
    
    var n = 12; // Monthly compounding

    // Calculate future value of the initial investment
    var futureValueOfInitial = i * Math.pow(1 + r / n, n * y);

    // Calculate future value of the monthly contributions
    var futureValueOfSeries = m * (Math.pow(1 + r / n, n * y) - 1) / (r / n) * (1 + r / n);

    // Total invested amount
    var totalInvested = i + (m * 12 * y);

    // Calculate compound interest earned
    var totalAmount = futureValueOfInitial + futureValueOfSeries;
    var compoundInterestEarned = totalAmount - totalInvested;

    // Display the results
    document.getElementById('total_amount').innerHTML = "The Total amount is: $" + totalAmount.toFixed(2);
    document.getElementById('total_invested').innerHTML = "The Total invested amount is: $" + totalInvested.toFixed(2);
    document.getElementById('compound_interest_earned').innerHTML = "The compound interest earned is: $" + compoundInterestEarned.toFixed(2);
}
 function clearFields(){
    document.getElementById('inital_investment').value='';
    document.getElementById('monthly_contribution').value='';
    document.getElementById('annual_compound_rate').value='';
    document.getElementById('number_of_years').value='';
    document.getElementById('inital_investment').value='';

    document.getElementById('clear').innerHTML='';
 }
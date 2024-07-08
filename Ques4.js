/*Q4. Write a JavaScript function called calculateTax that takes an income as an argument and returns the
amount of tax to be paid. Use a closure to handle different tax rates based on income ranges. Test the
function with various incomes.*/

function calculateTax() {
    const brackets = [
        { limit: 9875, rate: 0.10 },
        { limit: 40125, rate: 0.12 },
        { limit: 85525, rate: 0.22 },
        { limit: 163300, rate: 0.24 },
        { limit: 207350, rate: 0.32 },
        { limit: 518400, rate: 0.35 },
        { limit: Infinity, rate: 0.37 }
    ];

    return function(income) {
        let tax = 0;
        let remainingIncome = income;

        for (let i = 0; i < brackets.length; i++) {
            const bracket = brackets[i];
            const previousLimit = i === 0 ? 0 : brackets[i - 1].limit;
            const taxableIncome = Math.min(remainingIncome, bracket.limit - previousLimit);

            tax += taxableIncome * bracket.rate;
            remainingIncome -= taxableIncome;

            if (remainingIncome <= 0) {
                break;
            }
        }

        return tax;
    };
}

const taxCalculator = calculateTax();

console.log(taxCalculator(5000));     
console.log(taxCalculator(20000));    
console.log(taxCalculator(50000));    
console.log(taxCalculator(100000));   
console.log(taxCalculator(200000));   
console.log(taxCalculator(600000));   
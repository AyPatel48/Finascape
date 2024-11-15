

// Budget Allocation Function
function allocateDeductionBudget(totalBudget, rrsp, charity, education) {
    const rrspAlloc = totalBudget * rrsp;
    const charityAlloc = totalBudget * charity;
    const educationAlloc = totalBudget * education;
    return { rrspAlloc, charityAlloc, educationAlloc };
}

// Deduction Effect Calculation Functions
function calculateRrspTaxSavings(rrspAlloc) {
    return rrspAlloc * 0.2; // Assume 20% tax reduction
}

function calculateCharityTaxCredit(charityAlloc) {
    // Example of charity tax credit calculation
    return charityAlloc <= 200 ? charityAlloc * 0.15 : 200 * 0.15 + (charityAlloc - 200) * 0.29;
}

function calculateEducationTaxCredit(educationAlloc) {
    return educationAlloc * 0.15; // 15% educational credit
}

// Total Tax Calculation with Deductions
function calculateTotalTaxWithDeductions(income, rrspAlloc, charityAlloc, educationAlloc) {
    const incomeAfterRrsp = income - rrspAlloc;
    const baseTax = calculateFederalTax(incomeAfterRrsp) + calculateProvincialTax(incomeAfterRrsp);
    const charityCredit = calculateCharityTaxCredit(charityAlloc);
    const educationCredit = calculateEducationTaxCredit(educationAlloc);
    return baseTax - charityCredit - educationCredit;
}



// Level 1: Income Split
const income = 60000;
const { regularSalary, selfEmploymentIncome } = allocateIncome(income, 0.6);
const auditRisk = calculateAuditRisk(0.4);
const totalTaxLevel1 = calculateRegularSalaryTax(regularSalary) + calculateSelfEmploymentTax(selfEmploymentIncome);

// Level 2: Deduction Budgeting
const budget = 5000;
const allocations = allocateDeductionBudget(budget, 0.4, 0.3, 0.3);
const totalTaxLevel2 = calculateTotalTaxWithDeductions(income, allocations.rrspAlloc, allocations.charityAlloc, allocations.educationAlloc);

// Level 3: Audit Risk and Deductions
const deductions = { rrsp: allocations.rrspAlloc, charity: allocations.charityAlloc, education: allocations.educationAlloc };
const totalTaxLevel3 = calculateTaxWithAudit(deductions, income);

// Level 4: Tax Credit Order
const creditOrder = ["education", "family", "medical"];
const totalCredits = applyCredits(500, 300, 200, creditOrder);

// Level 5: Multi-Year Planning with Life Events
const finalTaxLevel5 = calculateMultiYearTax(income, 2000, lifeEvents);

// Print Results
console.log("Total Tax Level 1:", totalTaxLevel1);
console.log("Total Tax Level 2:", totalTaxLevel2);
console.log("Total Tax Level 3 (after audit risk):", totalTaxLevel3);
console.log("Total Credits Level 4:", totalCredits);
console.log("Final Tax Level 5:", finalTaxLevel5);

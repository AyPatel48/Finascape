

// Income Split Function
function allocateIncome(totalIncome, salaryPercentage) {
    const regularSalary = totalIncome * salaryPercentage;
    const selfEmploymentIncome = totalIncome * (1 - salaryPercentage);
    return { regularSalary, selfEmploymentIncome };
}

// Audit Risk Function
function calculateAuditRisk(selfEmploymentPercentage) {
    const baseRisk = 0.1; // Base audit risk
    const riskIncrement = 0.2 * selfEmploymentPercentage; // Increment based on self-employment percentage
    return Math.min(1, baseRisk + riskIncrement); // Cap risk at 100%
}

// Tax Calculation Functions
function calculateRegularSalaryTax(regularSalary) {
    return calculateFederalTax(regularSalary) + calculateProvincialTax(regularSalary);
}

function calculateSelfEmploymentTax(selfEmploymentIncome) {
    const baseTax = calculateFederalTax(selfEmploymentIncome) + calculateProvincialTax(selfEmploymentIncome);
    const deduction = selfEmploymentIncome * 0.1; // Assume 10% deductible
    return baseTax - deduction;
}

function calculateFederalTax(income) {
    let tax = 0;

    if (income <= 53359) {
        tax = income * 0.15;
    } else if (income <= 106717) {
        tax = (53359 * 0.15) + ((income - 53359) * 0.205);
    } else if (income <= 165430) {
        tax = (53359 * 0.15) + ((106717 - 53359) * 0.205) + ((income - 106717) * 0.26);
    } else if (income <= 235675) {
        tax = (53359 * 0.15) + ((106717 - 53359) * 0.205) + ((165430 - 106717) * 0.26) + ((income - 165430) * 0.29);
    } else {
        tax = (53359 * 0.15) + ((106717 - 53359) * 0.205) + ((165430 - 106717) * 0.26) + ((235675 - 165430) * 0.29) + ((income - 235675) * 0.33);
    }

    return tax;
}


function calculateOntarioTax(income) {
    let tax = 0;

    if (income <= 47630) {
        tax = income * 0.0505;
    } else if (income <= 95259) {
        tax = (47630 * 0.0505) + ((income - 47630) * 0.0915);
    } else if (income <= 150000) {
        tax = (47630 * 0.0505) + ((95259 - 47630) * 0.0915) + ((income - 95259) * 0.1116);
    } else if (income <= 220000) {
        tax = (47630 * 0.0505) + ((95259 - 47630) * 0.0915) + ((150000 - 95259) * 0.1116) + ((income - 150000) * 0.1216);
    } else {
        tax = (47630 * 0.0505) + ((95259 - 47630) * 0.0915) + ((150000 - 95259) * 0.1116) + ((220000 - 150000) * 0.1216) + ((income - 220000) * 0.1316);
    }

    return tax;
}


function calculateCombinedTax(income) {
    const federalTax = calculateFederalTax(income);
    const provincialTax = calculateOntarioTax(income);
    const totalTax = federalTax + provincialTax;

    return {
        federalTax: federalTax,
        provincialTax: provincialTax,
        totalTax: totalTax
    };
}

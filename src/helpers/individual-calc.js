export const individualCalc = (a,b,c,d)=>{
	const
		prem = 134,
		fpl1808 = 4320,
		fpl18 = [0,
			12140,
			16460,
			20780,
			25100,
			29420,
			33740,
			38060,
			42380
		];
	let
		premium = 0,
		payroll = 0,
		income = 0,
		capGains = 0,
		grossIncome = a,
		capitalGains = b,
		sizeOfHousehold = c,
		numberOfAdults = parseInt(d, 10);

	function calc200fpl(size) {
		if (size > 8) {
			let extra = size - 8;
			extra *= fpl1808;
			return (fpl18[8] + extra) * 2;
		} else {
			return fpl18[size] * 2;
		}
	}

	if (numberOfAdults > sizeOfHousehold) {
		numberOfAdults = sizeOfHousehold
	}
	if (grossIncome === '') {
		grossIncome = 0;
	}
	if (capitalGains === '') {
		capitalGains = 0;
	}
	grossIncome = parseInt(grossIncome, 10);
	capitalGains = parseInt(capitalGains, 10);

	const totalIncome = grossIncome + capitalGains;
	const fpl200 = calc200fpl(sizeOfHousehold);

	if (fpl200 < totalIncome) {
		premium = prem * numberOfAdults * 12;
	}

	if (grossIncome < 15000) {
		let phaseOut = parseInt((15000 - grossIncome), 10) * 0.25;
		payroll = (grossIncome - phaseOut) * 0.085;
	} else if (grossIncome >= 15000 && grossIncome < 60000) {
		let phaseOut = (15000 - grossIncome) * 0.25;
		income = (grossIncome - 15000) * 0.01;
		payroll = (grossIncome - phaseOut) * 0.085;
	} else if (grossIncome >= 60000) {
		income = (grossIncome - 15000) * 0.01;
		payroll = (grossIncome - 15000) * 0.085;
	}

	// Caclculate Capital Gains  - (capGains)
	capitalGains = parseInt(capitalGains, 10);

	if (capitalGains < 15000) {
		capGains = 0;
	} else if (capitalGains >= 15000 && capitalGains < 60000) {
		let ltcg = 15000 - (parseInt((capitalGains * 0.25), 10));
		capGains = parseInt((capitalGains - ltcg) * 0.085, 10);
	} else if (capitalGains >= 60000) {
		capGains = capitalGains * 0.085;
	}

	const totalPersonalContribution = income + capGains + premium;
	payroll = parseInt(payroll, 10);
	return { fpl200, income, capGains, premium, totalPersonalContribution, payroll };
};

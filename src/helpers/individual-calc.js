export const individualCalc = (a,b,c,d,e,f,g)=>{
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
		income = 0,
		capitalGainsContribution = 0,
		householdPremium = 0,
		sizeOfHousehold = parseInt(a,10),
		adjustedGrossIncome = parseInt(b,10),
		capitalGains = parseInt(c,10),
		houseAGI = parseInt(d,10),
		houseLTCG = parseInt(e,10),
		numberOfAdults = parseInt(f, 10),
		currentCosts = parseInt(g,10),
		spouseAGI = 0;

	function calc200fpl(size) {
		if (size > 8) {
			let extra = size - 8;
			extra *= fpl1808;
			return (fpl18[8] + extra) * 2;
		} else {
			return fpl18[size] * 2;
		}
	}

	const fpl200 = calc200fpl(sizeOfHousehold);
	if(fpl200 < (adjustedGrossIncome+spouseAGI)){
		premium = ((prem)*12);
		console.log('multiplying premium by 12');
		// householdPremium = ((prem*numberOfAdults)*12);
	}
	console.log(premium);
	if(adjustedGrossIncome < 15000){
		income = 0;
	}else if(adjustedGrossIncome >= 15000){
		income = ((adjustedGrossIncome-15000)*0.01);
	}

	if(capitalGains < 15000){
		capitalGainsContribution = 0;
	}else if(parseInt(capitalGains,10) >= 15000 && parseInt(capitalGains,10) < 60000){
		const ltcg = (15000 - (parseInt(capitalGains,10)*0.25));
		capitalGainsContribution = ((parseInt(capitalGains,10)-parseInt(ltcg,10))*0.085);
	}else if(parseInt(capitalGains,10) >= 60000){
		capitalGainsContribution = (parseInt(capitalGains,10)*0.085);
	}

	const totalPersonalContribution = (parseInt(income,10) + parseInt(capitalGainsContribution,10) + parseInt(premium, 10));
	const savings = parseInt(currentCosts*12,10) - totalPersonalContribution;
	return { fpl200, income, savings, capitalGainsContribution, premium, totalPersonalContribution, currentCosts };
};

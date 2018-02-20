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
		currentCosts = parseInt(g,10);

	function fpl(size) {
		if (size > 8) {
			let extra = size - 8;
			extra *= fpl1808;
			return (fpl18[8] + extra);
		} else {
			return fpl18[size];
		}
	}

	const fplCheck = fpl(sizeOfHousehold);
	const houseHoldIncome = houseAGI + houseLTCG;
	if(fplCheck*2 <= houseHoldIncome && fplCheck*2.33 >= houseHoldIncome){
		premium = ((prem*.25)*12);
		console.log('multiplying premium by 12');
		householdPremium = ((prem*.25*numberOfAdults)*12);
	} else if(fplCheck*2.33 < houseHoldIncome && fplCheck*2.67 >= houseHoldIncome){
		premium = ((prem*.5)*12);
		console.log('multiplying premium by 12');
		householdPremium = ((prem*.5*numberOfAdults)*12);
	} else if(fplCheck*2.67 < houseHoldIncome && fplCheck*3 > houseHoldIncome){
		premium = ((prem*.75)*12);
		console.log('multiplying premium by 12');
		householdPremium = ((prem*.75*numberOfAdults)*12);
	} else if(fplCheck*3 < houseHoldIncome){
		premium = (prem*12);
		console.log('multiplying premium by 12');
		householdPremium = ((prem*numberOfAdults)*12);
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
	return { fpl, income, numberOfAdults, sizeOfHousehold, savings, capitalGainsContribution, householdPremium, premium, totalPersonalContribution, currentCosts };
};

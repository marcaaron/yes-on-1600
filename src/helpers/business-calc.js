import { removeCommas } from './helper-functions';

export const businessCalc = (a,b)=>{
	let newPercentage = 0;
	switch (a) {
	case '<10':
		newPercentage = 0.0641;
		break;
	case '10-24':
		newPercentage = 0.0499;
		break;
	case '25-99':
		newPercentage = 0.0565;
		break;
	case '100-999':
		newPercentage = 0.055;
		break;
	case '>1000':
		newPercentage = 0.0613;
		break;
	default:
		newPercentage = 0;
	}
	const futureCost = parseInt(parseInt(removeCommas(b),10) * newPercentage, 10);
	return { futureCost };
};

const questions = {
	individual:[
		{questionText:"Your Annual Household Income:", inputType:'number', unit:'$'},
		{questionText:"Your Net Annual Capital Gains:", inputType:'number', unit:'$'},
		{questionText:"Size of Your Household", inputType:'number'},
		{questionText:"Number of Adults over 19", inputType:'number'}
	],
	business:[
		{questionText:'Annual Total Payroll Costs:', inputType:'number',unit:'$'},
		{questionText:'Current Annual Healthcare Costs:', inputType:'number',unit:'$'},
		{questionText:'Total Number of Employees',
			inputType:'select-box',
			options: ['<10',"10-24","25-99","100-999",">1000"]
		},
		{questionText:'Percentage of Employees Covered', inputType:'range'}
	]
};

export default questions;

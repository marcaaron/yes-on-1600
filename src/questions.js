const questions = {
	individual:[
		{questionText:"Your Annual Household Income:", inputType:'text'},
		{questionText:"Your Net Annual Capital Gains:", inputType:'text'},
		{questionText:"Size of Your Household", inputType:'text'},
		{questionText:"Number of Adults over 19", inputType:'text'}
	],
	business:[
		{questionText:'Annual Total Payroll Costs:', inputType:'text'},
		{questionText:'Current Annual Healthcare Costs:', inputType:'text'},
		{questionText:'Total Number of Employees',
			inputType:'select-box',
			options: ['<10',"10-24","25-99","100-999",">1000"]
		},
		{questionText:'Percentage of Employees Covered', inputType:'range'}
	]
};

export default questions;

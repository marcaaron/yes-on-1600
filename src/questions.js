const questions = {
	individual:[
		// {questionText:"Is Your Adjusted Gross Income Less Than $15,000/year?", inputType:'confirm'},
		{questionText:"Your Adjusted Gross Income:", inputType:'number', unit:'$'},
		// {questionText:"Are Your Net Long Term Capital Gains Less Than $15,000/year?", inputType:'confirm'},
		{questionText:"Your Net Annual Capital Gains:", inputType:'number', unit:'$'},
		{questionText:"Your Current Monthly Health Insurance Premium:", inputType:'number', unit:'$'},
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

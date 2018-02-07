const questions = {
	individual:[
		// {questionText:"Is Your Adjusted Gross Income Less Than $15,000/year?", inputType:'confirm'},
		{
			questionText:"Your Adjusted Gross Income (AGI):",
			inputType:'number',
			unit:'$',
			tip: "Adjusted gross income (AGI) is an individual's total gross income minus specific deductions. In order to calculate your costs accurately it is VERY IMPORTANT to enter your AGI and NOT gross income. To find your AGI, refer to your last year's tax return or use the AGI calculator provided below prior to proceeding!",
			link:['http://money.cnn.com/tmp/networth2.html','Take me to the AGI Caculator first...'],
			confirm: true,
			confirmText: 'Danger, Will Robinson! If you enter your Gross Income and not your AGI, you will not receive the correct calculation! Proceed anyway?'
		},
		// {questionText:"Are Your Net Long Term Capital Gains Less Than $15,000/year?", inputType:'confirm'},
		{questionText:"Your Net Annual Capital Gains:", inputType:'number', unit:'$'},
		{questionText:"Your Current Monthly Health Insurance Premium:", inputType:'number', unit:'$'},
		{questionText:"Size of Your Household", inputType:'number'},
		{questionText:"Number of Adults over 19", inputType:'number'}
	],
	business:[
		{questionText:'Annual Total Payroll Costs:', inputType:'number',unit:'$'},
		{questionText:'Current Annual Healthcare Costs:', inputType:'number',unit:'$'},
		{questionText:'Total Number of Employees:',
			inputType:'select-box',
			options: ['<10',"10-24","25-99","100-999",">1000"]
		},
		{questionText:'Percentage of Employees Covered:', inputType:'range'}
	]
};

export default questions;

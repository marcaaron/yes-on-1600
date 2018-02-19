const questions = {
	individual:[
		{
			questionText:"Size of Your Household",
			inputType:'number',
			min:{
				val: 1,
				error: 'Please enter a household size greater than zero.'
			}
		},
		{
			questionText:"Your Adjusted Gross Income (AGI):",
			inputType:'number',
			unit:'$',
			tip: `<p>Adjusted gross income (AGI) is an individual's total gross income minus specific deductions. In order to calculate your costs accurately it is <strong>VERY IMPORTANT</strong> to enter your AGI and NOT gross income. To find your AGI, refer to your last year's tax return or use the AGI calculator provided below prior to proceeding!</p><ul><li>If you filed Form 1040: the AGI is on line 37.</li><li>If you filed Form 1040A: the AGI is on line 21.</li><li>If you filed Form 1040EZ: the AGI is on line 4.</li></ul>`,
			link:['http://money.cnn.com/tmp/networth2.html','Take me to the AGI Caculator first...'],
			confirm: true,
			confirmText: '🤖 Danger, Will Robinson! 🤖 \n\n If you enter your Gross Income and not your AGI, you will not receive the correct calculation! Proceed anyway?'
		},
		{
			questionText:"Your Net Long-Term Capital Gains:",
			inputType:'number',
			unit:'$'
		},
		{
			questionText:"Household Adjusted Gross Income:",
			inputType:'number',
			unit:'$',
			defaultValue:0
		},
		{
			questionText:"Household Net Long-Term Capital Gains:",
			inputType:'number',
			unit:'$',
			defaultValue:0
		},
		{
			questionText:"Number of Adults over 19",
			inputType:'number',
			min:{
				val: 1,
				error: 'Please enter a value greater than zero.'
			},
			max:{
				val: 'Size of Your Household',
				error:'Number of Adults over 19 cannot exceed total household size!'
			}
		},
		{
			questionText:"Your Current Monthly Health Care Costs",
			inputType:'number',
			unit:'$',
			tip:'Include premiums, doctor visits, and medications.'
		}
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

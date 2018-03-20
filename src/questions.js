const questions = {
	individual:[
		{
			questionText:"Size of Your Household",
			inputType:'number',
			min:{
				val: 1,
				error: 'Please enter a household size greater than zero.'
			},
			max:{
				val: 20,
				error:'Please enter a household size between 1-20.'
			},
			tip:'The size of your household includes your spouse, if you have one, and any individuals that qualify as dependents.',
			indexToHide:[3],
			condition:1
		},
		{
			questionText:"Your Adjusted Gross Income (AGI)",
			inputType:'number',
			unit:'$',
			tip: `<p>Adjusted gross income (AGI) is an individual or joint couple's total gross income minus specific deductions. It's <strong>VERY IMPORTANT</strong> to enter your AGI and NOT gross income. To find your AGI, refer to your last year's tax return or use the AGI Calculator provided below.</p><table class="agi-table"><tr><th><strong>If you filed...</strong></th><th><strong>Look for line...</strong></th></tr><tr><td>Form 1040</td><td>37</td></tr><tr><td>Form 1040A</td><td>21</td></tr><tr><td>Form 1040EZ</td><td>4</td></tr></table>`,
			link:['http://money.cnn.com/tmp/networth2.html','Take me to the AGI Calculator first...'],
			confirm: false,
			confirmText: '🤖 Danger, Will Robinson! 🤖 \n\n If you enter your Gross Income and not your AGI, you will not receive the correct calculation! Proceed anyway?'
		},
		{
			questionText:"Your Net Long-Term Capital Gains",
			inputType:'number',
			unit:'$',
			tip:'Net Long-Term Capital Gains are the profits made from investments held for longer than 12 months. For example, profits earned from the sale of stock or fine art. For the purposes of the Whole Washington health trust, the following Capital Gains income is excluded: Home Sales, Farm Income and Retirement Accounts.'
		},
		{
			questionText:"Additional Household Income",
			inputType:'number',
			unit:'$',
			defaultValue:0,
			tip:`Additional household income includes any income earned from members of your household, whether taxable or not. This includes any cash jobs, dependent's earnings, capital gains and spouse's income if not included in the AGI. This number is used in conjunction with your income and capital gains to determine your household income level relative to the poverty line which is then used to determine premium costs.`
		},
		{
			questionText:"Number of Adults over 19",
			inputType:'number',
			max:{
				val: 'Size of Your Household',
				error:'Number of Adults over 19 cannot exceed total household size!'
			},
			defaultValue:1,
			tip: 'Click <strong>Next</strong> and we’ll review what you get to eliminate from your current expenses.'
		},
		{
			questionText:"Your Current Monthly Healthcare Costs",
			inputType:'number',
			unit:'$',
			tip:'Include premiums, dental, vision, doctor visits, and medications for yourself and any dependents.'
		}
	],
	business:[
		{questionText:'Annual Total Payroll Costs', inputType:'number',unit:'$'},
		{questionText:'Current Annual Healthcare Costs', inputType:'number',unit:'$'},
		{questionText:'Total Number of Employees',
			inputType:'select-box',
			options: ['<10',"10-24","25-99","100-999",">1000"]
		},
		{questionText:'Percentage of Employees Covered', inputType:'range'}
	]
};

export default questions;

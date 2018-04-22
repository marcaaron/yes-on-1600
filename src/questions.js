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
			tip:'The size of your household includes yourself, your spouse (if you have one), and any individuals that qualify as dependents.',
      showIcon:true
		},
		{
			questionText:"Your Adjusted Gross Income (AGI)",
			inputType:'text',
			unit:'$',
			tip: `<p>Adjusted gross income (AGI) is an individual or joint couple's total gross income minus specific deductions. It's <strong>VERY IMPORTANT</strong> to enter your AGI and NOT gross income. To find your AGI, refer to your last year's tax return or use the AGI Calculator provided below.</p><table class="agi-table"><tr><th><strong>If you filed...</strong></th><th><strong>Look for line...</strong></th></tr><tr><td>Form 1040</td><td>37</td></tr><tr><td>Form 1040A</td><td>21</td></tr><tr><td>Form 1040EZ</td><td>4</td></tr></table>`,
			tipSize:'0.8em',
			link:['http://money.cnn.com/tmp/networth2.html','Take me to the AGI Calculator first...'],
			confirm: false,
			confirmText: '🤖 Danger, Will Robinson! 🤖 \n\n If you enter your Gross Income and not your AGI, you will not receive the correct calculation! Proceed anyway?',
      showIcon:true
		},
		{
			questionText:"Your Net Long-Term Capital Gains",
			inputType:'text',
			unit:'$',
			tip:'Net Long-Term Capital Gains are the profits made from investments held for longer than 12 months, for example, profits earned from the sale of stocks. This tax contribution will not apply to Home Sales, Farm Income or Retirement Accounts.<br/><br/>If you file Schedule D, look for line item 15.',
      showIcon:true
		},
		{
			questionText:"Number of Adults over 19",
			inputType:'number',
			max:{
				val: 'Size of Your Household',
				error:'Number of Adults over 19 cannot exceed total household size!'
			},
			defaultValue:1,
			tip: "Now we'll review what you get to <strong>eliminate</strong> from your current expenses.",
			tipSize: '1.3em',
      showIcon:false
		},
		{
			questionText:"Your Current Monthly Healthcare Premiums",
			inputType:'text',
			unit:'$',
			tip:'<p>Include Monthly Premiums for Medical, Dental (if applicable) and Vision (if applicable).</p> <p>Remember to include costs for each member of household.</p>',
      showIcon:true
		},
		{
			questionText:"Your Current Yearly Additional Medical Costs",
			inputType:'text',
			unit:'$',
			tip:`<p>Include costs incurred over the course of the year for every member of your household, such as:<ul><li>Co-Pays</li><li>Prescriptions<sup>*</sup></li><li>Medical Bills not covered/denied by Insurance</li><li>Emergency Room or Clinic Visits</li><li>Deductibles</li></ul><p><sup>*</sup>Note: the most you'll pay for prescriptions with I-1600 Universal Healthcare is $250 per adult per year.</p>`,
      showIcon:true
		}
	],
	business:[
		{questionText:'Annual Total Payroll Costs', inputType:'text',unit:'$'},
		{questionText:'Current Annual Healthcare Costs', inputType:'text',unit:'$'},
		{questionText:'Total Number of Employees',
			inputType:'select-box',
			options: ['<10',"10-24","25-99","100-999",">1000"]
		},
		{questionText:'Percentage of Employees Covered', inputType:'range'}
	]
};

export default questions;

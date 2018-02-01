var prem = 134,
fpl18O8 = 4320,
fpl18 = new Array();
fpl18[1] = 12140;
fpl18[2] = 16460;
fpl18[3] = 20780;
fpl18[4] = 25100;
fpl18[5] = 29420;
fpl18[6] = 33740;
fpl18[7] = 38060;
fpl18[8] = 42380;
$(window).ready(function() {
	$('#gai, #ncg').on('keyup', function(){
		var el = $(this);
		var value = el.val();
		if(!$.isNumeric(value.substring(value.length - 1)) || value != ""){el.val(rnn(value));}
	});
	$('#gai, #ncg').on('focusout', function(){rnn($(this).val())});
    $('#calc').submit(function() {
		var premium = 0,
		income = 0,
		capitolgains = 0,
		payroll = 0,
		gai = parseInt($('#gai').val()),
		ncg = parseInt($('#ncg').val()),
		noa = parseInt($('#noa').val()),
		soh = parseInt($('#soh').val()),
		fpl200 = calc200fpl($('#soh').val());
		if(noa > soh){ noa = soh; }
		if ($('#gai').val() == '') {
			$('#gai').val(0);
			gai = 0;
        }
		if ($('#ncg').val() == '') {
			$('#ncg').val(0);
			ncg = 0;
        }
		if(fpl200 < (parseInt(gai)+parseInt(ncg))){
			premium = ((parseInt(prem)*parseInt(noa))*12);
		}
		if(gai < 15000) {
			var phaseOut = (15000 - (parseInt(gai)*.25));
			payroll = ((parseInt(gai)-parseInt(phaseOut))*0.085);
		} else if(parseInt(gai) >= 15000 && parseInt(gai) < 60000) {
			var phaseOut = (15000 - (parseInt(gai)*.25));
			income = ((parseInt(gai)-15000)*0.01);
			payroll = ((parseInt(gai)-parseInt(phaseOut))*0.085);
		} else if(parseInt(gai) >= 60000){
			income = ((parseInt(gai)-15000)*0.01);
			payroll = ((parseInt(gai)-15000)*0.085);
		}
		if(ncg < 15000) {
			capitolgains = 0;
		} else if(parseInt(ncg) >= 15000 && parseInt(ncg) < 60000) {
			var ltcg = (15000 - (parseInt(ncg)*.25));
			capitolgains = ((parseInt(ncg)-parseInt(ltcg))*0.085);
		} else  if(parseInt(ncg) >= 60000){
			capitolgains = (parseInt(ncg)*0.085);
		}

		var tpc = (parseInt(income)+parseInt(capitolgains)+parseInt(premium));

		$('#itc').text('$'+Math.round(income));
		$('#itcm').text('$'+Math.round((income/12)));

		$('#cgc').text('$'+Math.round(capitolgains));
		$('#cgcm').text('$'+Math.round((capitolgains/12)));

		$('#pc').text('$'+Math.round(premium));
		$('#pcm').text('$'+Math.round((premium/12)));

		$('#tpc').text('$'+Math.round(tpc));
		$('#tpcm').text('$'+Math.round((tpc/12)));

		$('#ec').text('$'+Math.round(payroll));
		$('#ecm').text('$'+Math.round((payroll/12)));

		$('#resultsBase').html('Results are based on individual inelegiable for medicare and the following provided information: Gross Annual Household Income: <strong>$'+gai+'</strong>, Net Annual Household Capitol Gains: <strong>$'+ncg+'</strong>, Size of Household: <strong>'+soh+'</strong>, and Number of Adults: <strong>'+noa+'</strong>.');
		$('html, body').animate({
      scrollTop: $("#display").offset().top
    }, 1000)
		return false;
    });
	function rnn(v){
		return v.replace(/\D/g,'');
	}
	function calc200fpl(h){
		if (h > 8){
			var extra = h-8;
			extra = (extra*fpl18O8);
			return (fpl18[8]+extra)*2;
		}else{return (fpl18[h]*2)};
	}
});

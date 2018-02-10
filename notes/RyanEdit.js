function calculate() {
        var fpl200 = calc200fpl(soh),
        hhp = 0;

        if(fpl200 < (agi+sagi)){
            premium = ((prem)*12);
            hhp = ((prem*noa)*12);
        }

        if(agi < 15000) {
            income = 0;
        } else if(agi >= 15000) {
            income = ((agi-15000)*0.01);
        }

        if(ncg < 15000) {
            capitalgains = 0;
        } else if(parseInt(ncg) >= 15000 && parseInt(ncg) < 60000) {
            var ltcg = (15000 - (parseInt(ncg)*.25));
            capitalgains = ((parseInt(ncg)-parseInt(ltcg))*0.085);
        } else  if(parseInt(ncg) >= 60000){
            capitalgains = (parseInt(ncg)*0.085);
        }

        if(premium){note = '*Premiums are based on an assumed $134/mo premium for all adults in household making 200% federal poverty level or greater. Cannot exceed $200/mo dollars for an individual. Some employers may choose to cover part or all of employee premium costs.';}

        var tpc = (parseInt(income)+parseInt(capitalgains)+parseInt(premium));

        save = (cmc*12) - tpc;

        $('#itcm').text('$'+Math.round((income/12)));
        $('#cgcm').text('$'+Math.round((capitalgains/12)));
        $('#pcm').text('$'+Math.round((premium/12)));
        $('#tpc').text('$'+Math.round(tpc));
        $('#tpcm').text('$'+Math.round((tpc/12)));
        $('#savem').text('$'+Math.round(Math.max(0,save/12)));
        $('#save').text('$'+Math.round(Math.max(0,save)));

        $('#note').text(note);

        return false;
   } //end calculate

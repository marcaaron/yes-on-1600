/*global FB*/

import React, { Component } from 'react';
class Socials extends Component {

	fbPost = ()=>{
		FB.ui(
			 {
			  method: 'share',
			  href: 'https://i1600-wholewashington.nationbuilder.com/calculator'
			}, function(response){}
		);
	}
	componentDidMount(){
		  window.fbAsyncInit = function() {
		    FB.init({
		      appId            : '1957269524593632',
		      autoLogAppEvents : true,
		      xfbml            : true,
		      version          : 'v2.12'
		    });
		  };

		  (function(d, s, id){
		     var js, fjs = d.getElementsByTagName(s)[0];
		     if (d.getElementById(id)) {return;}
		     js = d.createElement(s); js.id = id;
		     js.src = "https://connect.facebook.net/en_US/sdk.js";
		     fjs.parentNode.insertBefore(js, fjs);
		   }(document, 'script', 'facebook-jssdk'));
	}
	render() {
		let twitterText ='';
		if(this.props.savings>0){
			twitterText = "I'll save $" + this.props.savings + "/yr under a single-payer healthcare system in WA state!\nHow about you? http://yeson1600.org/calculator\n#YesOn1600";
		}else{
			twitterText = "Check out the I-1600 Cost Calculator and find out how much you'll save under a single-payer healthcare system in WA state!\nhttp://yeson1600.org/calculator\n#YesOn1600";
		}
		return(
			<div className ={`social-icons ${this.props.killClass}`}>
				{/* Twitter */}
				<a
					href={`https://twitter.com/intent/tweet?text=${escape(twitterText)}&via=WAsinglePayer`}
					target="_blank"
					rel="noopener noreferrer"
				>
				<svg xmlns="http://www.w3.org/2000/svg" width={this.props.size} height={this.props.size} viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg></a>
				{/* Facebook */}
				<svg onClick={this.fbPost} xmlns="http://www.w3.org/2000/svg" width={this.props.size} height={this.props.size} viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
				{/* Download */}
				<a
					href={this.props.imageURL}
					download="Yes-On1600-Results.png"
					target="_blank"
					rel="noopener noreferrer"
				>
				<svg xmlns="http://www.w3.org/2000/svg" width={this.props.size} height={this.props.size} viewBox="0 0 24 24"><path d="M16 11h5l-9 10-9-10h5v-11h8v11zm1 11h-10v2h10v-2z"/></svg></a>

				{/* Mail Icon */}
					<a href="mailto:replace me?Subject=Yes%20on%20I-1600%20Cost%20Calculator%21&Body=Check%20the%20link%20below%20and%20find%20out%20how%20much%20you%27ll%20save%20under%20a%20single-payer%20healthcare%20system%21%0A%0Ahttp%3A//yeson1600.org/calculator"><svg xmlns="http://www.w3.org/2000/svg" width={this.props.size} height={this.props.size} viewBox="0 0 24 24"><path d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z"/></svg></a>
			</div>
		);
	}
};

export default Socials;

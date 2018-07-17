if('serviceWorker' in navigator) {
	navigator.serviceWorker.register('./sw.js')
	.then(function(regist) {
          console.log('service Worker installing');
	    })
	.catch(function(error) {
		console.log('Registration Failed With'+ error);
	});
}
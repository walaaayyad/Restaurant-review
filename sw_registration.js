if('serviceWorker' in navigator) {
	navigator.serviceWorker.register('./sw.js',{scope:'/restaurant_project/'})
	.then(function(regist) {
          console.log('service Worker installing');
	    })
	.catch(function(error) {
		console.log('Registration Failed With'+ error);
	});
}
var urls= [
    './',
	'./sw_registration.js',
	'./index.html',
	'./restaurant.html',
	'/css/styles.css',
	'/data/restaurants.json',
	'/img/1.jpg',
	'/img/2.jpg',
	'/img/3.jpg',
	'/img/4.jpg',
	'/img/5.jpg',
	'/img/6.jpg',
	'/img/7.jpg',
	'/img/8.jpg',
	'/img/9.jpg',
	'/img/10.jpg',
	'/js/dbhelper.js',
	'/js/restaurant_info.js',
	'/js/main.js'
];

self.addEventListener('install', function(event) {
	event.waitUntil(
        caches.open('v1')
        .then(function(cache) {
        	console.log('opened cache');
        	return cache.addAll(urls);
        })
	);
});


self.addEventListener('activate', function(event) {
	var cachesList = ['page-static-v1', 'blogPosts-static-v1'];
	event.waitUntil(
       caches.keys().then(function(cacheNames) {
       	return Promise.all(
       		cacheNames.map(function(cacheName) {
       			if (cachesList.indexOf(cacheName)=== -1) {
       				return caches.delete(cacheName);
       			    }
       		    })
       	    );
        })
	);
});

self.addEventListener('fetch', function(event) {
	event.respondWith(
		caches.match(event.request)
		.then(function(resp) {
				return resp || fetch(event.request).then(function(response) {
					return caches.open('v1').then(function(cache) {
						cache.put(event.request,response.clone());
						return response;
					});
				});
		    })
	    );
    });

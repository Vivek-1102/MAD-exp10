self.addEventListener('install', evt =>{
    console.log('service worler is registered')
});

self.addEventListener('activate', evt =>{
    console.log('service worler is activated')
});
self.addEventListener('fetch', evt =>{
    console.log('service worler is Fetching')
});

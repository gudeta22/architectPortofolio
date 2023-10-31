const CATCH_NAME = "version-1"
const urlsToCatch = ['index.html' , 'offline.html']

this.addEventListener('install' , (event) =>{
    event.waitUntil(
        caches.open(CATCH_NAME).then((cache) =>
        {
            console.log("opened catch")
            return cache.addAll(urlsToCatch)
        })
    )
})
this.addEventListener('fetch' , (event)=>{
    event.respondWith(
        caches.match(event.request).then((res)=>{
            return fetch(event.request).catch(()=>caches.match('offline.html'))
        })
    )
})

this.addEventListener('activate' , (event) =>{
    const catchWhiteList = []
    catchWhiteList.push(CATCH_NAME)
    event.waitUntil(catches.keys().then((catchName) => Promise.all(
        catchName.map((catchName)=>{
            if(catchWhiteList.includes(catchName)){
                return caches.delete(catchName);
            }
        })
    )))
})
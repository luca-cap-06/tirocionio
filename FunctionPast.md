## esercizio di chiamata asincrona
```javascript
function getPastEvent() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const events = [
                { year: 1990, name: "World Wide Web Invented" },
                { year: 2001, name: "Wikipedia Launched" },
                { year: 1969, name: "Moon Landing" },
                { year: 2020, name: "Global Pandemic" },
                { year: 1989, name: "Fall of Berlin Wall" }
            ];

            const randomIndex = Math.floor(Math.random() * events.length);
            resolve(events[randomIndex]);
        }, Math.random() * 1000);
    });
}
async function travelTroughHistory(n) {
    try {
        const promises = [...Array(n)].map(() => getPastEvent());
        const events= await Promise.all(promises);
        const unicoEvento =[...new Map(events.map(event => [`${event.name}-${event.year}`, event])).values()]
        .filter(events => events.year < 2000).sort((a, b) => a.year - b.year);    
            return unicoEvento;
    } catch  (error) {
        console.log("errore registrato:", error);
    }
     
}
// prova
travelTroughHistory(10).then(events => {
    console.log("Eventi storici unici ordinati per anno:"); 
    events.forEach(event => console.log(`- ${event.name} (${event.year})`));
});
```

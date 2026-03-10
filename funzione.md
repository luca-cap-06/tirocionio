function getPastEvent() 
  { return new Promise((resolve) => { 
    setTimeout(() => {
      const events = [ 
        {year: 1990, name: "World Wide Web Invented" }, 
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

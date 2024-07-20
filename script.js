function display_heading(data){
    const heading_div = document.getElementsByClassName('search-container')[0];
    const place_name = document.createElement('h1');
    place_name.textContent = data.resolvedAddress

    const date_time = document.createElement('h2')
    date_time.textContent = new Date().toLocaleString('en-US', {timeZone: data.timezone});

    heading_div.appendChild(place_name);
    heading_div.appendChild(date_time);
}
function display_weekly(data){
    const week_data = data.days.slice(0,7);
    const div_weekly = document.getElementsByClassName('weekly_data')[0];

    week_data.forEach(element => {
        const single_week = document.createElement('div');

        const day = document.createElement('div');
        day.textContent = new Date(element.datetime).toLocaleString('en-us', {weekday:'long'})
        const max_temp = document.createElement('div');
        max_temp.textContent = element.tempmax
        const min_temp = document.createElement('div');
        min_temp.textContent = element.tempmin;

        single_week.append(day, max_temp, min_temp)
        div_weekly.appendChild(single_week)
        
    });
}

async function getData(location){
    const api_key = 'NS8DEKRHEUAPNS5TTLKMUU9KU';
    const data = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/'+location+'?key='+api_key)
    const data_json = await data.json();
    display_heading(data_json)
    console.log(data_json)
    display_weekly(data_json)
}
function takeInput(){
    
    getData()
}

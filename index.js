let logo=document.getElementById('logo')


let cityvalue = document.getElementById('cityvalue')
let cityname = document.getElementById('cityname')
let countryname = document.getElementById('countryname')
let temperature = document.getElementById('temperature')

let search = async() => {
    if (cityvalue.value.length==0) {
        alert('please enter a city name')
    } else {
        //api call
        try {
            let url = 'https://api.openweathermap.org/data/2.5/weather?q='+cityvalue.value+'&units=metric&appid=1cb6532aea3c298a830a71380eace21e'
            let response =await fetch(url)
            let data = await response.json()
            cityname.textContent = data.name
            countryname.textContent=data.sys.country
            temperature.textContent=data.main.temp
            if (temperature.textContent>20) {
                logo.src='https://media.giphy.com/media/zotwjIGhEIUzC/giphy.gif'
            }
            // else if(temperature.textContent<30)  {
            //     logo.src='https://media.giphy.com/media/129BtnUUD6Lrzi/giphy.gif' 
            // }
            else{
                logo.src='https://media.giphy.com/media/s4Bi420mMDRBK/giphy.gif'
            }
        } catch {
            alert('please enter a valid city name')
        }
    }
}



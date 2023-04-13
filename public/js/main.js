const cityName=document.getElementById('cityName')
const submitbtn=document.getElementById('submitbtn')
const city_name=document.getElementById('city_name')
const temp_status= document.getElementById('tempstatus')
const temp =document.getElementById('temp')
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();
let day = weekday[d.getDay()];
document.getElementById("day").innerHTML = day;
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];


let maheena = month[d.getMonth()];
document.getElementById("today_data").innerHTML = d.getDate()+ " "  +" " + maheena;


const getInfo =  async(event)=>{
    event.preventDefault();//to prevent reload
   // alert("hi")
    let cityval =cityName.value;
    if(cityval==""){
        city_name.innerText="please enter city name before search"


    }
    else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=868a4b394c7b9b4b46f1a2d0426cb611`
            const response = await fetch(url)
            const data= await response.json();
            const arr=[data]
            console.log(arr)
            city_name.innerText=`${arr[0].name} ${arr[0].sys.country}`
            temp.innerText=arr[0].main.temp ;
            temp_status.innerText=arr[0].weather[0].main;
            const tempmood=temp_status;
            if( tempmood =="Clear"){
                temp_status.innerHTML= '<i class="fa-solid fa-sun" ></i>';
            }
            else if( tempmood =="Clouds"){
                temp_status.innerHTML=
                '<i class="fa-solid fa-cloud"></i>';
            }
            else if( tempmood =="Rain"){
                temp_status.innerHTML=
                '<i class="fa-solid fa-cloud-rain"></i>';
             }
             else{
                temp_status.innerHTML=
                '<i class="fa-duotone fa-cloud"></i>'

             }
            
            
            }


           catch{
            alert("oops")


           }
        

       }

    

}
submitbtn.addEventListener('click',getInfo);
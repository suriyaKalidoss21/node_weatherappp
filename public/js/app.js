console.log('Client side javascript file is loaded!')

// fetch('http://puzzle.mead.io/puzzle').then((response)=>{
//   response.json().then((data)=>{
//       console.log(data);
//   })
// });




const weatherform=document.querySelector('form')
const search=document.querySelector('input')
const message1=document.querySelector('#message1')

message1.textContent='test phjase'



weatherform.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location=search.value;
    console.log(location)

   message1.textContent=location;
    fetch('/weather?address='+location ).then((response)=>{

        message1.textContent="Loading.....";
    
response.json().then((data)=>{
    if(data.error)
    {
   message1.textContent=data.error;
    }else{
        console.log(data.forecast)
        console.log(data.coordinate)
        message1.textContent=data.forecast;
    }
})})})
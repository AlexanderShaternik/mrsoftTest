//запрос по адресу http://www.mrsoft.by/data.json
// var xhr = new XMLHttpRequest();
// xhr.addEventListener("readystatechange", function () {
//     if (this.readyState === 4) {
//         var res = JSON.parse(this.response);
//         console.log(res)
//     }
// });
// xhr.open("GET", "http://www.mrsoft.by/data.json",true);
// xhr.send();

// fetch запрос по адресу http://www.mrsoft.by/data.json

let promise = fetch('http://www.mrsoft.by/data.json')
    .then(function(response) {
        return response.json();
    });
//фильтр по длине слов
function firstOut(){
    promise
        .then(function(res) {
        let result = res.data.filter((str)=> str.length > document.querySelector('input[type=text]').value);
        document.querySelector('.output p').innerHTML = result.length+' совпадений '+'<br>'+result;
        }).catch((error)=>document.querySelector('.output p').innerHTML = error);
}

//фильтр по подстроке
function secondOut(){
   if(document.querySelector('input[type=checkbox]').checked){
       //checkbox чувствительности регистра проставлен
       promise
           .then(function(res) {
               let result = res.data.filter((str)=> str.indexOf(document.querySelector('input[type=text]').value) > -1);
               document.querySelector('.output p').innerHTML = result.length+' совпадений '+'<br>'+result;
           }).catch((error)=>document.querySelector('.output p').innerHTML = error);

   } else{
       // checkbox чувствительности регистра снят
       promise
           .then(function(res) {
               let result = res.data.filter(function(str){

                   return str.toLowerCase().indexOf(document.querySelector('input[type=text]').value.toLowerCase()) > -1
               });
               document.querySelector('.output p').innerHTML = result.length+' совпадений '+'<br>'+result;
           }).catch((error)=>document.querySelector('.output p').innerHTML = error);
   }
}

let first = document.querySelector('.first');
first.addEventListener('click', firstOut);

let second = document.querySelector('.second');
second.addEventListener('click', secondOut);

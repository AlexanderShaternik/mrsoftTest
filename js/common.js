
// var xhr = new XMLHttpRequest();
// xhr.addEventListener("readystatechange", function () {
//     if (this.readyState === 4) {
//         var res = JSON.parse(this.response);
//         var result = res.data.filter((str)=> str.length > count);
//         console.log(result)
//     }
// });
// xhr.open("GET", "http://www.mrsoft.by/data.json",true);
// xhr.send();
let promise = fetch('http://www.mrsoft.by/data.json')
    .then(function(response) {
        return response.json();
    });
function firstOut(){
    promise
        .then(function(res) {
        var result = res.data.filter((str)=> str.length > document.querySelector('input[type=text]').value);
        document.querySelector('.output p').innerHTML = result;
        }).catch((error)=>document.querySelector('.output p').innerHTML = error);
}


function secondOut(){
   if(document.querySelector('input[type=checkbox]').checked){
       promise
           .then(function(res) {
               var result = res.data.filter(function(str){

                   return str.toLowerCase().indexOf(document.querySelector('input[type=text]').value.toLowerCase()) > -1
               });
               document.querySelector('.output p').innerHTML = result.length+' совпадений '+'<br>'+result;;
           }).catch((error)=>document.querySelector('.output p').innerHTML = error);
   } else{
       promise
           .then(function(res) {
               var result = res.data.filter((str)=> str.indexOf(document.querySelector('input[type=text]').value) > -1);
               document.querySelector('.output p').innerHTML = result.length+' совпадений '+'<br>'+result;
           }).catch((error)=>document.querySelector('.output p').innerHTML = error);
   }
}


var first = document.querySelector('.first');
first.addEventListener('click', firstOut);

var second = document.querySelector('.second');
second.addEventListener('click', secondOut);

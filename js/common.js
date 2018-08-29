
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


function out(){
    fetch('http://www.mrsoft.by/data.json')
        .then(function(response) {
            return response.json();
        }).then(function(res) {
        var result = res.data.filter((str)=> str.length > document.querySelector('input[type=text]').value);
        document.querySelector('.output p').innerHTML = result;
    }).catch((error)=>console.log( error));
}


var first = document.querySelector('.first');
first.addEventListener('click', out);

var second = document.querySelector('.second');
second.addEventListener('click', out);

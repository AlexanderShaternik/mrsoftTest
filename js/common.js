
var xhr = new XMLHttpRequest();
// xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
        var result = JSON.parse(this.response);
        console.log(result.data);
    }
});
xhr.open("GET", "http://www.mrsoft.by/data.json",true);

xhr.send();


fetch('http://www.mrsoft.by/data.json')
    .then(function(response) {
    return response.json();
}).then(function(result) {
    console.log(result.data);
}).catch(function(error) {
    console.log( error);
});

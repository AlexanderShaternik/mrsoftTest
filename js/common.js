
// var xhr = new XMLHttpRequest();
// xhr.withCredentials = true;
//
// xhr.addEventListener("readystatechange", function () {
//     if (this.readyState === 4) {
//         console.log(this.responseText);
//     }
// });
// xhr.open("GET", "http://www.mrsoft.by/data.json",true);
//
// xhr.send();


fetch('http://www.mrsoft.by/data.json', {
    credentials: 'include',
    mode: 'cors',
})
    .then(function(response) {
    return response.json();
}).then(function(item) {
    console.log(item);
}).catch(function(error) {
    console.log( error);
});

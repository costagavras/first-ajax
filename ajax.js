document.addEventListener("DOMContentLoaded", function() {
// retrieves the information at the root path of the server,
// by sending an empty JavaScript object, and expecting a text response.

  /* Your code goes here */

var send_btn1 = document.getElementById('send_btn1');
var send_btn2 = document.getElementById('send_btn2');
var section2 = document.getElementById('step3456');
var br = document.createElement("br");
var send_btn3 = document.getElementById('send_btn3');
var section3 = document.getElementById('step7');
var send_btn4 = document.getElementById('send_btn4');
var send_btn5 = document.getElementById('send_btn5');
var section4 = document.getElementById('step8');
var section5 = document.getElementById('step9');

// 1-2
    send_btn1.addEventListener('click', function(event){

        var placeholder = axios.get('http://intro-ajax-api.herokuapp.com/');

        placeholder
            .then(function(response){
                var outputOk = document.createElement('span');
                outputOk.innerHTML = "Get request to http://intro-ajax-api.herokuapp.com/ worked!" + response.data;
                document.body.appendChild(outputOk);
            })
            .catch(function(err) {
                var outputNotOk = document.createElement('span');
                outputNotOk.innerHTML = "An error prevented the output to appear!";
                document.body.appendChild(outputNotOk);
            });
    });

// 3- 6
var send_btn2 = document.getElementById('send_btn2');

    send_btn2.addEventListener('click', function(event){

        var placeholder = axios.get('http://intro-ajax-api.herokuapp.com/pong');

        placeholder
            .then(function(response){
                var outputOk = document.createElement('span');
                outputOk.innerHTML = response.data;
                section2.appendChild(outputOk);
                outputOk.style.color = 'green';
                outputOk.style.fontSize = '30px';
            })
            .catch(function(error) {
                var errorMsg = document.createElement('span');
                var outputNotOk = document.createElement('span');
                errorMsg.innerHTML = error;
                outputNotOk.innerHTML = "You little no-good web user, learn how to spell the next time!";
                errorMsg.style.color = 'red';
                outputNotOk.style.color = 'red';
                errorMsg.style.fontSize = '20px';
                outputNotOk.style.fontSize = '30px';
                section2.appendChild(errorMsg);
                section2.appendChild(br);
                section2.appendChild(outputNotOk);
            })
            .then(function(response){
                var outputOk = document.createElement('span');
                outputOk.innerHTML = "And, by the way, the request is finished!";
                section2.appendChild(br);
                section2.appendChild(outputOk);
                outputOk.style.color = 'green';
                outputOk.style.fontSize = '30px';
            });
    });

// 7
    send_btn3.addEventListener('click', function(event){

        var placeholder = axios.get('http://intro-ajax-api.herokuapp.com/count');

        placeholder
        .then(function(response){
            var outputOk = document.createElement('span');
            outputOk.innerHTML = "No. of Bitmakers to visit this page: " + response.data;
            section3.appendChild(br);
            section3.appendChild(outputOk);
            outputOk.style.color = 'green';
            outputOk.style.fontSize = '30px';
        });
    });

// 8
    send_btn4.addEventListener('click', function(event){

        var placeholder = axios({
            url: 'http://intro-ajax-api.herokuapp.com/time',
            method: 'get',
            params: {timezone: 'Europe/Paris'},
            dataType: 'text',
          });

        placeholder
        .then(function(response){
            var outputOk = document.createElement('span');
            outputOk.innerHTML = "Time now: " + response.data;
            section4.appendChild(br);
            section4.appendChild(outputOk);
            outputOk.style.color = 'green';
            outputOk.style.fontSize = '30px';
        });
    });

// 9
    send_btn5.addEventListener('click', function(event){

        var placeholder = axios({
            url: 'http://intro-ajax-api.herokuapp.com/a_car',
            method: 'get',
            // params: {timezone: 'Europe/Paris'},
            dataType: 'html',
          });

        placeholder
        .then(function(response){
            var outputOk = document.createElement('span');
            var addUl = document.createElement('ul');
            addUl.id = 'car';
            outputOk.innerHTML = "This car is : " + response.data;
            section5.appendChild(br);
            section5.appendChild(addUl);
            addUl.appendChild(outputOk);
            outputOk.style.color = 'green';
            outputOk.style.fontSize = '30px';
        });
    });


});

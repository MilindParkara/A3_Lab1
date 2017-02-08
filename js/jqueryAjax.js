(function() {
	var httpRequest,
		ajaxText1 = document.querySelector('.modelName'),
		ajaxText2 = document.querySelector('.priceInfo'),
   ajaxText3 = document.querySelector('.modelDetails'),
    ajaxButton1 = document.querySelector('#newCar1'),
         ajaxButton2 = document.querySelector('#newCar2'),
         ajaxButton3 = document.querySelector('#newCar3'),

		function makeRequest1(url) {
			httpRequest = new XMLHttpRequest();

			if (!httpRequest) {
				alert('Giving up, your browser is way too old');
				return false;
			}

			httpRequest.onreadystatechange = showResult;
			httpRequest.open('GET', url);
			httpRequest.send();
		}
    
    function makeRequest2(url) {
			httpRequest = new XMLHttpRequest();

			if (!httpRequest) {
				alert('Giving up, your browser is way too old');
				return false;
			}

			httpRequest.onreadystatechange = showResult;
			httpRequest.open('GET', url);
			httpRequest.send();
		}
    function makeRequest3(url) {
			httpRequest = new XMLHttpRequest();

			if (!httpRequest) {
				alert('Giving up, your browser is way too old');
				return false;
			}

			httpRequest.onreadystatechange = showResult;
			httpRequest.open('GET', url);
			httpRequest.send();
		}

		function showResult() {
			if (httpRequest.readyState === XMLHttpRequest.DONE) {
				if(httpRequest.status === 200) {
					var response = httpRequest.responseText;
					ajaxText.innerHTML = response;
				} else {
					console.log('There was a problem with your request');
				}
			}
		}

		ajaxButton1.addEventListener('click', function() { makeRequest1('text.txt'); }, false);
    ajaxButton2.addEventListener('click', function() { makeRequest2('text.txt'); }, false);
    ajaxButton3.addEventListener('click', function() { makeRequest3('text.txt'); }, false);
})();
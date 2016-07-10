
function checkEntry(){
	var entry_number = document.getElementById("prime-entry").value;
	var html = '<span>';
	/*integer check*/
	var is_int = isInt(entry_number);
	if (!is_int){
		html+=entry_number+" is not an integer! Enter an integer instead.";
	}else{
		entry_number = parseInt(entry_number,10);
		var biggest_denom = Math.ceil(Math.sqrt(entry_number));
		var is_prime=true;
		var denominators = new Array();

		for(var i=2; i<biggest_denom+1; i++){
			if(entry_number%i==0)
				is_prime=false;
				denominators.push(i);
		}
		
		if(is_prime){
			html+=entry_number+" is prime.";
		}else{
			html+=entry_number+" is not prime.";
			/*html+=entry_number+" is not prime. Its denominators are: ";
			for(idx in denominators){
				if(idx==denominators.length-1){
					html+=denominators[idx]+".";
				}
				else{
					html+=denominators[idx]+", ";
				}
			}*/
		}
	}
	html+="</span>";
	insertHtml('#entry-result', html);
};

function findClosestPrime(){
	var entry_number = document.getElementById("prime-entry").value;
	var html = '<span>';
	/*integer check*/
	var is_int = isInt(entry_number);
	if (!is_int){
		html+=entry_number+" is not an integer! Enter an integer instead.";
	}else{
		entry_number = parseInt(entry_number,10);
		var current_number = entry_number;
		var plus_minus = 0; /*To be added/subtracted from current number*/
		var up = true; /*true means add to current number, false means subtract*/
		while(true){
			if(up){
				current_number = entry_number + plus_minus;
			}
			else{
				current_number = entry_number - plus_minus;
			}
			var biggest_denom = Math.ceil(Math.sqrt(current_number));
			var is_prime = true;
			for(var i=2; i<=biggest_denom; i++){
				if(current_number%i==0)
					is_prime=false;
			}

			if (is_prime){
				html+="The closest prime is "+current_number+".";
				break;
			}else{
				if (!up){
					plus_minus+=1;
				}
				up = !up;
			}
		} /*End of while loop*/
	} /*End of else*/
	html+="</span>";
	insertHtml('#entry-result', html);
}

function findAllPrimes(globals){
	var entry_number = document.getElementById("maximum-entry").value;
	var html = '<span>';
	/*integer check*/
	var is_int = isInt(entry_number);
	var date = new Date();
	var before = date.getTime()/1000;
	if (!is_int){
/*		entry_number === parseInt(entry_number,10)){*/
		html+=entry_number+" is not an integer! Enter an integer instead.";
	}else{
		var primes = new Array(2);
		var use_timeout = document.querySelector("#timeout-checkbox").checked;
		
		for(var current_number=2; current_number <= entry_number; current_number++){
			var biggest_denom = Math.ceil(Math.sqrt(current_number));
			var is_prime = true;
			for(idx in primes){
				if(primes[idx]>biggest_denom){
					break;
				}
				if(current_number%primes[idx]==0)
					is_prime=false;
			}
			if(is_prime){
				primes.push(current_number);
			}
			if(use_timeout){
				now = Date.now()/1000;
				if(now-before>3){ /*Greater than # seconds*/
					alert("Took too long!");
					break;
				}
			}
		} /*End of for loop*/
		html+="Primes: ";
		for(idx in primes){
			if(idx==primes.length-1){
				html+=primes[idx]+".";
			}else{
				html+=primes[idx]+", ";
			}
		}
	} /*End of else*/

	html+="</span>";
	insertHtml('#all-primes-result', html);

}

function isInt(value) {
  return !isNaN(value) && (function(x) { return (x | 0) === x; })(parseFloat(value))
}

var insertHtml = function (selector, html) {
	var targetElem = document.querySelector(selector);
	targetElem.innerHTML = html;
};

document.querySelector("#check-button").addEventListener("click", checkEntry);
document.querySelector("#find-closest-button").addEventListener("click", findClosestPrime);
document.querySelector("#find-primes-button").addEventListener("click", findAllPrimes);


document.getElementById("prime-entry")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        document.getElementById("check-button").click();
    }
});

document.getElementById("maximum-entry")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        document.getElementById("find-primes-button").click();
    }
});

document.getElementById("timeout-checkbox").click();
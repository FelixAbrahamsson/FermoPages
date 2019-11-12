function ord(str){return str.charCodeAt(0);}
function chr(idx){return String.fromCharCode(idx);}


function checkEntry(){
	var entry = document.getElementById("pw_entry").value;

	mesh_hash = [
		152,
		170,
		186,
		229,
		162,
		226,
		170,
		120,
		150,
		193,
		205,
		214,
		174,
		161,
		190,
		121,
		89,
		109,
		113,
		121
	]

	entry_hash = []
	for (var i = 0; i < entry.length; i++) {
		  entry_hash.push(ord(entry.charAt(i)));
	}

	for (var i = 0; i < mesh_hash.length - entry.length; i++) {
		  entry_hash.push(0);
	}
	extracted = ''
	for (var i = 0; i < mesh_hash.length; i++) {
		  extracted += chr(mesh_hash[i] - entry_hash[i])
	}

	var html = '<span>' + extracted + '</span>';
	insertHtml('#entry-result', html);
};


function isInt(value) {
  return !isNaN(value) && (function(x) { return (x | 0) === x; })(parseFloat(value))
}

var insertHtml = function (selector, html, overwrite) {
	if (overwrite === undefined){
		overwrite=true; /*default value is to overwrite*/
	}else{
		overwrite=false;
	}

	var targetElem = document.querySelector(selector);
	if(overwrite==true){
		targetElem.innerHTML = html;
	}else{
		targetElem.innerHTML += html;
	}

};

document.querySelector("#check-button").addEventListener("click", checkEntry);


document.getElementById("pw_entry")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        document.getElementById("check-button").click();
    }
});

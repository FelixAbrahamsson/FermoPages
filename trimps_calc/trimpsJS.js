

function doCalculations(){
	var carp = {"name":"Carpentry",
					"cost":document.getElementById("carp-entry").value};

	var coord = {"name":"Coordinated",
					"cost":2.5*carp.cost};

	var art = {"name":"Artisantry",
					"cost":carp.cost*0.25};

	var loot = {"name":"Looting",
					"cost":art.cost};

	var reso = {"name":"Resourceful",
					"cost":0.5*art.cost};

	var resi = {"name":"Resilience",
					"cost":0.5*art.cost};

	var power = {"name":"Power",
					"cost":0.25*art.cost};

	var moti = {"name":"Motivation",
					"cost":0.2*art.cost};

	var tough = {"name":"Toughness",
					"cost":(1.0/3.0)*power.cost};

	var phero = {"name":"Pheromones",
					"cost":0.5*tough.cost};

	var perks_list = new Array();
	perks_list.push(coord)
	perks_list.push(resi)
	perks_list.push(carp)
	perks_list.push(art)
	perks_list.push(phero)
	perks_list.push(moti)
	perks_list.push(power)
	perks_list.push(tough)
	perks_list.push(loot)

	var html="";
	for(var idx in perks_list){

		html += "<li>"+'<span class="name-span">'+perks_list[idx].name+": "+ "</span>" +
			'<span class="cost-span">'+Number(perks_list[idx].cost).toFixed(3)+'</span>'+"</li>";
	}
	insertHtml("#perks-list",html)

};

var insertHtml = function (selector, html) {
	var targetElem = document.querySelector(selector);
	targetElem.innerHTML = html;
};

document.querySelector("#carp-entry").addEventListener("input", doCalculations);
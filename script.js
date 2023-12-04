var x = prompt("How many Lotto Picks do you want?");
var lotto = [];
var lottoPicks = "";
//var lottoPicks2 ="";

if (x == null||x > "5") {
	alert("Input cannot be null or greater than 8");
	window.location.reload();
}

for (var i = 0; i < x; i++)
{
	lotto[i] = Math.ceil(Math.random() * 100);
}

for (var i = 0; i <lotto.length; i++)
{
	if (i == 0) lottoPicks += lotto[i];
	else lottoPicks += "-" + lotto[i];
}

console.log(lottoPicks);

document.getElementById("btn").addEventListener("click", displayans);

function displayans() {
	document.getElementById("result").innerHTML = lottoPicks;
}

document.getElementById("btn2").addEventListener("click", displayddd);

function displayddd() {
lottoPicks = 0;
for (var i = 0; i < x; i++) {
	lotto[i] = Math.ceil(Math.random() * 100);
}

for (var i = 0; i <lotto.length; i++) {
	if (i == 0) lottoPicks += lotto[i];
		else lottoPicks += "-" + lotto[i];
}
document.getElementById("newresult").innerHTML = lottoPicks;

}






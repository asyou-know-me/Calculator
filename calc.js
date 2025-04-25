
const display = document.getElementById("display");

    function appendFnc(input){
	display.value += input;
   }
let calcu = document.getElementById("btn1");

	function calcuFnc(input){
		try{
			display.value = eval(display.value);
		}
		catch(err){
			display.value = "Error";
		}
	}

	let clear = document.getElementById("btn1");

	function clearFnc(input){
		display.value = "";
	}
const textField = document.getElementById("result");
let toBeCleared = false;

const appendForCalculation = (symbol) => {
	if (toBeCleared) {
		clearText();
	}
	textField.value = textField.value + symbol;
};

const calculate = () => {
	toBeCleared = true;
	textField.value += " = " + eval(textField.value);
};

const clearText = () => {
	textField.value = "";
	toBeCleared = false;
};

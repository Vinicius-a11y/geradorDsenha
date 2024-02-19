//Seleção de Elementos
const generatePasswordButton = document.querySelector("#generate-passaword");
const generatePasswordElement = document.querySelector("#generated-passaword");

//Funções
const getLetterLowerCase = () => {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

const getLetterUpperCase = () => {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

const getNumber = () => {
	return Math.floor(Math.random() * 10).toString();
};

const getSymbol = () => {
	const symbols = "(){}[]=<>/,.!@#$%&8+=-";
	return symbols[Math.floor(Math.random() * symbols.length)];
};

const generataPassword = (getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol) => {
	let passaword = "";

	const passawordLength = 10;

	const generators = [getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol];

	for (i = 0; i < passawordLength; i = i + 4) {
		generators.forEach(() => {
			const randomValue = generators[Math.floor(Math.random() * generators.length)]();

			passaword += randomValue;
		});
	}
	passaword = passaword.slice(0, passawordLength);

	generatePasswordElement.style.display = "block";
	generatePasswordElement.querySelector("h4").innerText = passaword;
};

//Eventos
generatePasswordButton.addEventListener("click", () => {
	generataPassword(getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol);
});

//Seleção de Elementos
const generatePasswordButton = document.querySelector("#generate-password");
const generatePasswordElement = document.querySelector("#generated-password");

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

const generatePassword = () => {
	let password = "";
	const passwordLength = 10;
	const generators = [getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol];

	for (let i = 0; i < passwordLength; i++) {
		const randomIndex = Math.floor(Math.random() * generators.length);
		const randomCharacter = generators[randomIndex]();
		password += randomCharacter;
	}

	generatePasswordElement.style.display = "block";
	generatePasswordElement.querySelector("h4").innerText = password;
};

//Eventos
generatePasswordButton.addEventListener("click", generatePassword);

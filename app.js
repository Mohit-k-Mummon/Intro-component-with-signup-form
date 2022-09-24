// Variables

// Button
const submit = document.querySelector('#submit');

// Inputs
const form = document.querySelector('.block__card-form');

// Error Messages
const errorMessage1 = document.querySelector('.F-name-error-message');
const errorMessage2 = document.querySelector('.L-name-error-message');
const errorMessage3 = document.querySelector('.Email-error-message');
const errorMessage4 = document.querySelector('.Password-error-message');

form.addEventListener('submit', validate);
submit.addEventListener('click', validate);

function validate(e) {
	e.preventDefault();

	const inputs = document.getElementsByTagName('input');
	let pass = 4;

	if (inputs[0].value === '') {
		errorMessage1.style.visibility = 'visible';
		inputs[0].parentNode.style.border = '2px solid var(--Red)';
		inputs[0].nextElementSibling.style.display = 'flex';
		pass--;
	} else {
		errorMessage1.style.visibility = 'hidden';
		inputs[0].parentNode.style.border = '1px solid var(--Grayish-Blue)';
		inputs[0].nextElementSibling.style.display = 'none';
	}
	if (inputs[1].value === '') {
		errorMessage2.style.visibility = 'visible';
		inputs[1].parentNode.style.border = '2px solid var(--Red)';
		inputs[1].nextElementSibling.style.display = 'flex';
		pass--;
	} else {
		errorMessage2.style.visibility = 'hidden';
		inputs[1].parentNode.style.border = '1px solid var(--Grayish-Blue)';
		inputs[1].nextElementSibling.style.display = 'none';
	}
	if (inputs[2].value === '' || !isEmail(inputs[2].value)) {
		errorMessage3.style.visibility = 'visible';
		inputs[2].parentNode.style.border = '2px solid var(--Red)';
		inputs[2].nextElementSibling.style.display = 'flex';
		pass--;
	} else {
		errorMessage3.style.visibility = 'hidden';
		inputs[2].parentNode.style.border = '1px solid var(--Grayish-Blue)';
		inputs[2].nextElementSibling.style.display = 'none';
	}
	if (inputs[3].value === '') {
		errorMessage4.style.visibility = 'visible';
		inputs[3].parentNode.style.border = '2px solid var(--Red)';
		inputs[3].nextElementSibling.style.display = 'flex';
		pass--;
	} else {
		errorMessage4.style.visibility = 'hidden';
		inputs[3].parentNode.style.border = '1px solid var(--Grayish-Blue)';
		inputs[3].nextElementSibling.style.display = 'none';
	}
	if (pass === 4) {
		alert('Success');
		console.log(pass);
	} else {
		alert('Error');
		console.log(pass);
	}
}

// Regex function
function isEmail(input) {
	return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input);
}

/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = 'Jeeyoung Madsen';
const currentYear = new Date().getFullYear();
const profilePicture = "images/jeeyoung.png";

/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
// const foodElement = document.getElementById('#food');
const foodElement = document.querySelector('#food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');

// console.log(nameElement.textContent);

/* Step 4 - Adding Content */

// yearElement.textContent = currentYear;
nameElement.innerHTML = `<strong>${fullName}</strong>`;
// nameElement.textcontecnt = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `This is ${fullName}. She is a student in the CSE Class at BYUI`);



/* Step 5 - Array */

let favFoods = ['Kimchi', 'Dockbokgi', 'Strawberry', 'Sushi', 'Steak', 'Chicken'];
// foodElement.textContent = `${favFoods}`;
foodElement.innerHTML = favFoods;

let newFood = 'Boba';
favFoods.push(newFood);
foodElement.innerHTML += `<br>${favFoods}`;

favFoods.shift();
foodElement.innerHTML += `<br>${favFoods}`;

favFoods.pop();

foodElement.innerHTML += `<br>${favFoods}`;







console.log('HELLO');

// References
const generateButton = document.querySelector('button.generate');
const outerModal = document.querySelector('.outer-modal');
const innerModal = document.querySelector('.inner-modal');

//  Recipes object that will be accessed later

const recipes = [
	{
		title: 'Eggs',
		picture: 'https://bit.ly/2ZXyiKI',
		author: 'Loïc',
		difficulty: 'easy',
		timing: '15',
		ingredients: ['eggs', 'salt', 'water'],
		steps: [
			'Put a pan on the fire',
			'Crack the eggs on it',
			'Wait, put them out',
			'Add some salt on it',
		],
		id: 'eggs-recipe',
	},
	{
		title: 'Eggs',
		picture: 'https://bit.ly/2ZXyiKI',
		author: 'Loïc',
		difficulty: 'easy',
		timing: '15',
		ingredients: ['eggs', 'salt', 'water'],
		steps: [
			'Put a pan on the fire',
			'Crack the eggs on it',
			'Wait, put them out',
			'Add some salt on it',
		],
		id: 'fish-recipe',
	},
	{
		title: 'My recipe',
		picture: 'https://bit.ly/2ZXyiKI',
		author: 'Loïc',
		difficulty: 'easy',
		timing: '15',
		ingredients: ['eggs', 'salt', 'water'],
		steps: [
			'Put a pan on the fire',
			'Crack the eggs on it',
			'Wait, put them out',
			'Add some salt on it',
		],
		id: 'chicken-recipe',
	},
];

// Creat card Html and put contents which are accessed from the array obj and add append it to DOM

const renderCard = () => {
    for(let i = 0; i < recipes.length; i++) {
      const myHtml = `
        <article class ="cards" data-id="${recipes.id}">
          <h2>${recipes[i].title}</h2>
          <img src="${recipes[i].picture}"></img>
          <div class="card">
            <p>${recipes[i].difficulty}</p>
            <p>${recipes[i].timing}</p>
            <p>${recipes[i].author}</p>
          </div>
          <button type="button" class="show-modal">More Info</button>
        </article>
      `

      // Append the Html to DOM

      const container = document.querySelector('.container');
      container.insertAdjacentHTML("beforeend", myHtml);
      console.log(container);
    };
  // check the recipes collection
	// generate the HTML
	// put it in the DOM
};

const handleModalButton = event => {
	if (event.target.matches('button.show-modal')) {
    const parent = event.target.closest('article');
    const id = parent.dataset.id;
    const object = recipes.find(recipeObj => recipeObj.id === id)
    outerModal.classList.add('open');
    const openModal = renderCard(object);
	innerModal.innerHTML = openModal;
    };
  };

// const closeModalWithEscapeKey = event => {
// 	if (event.key === 'Escape') {
// 		outerModal.classList.remove('open');
// 	}
// };

generateButton.addEventListener('click', renderCard);
// window.addEventListener('keydown', closeModalWithEscapeKey);
window.addEventListener('click', handleModalButton);

// <article>
// <p></p>
// <img src=""></img>
// <div class="card-title">
//   <p></p>
//   <p></p>
// </div>
// <div class="card-list">
//   <ol>
//     <li></li>
//     <li></li>
//     <li></li>
//   </ol>
//   <ul>
//     <li></li>
//     <li></li>
//     <li></li>
//   </ul>
// </div>
// </article>


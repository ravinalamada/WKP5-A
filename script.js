console.log('HELLO');

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
		id: 1596168482053,
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
		id: 1596168522409,
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
		id: 1596168522409,
	},
];

const renderCard = () => {
    // const keys = Object.keys(recipes[0]);
    // var div = '<div class=container>'
    for(let i = 0; i < recipes.length; i++) {
      const myHtml = `
        <div class ="cards">
          <h2>${recipes[i].title}</h2>
          <img src="${recipes[i].picture}"></img>
          <div class="card">
            <p>${recipes[i].difficulty}</p>
            <p>${recipes[i].timing}</p>
            <p>${recipes[i].author}</p>
          </div>
          <button type="button" class="button">More Info</button>
        </div>
      `
      const container = document.querySelector('.container');
      container.insertAdjacentHTML("beforeend", myHtml);
      console.log(container);
    };
  // check the recipes collection
	// generate the HTML
	// put it in the DOM
};


const generateButton = document.querySelector('button.generate');
generateButton.addEventListener('click', renderCard);

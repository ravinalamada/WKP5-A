console.log('HELLO');

// References
const container = document.querySelector('.container');
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
    id: 1596168482053,
  },
  {
    title: 'Burger',
    picture: 'https://res.cloudinary.com/hv9ssmzrz/image/fetch/c_fill,f_auto,h_600,q_auto,w_800/https://s3-eu-west-1.amazonaws.com/images-ca-1-0-1-eu/tag_photos/original/1288/burger_flickr_6870386851_9fec857cec_b.jpg',
    author: 'Loïc',
    difficulty: 'easy',
    timing: '15',
    ingredients: ['eggs', 'salt', 'water'],
    steps: ['Grill the meat',
      'Put it inside two buns',
      'Add salad',
      'And so on.'
    ],
    id: 1596168522409,
  },
  {
    title: 'Fish',
    picture: 'fish-dish.jpg',
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
    id: 1596168522407,
  },
];

// Creat card Html and put contents which are accessed from the array obj and add append it to DOM

const renderCard = () => {
  for (let i = 0; i < recipes.length; i++) {
    const author = recipes[i].author;
    const recipeSteps = recipes[i].steps;
    const recipeIngredients = recipes[i].ingredients;
    let stepContents = "";
    recipeSteps.forEach(addSteps);
    function addSteps(value) {
      stepContents += "<li>" + value + "</li>";
    };
    let ingredientContents = "";
    recipeIngredients.forEach(addIngredients);
    function addIngredients(value) {
      ingredientContents += "<li>" + value + "</li>";
    };
    const myHtml = `
        <article class ="cards" data-id="${recipes.id}" data-steps="${stepContents}" data-ingredients="${ingredientContents}" data-author="${author}">
          <h2>${recipes[i].title}</h2>
          <img src="${recipes[i].picture}"></img>
          <div class="card">
            <p class='difficulty'>Time: ${recipes[i].difficulty}</p>
            <p class='timing'>Difficulty: ${recipes[i].timing}</p>
          </div>
          <button type="button" class="show-modal">More Info</button>
        </article>
      `
    // Append the Html to DOM
    container.insertAdjacentHTML("beforeend", myHtml);
  };

  // Generate Button that will show the form
  const showFormBtn = `<button type="button" class="showFormBtn">Add a recipe</button>`;
  container.insertAdjacentHTML('afterend', showFormBtn);
};

// Close the modal

const openModal = () => {
  outerModal.classList.add('open');
};


const handleModalButton = event => {
  if (event.target.matches('button.show-modal')) {
    const parent = event.target.closest('article');
    const title = parent.querySelector('h2').textContent;
    const { author, ingredients, steps } = parent.dataset;
    const picture = parent.querySelector('img').src;
    const difficulty = parent.querySelector('.difficulty').textContent;
    const timing = parent.querySelector('.timing').textContent;
    const id = Number(parent.dataset.id);
    const recipe = recipes.find(recipe => recipe.id === id);
    openModal(recipe);
    innerModal.innerHTML = `
          <article class="cards">
          <p>${title} by ${author}</p>
          <img src="${picture}"></img>
          <div class="card-title">
            <p>${difficulty}</p>
            <p>${timing}</p>
          </div>
          <div class="card-list">
            <ol>
              ${ingredients}
            </ol>
            <ul>
              ${steps}
            </ul>
          </div>
          </article>`
  };
};

// Generate form modal

const creatFormMoadal = (e) => {
  if (e.target.matches('button.showFormBtn')) {
    innerModal.innerHTML = `
        <form id="addRecipeForm">
        <label for="title">What's the recipe name?</label>
        <input
          id="title"
          name="title"
          type="text"
          placeholder="The name of your recipe"
          value="Eggs"
        />
        <label for="picture">Picture of the result (URL)</label>
        <input
          type="url"
          id="picture"
          name="picture"
          placeholder="Enter the URL of your picture"
          value="https://bit.ly/2ByKjgb"
        />
        <label for="author">Who's the chef?</label>
        <input
          type="Text"
          name="author"
          id="author"
          placeholder="Type in the chef's name"
          value="Loïc"
        />
        <label for="difficulty">What's the difficulty?</label>
        <select name="difficulty" id="difficulty">
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <label for="timing">How much time does it take?</label>
        <select name="timing" id="timing">
          <option value="<15min">Less than 15 minutes</option>
          <option value="15min">15 minutes</option>
          <option value="30min">30 minutes</option>
          <option value="45min">45 minutes</option>
          <option value="60min">1 hour</option>
          <option value=">60min">More than an hour</option>
        </select>
        <label for="ingredient1">Ingredients</label>
        <ul id="ingredientList">
          <li class="ingredientsItem">
            <input
              type="text"
              id="ingredient1"
              name="ingredient1"
              value="Ingredient 1"
            />
          </li>
        </ul>
        <button type="button" class="addIngredient">
          Add a new ingredient to the list
        </button>
        <label for="step1">Steps</label>
        <ul id="stepList">
          <li class="stepItem">
            <input type="text" id="step1" name="step1" value="Step 1" />
          </li>
        </ul>
        <button type="button" class="addStep">
          Add a new step to the list
        </button>
        <button type="submit" class="addRecipe">Submit your recipe</button>
      </form>
    `
    openModal();
  };
};

// 1) Generate add ingredient input
const addIngredientInput = e => {
  if (e.target.matches('button.addIngredient')) {
    const ingredientListElement = document.querySelector('#ingredientList');
    const liHTML = `
     <li>
        <input id="ingredient type="text" name="ingredient" value="Ingredient"/>
     </li>`;
    ingredientListElement.insertAdjacentHTML('beforeend', liHTML);
  };
};

// Submit form
const submitForm = (event) => {
  event.preventDefault();
  if (event.target.matches('button.addRecipe')) {
    const formEl = event.target.closest('#addRecipeForm');
    const heading = formEl.querySelector('#title');
    const author = formEl.querySelector("#author");
    const picture = formEl.querySelector('#picture').src;
    const difficulty = formEl.querySelector('#difficulty');
    const timing = formEl.querySelector('#timing');
    const ingredients = formEl.querySelector('#ingredientsItem');
    const steps = formEl.querySelector('#stepItem');
    const formHtml = `
    <article class="cards">
      <h2>${heading.value} by ${author.value}</h2>
      <img scr="${picture}"></img>
      <div>
        <p>${difficulty.value}</p>
        <p>${timing.value}</p>
      </div>
      <div>
        <p>${ingredients}</p>
        <p>${steps}</p>
      </div>
  `
    innerModal.innerHTML = formHtml;
    openModal();
  };

};
// Generate add steps

const addStepsInput = e => {
  if (e.target.matches('button.addStep')) {
    const ingredientListElement = document.querySelector('#stepList');
    const liHTML = `
     <li>
        <input id="steps type="text" name="step"/>
     </li>`;
    ingredientListElement.insertAdjacentHTML('beforeend', liHTML);
  };
};

// Handle the escape key to close the modal

const closeModalWithEscapeKey = event => {
  if (event.key === 'Escape') {
    outerModal.classList.remove('open');
  }
};

// Listen to the events

generateButton.addEventListener('click', renderCard);
window.addEventListener('click', handleModalButton);
window.addEventListener('click', creatFormMoadal);
window.addEventListener('click', addIngredientInput);
window.addEventListener('click', addStepsInput);
window.addEventListener('click', submitForm);
window.addEventListener('keydown', closeModalWithEscapeKey);




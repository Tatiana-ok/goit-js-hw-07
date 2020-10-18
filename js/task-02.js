const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const htmlNode = document.querySelector('#ingredients');

const listOfIngredients = ingredients.map(ingredient => {
    const ingredientPoint = document.createElement('li');
    ingredientPoint.textContent = ingredient;
    return ingredientPoint;
});

htmlNode.append(...listOfIngredients);



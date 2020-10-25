const categories = document.querySelectorAll('.item');
console.log(`В списке ${categories.length} категории.`);

// for(let i = 0; i < categories.length; i += 1) {
//     const ulFirst = categories[i];
//     console.log(`Категория: ${ulFirst.firstElementChild.textContent}`);
//     console.log(`Количество элементов: ${ulFirst.lastElementChild.children.length}`);
// }

categories.forEach(function (categor) {
    const ulFirst = categor;
    console.log(`Категория: ${ulFirst.firstElementChild.textContent}`);
    console.log(`Количество элементов: ${ulFirst.lastElementChild.children.length}`);
});
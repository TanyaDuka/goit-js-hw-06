const categories = document.querySelectorAll('.item');

console.log(`Number of categories: ${categories.length}`);

for (let i = 0; i < categories.length; i += 1){
    console.log(`Category: ${categories[i].firstElementChild.textContent}`);
    console.log(`Elements: ${categories[i].firstElementChild.nextElementSibling.children.length}`);
}
// const categories = document.querySelectorAll('.item');
// console.log('Number of categories:', categories.length); 

// categories.forEach(category => {
//     console.log(`Category: ${category.firstElementChild.textContent}`);
//     console.log(`Elements: ${category.lastElementChild.children.length}`)
// })


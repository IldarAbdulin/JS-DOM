//Задание:
//Для первого и последнего элемента li для всех ul на данной странице
//добавьте сплошную красную рамку толщиной в 1px//

let elements = document.querySelectorAll('ul li:last-child , ul li:first-child');
for(element of elements){
    element.style.border = `1px solid red`
    element.style.padding = `10px`
}
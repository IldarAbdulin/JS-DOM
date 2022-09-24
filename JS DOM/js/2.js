
//Задание:Найдите на странице все элементы li, которые находятся в ul с классом border 
// и добавьте для них сплошную красную рамку толщиной в 1px

let listItems = document.querySelectorAll('.border:nth-child(5), .border li')
for (item of listItems){
    item.style.margin = '15px';
    item.style.border = '1px solid red'
}

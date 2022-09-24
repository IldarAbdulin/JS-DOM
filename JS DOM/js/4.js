
//Задание:
//Поменяйте вызовы методов getElementById, getElementsByName, getElementsByTagName, getElementsByClassName 
//на вызовы методов querySelector или querySelectorAll так, чтобы поведение сценария не изменилось.


// поиск по id (возвращается один элемент DOM)
// let paragraph = document.getElementById("first");
// paragraph.style.border = "2px solid red";

let paragraph = document.querySelector('#first');
paragraph.style.border = `2px solid red`;


// поиск по атрибуту name (возвращается коллекция элементов DOM)
// let radioButtons = document.getElementsByName("answer");
//     for (const button of radioButtons) {
//         button.checked = !button.checked; 
// }

let radioButtons = document.querySelectorAll('[name ="answer"]');
for(button of radioButtons){
    button.checked = !button.checked;
}


// поиск по имени тега (возвращается коллекция элементов DOM)
// let listItems = document.getElementsByTagName("li");
//     for (const item of listItems) {
//         item.style.margin = "2px";
//         item.style.border = "2px solid green";
// }

let listItems = document.querySelectorAll('li');
for (item of listItems){
    item.style.margin = `2px`;
    item.style.border = `2px solid red`
}
    


// поиск по css классу (возвращается коллекция элементов DOM)
// let lists = document.getElementsByClassName("my-list");
//     for (const list of lists) {
//         list.style.border = "2px solid blue";
// }

let lists = document.querySelectorAll('.my-list');
for(list of lists){
    list.style.border = `2px solid blue`
    list.style.padding = `10px`
}
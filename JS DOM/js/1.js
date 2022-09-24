//Задание:
//getRandomColor функция, которая возвращает случайно сгенерированный цвет в фомрмате #001122
//Используя функцию getRandomColor добавьте для каждого параграфа рамку случайного цвета

function getRandomColor() {
    let randomGenerateColor = 'abc123efgh890pgs';
    let color = '#';
    for (i = 0; i < 6 ; i++) {
        color += randomGenerateColor[Math.floor(Math.random() * 16)];
        console.log(color)
    }
    return color;
}

let paragraphs = document.getElementsByTagName('p');
    for (let paragraph of paragraphs) {
    paragraph.style.border = `10px solid ${getRandomColor() }`;
    paragraph.style.padding = `20px`;
}
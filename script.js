function generateRandomColor() {
    const colorArray = Object.keys(accountColors);
    const colorIndex = Math.floor(Math.random() * colorArray.length);

    const randomKey = colorArray[colorIndex];
    const randomColor = accountColors[randomKey];

    return randomColor;
}


/**
 *  POST mit Object.keys nutzen fürs Backend
 *  PUT zum anpassen von vorhandenen namen etc anpassen
 */
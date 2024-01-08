// console.log('connected')
function triangleAreaCalculation() {
    const baseField = document.getElementById('triangle-base');
    const baseText = baseField.value;
    const base = parseFloat(baseText);
    console.log(base);

    // height feild
    const heightField = document.getElementById('triangle-height');
    const heightText = heightField.value;
    const height = parseFloat(heightText);
    console.log(height);

    // calculation
    const area = 0.5 * base * height ;
    console.log(area);

    // calculation area showing
    const calcField = document.getElementById('triangle-area-calculation');
    calcField.innerText = area;
}

function rectangleAreaCalculation(){
    const rectWidthField = document.getElementById('rectangle-width');
    const rectWidthText = rectWidthField.value;
    const rectWidth = parseFloat(rectWidthText);
    console.log(rectWidth);

    const rectLengthField = document.getElementById('rectangle-length');
    const rectLengthText = rectLengthField.value;
    const rectLength = parseFloat(rectLengthText);
    console.log(rectLength);

    const rectArea = rectWidth * rectLength;
    console.log(rectArea);

    const calcArea = document.getElementById('rectangle-area-calculation');
    calcArea.innerText = rectArea;
}



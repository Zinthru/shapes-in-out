shapetarget = document.querySelector('#shape-target'),
shapeName = document.querySelector('#shape-name span'),
shapeWidth = document.querySelector('#width span'),
shapeHeight = document.querySelector('#height span'),
shapeRadius = document.querySelector('#radius span'),
shapeArea = document.querySelector('#area span'),
shapePerimeter = document.querySelector('#perimeter span');

class Shape {
    constructor(height, width, name){
    
        this.height = height;
        this.width = width;
        this.name = name;
    }
    createEle(){
        let divShape = document.createElement('div'),
            parseHeight = parseInt(this.height),
            parseWidth = parseInt(this.width);

        divShape.style.top = this.randNumb(0, (600 - parseHeight))+"px";
        divShape.style.left = this.randNumb(0, (600 - parseWidth))+"px";
        divShape.style.height = parseHeight+"px"; 
        divShape.style.width = parseWidth+"px"; 
        divShape.classList.add(this.className);

        if(this.className == "tri"){
            divShape.style.borderRightWidth = parseHeight + 'px';
            divShape.style.borderBottomWidth = parseHeight + 'px';
        } 

        shapetarget.appendChild(divShape);

        divShape.addEventListener('click', function(){
            let classN = this.getAttribute('class'),
                shapeWidth = this.offsetWidth,
                shapeHeight = this.offsetHeight,
                shapeRadius = shapeHeight / 2,
                shapeArea = shapeWidth * shapeHeight,
                shapePerimeter = (shapeWidth*2) + (shapeHeight*2);
            switch (classN) {
                case 'squa':
                    shapeName.innerHTML = 'Square';
                    print_widthHeight();
                    shapeArea.innerHTML = shapeArea;
                    shapePerimeter.innerHTML = shapePerimeter;
                    shapeRadius.innerHTML = '-';
                    break;
                case 'rect':
                    shapeName.innerHTML = 'Rectangle';
                    print_widthHeight();
                    shapeArea.innerHTML = shapeArea;
                    shapePerimeter.innerHTML = shapePerimeter; 
                    shapeRadius.innerHTML = '-';
                    break;
                case 'tri':
                    shapeName.innerHTML = 'Triangle';
                    print_widthHeight();
                    shapeArea.innerHTML = (shapeArea / 2).toFixed(0);
                    shapePerimeter.innerHTML = (Math.pow(shapePerimeter), 2).toFixed(0); 
                    shapeRadius.innerHTML = '-';
                    break;
                case 'circ':
                    shapeName.innerHTML = 'Circle';
                    print_widthHeight();
                    shapeArea.innerHTML = (Math.PI * (shapeRadius * shapeRadius)).toFixed(0);
                    shapePerimeter.innerHTML = (2 * Math.PI * shapeRadius).toFixed(0); 
                    shapeRadius.innerHTML = shapeRadius;
                    break;
            }
            function print_widthHeight(){
                shapeWidth.innerHTML = shapeWidth;
                shapeHeight.innerHTML = shapeHeight;
            }
            cl();
        });
        divShape.addEventListener('dblclick', function(){
            this.remove();
        });
    }
    randNumb(min, max){
        const random =  Math.floor( Math.random() * (max - min)) + min;
        return random;
    }
}       

class Circle extends Shape{
    constructor(height){
        super(height);
        this.width = height;
        this.name = 'circle';
    }
}
class Square extends Shape{
    constructor(height){
        super(height);
        this.width = height;
        this.name = 'square';
    }
}
class Rectangle extends Shape{
    constructor(height, width){
        super(height);
        this.height = height;
        this.width = width;
        this.name = 'rectangle';
        
    }
}
class Triangle extends Shape{
    constructor(height){
        super(height);
        this.height = height;
        this.width = height;
        this.name = 'triangle';
    }
}




window.addEventListener('DOMContentLoaded',function(){


    const circleSubmit = document.querySelector('.inputsCircle input[type="submit"]'),
            squareSubmit = document.querySelector('.inputsSquare input[type="submit"]'),
            rectSubmit = document.querySelector('.inputsRectangle input[type="submit"]'),
            triSubmit = document.querySelector('.inputsTriangle input[type="submit"]');
    // circle ------------------------------------------------------------------------------------------------------------------------------------------------------
    circleSubmit.addEventListener('click', function(){
        const invalid = document.querySelector('.inputsCircle input[type="number"]').value;
        if(invalid > 600){
            alert('Please enter a number that is 600 or less');
        } else {
            let shape = new Circle(invalid);
            shape.createEle();
        }
    });
    // square
    squareSubmit.addEventListener('click', function(){
        const invalid = document.querySelector('.inputsSquare input[type="number"]').value;
        if(invalid > 600){
            alert('Please enter a number that is 600 or less');
        } else {
            let shape = new Square(invalid);
            shape.createEle();
        }        
    });
    // rectangle
    rectSubmit.addEventListener('click', function(){
        const rectangleArray = document.querySelectorAll('.inputsRectangle input[type="number"]'),
            invalidOne = parseInt(rectangleArray[0].value),
            invalidTwo = parseInt(rectangleArray[1].value);
        if(invalidOne <= invalidTwo){
            alert('Rectangles width must be more than height.  Please change.');
        } else {
            if(invalidOne > 600){
                alert('Your width needs to be 600 or less. Please try again!');
            } else {
                let shape = new Rectangle(invalidTwo, invalidOne);
                shape.createEle();
            }
        }
    });
// triangle
    triSubmit.addEventListener('click', function(){
        const invalid = document.querySelector('.inputsTriangle input[type="number"]').value;
        if(invalid > 600){
            alert('Please enter a number that is 600 or less');
        } else {
            let shape = new Triangle(invalid);
            shape.createEle();
        }
    });
})

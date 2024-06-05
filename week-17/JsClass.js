class Square {
    type; // Public property
    #side; // Private property

    constructor(side) {
        this.#side = side;
        this.type = 'Square';
    }

    // Public function
    getArea() {
        let area = this.#side * this.#side;

        this.#print(area);

        return area;
    }

    // Private function
    #print(value) {
        console.log(value);
    }
}

const mySquare = new Square(20);
const area = mySquare.getArea(); // 400
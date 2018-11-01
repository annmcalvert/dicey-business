let dieArray = [];
let dieCounter = 1;

//creates object and div for each die
class Die {
    constructor() {
        this.name = `die${dieCounter}`;
        this.value = this.generateNumber();

        let dieDiv = $('<div>').text(this.value);
        //$(dieDiv).attr('id', `die${dieCounter}`);
        $(dieDiv).attr('id', this.name);
        $(dieDiv).addClass('die');
        $('#div').append(dieDiv);
    }

    //generates a number between 1 and 6
    generateNumber() {
        return Math.floor((Math.random() * 6) + 1);
    }

    //replaces value to new number and changes text in div
    roll() {
        this.value = this.generateNumber();
        $(`#${this.name}`).text(this.value);
    }
}

//creates a new die with the Die class, pushes object to array, and increases counter
$('#generateDieBtn').click(function () {
    let die = new Die();
    dieArray.push(die);
    dieCounter++
})

//calls .roll() for every die
$('#rollBtn').click(function () {
    dieArray.forEach(function (i) {
        i.roll();
    })
})

//alerts the sum of the dice
$('#SumBtn').click(function () {
    let sum = dieArray.reduce((acc, i) => {
        return acc + i.value;
    }, 0)
    alert(`The sum of all the die is ${sum}`);
})

//when div with class .die is clicked, the id for that div is retrieved
//the object with the same name as the div id is then returned
//that object is rolled.
$(document).on('click', '.die', function () {
    let id = $(this).attr('id');
    let thisObj = dieArray.find((i) => {
        return i.name === id;
    })
    thisObj.roll();
})

//when div with class .die is double clicked, the id for that div is retrieved
//the div is removed from the html
//the index of the object with the same name as the div id is then returned
//that object is removed from array
$(document).on('dblclick', '.die', function () {
    let id = $(this).attr('id');
    this.remove();
    let thisIndex = dieArray.findIndex((i) => {
        return i.name === id;
    })
    dieArray.splice(thisIndex, 1);
})
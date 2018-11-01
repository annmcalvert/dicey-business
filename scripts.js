let dieArray = [];
let dieCounter = 1;

class Die {
    constructor() {
        this.name = `die${dieCounter}`;
        this.value = this.generateNumber();

        let dieDiv = $('<div>').text(this.value);
        $(dieDiv).attr('id', `die${dieCounter}`);
        $(dieDiv).addClass('die');
        $('#div').append(dieDiv);

    }

    generateNumber() {
        return Math.floor((Math.random() * 6) + 1);
    }

    roll() {
        this.value = this.generateNumber();
        $(`#${this.name}`).text(this.value);
    }
}

$('#rollBtn').click(function () {
    dieArray.forEach(function (i) {
        i.roll();
    })
})

$('#generateDieBtn').click(function () {
    let die = new Die();
    dieArray.push(die);
    dieCounter++
})

$('#SumBtn').click(function () {
    let sum = dieArray.reduce((acc, i) => {
        return acc + i.value;
    },0)
    alert(`The sum of all the die is ${sum}`);
})
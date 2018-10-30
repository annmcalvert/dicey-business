class Die {
    constructor(value) {
        this.value = value;
    }

    roll() {
        let value = Math.floor((Math.random() * 6) + 1);
        return value;
    }
}

let dieCounter = 1;

$('#testBtn').click(function () {
    dieArray[0].roll();
})

$('#generateDie').click(function () {
    let die = new Die();
    let dieValue = die.roll();
    dieArray.push(die);
    console.log(dieArray);

    let dieDiv = $('<div>').text(dieValue);
    $(dieDiv).attr('id', dieCounter);
    $(dieDiv).addClass('die');
    $('#div').append(dieDiv);

    dieCounter++
}
)

let dieArray = [];
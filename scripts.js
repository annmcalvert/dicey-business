//die generation, random value, and array are working
//.roll() - I need to figure out how to push the new value to array
//do I need both firstValue and .roll()?

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
    dieArray.forEach(function(i) {
        i.roll();
    })


    console.log(dieArray[0].value);
})

$('#generateDieBtn').click(function () {
    let die = new Die();
    dieArray.push(die);
    console.log(dieArray);
    dieCounter++
}
)


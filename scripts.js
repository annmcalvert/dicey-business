class Die {
    constructor(value) {
        this.value = value;
    }

    roll() {
        let value = Math.floor((Math.random() * 6) + 1);
        console.log(value);
    }
}

let die1 = new Die();
die1.roll();

$('#generateDie').click(function() {
    let text
})
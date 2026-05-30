function checkNumber() {

    let numberInput = document.getElementById("number");
    let number = parseInt(numberInput.value, 10);

    if (number % 2 === 0) {
        alert("The number is even.");
    } else {
        alert("The number is odd.");
    }

    let output = "";
    for (let i = 1; i <= number; i++) {
        output += i;
        if (i < number) {
            output += ", ";
        }
    }

    console.log(`Numbers from 1 to ${number}: ${output}`);
    alert(`Numbers from 1 to ${number}:\n${output}`);
}
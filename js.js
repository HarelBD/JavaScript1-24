
// // תרגיל 1

function sendinfo() {
    const x = document.querySelector("#input_text").value;
    if (x % 2 == 0) {
        document.querySelector("p#answer").innerHTML = "This number is even"
        document.querySelector("p#answer").style.color = "green"

    }
    else {
        document.querySelector("p#answer").innerHTML = "This is not Even number"
        document.querySelector("p#answer").style.color = "red"
    }
}




// תרגיל 2



function check_avg_button() {
    let num1 = document.querySelector("#input_avg_num1").value
    let num2 = document.querySelector("#input_avg_num2").value
    let num3 = document.querySelector("#input_avg_num3").value
    let num4 = document.querySelector("#input_avg_num4").value
    let hiburInputs = ((Number(num1) + Number(num2) + Number(num3) + Number(num4)))
    total = hiburInputs / 4
    document.querySelector("#avg_answer").innerHTML = `the avarage is ${total}`
}


// תרגיל 3

function check_who_win() {
    let player1Name = document.querySelector("#input_player1_name").value;
    let player1Score = document.querySelector("#input_player1_score").value;

    let player2Name = document.querySelector("#input_player2_name").value;
    let player2Score = document.querySelector("#input_player2_score").value;

    if (Number(player1Score) === Number(player2Score)) {
        document.querySelector("#winner").innerHTML = `the Scores are EVEN  `
    }
    else if (Number(player1Score) > Number(player2Score)) {
        document.querySelector("#winner").innerHTML = `the winner is ${player1Name}`
    }
    else {
        document.querySelector("#winner").innerHTML = `the winner is ${player2Name}`
    }
}


// תרגיל 4

function check_hour_time() {
    let time = document.querySelector("#input_hour_time").value;

    if (time >= 5 && time <= 11) {
        document.querySelector("#time").innerHTML = `Good morning`
    }
    else if (time >= 12 && time <= 17) {
        document.querySelector("#time").innerHTML = `Good afternoon `
    }

    else if (time >= 18 && time <= 23) {
        document.querySelector("#time").innerHTML = `Good evening`
    }

    else {
        document.querySelector("#time").innerHTML = `Go to sleep...`
    }
}


// תרגיל 5

function check_railprofit_button() {


    let railCarNumber = document.querySelector("#input_railRoadCar_number").value;
    let timeOfDay = document.querySelector("#input_time_of_the_day").value;
    let driverSalary = document.querySelector("#input_driver_salary").value;
    const pplPerCar = 120;

    if (timeOfDay >= 6 && timeOfDay <= 11) {
        timeOfDay = 1;
    }
    else if (timeOfDay >= 12 && timeOfDay <= 17) {
        timeOfDay = 0.9;
    }
    else if (timeOfDay >= 18 && timeOfDay <= 23) {
        timeOfDay = 0.7;
    }

    else { timeOfDay = 0 }

    console.log(calculatePrice(railCarNumber, timeOfDay, driverSalary, pplPerCar));

}

function calculatePrice(railCarNumber, timeOfDay, driverSalary, pplPerCar) {
    let total = (((pplPerCar * timeOfDay) * 6.6 / 1.17 * railCarNumber) - driverSalary)
    document.querySelector("#profit").innerHTML = `the Profit is ${total} Shekels`

    if (total > 0) {
        document.querySelector("#profit").style.color = "green";
    }
    else {
        document.querySelector("#profit").style.color = "red";
    }
    return total;
}


// תרגיל 6


function check_car_price() {

    const carPrice = document.querySelector("#input_car_price").value,
        creditPayments = document.querySelector("#input_credit_payments").value,
        discount = 0.95,
        total = (carPrice * discount) / creditPayments;

    //here we check if total is a number OR total is not infinity
    if (isNaN(total) || total == Infinity) {
        //if true - total is NOT a number
        document.querySelector("#price").innerHTML = "please fill the empty Fields!"
        return;
    }

    document.querySelector("#price").innerHTML = `the price is ${total} Shekels after 5% Discount in ${creditPayments} Credit Monthly`;
}

// תרגיל 7

function check_ppl_num() {
    const pplInStation = document.querySelector("#input_ppl_num").value
    if (pplInStation < 12) {
        document.querySelector("#taxi").innerHTML = `There is not enough people in the station, the minimum is 12 people.`
    }
    else if (pplInStation == 12) {
        document.querySelector("#taxi").innerHTML = `You can take the ride.`
    }
    else if (pplInStation >= 12) {
        document.querySelector("#taxi").innerHTML = `The taxi is full, the Number of people that stayed in the station is` + ` ` + (pplInStation - 12)

    }

}

// תרגיל 8

function check_students_num() {
    const students = document.querySelector("#input_student_num").value
    document.querySelector("#Guard").innerHTML = (Math.ceil(students / 30)) + ` Guards and Paramedics.`
    document.querySelector("#First_Help").innerHTML = (Math.ceil(students / 50)) + ` FirstHelp Bag`
}

// תרגיל 9


function my_foo() {
    let foo = document.querySelector("#input_foo").value
    if (foo === `Thursday` || foo === `thursday` || foo === `5`)
        console.log("yay!")
}



// תרגיל 10


function check_bmi() {
    const mishkal = document.querySelector("#input_bmi").value

    if (mishkal == "") {
        alert("Empty Field, Please fill the Field!")
    }
    else if (mishkal <= 18) {
        alert("Your BMI Is too Low!!!")
    }
    else if (mishkal >= 25) {
        alert("Your BMI is too HIGH!")
    }
    else {
        alert("Your BMI is good!")
    }
}

// תרגיל 11


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


// תרגיל 12


function check_root() {
    let x = Math.sqrt(100);
    document.querySelector("#root").innerHTML = `the root is ${x}`
}


// תרגיל 13
function invisible_button() {
    document.querySelector.innerHTML = button2.style.display = "inline-block"
}

// תרגיל 14 נעשה בHTML

// תרגיל 15

function check_time_date() {
    const d = new Date();
    document.querySelector("#date_and_time").innerHTML = `the time is ${d}`
}

// תרגיל 16

function check_hello_num() {
    const x = document.querySelector("#input_hello_number").value;
    for (let i = 1; x >= i; i++) {
        document.querySelector("#hello_paragraph").innerHTML += `hello${i} `
    }
}


// תרגיל 17
function duplicate_user_text() {
    const x = document.querySelector("#input_user_text").value;
    for (let i = 1; i <= 10; i++) {
        document.querySelector("#user_text").innerHTML += `${i}.${x} `

    }
}

// תרגיל 18
function num_a_or_b() {
    const x = document.querySelector("#input_text_a").value,
        y = document.querySelector("#input_text_b").value;

    if (x > y) {
        alert(`score number 1 is bigger = ${x} `)
    }
    else {
        alert(`score number 2 is bigger = ${y} `)

    }
}


// תרגיל 19
function calc_price_tip() {
    const foodPrice = document.querySelector("#input_food_price").value,
        tipPrice = document.querySelector("#input_tip_price").value;
    const total = (foodPrice * tipPrice) / 100
    document.querySelector("#dining_price").innerHTML = `the price of the food is ${foodPrice}₪ and the tip is ${total}₪`
}

// תרגיל 20
let tuzaa = document.querySelector("#myScore");
let misparMishtane = 0;

function btn_up() {
    misparMishtane++;
    tuzaa.innerHTML = misparMishtane;
}

function btn_down() {
    misparMishtane--;
    tuzaa.innerHTML = misparMishtane;
}

function btn_reset() {
    misparMishtane = 0;
    tuzaa.innerHTML = misparMishtane;
}

// תרגיל 21
function btn_quote() {
    const quotes = ["The greatest glory in living lies not in never falling, but in rising every time we fall.", "The way to get started is to quit talking and begin doing", "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma  which is living with the results of other people's thinking.", "If life were predictable it would cease to be life, and be without flavor. -Eleanor Roosevelt", "f you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough", "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.", "Life is what happens when you're busy making other plans", "Spread love everywhere you go. Let no one ever come to you without leaving happier.", "When you reach the end of your rope, tie a knot in it and hang on.", "Always remember that you are absolutely unique. Just like everyone else"]
    const random = Math.floor(Math.random() * quotes.length);
    document.querySelector("#quote_text").innerHTML = quotes[random]
}

// תרגיל 22
function btn_names() {
    const fiveNames = ["david", "Shon", "Lior", "Itzik", "Sean"]
    console.log(fiveNames)
}

// תרגיל 23
let books = [];
const piska = document.querySelector("#book_p")
function btn_books1() {
    const addBooks = document.querySelector("#books_input").value;
    if (addBooks == "") {
        piska.innerHTML = `please enter a name of a book`;
    return
    }
    else {
        piska.innerHTML ="";
    }

    books.push(addBooks);
}
function btn_books2() {
    for(let i=0;i<books.length;i++)
    piska.innerHTML += books[i] + "<br>"
}


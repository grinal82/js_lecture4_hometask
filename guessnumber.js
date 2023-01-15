const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");

const rl = readline.createInterface({ input, output });

let numberToGuess = Math.floor(Math.random() * 100);
console.log(`Загадано число ${numberToGuess}`);

let counter = 1;

function game() {
    rl.question(
        'Введите число от 1 до 100 или нажмите "q" для выхода: ',
        (input) => {
            let userGuess = +input;
            if (isNaN(userGuess)) {
                console.log("Вы ввели не число....повторите попытку");
                counter++;
            } else if (numberToGuess == userGuess) {
                console.log(
                    `Поздравляю, Вы угадали!!! Загаданный номер был: ${numberToGuess}. Вам понадобилось ${+counter} попыток\n`
                );
                rl.close();
                return;
            } else if (userGuess > numberToGuess) {
                console.log(
                    `Загаданное число меньше введенного Вами! Попробуйте снова. Вы использовали ${counter} попыток`
                );
                counter++;
            } else if (userGuess < numberToGuess) {
                console.log(
                    `Загаданное число больше введенного Вами! Попробуйте снова. Вы использовали ${counter} попыток`
                );
                counter++;
            }
            game();
        }
    );
}

game();

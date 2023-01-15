function setPassword(password) {
    return function getPasswordChecker(userInput) {
        if (password == userInput) {
            return true;
        } else {
            return false;
        }
    };
}

const truePassword = setPassword("alex123");

console.log(truePassword("alex12"));
console.log(truePassword("checking_function"));
console.log(truePassword("alex123"));

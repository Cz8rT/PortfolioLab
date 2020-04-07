// Email validation
const emailValidation = (value) => {

    const forbiddenChars = ["!", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+",
        "=", "{", "}", "[", "]", ":", ";", '"', "'", "|", ",", "<", ">", "/", "`", "?", "~"];

    // Checking if user email contains forbidden chars method
    const forbiddenSearch = (value) => {
        const splitEmail = value.split("");
        for (let i = 0; i < forbiddenChars.length; i++) {
            if (splitEmail.includes(forbiddenChars[i])) {
                return true;
            }
        }
    };

    // Checking if user email contains "@" method
    const atSearch = (value) => {
        let atCounter = 0;
        const splitEmail = value.split("");
        for (let i = 0; i < splitEmail.length; i++) {
            if (splitEmail[i] === "@") {
                atCounter++
            }
        }
        return atCounter
    };

    // Conditions for user email to be valid
    if (value.length === 0) {
        return "Podany email jest nieprawidłowy!"
    } else if (value.split("").includes(" ")) {
        return "Email nie może zawierać spacji!"
    } else if (forbiddenSearch(value)) {
        return "Email nie może zawierać niedozwolonych znaków!"
    } else if (atSearch(value) === 0) {
        return 'Email musi zawierać znak "@"!'
    } else if (atSearch(value) > 1) {
        return "Email nie może zawierać niedozwolonych znaków!"
    } else {
        return undefined
    }
};

// Name validation
 const firstNameValidation = (value) => {
    if (value.length === 0) {
        return "Podane imię jest nieprawidłowe!"
    } else if (value.split("").includes(" ")){
        return "Imię nie może zawierać spacji!"
    } else {
        return undefined
    }
};

 // Message validation
const messageValidation = (value) => {
    if (value.length < 120) {
        return "Wiadomość musi mieć conajmniej 120 znaków!"
    } else {
        return undefined
    }
};

 export {emailValidation, firstNameValidation, messageValidation};
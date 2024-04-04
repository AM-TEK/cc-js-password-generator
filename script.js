// const lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m,','n','o','p','q','r','s','t','u','v','w','x','y','z']
// let randomLowercase = []

function getPasswordLength() {
    const length = document.getElementById("length").value;
    return Number(length)
}

function getPasswordProperties() {
    // const lowercase = document.getElementById("lowercase")
    // const uppercase = document.getElementById("uppercase")
    // const numbers = document.getElementById("numbers")
    // const special = document.getElementById("special")
    const ids = ["lowercase", "uppercase", "numbers", "special"]
    const properties = {}
    for (const id of ids) {
        const element = document.getElementById(id)
        properties[id] = element.checked
    }
    return properties
}

function getChars(lowercase = true) {
    const start = lowercase ? 97 : 65;
    let chars = [];

    for (let i = start; i < start + 26; i++) {
        chars.push(String.fromCharCode(i))
    }
    return chars
}

function getNumbers() {
    return [0,1,2,3,4,5,6,7,8,9]
}

function getSpecialChars() {
    const start = 33
    let chars = []

    for (let i = start; i < start + 14; i++) {
        chars.push(String.fromCharCode(i))
    }
    return chars
}

const lowercaseChars = getChars(true)
const uppercaseChars = getChars(false)
const numbers = getNumbers()
const special = getSpecialChars()

function generatePassword() {
    const length = getPasswordLength()
    const properties = getPasswordProperties()

    //create array with all possible characters
    const characters = []
    if (properties.lowercase) characters.push(...lowercaseChars)
    if (properties.uppercase) characters.push(...uppercaseChars)
    if (properties.numbers) characters.push(...numbers)
    if (properties.special) characters.push(...special)

    if (characters.length === 0) {
        return alert("You must check one set of characters.")
    }
    
    let pwd = []
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length)
        const char = characters[randomIndex]
        pwd.push(char)
    }
    const pwdString = pwd.join("")
    document.getElementById("password").innerHTML = "<p>" + pwdString + "</p>"
}


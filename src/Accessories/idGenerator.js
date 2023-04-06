const lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
const numbers = [1,2,3,4,5,6,7,8,9,0]
const all = [lowerCase,upperCase,numbers]

const random = (desire) => {
    return Math.floor(Math.random() * desire)
}

const creator = () => {
    const selected = all[random(3)];
    const selectedCharacter = selected[random(selected.length)]
    return selectedCharacter;
}

const generator = (name) => {
    const passwordContainer = [];
    for (let i=0; i<10; i++) {
        passwordContainer.push(creator())
    }
    const id = passwordContainer.join("");
    return name + id
}

export default generator;

function randomInt(low, high){
    return Math.floor(Math.random() * (high-low) + low)
}

randomVowel = _ => 'aeiouy'[randomInt(0, 6)]
let cons = 'wrtpsdfghjklzcvmnb'
randomCons = _ => cons[randomInt(0, cons.length)]
randomDigit = _ => (Math.floor(Math.random() * 10)) + ''
isVowel = l => 'aeiouy'.split('').includes(l)
isCons = l => 'qwrtpasdfghjklzxcvbnm'.split('').includes(l)
randomName = _ => {
    let name = ''
    let limit = randomInt(2, 12)
    let nCons = 0
    for(let i = 1; i<=limit; i++){
        if(nCons == 0){
            name += randomCons()
            nCons++
        } else if(randomInt(0, nCons) + 1 == 0){
            name += randomCons()
            nCons++
        } else {
            name += randomVowel()
            nCons = 0
        }
    }
    return name
}
randomNumber = _ => {
    let nr = ''
    let nDigits = randomInt(0, 5)
    for(let i = 0; i<nDigits; i++){
        nr += randomDigit()
    }
    return nr
}

module.exports = {
    newUser : {
        username: randomName() + randomNumber(),
        password: randomName() + randomNumber(),
        email: randomName() + '@' + randomName() + 'mail.com'
    },
    existingUser : {
        username: 'banana1',
        password: 'parola123',
        email: 'banana@ban.ana'
    },
    modifiedExistingUser : {
        username: 'banana1',
        password: 'CHANGEDPASS',
        email: 'CHANGEDMAIL'
    },
    modifiedExistingCard : {
        "id": 1,
        "name": "Chilyer, the Oracle - " + randomNumber(),
        "rarity": "Rarulus",
        "type": "Creature",
        "cost": "2",
        "src": "",
        "race": "Light Bringer",
        "power": "2575"
    },
    generateCard(){
        return {
            "name": randomName() + " " + randomName(),
            "rarity": "Rare",
            "type": "Creature",
            "cost": "5",
            "src": "",
            "race": "Light Bringer",
            "power": "5000"
        }
    },
    generateUser(){
        return {
            username: randomName() + randomNumber(),
            password: randomName() + randomNumber(),
            email: randomName() + '@' + randomName() + 'mail.com'
        }
    },
    generateDeck(){
        return {
            name: randomName() + ' ' + randomName()
        }
    }
}

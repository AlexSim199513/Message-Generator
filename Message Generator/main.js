//Creating a random message generator

let feeling = ['Lucky', 'Happy', 'Relaxed', 'Productive', 'Positive'];
let quotes = ['It always seems impossible until it\'s done.', 'If you can dream it, you can do it.', 'What you do today can improve all your tomorrows.', 'Start where you are. Use what you have. Do what you can.', 'With the new day comes new strength and new thoughts.']

const getRandomNumber = () => {
    return Math.floor(Math.random() * 5);
}

const getDailyMessage = () => {
    const todaysFeeling = feeling[getRandomNumber()];
    const todaysQuote = quotes[getRandomNumber()];

    return `Today is going to be a ${todaysFeeling} day. You're quote of the day is: "${todaysQuote}" Have a wonderful day!`
}

console.log(getDailyMessage())

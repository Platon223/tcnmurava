const telegramBot = require('node-telegram-bot-api');

const token = "7987605733:AAGx2MmLB1Q99xSjZNqSSW5BrKD4KzRRPwo";

const bot = new telegramBot(token, {polling: true});

console.log("hello");

const tsnWords = [
    
    {text1: 'глубин', text2: 'скважин'}, 
    {text1: 'Глубин', text2: 'Скважин'}, 
    {text1: 'глубин', text2: 'Скважин'},
    {text1: 'скважин', text2: 'Глубин'},
    {text1: 'СКВАЖИН', text2: 'ГЛУБИН'},
    {text1: 'СКВАЖИН', text2: 'глубин'},
    {text1: 'скважин', text2: 'ГЛУБИН'},
    {text1: 'СКВАЖИН', text2: 'Глубин'},
    {text1: 'Скважин', text2: 'ГЛУБИН'},
    {text1: 'скважин', text2: 'метров'},
    {text1: 'Скважин', text2: 'метров'},
    {text1: 'скважин', text2: 'Метров'}

];


bot.on('message', msg => {
    tsnWords.forEach(w => {
        try{
            if(msg.text.includes(w.text1) && msg.text.includes(w.text2)) {
                bot.sendMessage(msg.chat.id, `Привет, ${msg.from.last_name} Наши пользователи писали ранее, что зеркало воды находится на уровне 17 метров, поэтому скважину рекомендуется бурить до глубины 28 метров. Удачи!`);
            }
        } catch(err) {
            console.log(err);
        }
        
    })
})





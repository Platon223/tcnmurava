const telegramBot = require('node-telegram-bot-api');

const token = "7710814209:AAGnDBIReYMJ0WiJEQO6J_S_6HL2gHdLwgc";

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

 let isActive = true;


bot.on('message', msg => {
   
    tsnWords.forEach(w => {
        try{
            if(msg.text.includes(w.text1) && msg.text.includes(w.text2) && isActive) {
                bot.sendMessage(msg.chat.id, `Привет, ${msg.from.first_name}! Наши пользователи писали ранее, что зеркало воды находится на уровне 17 метров, поэтому скважину рекомендуется бурить до глубины 28 метров. Удачи!`);

                isActive = false;

                setTimeout(() => {
                    isActive = true;
                }, 5000);

                
            }
        } catch(err) {
            console.log(err);
        }
        
    })
})




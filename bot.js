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
                }, 86400000);

                
            }
        } catch(err) {
            console.log(err);
        }
        
    })

})

bot.on('new_chat_members', (msg) => {
    console.log('hello');
    const chatId = msg.chat.id;
  const newMembers = msg.new_chat_members;

  newMembers.forEach((member) => {
    const name = member.first_name || member.username || 'new user';
    bot.sendMessage(chatId, `${name}, добро пожаловать в группу жителей поселка Мурава! ✌

Просьба обсуждать в этом чате только вопросы, связанные с проживанием в нашем поселке.

Прежде чем написать свой вопрос проверьте, используя поиск, нет ли ответа на ваш вопрос в предыдущих сообщениях других пользователей.

Приветствуется доброжелательное вежливое обращение и уважение к чужим чувствам, достоинству, времени.

В нашей группе не допускается:
- неуважительное обращение, оскорбления, хамство
- реклама товаров, услуг, сайтов, каналов, групп
- публикация фото и видео сексуального характера

Надеемся, что данная группа будет служить для всех нас удобным и полезным инструментом решения возникающих вопросов в процессе проживания в нашем поселке.

С уважением,
Администрация ТСН Мурава`);
  });
})




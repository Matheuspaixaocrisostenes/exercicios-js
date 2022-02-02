const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('/5 * * * * *', function(){
    console.log('execultando tarefa1!', new Date().getSeconds());
})

setTimeout(function(){
    tarefa1.concel()
    console.log('Cancelando tarefa 1!');
}, 20000);

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1,5)]
regra.hour = 12
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log('Execultando Tarefa 2!', new Date().getSeconds());
})
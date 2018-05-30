function getMessage(){
    $.get('/data/messages').then(data =>{
        console.log(data);
    });
}
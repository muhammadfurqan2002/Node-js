const RESQUEST_TIMEOUT=500;

function encrypt(data){
    return "Encrypted Data"; 
}

send=(url , data)=>{
    const encryptData=encrypt(data);
    console.log(`Sended ${encryptData} to ${url}`) ;
}


module.exports={
    send:send,
    RESQUEST_TIMEOUT:RESQUEST_TIMEOUT
}












// vanilla js



// module.exports.RESQUEST_TIMEOUT=500;

// function encrypt(data){
//     return "Encrypted Data"; 
// }

//  module.exports.send=(url , data)=>{
//     const encryptData=encrypt(data);
//     console.log(`Sended ${encryptData} to ${url}`) ;
// }


// module.exports={
//     send:send,
//     RESQUEST_TIMEOUT:RESQUEST_TIMEOUT

// }

// module.exports={
//     send,
//     RESQUEST_TIMEOUT
// }























////////////////////////////// Using Vanilla javascript ////////////////////////////////////////////////////////////////


// module.exports.TIME_OUT=500;

// function encrypt(data){
//     return "Encrypted Data"; 
// }

// module.exports.send=(url , data)=>{
//     const encryptData=encrypt(data);
//     console.log(`Sended ${encryptData} to ${url}`) ;
// }


// exports.send=(url , data)=>{
//     const encryptData=encrypt(data);
//     console.log(`Sended ${encryptData} to ${url}`) ;
// }


// module.exports={
    // TIME_OUT
//     send:send,
//     // send
// }

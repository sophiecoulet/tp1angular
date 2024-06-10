
/**
 * Créez une fonction asynchrone qui attend 2 seconde
 * 
 * utilisez new Promise
 */

const sleep = () => new Promise((resolve) => {
    setTimeout(() => {
        console.log("wait 2 sec");
    }, 2000);
});
sleep();

module.exports = { sleep };
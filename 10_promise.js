
/**
 * Créez une fonction asynchrone qui attend 2 seconde
 * 
 * utilisez new Promise
 */

const sleep = () => new Promise((resolve) => {
    setTimeout(() => {
        //resolve(console.log("fini après 2 sec"));
        resolve();
    }, 2000);
});
const myPromise = sleep();
/*myPromise.then((resultat) => {
    console.log("fini après 2 sec");
});*/

module.exports = { sleep };
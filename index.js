const jsonfile = require("jsonfile");
const moment = require("moment");
const simpleGit = require("simple-git");
const FILE_PATH = './data.json';
const random= require('random');

const makeCommit = (n) => {
    if (n === 0) {
        return simpleGit().push();
    }
    const x= random.int(0, 54);
    const y = random.int(0,6);
    const DATE = moment().subtract(1, 'y').add(1, 'd').
                add(x, 'w').add(y, 'd').format();
    const data = {
        data: DATE
    }
    console.log(DATE);
    jsonfile.writeFile(FILE_PATH, data , () => {
        simpleGit().add('*').commit(DATE, {'--date': DATE} , makeCommit.bind(this, --n));
    })
}

makeCommit(100)
// const DATE = moment(new Date('08-15-2019')).format();
// const data = {
//     data: DATE
// }
// console.log(DATE)
// jsonfile.writeFile(FILE_PATH, data , () => {
//     simpleGit().add('*').commit(DATE, {'--date': DATE}).push();
// })

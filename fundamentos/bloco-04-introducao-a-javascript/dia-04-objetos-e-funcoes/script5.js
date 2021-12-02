let string = 'danada'


function check (string) {
    let str = string
    let reverse = str.split('').reverse().join('')
    if (string === reverse){
        return true;
    } else{
        return false;
    }
}

console.log(check('desenvolvimento'))
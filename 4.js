// Дана переменная str, в которой хранится какой-либо текст. 
// Реализуйте обрезание длинного текста по следующему принципу: 
// если количество символов этого текста больше заданного 
// в переменной n, то в переменную result запишем первые n символов 
// строки str и добавим в конец троеточие '...'. 
// В противном случае в переменную result запишем содержимое 
// переменной str.

const cutText = (n, str) => {
    let result
    return str.length > n ? result = str.slice(0, n) + '...' : result = str
}

console.log(cutText(5, 'lalala'));
console.log(cutText(5, 'Sunny'));
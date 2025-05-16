console.log(document.cookie)
document.cookie = "name=raushan1122334400"
document.cookie = "name2=raushan211223344002"
document.cookie = "name=raushan"
let key = prompt("enter your key")
let value = prompt("enter your value")
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
console.log(document.cookie)
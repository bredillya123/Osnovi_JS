"use strict"




let name = prompt('Как тебя зовут', '')

alert(`Тебя зовут ${name}`)





const year = 2020

let age = prompt('Сколько тебе лет?', '')

alert(`Твой год рожедения ${year - age}`)





let width = prompt('Укажи сторону квадрата', '')

alert(`Периметр квадрата ${width * 4}`)






const pi = 3.14

let perimetr = prompt('Укажи радиус круга', '')

alert(`Плащадь круга = ${pi * perimetr * perimetr}`)





let city = prompt('Укажите растояние между городами в км: ', '')
let speed = prompt('Укажите время в часах за которое Вам нужно добраться туда: ')

alert(`Ваша скорость должна быть: ${city / speed} км/час`)






const dollar = 24
const eyro = 30

let obmen = prompt('Сколько вы хотите поменять долларов на евро: ', '')

alert(`Вы получите: ${obmen * dollar / eyro} евро`)




let file = 820
let fleshka = prompt('Укажите объём флеш карты: ', '')

alert(`В вашей флеш карте может поместиться всего ${fleshka / file} файла`)






const chocolade = 18

let money = prompt('Сколько у тебя денег?', '')

let can = Math.floor(money / chocolade)

let left = money - can * chocolade
alert(`Ты сможешь купить ${can} шоколадку и у тебя останеться ${left} гривен. Спасибо рошену за это!!!`)





let chislo = prompt('Введите трехзначное число: ', '')

let f1 = chislo % 10

let f2 = Math.floor(chislo / 10) % 10

let f3 = Math.floor(chislo / 100)

alert(`Зеркально оно выглядит так ${f1}${f2}${f3}`)





let suma = prompt('Размер вклада в грн на два месяца: ', '')

let year = suma / 100 * 5

let mounth = Math.floor(year / 12)

alert(`Вы получите процентов от депозита ${mounth * 2} грн за два месяца.`)



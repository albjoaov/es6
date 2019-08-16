import { childrenAge, mailList, shopCart } from './data'

/**
 * Adicione o ano de nascimento das crianças para cada elemento do array
 */

const children = childrenAge.reduce((list, age) => {
    list.push({ age, birthYear: 2019 - age });
    return [...list];
}, []);

// ----------------

/**
 * Crie um array somente com os domínios da lista de email
 */

const newMail = mailList.map( el =>  {
    const mailArray = el.split("@");
    return mailArray[1];
})

/**
 * Encontre o maior preço dos produtos abaixo de 100 reais
 */

const prod = shopCart
.filter(el => el.unitPrice < 100)
.reduce((acc, curr) => {
    if(acc > curr.unitPrice) return acc
    return curr.unitPrice;
}, 0)

console.log(prod)
import { Invoice } from './classes/Invoice.js';

const invOne = new Invoice('mario', 'work on mario website', 30);
const invTwo = new Invoice('luigi', 'work on luigi website', 300);

let invoices: Invoice[] = [invOne, invTwo];

console.log(invoices);

const form = document.querySelector('.new-item-form') as HTMLFormElement;


const type = document.querySelector('#type')! as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom')! as HTMLInputElement;
const details = document.querySelector('#details')! as HTMLInputElement;
const amount = document.querySelector('#amount')! as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber
    )
})
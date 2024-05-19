"use strict"

document.addEventListener('DOMContentLoaded', (e) => {
    const buttons = document.querySelectorAll('button'),
          display = document.querySelector('#display');

    buttons.forEach(item => {
        item.addEventListener('click', (e) => {
            if (item.classList.contains('add')) {
                display.value += item.textContent;
            } else if (item.classList.contains('calculate')) {
                try {
                    display.value = eval(display.value);
                } catch {
                    display.value = 'Ошибка!';
                }
            } else if (item.classList.contains('clear')) {
                display.value = '';
            } else if (item.classList.contains('delete')) {
                display.value = display.value.slice(0, -1);
            } else if (item.classList.contains('copy')) {
                window.navigator.clipboard.writeText(display.value);
                const div = document.createElement('div');
                div.className = 'copy-message';
                div.innerHTML = 'Ответ скопирован!';
                document.querySelector('body').append(div);
                setTimeout(() => {
                    div.remove();
                }, 2000);
            }
        });
    });

    document.addEventListener('keydown', (e) => {
        const validKeys = '0123456789.+-/*()';
        if (validKeys.includes(e.key)) {
            display.value += e.key;
        } else if (e.key === 'Escape') {
            display.value = '';
        } else if (e.key === 'Backspace') {
            display.value = display.value.slice(0, -1);
        } else if (e.key === 'Enter') {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = 'Ошибка!';
            }
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const keys = document.querySelector('.calculator-keys');
    const display = document.querySelector('.calculator-screen');

    keys.addEventListener('click', function (e) {
        if (e.target.matches('button')) {
            const key = e.target;
            const action = key.dataset.action;
            const keyContent = key.textContent;
            const displayedNum = display.value;
            const previousKeyType = keys.dataset.previousKeyType;

            if (!action) {
                if (displayedNum === '0' || previousKeyType === 'operator') {
                    display.value = keyContent;
                } else {
                    display.value = displayedNum + keyContent;
                }
            }

            if (action === 'decimal') {
                display.value = displayedNum + '.';
            }

            if (action === 'clear') {
                display.value = '';
            }

            if (action === 'calculate') {
                display.value = eval(displayedNum);
            }

            if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide') {
                keys.dataset.previousKeyType = 'operator';
                display.value += keyContent;
            } else {
                keys.dataset.previousKeyType = '';
            }
        }
    });
});
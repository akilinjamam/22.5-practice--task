let changableNumber = 2;
const notChangableNumber = 2;


function changableOrNot(changable, notChangable) {

    if (changable == 0 && notChangable == 0) {
        console.log('you have not changed let and not changed const.');
        return changable, notChangable
    }

    else if (changable != 0 && notChangable == 0) {
        console.log('you have changed let and not const. its ok ');
        return changable, notChangable
    }

    else if (changable != 0 && notChangable != 0) {
        console.log('you have changed let and const. warning you can not change const.');
        return changable, notChangable
    }

    else if (changable == 0 && notChangable != 0) {
        console.log('you have changed only const. warning ! you can not change const');
        return changable, notChangable
    }
}

var result = changableOrNot(changableNumber, notChangableNumber);



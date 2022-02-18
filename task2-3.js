// paper requirements

function paperRequirements(firstBook, secondBook, thirdBook) {
    const fisrtBookPage = 100;
    const secondBookPage = 200;
    const thirdBookPage = 300;

    let totalFirstBookPage = firstBook * fisrtBookPage;
    let totalSecondBookPage = secondBook * secondBookPage;
    let totalthirdBookPage = thirdBook * thirdBookPage;

    let total = totalFirstBookPage + totalSecondBookPage + totalthirdBookPage;
    return total;
}

let totalFirstBook = 4;
let totalSecondBook = 2;
let totalThirdBook = 4;

const totalAll = paperRequirements(totalFirstBook, totalSecondBook, totalThirdBook);
console.log('total pages from all books', totalAll);
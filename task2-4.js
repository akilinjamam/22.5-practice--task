// // the biggest name from array finding out through function


// let friendsAll = ['ashfiq', 'jahid', 'ashabul', 'ashfiq', ' yean', 'fakrul', 'redoan', 'shakib'];



// function bestFriend(friends) {
//     let largeName = [];
//     let maximumLength = '';

//     for (let i = 0; i < friends.length; i++) {
//         let friend = friends[i];
//         if (friend.length > maximumLength.length) {
//             maximumLength = friend
//         }

//     }
//     largeName.push(maximumLength);
//     return largeName
// }

// const large = bestFriend(friendsAll);

// console.log(large);

let dost = ['rakib khan', 'ruhul amin', 'asaduzzaman', 'abdurrahaman', 'kutub khan', 'sobur uddin'];

function bestFriend(names) {
    largName = [];
    maxString = '';
    for (let i = 0; i < names.length; i++) {
        let element = names[i]
        if (element.length > maxString.length) {
            maxString = element
        }

    }
    largName.push(maxString);
    return largName;
}


const biggestName = bestFriend(dost);
console.log(biggestName);

// const documents = {
//     1: {content: "I am a document", authorId: 1},
//     2: {content: "I am also a document", authorId: 2},
//     3: {content: "You guessed it!", authorId: 2}
// }
// const authors = {
//     1: {name: "Adam"},
//     2: {name: "Dave"}
// }

// function getDocument(documentId, callback) {
//     function loadComplete() {
//         callback(documents[documentId])
//     }
//     setTimeout(loadComplete, 100)
// }


// console.log(getAuthor)

// function getAuthor(authorId, callback) {
//     function loadComplete() {
//         callback(authors[authorId])
//     }
//     setTimeout(loadComplete, 100)
// }


// getDocument(3, document => {
//     getAuthor(document.authorId, author => {
//         console.log(author.name)
//     })
// })

// getDocument (3)
// .then(document => (document.authorId))
// .then(author => console.log(author.name))

// -----------------------------

const askQuestion = (question) => {
    console.log(question)
    return getAnswer(question)
}

const getAnswer = (question) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Well, that depends')
        }, 300)
    })
}

// askQuestion('')

askQuestion('when do i use promise')
.then(answer => console.log(answer))
.then(() => console.log('What a shitty answer'))
.then(() => console.log('Then ask a better question'))
// .then(console.log)
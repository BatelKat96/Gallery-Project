console.log('Starting up');

var gProtfolios

function getProtfolios() {
    gProtfolios = [
        {
            id: "pacman",
            name: "Pacman",
            title: "Stay away from the ghosts",
            desc: "Let's see if tou can break my record",
            url: "https://batelkat96.github.io/Pacman/",
            publishedAt: 1669061602000,
            labels: ["Games", "Pacman"],
        },
        {
            id: "mineSweeper",
            name: "Mine Sweeper",
            title: "Watch out from the BOMBS! ",
            desc: "Let's see if tou can break my record",
            url: "https://batelkat96.github.io/Minesweeper-game/",
            publishedAt: 1669493602000,
            labels: ["Games", "Mine Sweeper"],
        },
        {
            id: "bookShop",
            name: "Books Shop",
            title: "Every book lover's dream ",
            desc: "It's doesn't have to be a books shop... It's can be anything else :)  ",
            url: "https://batelkat96.github.io/Book-shop/",
            publishedAt: 1669925602000,
            labels: ["info", "Books Shop"],
        },
        {
            id: "guessMe",
            name: "Guess Me",
            title: "Put me in the corner",
            desc: "Let's check who is smarter?",
            url: "https://batelkat96.github.io/Guess-Me/",
            publishedAt: 1670184802000,
            labels: ["Games", "Guess Me"],
        }
    ]
    return gProtfolios
}

function getProfolioById(protfolioId) {
    const protfolio = gProtfolios.find(protfolio => protfolioId === protfolio.id)
    return protfolio
}

function publishDate(timestamps) {
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    var date = new Date(timestamps)
    var year = (date.getFullYear())
    var month = months[date.getMonth()]
    newDate = month + ' ' + year
    return newDate
}

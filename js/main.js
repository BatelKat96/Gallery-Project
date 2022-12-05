console.log('Starting up');

var gProtfolios

function getProtfolios() {
    gProtfolios = [
        {
            id: "pacman",
            name: "Pacman",
            title: "Better push those boxes",
            desc: "lorem ipsum lorem ipsum lorem ipsum",
            url: "https://batelkat96.github.io/Pacman/",
            publishedAt: 1448693940000,
            labels: ["Games", "Pacman"],
        },
        {
            id: "mineSweeper",
            name: "Mine Sweeper",
            title: "Better push those boxes",
            desc: "lorem ipsum lorem ipsum lorem ipsum",
            url: "https://batelkat96.github.io/Minesweeper-game/",
            publishedAt: 1448693940200,
            labels: ["Games", "Mine Sweeper"],
        }

    ]
    return gProtfolios

}


function getProfolioById(protfolioId) {
    const protfolio = gProtfolios.find(protfolio => protfolioId === protfolio.id)
    console.log('protfolio:', protfolio)

    return protfolio
}
// date()

function publishDate(timestamps) {
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    var date = new Date(timestamps)
    console.log('date:', date)
    var year = (date.getFullYear())
    var month = months[date.getMonth()]
    newDate = month + ' ' + year
    return newDate
}

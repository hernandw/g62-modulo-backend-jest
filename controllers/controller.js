const home = (req, res) => {
    res.send('Hello World desde controller')
}

const notFound = (req, res) => {
    res.send('404 - page not found')
}

export const controller = {
    home,
    notFound
}
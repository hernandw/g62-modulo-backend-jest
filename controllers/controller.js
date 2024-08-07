import data from '../data/products.js'

const home = (req, res) => {
    res.send('Hello World desde controller')
}

const notFound = (req, res) => {
    res.send('404 - page not found')
}


const products = (req, res) => {
    res.send(data)
}


export const controller = {
    home,
    notFound,
    products
}
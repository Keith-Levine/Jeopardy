const category1 = document.querySelector('.category-1')
const category2 = document.querySelector('.category-2')
const category3 = document.querySelector('.category-3')
const category4 = document.querySelector('.category-4')
const category5 = document.querySelector('.category-5')

let baseURL = 'http://jservice.io/api/random'

const getQuestion = () => {
    fetch(baseURL)
    .then(res => console.log(res))
}
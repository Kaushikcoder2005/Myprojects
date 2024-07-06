const apikey = 'b6d82d221eb5491fb6867c0b4b792fe3'

const api = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=b6d82d221eb5491fb6867c0b4b792fe3'
const newsbox = document.querySelector(".mainsection")
const searchbutton = document.querySelector('#btn')
const searcharea = document.querySelector('#want-item')

const newapi= 'https://newsapi.org/v2/everything?q=tesla&from=2024-06-06&sortBy=publishedAt&apiKey=b6d82d221eb5491fb6867c0b4b792fe3'
// for normal news

fetch(api)
.then(function (data) {
    return data.json()
})
.then(function (newdata) {
    shownews(newdata)
})
.catch(error => console.error('There was a problem with the fetch operation:', error));


// for custon serach news

searchbutton.addEventListener('click', function(){
    newsearch(searcharea.value)

})

function newsearch(val) {
    fetch(`https://newsapi.org/v2/everything?q=${val}&from=2024-06-06&sortBy=publishedAt&apiKey=b6d82d221eb5491fb6867c0b4b792fe3`)
    .then(function(newval){
        return newval.json()
    })
    .then(function(newval2){
        shownews(newval2)
    })
    .catch(error => console.log('There was a problem with the fetch operation:', error));
}


// common function for both

function shownews(newses){
    newsbox.textContent = ''
    newses.articles.forEach(function (article) {
        // console.log(article);

        const newsarea = document.createElement('div')
        newsarea.classList.add('mainnews')
        
        const image = document.createElement('img')
        image.src = article.urlToImage

        const newsheading = document.createElement('h2')
        newsheading.textContent = article.title.length >30 ? article.title.slice(0,40) + '.....' : '________'
        
        const description = document.createElement('p')
        description.textContent = article.description.length > 30 ? article.description.slice(0,125) + '.....' : '______'

        newsarea.appendChild(image)
        newsarea.appendChild(newsheading)
        newsarea.appendChild(description)
        newsarea.addEventListener('click', function () {
            window.open(article.url, '_blank')
        })

        newsbox.appendChild(newsarea)
       
    });




}
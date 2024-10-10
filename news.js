document.addEventListener("DOMContentLoaded", () => {
    let all = document.getElementById("h")
    let sport = document.getElementById("s")
    let bussiness = document.getElementById("b")
    let technology = document.getElementById("t")

    all.addEventListener("click", () => {
        fetchdata("all")
    })
    sport.addEventListener("click", () => {
        fetchdata("sport")
    })
    bussiness.addEventListener("click", () => {
        fetchdata("bussiness")
    })
    technology.addEventListener("click", () => {
        fetchdata("technology")
    })
})

async function fetchdata(pro) {
    if (pro) {
        let result = await fetch(`https://newsapi.org/v2/everything?q=${pro}&language=hi&apiKey=a4acc6c2880d4b99bbc6f22a6b352d48`)
        let news = await result.json()
        console.log(news.articles);

        let totaldata = news.articles.map((cat) => {


            return (
                `
                <div class="news">
                    <img src=${cat.urlToImage}
                    <div class="content">
                    <h2>${cat.title}</h2>
                    <p>${cat.description}</p>
                    </div>
                </div>
                `
            )
        })
        document.getElementById("mydiv").innerHTML = totaldata.join('');
    }
    else {
        let result = await fetch(`https://newsapi.org/v2/everything?q=all&language=hi&apiKey=a4acc6c2880d4b99bbc6f22a6b352d48`)
        let news = await result.json()
        let totaldata = news.articles.map((cat) => {
            return (
                `
                <div class="news">
                    <img src=${cat.urlToImage}
                    <div class="content">
                    <h2>${cat.title}</h2>
                    <p>${cat.description}</p>
                    </div>
                </div>
                `
            )
        })
        document.getElementById("mydiv").innerHTML = totaldata.join('');
    }
}
fetchdata();



// Fetch data without use async await 
/*
function getdata() {
    let result = fetch("https://newsapi.org/v2/everything?q=bitcoin&apiKey=a4acc6c2880d4b99bbc6f22a6b352d48")
    // console.log(result); //Here we get promise and we have to resolve peomise through then().
    result.then((res) => {
        // console.log(res.json()); // Here again we get promise so we resove promise through then().
        res.json().then((product) => {
            console.log(product.articles);
        })
    })
}
getdata();
*/
/*
// Fetch data using async await

async function getdata() {
    let result = await fetch("https://newsapi.org/v2/everything?q=bitcoin&apiKey=a4acc6c2880d4b99bbc6f22a6b352d48")
    // console.log(result); //Here we get RESPONSE, we have to resolve
    let data = await result.json()
    console.log(data.articles);


}
getdata();
*/


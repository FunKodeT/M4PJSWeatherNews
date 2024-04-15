//                                              API FETCH TECHNEWS
// #######################################################################################################
const techNews = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=22ad64af08924779b7093ab2da4b3031";
    /*
        Defines constant variable 'techNews' as equal to the techNews API URL
    */
fetch(techNews)
.then((response) => response.json())
.then((jsObject) => {
    let tech = jsObject.articles;
        /*
            Defines varying variable 'tech' as equal to the techNews API articles section
        */
    let newsTechLink = document.querySelector("#newsTechLink");
        /*
            Defines varying variable 'newsTechLink' as equal to the anchor ID 'newsTechLink'
        */
    newsTechLink.setAttribute("href", `${tech[0].url}`);
        /*
            Sets an attribute in the 'newsTechLink' anchor that is equal to the 1st section of the techNews API's 'url' variable
        */
    newsTechLink.setAttribute("target", "_blank");
        /*
            Sets an attribute in the 'newsTechLink' anchor that is equal to the linked URL opening in a new tab within the browser
        */
    let newsTechImg = document.querySelector("#newsTechImg");
        /*
            Defines varying variable 'newsTechImg' as equal to the <id="newsTechImg" in HTML
        */
    newsTechImg.srcset = tech[0].urlToImage;
        /*
            Tells variable 'newsTechImg' to have its img src= as equal to the 'urlToImage' found under the 0 child of the techNews API
        */
    let newsTechDesc = document.querySelector("#newsTechDesc");
        /*
            Defines varying variable 'newsTechDesc' as equal to the <id="newsTechDesc"> in HTML
        */
    newsTechDesc.textContent = tech[0].title;
        /*
            Tells variable 'newsTechDesc' to have its textContent as equal to the 'title' found under the 0 child of the techNews API
        */
})
// =======================================================================================================



//                                              API FETCH BUSINESSNEWS
// #######################################################################################################
const businessNews = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=22ad64af08924779b7093ab2da4b3031";
    /*
        Defines constant variable 'businessNews' as equal to the businessNews API URL
    */
fetch(businessNews)
.then((response) => response.json())
.then((jsObject) => {
    let business = jsObject.articles;
        /*
            Defines varying variable 'business' as equal to the businessNews API articles section
        */
    let newsBusinessLink = document.querySelector("#newsBusinessLink");
        /*
            Defines varying variable 'newsBusinessLink' as equal to the anchor ID 'newsBusinessLink'
        */
    newsBusinessLink.setAttribute("href", `${business[0].url}`);
        /*
            Sets an attribute in the 'newsBusinessLink' anchor that is equal to the 1st section of the businessNews API's 'url' variable
        */
    newsBusinessLink.setAttribute("target", "_blank");
        /*
            Sets an attribute in the 'newsbusinessLink' anchor that is equal to the linked URL opening in a new tab within the browser
        */
    let newsBusinessImg = document.querySelector("#newsBusinessImg");
        /*
            Defines varying variable 'newsBusinessImg' as equal to the <id="newsBusinessImg" in HTML
        */
    newsBusinessImg.srcset = business[0].urlToImage;
        /*
            Tells variable 'newsBusinessImg' to have its img src= as equal to the 'urlToImage' found under the 0 child of the businessNews API
        */
    let newsBusinessDesc = document.querySelector("#newsBusinessDesc");
        /*
            Defines varying variable 'newsBusinessDesc' as equal to the <id="newsBusinessDesc"> in HTML
        */
    newsBusinessDesc.textContent = business[0].title;
        /*
            Tells variable 'newsBusinessDesc' to have its textContent as equal to the 'title' found under the 0 child of the businessNews API
        */
})
// =======================================================================================================



//                                              API FETCH MARKETNEWS
// #######################################################################################################
const marketNews = "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=22ad64af08924779b7093ab2da4b3031";
    /*
        Defines constant variable 'marketNews' as equal to the marketNews API URL
    */
fetch(marketNews)
.then((response) => response.json())
.then((jsObject) => {
        let market = jsObject.articles;
        /*
            Defines varying variable 'market' as equal to the marketNews API articles section
        */
        let newsMarketLink = document.querySelector("#newsMarketLink");
        /*
            Defines varying variable 'newsMarketLink' as equal to the anchor ID 'newsMarketLink'
        */
        newsMarketLink.setAttribute("href", `${market[0].url}`);
        /*
            Sets an attribute in the 'newsMarketLink' anchor that is equal to the 1st section of the marketNews API's 'url' variable
        */
        newsMarketLink.setAttribute("target", "_blank");
        /*
            Sets an attribute in the 'newsMarketLink' anchor that is equal to the linked URL opening in a new tab within the browser
        */
        let newsMarketImg = document.querySelector("#newsMarketImg");
        /*
            Defines varying variable 'newsMarketImg' as equal to the <id="newsMarketImg" in HTML
        */
        newsMarketImg.srcset = market[0].urlToImage;
        /*
            Tells variable 'newsMarketImg' to have its img src= as equal to the 'urlToImage' found under the 0 child of the marketNews API
        */
        let newsMarketDesc = document.querySelector("#newsMarketDesc");
        /*
            Defines varying variable 'newsMarketDesc' as equal to the <id="newsMarketDesc"> in HTML
        */
        newsMarketDesc.textContent = market[0].title;
        /*
            Tells variable 'newsMarketDesc' to have its textContent as equal to the 'title' found under the 0 child of the marketNews API
        */
})
// =======================================================================================================



//                                              API FETCH TESLANEWS
// #######################################################################################################
const teslaNews = "https://newsapi.org/v2/everything?q=tesla&from=2024-03-15&sortBy=publishedAt&apiKey=22ad64af08924779b7093ab2da4b3031";
    /*
        Defines constant variable 'teslaNews' as equal to the teslaNews API URL
    */
fetch(teslaNews)
.then((response) => response.json())
.then((jsObject) => {
    let tesla = jsObject.articles;
        /*
            Defines varying variable 'tesla' as equal to the teslaNews API articles section
        */
    let newsTeslaLink = document.querySelector("#newsTeslaLink");
        /*
            Defines varying variable 'newsTeslaLink' as equal to the anchor ID 'newsTeslaLink'
        */
    newsTeslaLink.setAttribute("href", `${tesla[0].url}`);
        /*
            Sets an attribute in the 'newsTeslaLink' anchor that is equal to the 1st section of the teslaNews API's 'url' variable
        */
    newsTeslaLink.setAttribute("target", "_blank");
        /*
            Sets an attribute in the 'newsTeslaLink' anchor that is equal to the linked URL opening in a new tab within the browser
        */
    let newsTeslaImg = document.querySelector("#newsTeslaImg");
        /*
            Defines varying variable 'newsTeslaImg' as equal to the <id="newsTeslaImg" in HTML
        */
    newsTeslaImg.srcset = tesla[0].urlToImage;
    // if(newsTeslaImg.srcset === null){
    //     newsTeslaImg.setAttribute("src", "NewsImages/Pergnat_Uh_Oh.jpg");
    // }else{
    //     newsTeslaImg.srcset = tesla[0].urlToImage;
    // }
        /*
            Tells variable 'newsTeslaImg' to have its img src= as equal to the 'urlToImage' found under the 0 child of the teslaNews API
        */

    let newsTeslaDesc = document.querySelector("#newsTeslaDesc");
        /*
            Defines varying variable 'newsTeslaDesc' as equal to the <id="newsTeslaDesc"> in HTML
        */
    newsTeslaDesc.textContent = tesla[0].title;
        /*
            Tells variable 'newsTeslaDesc' to have its textContent as equal to the 'title' found under the 0 child of the teslaNews API
        */
})
// =======================================================================================================



//                                              API FETCH APPLENEWS
// #######################################################################################################
const appleNews = "https://newsapi.org/v2/everything?q=apple&from=2024-04-14&to=2024-04-14&sortBy=popularity&apiKey=22ad64af08924779b7093ab2da4b3031";
    /*
        Defines constant variable 'appleNews' as equal to the appletNews API URL
    */
fetch(appleNews)
.then((response) => response.json())
.then((jsObject) => {
    let apple = jsObject.articles;
        /*
            Defines varying variable 'apple' as equal to the appleNews API articles section
        */
    let newsAppleLink = document.querySelector("#newsAppleLink");
        /*
            Defines varying variable 'newsAppleLink' as equal to the anchor ID 'newsAppleLink'
        */
    newsAppleLink.setAttribute("href", `${apple[0].url}`);
        /*
            Sets an attribute in the 'newsAppleLink' anchor that is equal to the 1st section of the appleNews API's 'url' variable
        */
    newsAppleLink.setAttribute("target", "_blank");
        /*
            Sets an attribute in the 'newsAppleLink' anchor that is equal to the linked URL opening in a new tab within the browser
        */
    let newsAppleImg = document.querySelector("#newsAppleImg");
        /*
            Defines varying variable 'newsAppleImg' as equal to the <id="newsAppleImg" in HTML
        */
    newsAppleImg.srcset = apple[0].urlToImage;
        /*
            Tells variable 'newsAppleImg' to have its img src= as equal to the 'urlToImage' found under the 0 child of the appleNews API
        */
    let newsAppleDesc = document.querySelector("#newsAppleDesc");
        /*
            Defines varying variable 'newsAppleDesc' as equal to the <id="newsAppleDesc"> in HTML
        */
    newsAppleDesc.textContent = apple[0].title;
        /*
            Tells variable 'newsAppleDesc' to have its textContent as equal to the 'title' found under the 0 child of the appleNews API
        */
})

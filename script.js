let img= document.querySelector(".gif-container")
let baseURL="https://api.giphy.com/v1/gifs/trending"
let key="Wx9WkesEy5MoKcD1bbYSM7R70RcHwLb2"
fetch(
    `${baseURL}?api_key=${key}`)
    .then (data=> data.json())
    .then (json=> displayresults(json.data))

function displayresults(results){
    console.log(results);
    for (x=0; x<=4; x++){
        let card=document.createElement("div")
        card.setAttribute("class","card")
        card.style.width="12rem"

        let pics= document.createElement("img")
        pics.setAttribute("class", "card-img-top")
        pics.src=results[x].images.original.url
        
        let cBody=document.createElement("div")
        cBody.setAttribute("class", "card-body")
        let cText=document.createElement("p")
        cText.setAttribute("class", "card-text")
        cText.innerHTML=results[x].title

        img.appendChild(card)
        card.appendChild(pics)
        card.appendChild(cBody)
        cBody.appendChild(cText)

    }
}

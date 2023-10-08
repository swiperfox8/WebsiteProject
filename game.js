const cards = document.querySelectorAll(".card");

let matched = 0;
let cardOne = "", cardTwo = "";
let disableDeck = false;

function flipCard({target: clickedCard}) {
    if(cardOne !== clickedCard && !disableDeck) {
        clickedCard.classList.add("flip");
        if(!cardOne) {
            return cardOne = clickedCard;
        }
        cardTwo = clickedCard;
        disableDeck = true;
        let cardOneImg = cardOne.querySelector(".back-view>img").src
        let cardTwoImg = cardTwo.querySelector(".back-view>img").src
        console.log(cardOneImg, cardTwoImg)
        matchCards(cardOneImg, cardTwoImg);
    }
}

function matchCards(img1, img2) {
    if (img1 === img2) {
        matched++;
        if(matched == 6) {
            setTimeout(() => {
                alert("You Win!")
                shuffleCard();
            }, 1000);
        }
        cardOne.removeEventListener("click", flipCard);
        cardTwo.removeEventListener("click", flipCard);
        cardOne = cardTwo = "";
        return disableDeck = false;
    }
    setTimeout(()=> {
        cardOne.classList.add("shake");
        cardTwo.classList.add("shake");
    }, 400);

    setTimeout(()=> {
        cardOne.classList.remove("shake", "flip");
        cardTwo.classList.remove("shake", "flip");
        cardOne = ""
        cardTwo = ""
        disableDeck = false;
    }, 1200);

}

// function shuffleCard() {
//     matched = 0;
//     disableDeck = false;
//     cardOne = cardTwo = " ";
//     let arr = [3, 3, 4, 4, 5, 5, 8, 8, 9, 9, 6, 6];
//     arr.sort(() => Math.random() > 0.5 ? 1 : -1);
//     cards.forEach((card, i) => {
//         card.classList.remove("flip");
//         let imgTag = card.querySelector(".back-view>img");
//         imgTag.src = `card${arr[i]}.jpg`;
//         card.addEventListener("click", flipCard);
//     });
// }

// shuffleCard();

cards.forEach(card => {
    card.addEventListener("click", flipCard);
});

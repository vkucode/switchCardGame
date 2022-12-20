window.addEventListener("DOMContentLoaded", () => {

    const emojiContainer = document.querySelector('.emoji-container'),
          emojiOutput = document.querySelectorAll('.emoji-output'),
          dialogBox = document.querySelector('.dialog-box'),
          dialogMessage = document.querySelector('.dialog-message'),
          winner = Math.floor(Math.random() * 11),
          outputEmojis = a => emojiOutput.forEach((emoji, i) => emoji.textContent = a[i]),
          shuffleArray = a => {
              for (let i = a.length - 1; i > 0; i--) {
                  const j = Math.floor(Math.random() * (i + 1));
                  [a[i], a[j]] = [a[j], a[i]];
              }

              return a;
          },
          init = () => {
              if (winner <= 10) {
                  emojis.push('🍔');
                  message = "Perdu";
              } else {
                  emojis.push('🍗');
                  message = "Perdu";
              }

              outputEmojis(shuffleArray(emojis));
          };
        //   🌭 🍔 🍟 🍕🥪 🥙 🧆 🌮 🌯🥓 🥩 🍗 
    let emojis = ['🌭', '🥙', '🥪', '🍟', '🥓', '🌯', '🌮', '🍕'],
        winningEmojisFound = 0,
        emojisRemaining = 4,
        message = '';





          

    emojiContainer.addEventListener('click', e => {
        

        if (winningEmojisFound === 1){ 
            message = "GAGNE";
            setTimeout(function(){ location.replace("bravo.html"); }, 500);
            
        }
        else if(emojisRemaining === 0){
            message = "Perdu";
            setTimeout(function(){ location.replace("perdu.html"); }, 500);
        }
        else{

        const target = e.target;

        if (target.classList.contains('emoji-btn') && !target.classList.contains('uncovered')) {

            emojisRemaining--;

            target.classList.add('uncovered');
            elementImage = document.getElementById('here').style.backgroundImage;
            elementImage === 'none';

            //Check if winning emoji found
            if (target.textContent === '🍔') {

                target.classList.add('winning-emoji');
                winningEmojisFound++;
            }

            //Check if all emojis revealed
            if(emojisRemaining === 0) {
                setTimeout(() => {
                    if (winner && winningEmojisFound === 1) {
                        message = "GAGNE";
                        setTimeout(function(){ location.replace("bravo.html"); }, 500);
                    } else {  
                        setTimeout(function(){ location.replace("perdu.html"); }, 500);
                    }
                }, 1000);

            }
        }
    }
    });

    //Initialize game
    init();

});
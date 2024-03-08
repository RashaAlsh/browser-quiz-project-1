import { USER_INTERFACE_ID } from '../constants.js/';
import { quizData } from '../src/data.js'


export const showFinalPage = () => {
    const userInterface = document.getElementById(USER_INTERFACE_ID);
    userInterface.innerHTML = '';
  
    const showUserName = userName();
  
    const totalPoints = 10;
  
    const lastMessage = document.createElement('div');
    lastMessage.classList.add('last-page-div');
  
    // different text depending on a score
    if (quizData.currentScore < 0) {
      lastMessage.innerText = `Better luck next time, ${showUserName}. You earned ${quizData.currentScore} points out of ${totalPoints} points`;
      const gif = document.createElement('img');
      gif.classList.add('gif-style');
      gif.src ='https://media.tenor.com/r5vKXPlTJOgAAAAi/youtube-superchat.gif';
      lastMessage.appendChild(gif);
    } else if (quizData.score >= 1 && quizData.score <= 2) {
        lastMessage.innerText = `Good job, ${showUserName}! You earned ${quizData.currentScore} points out of ${totalPoints} points.`;
      const gif = document.createElement('img');
      gif.classList.add('gif-style');
      gif.src = 'https://media1.tenor.com/m/cau-h1gCQgAAAAAC/rosycheeks-mochi-peach.gif';
      lastMessage.appendChild(gif);
    } else {
       lastMessage.innerText = `Well done, ${showUserName}! You earned ${quizData.currentScore} points out of ${totalPoints}  points.`;
      const gif = document.createElement('img');
      gif.classList.add('gif-style');
      gif.src = 'https://media1.tenor.com/m/918EwUygx1IAAAAC/mission-impossible-we-got-this.gif';
      lastMessage.appendChild(gif);
    }
}  
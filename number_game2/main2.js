// 랜덤 지정 번호 
// 사용자가 번호를 입력하고 go클릭 
// 번호를 맞출 경우 맞췄습니다. 노티스 
// 랜덤번호 < 입력번호 => down !!! 
// 랜덤번호 > 입력번호 => UP !!!
// RESET 버튼을 누르면 게임이 리셋된다. 
// 5번의 기회를 다 쓰면 게임 오버 (더이상 추측 불가, 버튼 disable)
// 사용자가 1~100범위 밖에 숫자를 입력할 경우 노티스, 기회를 깍지 않음 
// 사용자가 이미 입력한 숫자를 또 입력할 경우 노티스, 기회를 깍지 않음 

let computerNum = 0;
let playButton = document.getElementById('play-button');
let userInput = document.getElementById('user-input')
let resultArea = document.getElementById('result-area')
let resetButton = document.getElementById('reset-button')
let chances = 5;
let gameOver = false;
let chanceArea = document.getElementById('chance-area')
let historyNum = []

playButton.addEventListener('click', play)
resetButton.addEventListener('click', reset)
userInput.addEventListener('focus', function(){
  userInput.value = '';
})

function pickRandomNum() {
  computerNum = parseInt(Math.random() * 100) +1
  console.log("정답", computerNum)
}

function play() {
  userValue = userInput.value;

  if(userValue < 1 || userValue > 100) {
    resultArea.textContent = "1~100사이 숫자를 입력해 주세요"
    return;
  }

  if(historyNum.includes(userValue)) {
    resultArea.textContent = "이미 입력한 값입니다. 다른 숫자를 입력해주세요";
    return;
  }

  chances --;
  chanceArea.textContent = `남은기회 ${chances} 회`

  if(userValue > computerNum) {
    resultArea.textContent = "Down!!!"
  } else if (userValue < computerNum) {
    resultArea.textContent = "Up!!!"
  } else {
    resultArea.textContent = "맞추셨습니다!!!"
    gameOver = true
  }

  historyNum.push(userValue)
 

  if(chances < 1) {
    gameOver = true;
  }

  if (gameOver == true) {
    playButton.disabled = true;
  }

 
}

function reset(){
  // user input 창에 있는 텍스트가 사라지고 
  userInput.value = ""
  // 새로운 컴퓨터 넘버가 생성되고 
  pickRandomNum()

  resultArea.textContent = "결과값이 여기 나옵니다!"

}

pickRandomNum()

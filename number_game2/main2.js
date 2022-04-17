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

function play() {
  let userValue = userInput.value
}
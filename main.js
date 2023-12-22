const scriptName = "광산 알피지 [+] 💎";
/**
 * (string) room
 * (string) sender
 * (boolean) isGroupChat
 * (void) replier.reply(message)
 * (boolean) replier.reply(room, message, hideErrorToast = false) // 전송 성공시 true, 실패시 false 반환
 * (string) imageDB.getProfileBase64()
 * (string) packageName
 */
 
 var o1;
 
 var o2;

var o3 = [
// Earth 확장판
]
/**
 석탄, 구리, 은, 금, 백금, 다이아몬드,
 사파이어, 탄탈석, 페이나이트, 블랙오팔,
 루비사파이어, 에메랄드, 루비, 붉은다이아,
 흑요석, 캘리포늄, 우라늄238, 우라늄235,
 우라늄234, 플로토늄1~3, 폴로늄1~3,
 아인시타늄1~3, 비브라늄, 언옵티늄
*/
function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
  if(!isGroupChat) return;
  update();
  var reult = {
      chance: 0
    };
  for(var i=0; i<3; i=i) {
   reult.ore = pA(Math.random() * 100, o2);
   reult.chance++;
   if(reult.ore.percent <= 0.1) i = 5;
    if(i == 5) replier.reply(JSON.stringify(reult, null, 1));
    }
}

function pA(num, array) {
  var num2 = 0;
  var result;
  for(var i=0; i<array.length; i++) {
    if(num2 <= num && num < (num2 + array[i].percent)) {
      result = i;
    }
    num2 += array[i].percent;
  }
  return array[result];
}

function update() {
  o1 = [{
  name: '돌', 
  precent: 70, 
  price: Math.floor(Math.random() * 500)}, {
  name: '조약돌', 
  percent: 20, 
  price: Math.floor(Math.random() * 500) + 500}, {
  name: ['빛나는 돌', '작은 화석'][Math.floor(Math.random() * 2)], 
  percent: 10, 
  price: Math.floor(Math.random() * 1000) + 1000}];
  o2 = [{
  name: '철광석', 
  percent: 40, 
  price: Math.floor(Math.random() * 300) + 100}, {
  name: '금광석', 
  percent: 20, 
  price: Math.floor(Math.random() * 500) + 500}, {
  name: '다이아몬드 광석', 
  percent: 9, 
  price: Math.floor(Math.random() * 4000) + 3000}, {
  name: '사파이어 광석', 
  percent: 3, 
  price: Math.floor(Math.random() * 3000) + 3000}, {
  name: '청금석', 
  percent: 2, 
  price: Math.floor(Math.random() * 5000) + 1000}, {
  name: '루비 광석', 
  percent: 5, 
  price: Math.floor(Math.random() * 4000) + 3000}, {
  name: '은광석', 
  percent: 10, 
  price: Math.floor(Math.random() * 3500) + 2000}, {
  name: '오팔 광석', 
  percent: 3, 
  price: Math.floor(Math.random() * 2000) + 3000}, {
  name: '에메랄드 광석', 
  percent: 4, 
  price: Math.floor(Math.random() * 3000) + 3000}, {
  name: '자수정 조각', 
  percent: 2, 
  price: Math.floor(Math.random() * 5000) + 2000}, {
  name: '다이몬 조각', 
  percent: 1, 
  price: Math.floor(Math.random() * 3000) + 5000}, {
  name: '루테늄 조각', 
  percent: 0.4, 
  price: Math.floor(Math.random() * 4000) + 4000}, {
  name: '퀴륨 조각', 
  percent: 0.3, 
  price: Math.floor(Math.random() * 5000) + 4000}, {
  name: '루비사파이어 광석', 
  percent: 0.2, 
  price: Math.floor(Math.random() * 5000) + 5000}, {
  name: '베네딕틴산 조각', 
  percent: 0.1, 
  price: Math.floor(Math.random() * 5000) + 5000}];
    }

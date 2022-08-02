const btnOne = document.getElementById('btnOne');
const btnTwo = document.getElementById('btnTwo');
const btnThree = document.getElementById('btnThree');

function displayBgOne() {
  document.querySelector('.weddingInvitation').style.backgroundImage =
    'url(images/cherryblossom.jpg)';
  (document.querySelector('.weddingInvitation').style.fontFamily = 'Cormorant'),
    serif;
}

function changeFontSizeOne() {
  document.querySelector('#brideNameOne').style.fontSize = '45px';
	document.querySelector('#groomNameOne').style.fontSize = '45px';
	document.querySelector('#invitationPhrase').style.fontSize = '14px';
	document.querySelector('#weddingDate').style.fontSize = '22px';
	document.querySelector('#weddingTime').style.fontSize = '20px';
	document.querySelector('#weddingLocation').style.fontSize = '20px';
}

function changeFontSizeTwo() {
  document.querySelector('#brideNameOne').style.fontSize = '35px';
	document.querySelector('#groomNameOne').style.fontSize = '35px';
	document.querySelector('#invitationPhrase').style.fontSize = '13px';
	document.querySelector('#weddingDate').style.fontSize = '23px';
	document.querySelector('#weddingTime').style.fontSize = '18px';
	document.querySelector('#weddingLocation').style.fontSize = '18px';
}

function changeFontSizeThree() {
  document.querySelector('#brideNameOne').style.fontSize = '53px';
	document.querySelector('#groomNameOne').style.fontSize = '53px';
	document.querySelector('#invitationPhrase').style.fontSize = '26px';
	document.querySelector('#weddingDate').style.fontSize = '29px';
	document.querySelector('#weddingTime').style.fontSize = '26px';
	document.querySelector('#weddingLocation').style.fontSize = '26px';
}

function changeFontColorOne() {
	document.querySelector('.weddingInvitation').style.color = '#2f4f4f';
}

function changeFontColorTwo() {
	document.querySelector('.weddingInvitation').style.color = '`#8F9779';
}

function changeFontColorThree() {
	document.querySelector('.weddingInvitation').style.color = '#DB7093';
}

function displayBgTwo() {
  document.querySelector('.weddingInvitation').style.backgroundImage = 'url(images/eucalyptus.jpg)';
  (document.querySelector('.weddingInvitation').style.fontFamily =
    'Jost'),
    sans-serif;
}

function displayBgThree() {
  document.querySelector('.weddingInvitation').style.backgroundImage =
    'url(images/yellow.jpg)';
  (document.querySelector('.weddingInvitation').style.fontFamily =
    'Tangerine'),
    cursive;
}

btnOne.addEventListener('click', displayBgOne);
btnOne.addEventListener('click', changeFontSizeOne);
btnOne.addEventListener('click', changeFontColorOne);
btnTwo.addEventListener('click', displayBgTwo);
btnTwo.addEventListener('click', changeFontSizeTwo);
btnTwo.addEventListener('click', changeFontColorTwo);
btnThree.addEventListener('click', displayBgThree);
btnThree.addEventListener('click', changeFontSizeThree);
btnThree.addEventListener('click', changeFontColorThree);

const brideNameInput = document.getElementById('brideName');
const groomNameInput = document.getElementById('groomName');
const dateInput = document.getElementById('date');
const timeInput = document.getElementById('time');
const locationInput = document.getElementById('location');

function displayBrideName() {
  document.querySelector('#brideNameOne').innerHTML = brideNameInput.value;
}

function displayGroomName() {
  document.querySelector('#groomNameOne').innerHTML = groomNameInput.value;
}

function displayDate() {
  document.querySelector('#weddingDate').innerHTML = dateInput.value;
}

function displayTime() {
  document.querySelector('#weddingTime').innerHTML = ' at ' + timeInput.value;
}

function displayLocation() {
  document.querySelector('#weddingLocation').innerHTML = locationInput.value;
}

brideNameInput.addEventListener('input', displayBrideName);
groomNameInput.addEventListener('input', displayGroomName);
dateInput.addEventListener('input', displayDate);
timeInput.addEventListener('input', displayTime);
locationInput.addEventListener('input', displayLocation);

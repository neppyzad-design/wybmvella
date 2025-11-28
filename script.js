const messages = [
	'Cuynn chắc chưa? 🍓',
	'Thật sự chắc chắn hả??',
	'Cuynn chắn chắn chứ?',
	'Đi mà pookie...',
	'Suy nghĩ kỹ đi mà!',
	'Nếu Cuynn nói không, tớ sẽ buồn lắm đó...',
	'Tớ sẽ rất buồn...',
	'Tớ sẽ rất rất rất buồn...',
	'Thôi được rồi, tớ sẽ không hỏi nữa...',
	'Điiii mà Cuynn ơi! 🍓',
];

let messageIndex = 0;

function handleNoClick() {
	const noButton = document.querySelector('.no-button');
	const yesButton = document.querySelector('.yes-button');
	noButton.textContent = messages[messageIndex];
	messageIndex = (messageIndex + 1) % messages.length;
	const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
	yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
	window.location.href = 'yes_page.html';
}

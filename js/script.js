const canvas = document.getElementById('canvas');
const buttonRandom = document.getElementById('random');
const buttonSort = document.getElementById('sort');
const ctx = canvas.getContext('2d');
let randomArr = fillArrRandom();
let widthCanvas = 300;
let heightCanvas = 150;


if(canvas.getContext) {
  const arrLength = randomArr.length;

  ctx.fillRect(0, 0, widthCanvas, heightCanvas);

  for(let i = 0; i < arrLength; i++) {
    let x = Math.floor(i * widthCanvas / 100);
    let y = heightCanvas - Math.floor(randomArr[i] * heightCanvas / 100);

    ctx.fillStyle = "rgb(200,0,0)";
    ctx.fillRect (x, y, 3, heightCanvas - y);
  }
}

buttonSort.addEventListener('click', () => {
  sortingArray(randomArr);
});
buttonRandom.addEventListener('click', () => {
  let arrLength;

  randomArr = fillArrRandom();
  arrLength = randomArr.length
  ctx.fillStyle = "rgb(0,0,0)";
  ctx.fillRect(0, 0, widthCanvas, heightCanvas);

  for(let i = 0; i < arrLength; i++) {
    let x = Math.floor(i * widthCanvas / 100);
    let y = heightCanvas - Math.floor(randomArr[i] * heightCanvas / 100);

    ctx.fillStyle = "rgb(200,0,0)";
    ctx.fillRect (x, y, 3, heightCanvas - y);
  }
});

function fillArrRandom() {
  let arr = [];

  for(let i = 0; i < 100; i++) {
    arr[i] = i;
  }

  arr.sort( getRandomNumber )

  return arr;
}

function getRandomNumber() {
  const randomNumber = 0.5 - Math.round(Math.random());

  return randomNumber;
}

function sortingArray(arr) {
  const arrLength = arr.length;

  for(let i = arrLength - 1; i > 0; i--) {
    setTimeout((i) => {
      for(let j = 0; j < i; j++) {
        setTimeout((j) => {
          if(arr[j] > arr[j + 1]) {
            let tempValue = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = tempValue;

            ctx.fillStyle = 'rgb(0, 0, 0)';
            ctx.fillRect(Math.floor(j * widthCanvas / 100), 0, 6, heightCanvas);
            ctx.fillStyle = "rgb(200,0,0)";
            ctx.fillRect(Math.floor(j * widthCanvas / 100), heightCanvas - Math.floor(randomArr[j] * heightCanvas / 100), 3, Math.floor(randomArr[j] * heightCanvas / 100));
            ctx.fillRect(Math.floor((j + 1) * widthCanvas / 100), heightCanvas - Math.floor(randomArr[j + 1] * heightCanvas / 100), 3, Math.floor(randomArr[j + 1] * heightCanvas / 100));
          }
        }, 5 * j, j);
      }
    }, (arrLength - i - 1) * 100, i);
  }
}

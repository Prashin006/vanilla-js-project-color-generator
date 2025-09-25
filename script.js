let log = console.log;
const copyBtns = document.querySelectorAll('.copy');

/* HEX COLOR GENERATOR */
const hexContainer = document.querySelector('.hex-container');
const btn = document.querySelector('.hex-container div button');
const p = document.getElementById('hex-color-value');

const randomNoFrom0To16 = () => {
  /* returns a random number in String format from '0' to 'f' */
  return Math.floor(Math.random() * 16).toString(16);
};

const randomHexColor = () => {
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += randomNoFrom0To16();
  }
  // log(color);
  p.innerText = color;
  hexContainer.style.backgroundColor = color;
  btn.style.color = color;
};

btn.addEventListener('click', randomHexColor);

/* RGB COLOR GENERATOR */

const rgbContainer = document.querySelector('.rgb-container');
const rgbBtn = document.querySelector('.rgb-container div button');
const redRange = document.querySelector('#red');
const greenRange = document.querySelector('#green');
const blueRange = document.querySelector('#blue');
const ranges = [redRange, greenRange, blueRange];
const rgbP = document.querySelector('.demo');

const setRGBColor = (color) => {
  rgbBtn.style.color = color;
  rgbContainer.style.backgroundColor = color;
  rgbP.innerText = color;
};

const randomNoFrom0To256 = () => {
  return Math.floor(Math.random() * 256);
};

const setRGBColorFromRange = () => {
  let red = Number(redRange.value);
  let green = Number(greenRange.value);
  let blue = Number(blueRange.value);
  let color = `rgb(${red}, ${green}, ${blue})`;
  setRGBColor(color);
};

const randomRGBColor = () => {
  let color = 'rgb(';
  for (let i = 0; i < 3; i++) {
    let no = Number(randomNoFrom0To256());
    ranges[i].value = no;
    if (i !== 2) color = color + no + ', ';
    else color = color + no + ')';
  }
  setRGBColor(color);
};

const copyToClipBoard = (id) => {
  if (id === 0) {
    // copy hex color code
    // log(p.innerHTML);
    navigator.clipboard.writeText(p.innerHTML);
    alert('Hex color is copied');
  } else {
    // copy rgb() color code
    navigator.clipboard.writeText(rgbP.innerHTML);
    alert('RGB color is copied');
  }
};

[redRange, greenRange, blueRange].forEach((item) => {
  item.addEventListener('input', setRGBColorFromRange);
});

rgbBtn.addEventListener('click', randomRGBColor);

document.addEventListener('DOMContentLoaded', randomHexColor);
document.addEventListener('DOMContentLoaded', randomRGBColor);
[...copyBtns].forEach((item, index) => {
  item.addEventListener('click', () => copyToClipBoard(index));
});

import Tree from './tree.js'

const canvas = document.querySelector('canvas');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const generateButton = document.querySelector('button');
const ctx = canvas.getContext('2d');

const TreeGen = new Tree(ctx, canvas.width, canvas.height)

generateButton.addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  TreeGen.drawTree({
    startX: canvas.width / 2,
    startY: canvas.height - 80,
    len: 120,
    angle: Math.floor(Math.random() * 10),
    branchWidth: Math.floor(Math.random() * 50),
    color1: `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`,
    color2: `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
  })
})
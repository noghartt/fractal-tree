class Tree {
  constructor(ctxValue, width, height) {
    this.ctx = ctxValue
    this.width = width,
    this.height = height
  }

  drawTree({
    startX,
    startY,
    len,
    angle,
    branchWidth,
    color1,
    color2,
  }) {
    this.RandomShadowNumber = Math.random().toString()

    this.ctx.beginPath();
    this.ctx.save();
    this.ctx.shadowBlur = Math.floor(Math.random() * 10);
    this.ctx.shadowColor = `rgba(
      ${Math.floor(Math.random() * 255)}, 
      ${Math.floor(Math.random() * 255)}, 
      ${Math.floor(Math.random() * 255)},
      ${this.RandomShadowNumber.slice(0, -14)}
    )`;
    this.ctx.strokeStyle = color1;
    this.ctx.fillStyle = color2;
    this.ctx.lineWidth = branchWidth;
    this.ctx.translate(startX, startY);
    this.ctx.rotate(angle * Math.PI/180);
    this.ctx.moveTo(0, 0);
    // this.ctx.lineTo(0, -len);

    if (angle > 0) {
      this.ctx.bezierCurveTo(10, -len/2, 10, -len/2, 0, -len);
    } else {
      this.ctx.bezierCurveTo(50, -len/2, -10, -len/2, 0, -len);
    }

    this.ctx.stroke();

    if (len < 5) {
      this.ctx.beginPath();
      this.ctx.arc(0, -len, 20, 0, Math.PI/2);
      this.ctx.fill();
      this.ctx.restore();
      return;
    }

    this.drawTree({
      startX: 0,
      startY: -len,
      len: len * 0.75,
      angle: angle + Math.floor(Math.random() * 15),
      branchWidth: branchWidth * 0.6
    })

    this.drawTree({
      startX: 0,
      startY: -len,
      len: len * 0.75,
      angle: angle - Math.floor(Math.random() * 15),
      branchWidth: branchWidth * 0.6
    })

    this.ctx.restore();
  }
}

export default Tree;
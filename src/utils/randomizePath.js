function randomizePath(iconWidth) {
  const MIN_VALUE = 0;
  const MAX_VALUE = 20;

  const moveYMin = MIN_VALUE;
  const moveYMax = MAX_VALUE;

  const curveXMin = MIN_VALUE;
  const curveXMax = iconWidth ?? MAX_VALUE;
  const curveYMin = MIN_VALUE;
  const curveYMax = MAX_VALUE;

  const endYMin = MIN_VALUE;
  const endYMax = MAX_VALUE;

  const moveY = Math.floor(Math.random() * (moveYMax - moveYMin)) + moveYMin;
  const curveX =
    Math.floor(Math.random() * (curveXMax - curveXMin)) + curveXMin;
  const curveY =
    Math.floor(Math.random() * (curveYMax - curveYMin)) + curveYMin;
  const endY = Math.floor(Math.random() * (endYMax - endYMin)) + endYMin;

  const newPath = `M5 ${moveY} Q ${curveX} ${curveY} ${iconWidth - 7} ${endY}`;
  return newPath;
}

export default randomizePath;

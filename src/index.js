class ProgressBar {
  constructor() {
    this.icon1 = "🟩";
    this.icon2 = "🟨";
    this.limitProgress = 10;
    this.actualProgress = 1;
  }

  setIcons(icon1, icon2) {
    this.icon1 = icon1;
    this.icon2 = icon2;
    return this;
  }

  setProgress(actualProgress, totalProgress) {
    this.actualProgress = Math.round(actualProgress);
    this.limitProgress = Math.round(totalProgress);
    return this;
  }

  generate() {
    const progressBar = [];

    for (let i = 0; i < this.actualProgress; i++) {
      progressBar.push(this.icon1);
    }

    for (let i = this.actualProgress; i < this.limitProgress; i++) {
      progressBar.push(this.icon2);
    }

    return `${progressBar.join('')}`;
  }
}

module.exports = ProgressBar;

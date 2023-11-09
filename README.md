# ProgressBar
Generate a simple progress bar.

## Install Package
```sh
npm i @ronaldzav/progressbar
```

## How To Use
```sh
const ProgressBar = require("@ronaldzav/progressbar");

const MyProgressBar = new ProgressBar()
  .setIcons("🟩", "🟨")
  .setProgress(0, 10);

console.log(MyProgressBar.generate());

```

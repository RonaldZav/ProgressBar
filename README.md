# SimpleProgressBar
Generate a simple progress bar.

## How To Use

```sh
const ProgressBar = require("simpleprogressbar");

const MyProgressBar = new ProgressBar()
  .setIcons("🟩", "🟨")
  .setProgress(0, 10);

console.log(MyProgressBar.generate());

```

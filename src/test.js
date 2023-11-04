const ProgressBar = require("./index.js");

const total = 8; // Total Progres To Test

try {

 console.log("[⏰] STARTING TEST...");

const MyProgressBar = new ProgressBar()
  .setIcons("🟩", "🟨")
  .setProgress(0, total);

const interval = 500;

function mostrarProgreso(progress) {
  MyProgressBar.setProgress(progress, total);
  const progressBarString = MyProgressBar.generate();
  console.log(progressBarString);
  
  console.log(`[✅] PASSED (${progress}/${total})`)
   if (progress === total) {
      console.log("[✅] TEST COMPLETED");
    }
}

for (let i = 0; i <= total; i++) {
  setTimeout(() => {
    mostrarProgreso(i);
  }, i * interval);
}

} catch { console.log("[⛔] FAILED ") };
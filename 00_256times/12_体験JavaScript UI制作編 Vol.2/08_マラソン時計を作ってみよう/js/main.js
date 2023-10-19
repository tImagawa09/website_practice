// スライダー要素と表示要素を取得
const slider = document.getElementById("slider");
const meterDisplay = document.getElementById("meter");
const resultDisplay = document.getElementById("result");

// スライダーが変更されたときに呼び出す関数
const updateDisplay = () => {
  // スライダーの値を取得し、距離と時間を計算
  const distance = (slider.value / 1000).toFixed(3); // スライダーの値をkmに変換
  const time = ((slider.value / 42195) * 24).toFixed(2); // スライダーの値を時間に変換

  // 距離と時間を表示
  meterDisplay.textContent = distance;
  resultDisplay.textContent = time.replace(".", ":").padStart(5, "0");
};

// スライダーの変更時にupdateDisplayを呼び出す
slider.addEventListener("input", updateDisplay);

// ページ読み込み時に初期表示を設定
updateDisplay();

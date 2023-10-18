// ページの読み込みが完了したら実行
document.addEventListener("DOMContentLoaded", () => {
    // Red、Green、Blueの要素を取得
    const redSlider = document.getElementById("red");
    const greenSlider = document.getElementById("green");
    const blueSlider = document.getElementById("blue");
  
    // 背景色を変更する関数
    const changeBackgroundColor = () => {
      // 各スライダーの値を取得
      const redValue = redSlider.value;
      const greenValue = greenSlider.value;
      const blueValue = blueSlider.value;
  
      // RGB形式の文字列を作成
      const rgbColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
  
      // 背景色を設定
      document.body.style.backgroundColor = rgbColor;
    };
  
    // スライダーの値が変更されたときに背景色を変更
    redSlider.addEventListener("input", changeBackgroundColor);
    greenSlider.addEventListener("input", changeBackgroundColor);
    blueSlider.addEventListener("input", changeBackgroundColor);
  });
  
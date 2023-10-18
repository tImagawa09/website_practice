'use string';

// HTML内の要素を取得
const smiley = document.getElementById("smiley");

// マウス移動イベントをリッスンし、コールバック関数を実行
// mpusemoveの(event)には、様々なプロパティ存在する
// https://developer.mozilla.org/ja/docs/Web/API/MouseEvent/clientX
document.addEventListener("mousemove", (e) => {
    // ウィンドウの中心座標を計算
    const centerX = window.innerWidth / 2;

    // マウスのX座標を取得
    const mouseX = e.clientX;

    // 要素の回転角度を計算
    // ((mouseX - centerX) / centerX)
    // マウスX座標がウィンドウ中心から離れているか、そしてその割合を計算
    // そして、割合に180をかけて変換する
    const rotationDegree = ((mouseX - centerX) / centerX) * 180;

    // スマイリー要素のスタイルを更新して回転を反映
    smiley.style.transform = `rotate(${rotationDegree}deg)`;
});


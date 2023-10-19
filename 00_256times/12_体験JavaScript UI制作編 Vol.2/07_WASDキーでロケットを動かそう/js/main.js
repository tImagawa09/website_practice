'use strict';

// DOMの読み込みが完了したら実行
document.addEventListener('DOMContentLoaded', () => {
    // ロケットの要素を取得
    const rocket = document.getElementById('rocket');
    let positionX = 0;
    let positionY = 0;
    const step = 16;

    // キーボードのキーを押下したときのイベントリスナー
    // https://developer.mozilla.org/ja/docs/Web/API/Element/keydown_event
    document.addEventListener('keydown', (event) => {
        // 何が押されたか格納
        const key = event.key.toLowerCase();

        // キーと対応する移動方向を定義
        const directions = {
            w: { x: 0, y: -step }, // 上
            a: { x: -step, y: 0 }, // 左
            s: { x: 0, y: step }, // 下
            d: { x: step, y: 0 }, // 右
        };

        // キーが有効な方向キーの場合
        if (directions[key]) {
            positionX += directions[key].x;
            positionY += directions[key].y;
            rocket.style.transform = `translate(${positionX}px, ${positionY}px)`; // ロケットの位置を更新
        }
    });
});

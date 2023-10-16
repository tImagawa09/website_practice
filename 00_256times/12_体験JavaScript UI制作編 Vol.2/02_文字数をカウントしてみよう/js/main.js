// 右の仕様を満たすように JavaScript を使って実装してみましょう
"use strict";

// ページが読み込まれたときに実行する処理
window.addEventListener("DOMContentLoaded", () => {
    // テキストエリアと文字数を表示する<p>要素を取得
    const message = document.getElementById("message");
    const status = document.getElementById("status");

    // テキストエリアの入力内容が変更されたときに実行する処理
    message.addEventListener("input", () => {
      // テキストエリアの入力文字数を取得
    const textLength = message.value.length;

      // 文字数を<p>要素に表示
    status.textContent = textLength + " 文字入力されています";

    //   文字数0の時処理
    if (textLength === 0) {
        status.textContent = '';
    }
    });
});

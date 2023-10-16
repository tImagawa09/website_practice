"use strict";
const swapButton = document.getElementById("swap");

// ボタンがクリックされたときの処理
swapButton.addEventListener("click", () => {
    // HTML要素を取得
    const meElement = document.getElementById("me");
    const youElement = document.getElementById("you");

    // テキストを入れ替える
    [meElement.textContent, youElement.textContent] = [youElement.textContent, meElement.textContent];

    // IDを入れ替える
    [meElement.id, youElement.id] = [youElement.id, meElement.id];

});


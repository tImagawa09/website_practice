'use strict';

document.addEventListener("DOMContentLoaded", () => {
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const loginButton = document.getElementById("login");

    // イベントリスナーを追加して、入力フィールドの変更を監視
    emailInput.addEventListener("input", updateLoginButtonState);
    passwordInput.addEventListener("input", updateLoginButtonState);

    // ログインボタンの無効/有効状態を設定する関数
    function updateLoginButtonState() {
        // EmailとPasswordの入力値を取得
        const emailValue = emailInput.value.trim(); // trim() で前後の空白を取り除く
        const passwordValue = passwordInput.value.trim();

        // EmailとPasswordのどちらも空でない場合、Loginボタンを有効化
        if (emailValue.length > 0 && passwordValue.length > 0) {
            loginButton.classList.remove("disabled");
        } else {
            loginButton.classList.add("disabled");
        }
    }
});

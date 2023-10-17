'use strict';

document.addEventListener("DOMContentLoaded", () => {
    // passwordとeyeicon取得
    const passwordInput = document.getElementById("password");
    const eyeIcon = document.getElementById("eye");

    // 目のアイコンの表示/非表示を切り替える関数
    const toggleEyeIconVisibility = () => {
        // password文字数取得
        const passwordValue = passwordInput.value.trim();

        // パスワードが1文字以上の場合、目のアイコンを表示
        // if (passwordValue.length > 0) {
        //     eyeIcon.classList.remove("hidden");
        // } else {
        //     eyeIcon.classList.add("hidden");
        // }
        eyeIcon.classList.toggle("hidden", passwordValue.length === 0 ? true : false);

    };

    // パスワードの表示/非表示を切り替える関数
    const togglePasswordVisibility = () => {
        // パスワードの表示状態をトグル
        passwordInput.type = (passwordInput.type === "password") ? "text" : "password";
    };

    // パスワード入力の変更を監視し、目のアイコン表示/非表示を切り替える
    passwordInput.addEventListener("input", toggleEyeIconVisibility);
    // 目のアイコンを監視し、クリックされたらInputtypeを現在の状態から切り替える
    eyeIcon.addEventListener("click", togglePasswordVisibility);
});

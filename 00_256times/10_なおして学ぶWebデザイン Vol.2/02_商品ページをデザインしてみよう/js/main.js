window.addEventListener('DOMContentLoaded', function () {

    let imageBtn = document.getElementsByClassName('js-image');
    let imageMain = document.getElementById('js-image-target');

    for (let i = 0; i < imageBtn.length; i++) {
        imageBtn[i].addEventListener('click', function () {
            let imageStack = this.firstElementChild.getAttribute('src');
            imageMain.setAttribute('src', imageStack)
        }, false);
    }
});


// window.addEventListener('DOMContentLoaded', () => {

//     let imageBtn = document.getElementsByClassName('js-image');
//     let imageMain = document.getElementById('js-image-target');

//     for(let i = 0; i < imageBtn.length; i++){
//         imageBtn[i].addEventListener('click', () => {
//         let imageStack = this.firstElementChild.getAttribute('src');
//         imageMain.setAttribute('src',imageStack)
//     });
//     }
// });

// const box = document.querySelector(".box")

// box.addEventListener('click', () => {
//     box.classList.toggle("box-checked");
// });

// 各.box要素を取得
let boxes = document.querySelectorAll('.box');

// 各.box要素にクリックイベントリスナーを追加
boxes.forEach(function(box) {
  box.addEventListener('click', function() {
    // すべての.box要素からbox-checkedクラスを削除
    boxes.forEach(function(b) {
      b.classList.remove('box-checked');
    });

    // クリックされた要素にbox-checkedクラスを追加
    this.classList.add('box-checked');
  });
});
// サムネイルボタンの要素をすべて取得
const thumbnailButtons = document.querySelectorAll('.js-image');

// メイン画像要素を取得
const mainImage = document.getElementById('js-image-target');

// 各サムネイルボタンにクリックイベントリスナーを追加
thumbnailButtons.forEach((button) => {
    button.addEventListener('click', () => {
        // クリックされたサムネイルの画像ソースURLを取得
        const thumbnailSrc = button.querySelector('img').getAttribute('src');
        
        // メイン画像のソースをクリックされたサムネイルのソースに設定
        mainImage.setAttribute('src', thumbnailSrc);
    });
});


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
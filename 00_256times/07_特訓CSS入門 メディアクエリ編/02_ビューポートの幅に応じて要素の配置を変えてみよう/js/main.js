// この課題では JavaScript は使いません
// 以下のコードを変更してはいけません。

'use strict';

{
  const span = document.createElement('span');
  span.textContent = window.innerWidth + 'px';
  span.style.backgroundColor = 'rgba(0, 0, 0, .7)';
  span.style.color = '#fff';
  span.style.fontSize = '12px';
  span.style.padding = '4px 8px';
  span.style.position = 'fixed';
  span.style.inset = 'auto auto 0 0';
  
  document.body.appendChild(span);
  window.addEventListener('resize', (e) => {
    span.textContent = window.innerWidth + 'px';
  });
}
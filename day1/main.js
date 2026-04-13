// おみくじの結果（リスト）
const fortunesList = ["大吉","吉"];
//色（リスト）
const colorList = ["red","blue"];

// ボタンと表示エリアを取得
const btn = document.getElementById('button');
const display = document.getElementById('result');

// ボタンがクリックされた時の処理
btn.addEventListener('click', () => {
    
    // ランダムな数字を作るロジック
    const n = fortunesList.length;
    const m = colorList.length;

    const randomFortuneIndex = Math.floor(Math.random() * n);
    const randomColorIndex = Math.floor(Math.random() * m);
    
    // 結果を表示！
    const result = fortunesList[randomFortuneIndex];
    display.innerText = result;
    display.style.color = colorList[randomColorIndex];
});
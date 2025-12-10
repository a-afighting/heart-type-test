//------------------------------------------------------
// ▼ 最初のスタート画面操作
//------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("startBtn");
  const startScreen = document.getElementById("startScreen");
  const quiz = document.getElementById("quiz");

  startBtn.onclick = () => {
    startScreen.style.display = "none";
    quiz.style.display = "block";
    showQuestion();
  };
});

//------------------------------------------------------
// 質問データ
//------------------------------------------------------
const questions = [
  {
    q: "1. 透明人間になれたら何をする？",
    a: ["人の生活を観察", "自由に好きな場所へ行く", "誰かの秘密を探る"],
  },
  {
    q: "2. 突然1000円が送られてきたら？",
    a: ["すぐ使う", "貯めておく", "人にプレゼントする"],
  },
  { q: "3. 無人島に1つ持っていくなら？", a: ["食料", "本", "音楽プレイヤー"] },
  {
    q: "4. 好きな夜の過ごし方は？",
    a: ["パーティー", "映画鑑賞", "星を眺める"],
  },
  {
    q: "5. 朝起きて最初にすることは？",
    a: ["スマホ確認", "ストレッチ", "瞑想・日記"],
  },
  {
    q: "6. 友達に相談されたら？",
    a: ["率直にアドバイス", "話を聞く", "解決策を一緒に考える"],
  },
  {
    q: "7. 好きなアートや音楽は？",
    a: ["派手・刺激的", "落ち着いたもの", "奇抜・独創的"],
  },
  {
    q: "8. 旅行で重要なのは？",
    a: ["アクティブ体験", "観光スポット巡り", "ゆっくり過ごす"],
  },
  {
    q: "9. 喧嘩したときは？",
    a: ["感情的に反応", "距離を置く", "相手に合わせる"],
  },
  {
    q: "10. 宝くじが当たったら？",
    a: ["大きく使う", "投資する", "寄付・友達に分ける"],
  },
];

//------------------------------------------------------
// タイプデータ（画像込み）
//------------------------------------------------------
const types = [
  {
    name: "星追い人タイプ",
    text: "夢や理想に向かってまっすぐ進む、きらきら好奇心タイプ。心がときめくものを見つけると一直線。新しい世界を開く力があるよ。",
    img: "images/dream_chaser.png",
  },
  {
    name: "影読みタイプ",
    text: "静かに観察し、状況を深く理解する洞察タイプ。人の気持ちに敏感で、慎重だけど優しい賢者のような存在。",
    img: "images/shadow_reader.png",
  },
  {
    name: "音遊びタイプ",
    text: "感性豊かで、自分らしいリズムを大切にするクリエイティブタイプ。夢中になると独自の世界を生み出す才能の持ち主。",
    img: "images/sound_player.png",
  },
  {
    name: "風来坊タイプ",
    text: "自由気ままに、風のように軽やかに生きるタイプ。心地よい流れに身を任せることで本来の輝きが増していくよ。",
    img: "images/wanderer.png",
  },
  {
    name: "炎心タイプ",
    text: "情熱的でパワフル。目標を見つけると全力で突き進むチャレンジャータイプ。周りも元気にする明るいエネルギーの持ち主。",
    img: "images/flame_heart.png",
  },
  {
    name: "静謐タイプ",
    text: "穏やかで優しい空気をまとった癒しタイプ。落ち着いた判断力を持ち、そばにいるだけで安心感を与える存在。",
    img: "images/serenity.png",
  },
  {
    name: "夢案内タイプ",
    text: "人を支える力に長けたガイドタイプ。相手に寄り添いながら、そっと背中を押してあげられる優しいリーダー気質。",
    img: "images/dream_guide.png",
  },
  {
    name: "影響者タイプ",
    text: "太陽のように明るく、周りを元気にする影響力タイプ。前向きな行動で自然と人を惹きつけるムードメーカー。",
    img: "images/influencer.png",
  },
];

//------------------------------------------------------
// 相性マトリクス
//------------------------------------------------------
const compatibility = [
  [80, 60, 70, 75, 85, 50, 65, 70],
  [60, 80, 55, 50, 65, 85, 75, 60],
  [70, 55, 80, 65, 75, 60, 70, 65],
  [75, 50, 65, 80, 70, 55, 60, 75],
  [85, 65, 75, 70, 80, 60, 70, 80],
  [50, 85, 60, 55, 60, 80, 75, 60],
  [65, 75, 70, 60, 70, 75, 80, 65],
  [70, 60, 65, 75, 80, 60, 65, 80],
];

//------------------------------------------------------
// スコア管理
//------------------------------------------------------
let scores = Array(types.length).fill(0);
let current = 0;

//------------------------------------------------------
// 質問を表示
//------------------------------------------------------
function showQuestion() {
  if (current >= questions.length) {
    showResult();
    return;
  }

  const qDiv = document.getElementById("quiz");
  qDiv.innerHTML = `<div class="question">${questions[current].q}</div>`;
  const qElem = qDiv.querySelector(".question");
  setTimeout(() => qElem.classList.add("show"), 50);

  questions[current].a.forEach((ans, idx) => {
    const btn = document.createElement("button");
    btn.innerText = ans;
    btn.onclick = () => selectAnswer(idx);
    qDiv.appendChild(btn);
  });
}

//------------------------------------------------------
// 回答処理
//------------------------------------------------------
function selectAnswer(choice) {
  if (choice === 0) {
    [0, 3, 4].forEach((i) => scores[i]++);
  }
  if (choice === 1) {
    [1, 5, 6].forEach((i) => scores[i]++);
  }
  if (choice === 2) {
    [2, 7].forEach((i) => scores[i]++);
  }

  current++;
  showQuestion();
}

//------------------------------------------------------
// 結果を表示
//------------------------------------------------------
function showResult() {
  // ▼ ここが超重要！非表示 → 表示にする
  const rDiv = document.getElementById("result");
  rDiv.style.display = "block";

  const maxScore = Math.max(...scores);
  const idx = scores.indexOf(maxScore);
  const userType = types[idx];

  // 相性が良いタイプTOP3
  const compScores = compatibility[idx];
  const best = compScores
    .map((s, i) => ({ score: s, idx: i }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((o) => types[o.idx].name);

  rDiv.innerHTML = `
    <h2>あなたのタイプは ${userType.name}！</h2>
    <img src="${userType.img}">
    <p>${userType.text}</p>
    <p><strong>相性の良いタイプ：</strong> ${best.join(", ")}</p>

  `;

  rDiv.classList.add("show");

  // 質問エリアは消す
  document.getElementById("quiz").innerHTML = "";
}


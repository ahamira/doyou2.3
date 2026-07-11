import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div class="container">
  <header>
    <h1>笠井 楓斗</h1>
    <p>Unity / TypeScript Developer</p>
  </header>

  <section>
    <h2>自己紹介</h2>
    <p>
      Unityを使ったゲーム開発を学習しています。
      現在はタワーディフェンスやRPGの制作に取り組んでいます。
    </p>
  </section>

  <section>
    <h2>スキル</h2>
    <ul>
      <li>Unity</li>
      <li>C#</li>
      <li>TypeScript</li>
      <li>HTML</li>
      <li>CSS</li>
    </ul>
  </section>

  <section>
    <h2>制作物</h2>

    <div class="card">
      <h3>2Dタワーディフェンス</h3>
      <p>Unityで制作した2Dタワーディフェンスゲーム</p>
    </div>

    <div class="card">
      <h3>RPGバトルシステム</h3>
      <p>ターン制バトルを実装したRPG</p>
    </div>
  </section>
</div>
`
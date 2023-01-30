import styles from './description.module.scss'

export const Description: React.FC = () => (
  <main id="top" className={styles['description']}>
    <section className={styles['grid']}>
      <img
        className={styles['image']}
        src="/img/smart_resize.svg"
        width={256}
        height={256}
        alt="smart resize illustration"
      />
      <div>
        <h2 className={styles['title']}>個人チャンネル</h2>
        <div className={styles['value']}>
          <br />
          <p>
            もしあなたが Discord
            サーバーを探検していれば理解してくれるでしょうが、あらゆる Discord
            サーバーでは発言することに対して精神的なコストが掛かりがちです。
          </p>
          <br />
          <p>
            会話をしたくても既に流れがあれば遠慮するでしょう。こんなことを発言していいのかと心配する人もいるでしょう。特に知り合いのいない場所だと緊張するでしょう。
          </p>
          <br />
          <p>
            しかしブルアカ職員室では、初めての参加時にあなた専用のチャンネルを作ります。これで、余計な心配をせず自分のタイミングで好きなように書くことができます。
          </p>
          <br />
          <p>
            ツイッターよりも近く、DM
            よりも離れている空間はあなたにとっても心地よいかもしれません。
          </p>
        </div>
      </div>
    </section>
    <section className={styles['grid']}>
      <img
        className={styles['image']}
        src="/img/real_time_collaboration.svg"
        width={256}
        height={256}
        alt="real time collaboration illustration"
      />
      <div>
        <h2 className={styles['title']}>オートメーション</h2>
        <div className={styles['value']}>
          <br />
          <p>
            私がプログラマーなので、要望に応じてオートメーションやインテグレーションを作成することができます。
          </p>
          <br />
          <p>筆記時点で機能しているもの</p>
          <p>・公式ツイッターのツイート転送</p>
          <p>・#ブルアカ 付きのツイート転送</p>
          <p>・新任先生レーダー</p>
          <br />
          <p>現在計画しているもの</p>
          <p>・サイトの充実</p>
          <p>・Discord BOT の作成</p>
        </div>
      </div>
    </section>
    <section className={styles['grid']}>
      <img
        className={styles['image']}
        src="/img/moving_forward.svg"
        width={256}
        height={256}
        alt="moving forward illustration"
      />
      <div>
        <h2 className={styles['title']}>方針</h2>
        <div className={styles['value']}>
          <br />
          <p>
            サーバーの方針としては、個人チャンネルを活用し、そこで送られた質問や呟きに反応することでコミュニケーションをしていきたいと思っています。
          </p>
          <br />
          <p>
            その他に、ブルアカ職員室に関連したプログラムは GitHub
            にて全て公開します。ホームページは
            <a
              href="https://github.com/tenzyulab/bluearchive-3rd-party-club-website"
              target="_blank"
              rel="noopener noreferrer"
            >
              こちら
            </a>
            、Discord BOT(開発予定) は
            <a
              href="https://github.com/tenzyulab/bluearchive-3rd-party-club-bot"
              target="_blank"
              rel="noopener noreferrer"
            >
              こちら
            </a>
            から閲覧できます。
          </p>
        </div>
      </div>
    </section>
    <section className={styles['grid']}>
      <img
        className={styles['image']}
        src="/img/progressive_app.svg"
        width={256}
        height={256}
        alt="progressive app illustration"
      />
      <div>
        <h2 className={styles['title']}>プラットフォームについて</h2>
        <div className={styles['value']}>
          <br />
          <p>
            もしもあなたがまだ Discord
            を試していないときのためにリンクを用意しました。
          </p>
          <br />
          <p>
            繰り返しますが、ブルアカ職員室は Discord
            上のコミュニティサーバーです。 まだ Discord を利用していない方は、
            <a
              href="https://discord.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              こちらのページ
            </a>
            でインストールとアカウントを作成してください。
          </p>
          <br />
          <p>
            セットアップが済んだら、下の&quot;Join
            Discord&quot;を押してくださいね。
          </p>
        </div>
      </div>
    </section>
    <section>
      <div className={styles['grid']}>
        <img
          className={styles['image']}
          src="/img/smart_resize.svg"
          width={256}
          height={256}
          alt="smart resize illustration"
        />
        <div>
          <h2 className={styles['title']}>スクリーンショット</h2>
          <div className={styles['value']}>
            <br />
            <p>
              残念ながら私はプログラマーでデザイナーではなく、サイトも急ピッチで用意したのでいろいろと伝わりにくいと思います。
            </p>
            <p>
              しばらくこのセクションに直接 Discord
              のスクリーンショットを載せておこうと思いますので、ぜひご覧ください。
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          padding: '0 0 32px 0',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '16px',
        }}
      >
        <img
          src="/tmp/SS_20230131_001654.png"
          width={650}
          height={388}
          alt=""
        />
        <img
          src="/tmp/SS_20230131_001706.png"
          width={650}
          height={388}
          alt=""
        />
        <img
          src="/tmp/SS_20230131_001711.png"
          width={650}
          height={388}
          alt=""
        />
        <img
          src="/tmp/SS_20230131_001720.png"
          width={650}
          height={388}
          alt=""
        />
        <img
          src="/tmp/SS_20230131_001757.png"
          width={650}
          height={388}
          alt=""
        />
      </div>
    </section>
  </main>
)

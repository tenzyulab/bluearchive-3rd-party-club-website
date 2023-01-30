import { Link as Scroll } from 'react-scroll'

import styles from './front.module.scss'

export const Front: React.FC = () => (
  <main className={styles['front']}>
    <div className={styles['container']}>
      <img
        src="/img/co-workers.svg"
        alt="co-workers-illustration"
        width={256}
        height={256}
      />
      <div className={styles['description']}>
        <h1 className={styles['title']}>ブルアカ職員室</h1>
        <h2 className={styles['subtitle']}>
          <p>ブルアカに特化した Discord コミュニティ</p>
        </h2>
        <Scroll to="top" smooth className={styles['guide']}>
          スクロールして特徴を見る ▽
        </Scroll>
        <Scroll to="invite" smooth className={styles['guide']}>
          いますぐ参加する ▽
        </Scroll>
      </div>
    </div>
  </main>
)

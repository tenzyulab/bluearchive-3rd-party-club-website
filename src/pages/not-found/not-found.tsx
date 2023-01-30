import { Link } from 'react-router-dom'

import styles from './not-found.module.scss'

export const NotFound: React.FC = () => (
  <main className={styles['notFound']}>
    <div className={styles['container']}>
      <img
        src="/img/not_found.svg"
        alt="404 illustration"
        width={256}
        height={256}
      />

      <h1 className={styles['title']}>404</h1>
      <h2 className={styles['subtitle']}>
        <p>お探しのページは見つかりませんでした</p>
        <p>
          <Link to="/">トップページへ</Link>
        </p>
      </h2>
    </div>
  </main>
)

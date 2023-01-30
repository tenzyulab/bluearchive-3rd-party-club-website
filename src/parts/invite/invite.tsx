import styles from './invite.module.scss'

export const Invite: React.FC = () => (
  <main id="invite" className={styles['invite']}>
    <div className={styles['container']}>
      <img
        src="/img/welcome_cats.svg"
        alt="welcome cats illustration"
        width={256}
        height={256}
      />
      <div className={styles['description']}>
        <iframe
          title="discord-widget"
          src="https://discord.com/widget?id=1065425768580124723&theme=dark"
          width="350"
          height="500"
          frameBorder={0}
          style={{ borderRadius: '10px' }}
          sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
        ></iframe>
      </div>
    </div>
  </main>
)

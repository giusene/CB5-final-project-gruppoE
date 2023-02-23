import Link from 'next/link';

import styles from './styles.module.scss'
function EmptyAssets() {
  return (
    <div className={styles.main}>
        <h4>You don't have any coins yet</h4>
        <Link href='/trade'>Click here and start playing</Link>
    </div>
  )
}

export default EmptyAssets;
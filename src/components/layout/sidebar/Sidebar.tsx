import styles from './Sidebar.module.scss';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
        <div className={styles.logo}>
            <img src="/dark-logo.png" alt="logo" width={70} height={70}/>
        </div>

        <div>
            <div className={styles.category__item}>
                <h1>Home</h1>
            </div>
            <div className={styles.category__item}>
                <h1>Wladisluv</h1>
                <p>My cart</p>
                <p>Wishlist</p>
            </div>
            <div className={styles.category__item}>
                <h1>Platform</h1>
                <p>PC</p>
                <p>Playstation</p>
            </div>
            <div className={styles.category__item}>
                <h2>Top</h2>
                <p>Top 100</p>
                <p>Top Playstation</p>
            </div>
        </div>
    </div>
  )
}

export default Sidebar
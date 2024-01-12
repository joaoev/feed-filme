import styles from './Header.module.css'

import feedFilmeLogo from '../assets/logo-feed-filme.svg'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={feedFilmeLogo} alt="Logotipo do Feed Filme" />
        </header>
    );
}
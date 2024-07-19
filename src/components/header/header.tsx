import classNames from 'classnames';
import styles from './header.module.scss';
import { NavLink } from 'react-router-dom';
import IconTransparentPng from '../../assets/icon/icon_transparent.png';


export interface HeaderProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Header = ({ className }: HeaderProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <NavLink to="/">
                <img src={IconTransparentPng} alt="" className={styles.img1} />
            </NavLink>
            <div className={styles.menu}>
                <NavLink
                    to="/"
                    className={({ isActive }) => classNames(styles.navLink, { [styles.active]: isActive, [styles.inactive]: !isActive })}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) => classNames(styles.navLink, { [styles.active]: isActive, [styles.inactive]: !isActive })}
                >
                    About
                </NavLink>
            </div>
        </div >
    );
};

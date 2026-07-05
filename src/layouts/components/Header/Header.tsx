import classNames from 'classnames/bind';
import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { headerTitles } from '~/config/routes';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

interface HeaderProps {
    className?: string;
    isOpenSidebar: boolean;
    onToggleSidebar: () => void;
}

const Header: FC<HeaderProps> = ({ className, isOpenSidebar, onToggleSidebar }) => {
    const { pathname } = useLocation();

    const classes = cx('wrapper', className);

    return (
        <header className={classes}>
            <h2 className={cx('title')}>
                <span className={cx('menu-bars')} onClick={onToggleSidebar}>
                    ☰
                </span>
                {headerTitles.get(pathname) ?? 'Sổ tay Văn phòng Đảng ủy xã Diên Lâm'}
            </h2>
            <h4 className={cx('user-role')}>Liên hệ: 1900.100có</h4>
        </header>
    );
};

export default Header;

import classNames from 'classnames/bind';
import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { headerTitles } from '~/config/routes';
import styles from './Header.module.scss';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

const cx = classNames.bind(styles);

interface HeaderProps {
    className?: string;
    isOpenSidebar: boolean;
    onToggleSidebar: () => void;
}

const Header: FC<HeaderProps> = ({ className, isOpenSidebar, onToggleSidebar }) => {
    const { pathname } = useLocation();
    const header = headerTitles.get(pathname);
    const Icon = header?.icon;

    const classes = cx('wrapper', className);

    return (
        <header className={classes}>
            <h2 className={cx('title')}>
                <div className={cx('menu-bars')} onClick={onToggleSidebar}>
                    <MenuOutlinedIcon sx={{ fontSize: 24 }} />
                </div>

                {Icon && <Icon sx={{ fontSize: 24 }} />}
                <span>{header?.title}</span>
            </h2>
            {/* <h4 className={cx('user-role')}>Liên hệ: 1900.100có</h4> */}
        </header>
    );
};

export default Header;

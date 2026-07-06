import classNames from 'classnames/bind';
import { FC, PropsWithChildren, useEffect, useState } from 'react';
import Sidebar from '~/layouts/components/Sidebar';
import styles from './DefaultLayout.module.scss';
import Header from '../components/Header';
import { useLocation } from 'react-router-dom';
import { PhotoProvider } from 'react-photo-view';

const cx = classNames.bind(styles);

type DefaultLayoutProps = PropsWithChildren;

const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => {
    const location = useLocation();
    const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false);

    useEffect(() => {
        setIsOpenSidebar(false);
    }, [location.pathname]);

    const handleToggleSidebar = () => {
        setIsOpenSidebar((prev) => !prev);
    };

    return (
        <PhotoProvider>
            <div className={cx('wrapper')}>
                <div className={cx('container')}>
                    <Sidebar isOpen={isOpenSidebar} onClose={() => setIsOpenSidebar(false)} />

                    <div className={cx('right-section')}>
                        <Header
                            isOpenSidebar={isOpenSidebar}
                            onToggleSidebar={handleToggleSidebar}
                        />
                        <div
                            className={cx('overlay', {
                                open: isOpenSidebar,
                            })}
                            onClick={() => setIsOpenSidebar(false)}
                        ></div>
                        <div
                            className={cx('close-icon', {
                                open: isOpenSidebar,
                            })}
                            onClick={() => setIsOpenSidebar(false)}
                        >
                            ✖
                        </div>
                        <div className={cx('content')}>{children}</div>
                    </div>
                </div>
            </div>
        </PhotoProvider>
    );
};

export default DefaultLayout;

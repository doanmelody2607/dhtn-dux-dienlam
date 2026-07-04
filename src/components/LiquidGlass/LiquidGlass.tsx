import classNames from 'classnames/bind';
import { FC, PropsWithChildren } from 'react';
import styles from './LiquidGlass.module.scss';

const cx = classNames.bind(styles);

type LiquidGlassProps = PropsWithChildren<{
    className?: string;
}>;

const LiquidGlass: FC<LiquidGlassProps> = ({ className, children }) => {
    const classes = cx('wrapper', className);

    return <div className={classes}>{children}</div>;
};

export default LiquidGlass;

import classNames from 'classnames/bind';
import { FC, PropsWithChildren } from 'react';
import styles from './Card.module.scss';
import LiquidGlass from '../LiquidGlass';

const cx = classNames.bind(styles);

type CardProps = PropsWithChildren<{
    cardTitle: string;
    description: string;
}>;

const Card: FC<CardProps> = ({ cardTitle, description, children }) => {
    return (
        <LiquidGlass>
            <div className={cx('card')}>
                <h2>{cardTitle}</h2>
                <p>{description}</p>

                {children}
            </div>
        </LiquidGlass>
    );
};

export default Card;

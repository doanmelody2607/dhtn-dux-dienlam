import classNames from 'classnames/bind';
import { FC } from 'react';
import { IStep } from '~/commons/interfaces/step';
import styles from './StepItem.module.scss';

const cx = classNames.bind(styles);

// type StepProps = PropsWithChildren;

export interface StepItemProps {
    stepItem: IStep;
}

const StepItem: FC<StepItemProps> = ({ stepItem }) => {
    return <div className={cx('wrapper')}>{stepItem.content}</div>;
};

export default StepItem;

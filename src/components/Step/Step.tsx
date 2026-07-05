import classNames from 'classnames/bind';
import { FC } from 'react';
import { IStep } from '~/commons/interfaces/step';
import LiquidGlass from '~/components/LiquidGlass';
import styles from './Step.module.scss';
import StepItem from './StepItem/StepItem';

const cx = classNames.bind(styles);

// type StepProps = PropsWithChildren;

interface StepProps {
    steps: IStep[];
}

const Step: FC<StepProps> = ({ steps }) => {
    return (
        <div className={cx('wrapper')}>
            {steps.map((step, index) => (
                <LiquidGlass key={index} className={cx('liquid-step')}>
                    <StepItem stepItem={step} />
                </LiquidGlass>
            ))}
        </div>
    );
};

export default Step;

import { FC } from 'react';
import Card from '~/components/Card';
import Step from '~/components/Step';
import { stampSteps } from './data-stamp';

interface StampActionProps {}

const StampAction: FC<StampActionProps> = () => {
    return (
        <Card cardTitle="Cấp số và đóng dấu dự thảo">
            <Step steps={stampSteps} />
        </Card>
    );
};

export default StampAction;

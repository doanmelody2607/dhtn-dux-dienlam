import { FC } from 'react';
import Card from '~/components/Card';
import Step from '~/components/Step';
import { recordSteps } from './data-record';

interface RecordActionProps {}

const RecordAction: FC<RecordActionProps> = () => {
    return (
        <Card cardTitle="📥 Dự thảo được Lưu lại">
            <Step steps={recordSteps} />
        </Card>
    );
};

export default RecordAction;

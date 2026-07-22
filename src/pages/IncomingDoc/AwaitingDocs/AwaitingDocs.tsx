import { FC } from 'react';
import Card from '~/components/Card';
import Step from '~/components/Step';
import { awaitingSteps } from './data-awaiting';

interface AwaitingDocsProps {}

const AwaitingDocs: FC<AwaitingDocsProps> = () => {
    return (
        <Card cardTitle="Văn bản chờ tiếp nhận">
            <Step steps={awaitingSteps} />
        </Card>
    );
};

export default AwaitingDocs;

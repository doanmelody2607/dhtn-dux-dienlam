import { FC } from 'react';
import Card from '~/components/Card';
import Step from '~/components/Step';
import { receptionSteps } from './data-reception';

interface ReceptionActionProps {}

const ReceptionAction: FC<ReceptionActionProps> = () => {
    return (
        <Card cardTitle="Thao tác Tiếp nhận văn bản đến">
            <Step steps={receptionSteps} />
        </Card>
    );
};

export default ReceptionAction;

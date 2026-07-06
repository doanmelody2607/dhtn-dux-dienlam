import { FC } from 'react';
import Card from '~/components/Card';
import Step from '~/components/Step';
import { createDraftSteps } from './data-draft';

interface MyDraftProps {}

const MyDraft: FC<MyDraftProps> = () => {
    return (
        <Card cardTitle="📥 Dự thảo của tôi">
            <Step steps={createDraftSteps} />
        </Card>
    );
};

export default MyDraft;

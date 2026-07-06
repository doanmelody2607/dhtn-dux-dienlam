import { FC } from 'react';
import Card from '~/components/Card';
import Step from '~/components/Step';
import { feedbackSteps } from './data-feedback';

interface FeedbackActionProps {}

const FeedbackAction: FC<FeedbackActionProps> = () => {
    return (
        <Card cardTitle="📥 Dự thảo được Trình xin ý kiến">
            <Step steps={feedbackSteps} />
        </Card>
    );
};

export default FeedbackAction;

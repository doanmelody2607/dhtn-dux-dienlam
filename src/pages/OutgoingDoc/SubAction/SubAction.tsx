import { FC } from 'react';
import Card from '~/components/Card';
import Step from '~/components/Step';
import { submissionFormSteps } from './data-submission-form';

interface FeedbackActionProps {}

const FeedbackAction: FC<FeedbackActionProps> = () => {
    return (
        <Card cardTitle="Dự thảo được Trình xin ý kiến">
            <Step steps={submissionFormSteps} />
        </Card>
    );
};

export default FeedbackAction;

import { FC } from 'react';
import Card from '~/components/Card';
import Step from '~/components/Step';
import { signatureSteps } from './data-signature';

interface SignatureActionProps {}

const SignatureAction: FC<SignatureActionProps> = () => {
    return (
        <Card cardTitle="Dự thảo được Trình ký">
            <Step steps={signatureSteps} />
        </Card>
    );
};

export default SignatureAction;

import { FC } from 'react';
import Card from '~/components/Card';
import Step from '~/components/Step';
import { signatureSteps } from './data-signature';

interface SignatureProps {}

const Signature: FC<SignatureProps> = () => {
    return (
        <Card cardTitle="Dự thảo được Trình xin ý kiến">
            <Step steps={signatureSteps} />
        </Card>
    );
};

export default Signature;

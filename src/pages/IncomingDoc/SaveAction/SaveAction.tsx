import { FC } from 'react';
import Card from '~/components/Card';
import Step from '~/components/Step';
import { saveSteps } from './data-save';

interface SaveActionProps {}

const SaveAction: FC<SaveActionProps> = () => {
    return (
        <Card cardTitle="Thao tác Lưu tài liệu cá nhân">
            <Step steps={saveSteps} />
        </Card>
    );
};

export default SaveAction;

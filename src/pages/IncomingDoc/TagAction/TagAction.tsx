import { FC } from 'react';
import Card from '~/components/Card';
import Step from '~/components/Step';
import { tagSteps } from './data-tag';

interface TagActionProps {}

const TagAction: FC<TagActionProps> = () => {
    return (
        <Card cardTitle="Thao tác Gắn tag văn bản đến">
            <Step steps={tagSteps} />
        </Card>
    );
};

export default TagAction;

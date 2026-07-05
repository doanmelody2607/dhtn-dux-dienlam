import { FC } from 'react';
import Card from '~/components/Card';
import LiquidGlass from '~/components/LiquidGlass';
import Step from '~/components/Step';
import StepItem from '~/components/Step/StepItem';
import { createDraftSteps, myDraftPreview } from './data-draft';

interface MyDraftProps {}

const MyDraft: FC<MyDraftProps> = () => {
    return (
        <Card
            cardTitle="📥 Dự thảo của tôi"
            description="Đây là danh sách tất cả dự thảo do bạn tạo ra, thông qua các trường thông tin trên bảng bạn có thể theo dõi được các dự thảo dễ dàng."
        >
            <LiquidGlass>
                <StepItem stepItem={myDraftPreview} />
            </LiquidGlass>

            <h3>Cách tạo mới dự thảo</h3>

            <Step steps={createDraftSteps} />
        </Card>
    );
};

export default MyDraft;

import { FC } from 'react';
import Card from '~/components/Card';
import Step from '~/components/Step';
import { tagSteps } from './data-meeting';

interface MeetingCalendarProps {}

const MeetingCalendar: FC<MeetingCalendarProps> = () => {
    return (
        <Card cardTitle="Lịch họp">
            <Step steps={tagSteps} />
        </Card>
    );
};

export default MeetingCalendar;

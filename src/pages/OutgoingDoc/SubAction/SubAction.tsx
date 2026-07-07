import classNames from 'classnames/bind';
import { FC } from 'react';
import Card from '~/components/Card';
import styles from './SubAction.module.scss';

const cx = classNames.bind(styles);

interface SubActionProps {}

const SubdAction: FC<SubActionProps> = () => {
    return (
        <div className={cx('wrapper')}>
            <Card cardTitle=" Dự thảo được Lưu lại và tạo phiếu trình">
                <h3>Đang trong quá trình cập nhật......................</h3>
            </Card>
        </div>
    );
};

export default SubdAction;

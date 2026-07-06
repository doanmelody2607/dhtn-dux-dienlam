import images from '~/assets/images';
import { IStep } from '~/commons/interfaces/step';
import Image from '~/components/Image';
import ImageWithFigcaption from '~/components/ImageWithFigcaption';
import Highlight from '~/components/Highlight';

const recordSteps: IStep[] = [
    {
        content: (
            <>
                Văn bản dự thảo sau khi thực hiện hành động{' '}
                <Highlight content="Lưu lại" highlightType="do" /> sẽ được hiển thị ra ngoài{' '}
                <Highlight content="Danh sách văn bản dự thảo" /> với trạng thái là{' '}
                <Highlight content="Chưa trình ký" />, ta có thể click vào các{' '}
                <Highlight content="vị trí" /> như chỉ dẫn dưới đây để thực hiện các hành động như:{' '}
                <Highlight content="Chỉnh sửa, cập nhật dự thảo" highlightType="xanh" />,{' '}
                <Highlight content="Xem thông tin chi tiết dự thảo" highlightType="xanh" />,{' '}
                <Highlight content="Xem nội dung file dự thảo" highlightType="xanh" />
            </>
        ),
    },
    {
        content: (
            <ImageWithFigcaption figcaption="Hình 3.1 - Văn bản dự thảo sau khi lưu lại">
                <Image src={images.myDraftAddFile10} alt="Văn bản dự thảo sau khi lưu" />
            </ImageWithFigcaption>
        ),
    },
    {
        content: (
            <>
                Thông qua tác vụ{' '}
                <Highlight content="Xem thông tin chi tiết của dự thảo" highlightType="xanh" />, ta
                có thể theo dõi nhanh được các thông tin của dự thảo một các nhanh chóng.
            </>
        ),
    },
    {
        content: (
            <ImageWithFigcaption figcaption="Hình 3.2 - Văn bản dự thảo sau khi lưu lại - Xem thông tin chi tiết">
                <Image src={images.myDraftAddFile11} alt="Văn bản dự thảo - Thông tin chi tiết" />
            </ImageWithFigcaption>
        ),
    },
];

export { recordSteps };

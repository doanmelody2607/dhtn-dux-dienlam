import images from '~/assets/images';
import { IStep } from '~/commons/interfaces/step';
import Image from '~/components/Image';
import ImageWithFigcaption from '~/components/ImageWithFigcaption';
import Highlight from '~/components/Highlight';

const tagSteps: IStep[] = [
    {
        content: (
            <ImageWithFigcaption figcaption="Hình 10.1 - Giao diện Thông tin chi tiết của văn bản đến - Thao tác Gán tag văn bản">
                <Image src={images.vanBanDen010} alt="" />
            </ImageWithFigcaption>
        ),
    },
    {
        content: (
            <>
                Để thực hiện gắn tag cho <Highlight content="Văn bản đến" highlightType="xanh" />,
                ta click vào button <Highlight content="Gắn tag văn bản" highlightType="do" /> như{' '}
                <Highlight content="Hình 10.1" /> chỉ dẫn.
            </>
        ),
    },
    {
        content: (
            <ImageWithFigcaption figcaption="Hình 10.2 - Giao diện Model Gán tag văn bản đến">
                <Image src={images.vanBanDen011} alt="" />
            </ImageWithFigcaption>
        ),
    },
    {
        content: (
            <>
                Model <Highlight content="Gắn tag văn bản" highlightType="xanh" /> sẽ được mở lên,
                ta nhập nội dung và thêm mới <Highlight content="Tag văn bản" />, sau đó click{' '}
                <Highlight content="Ghi lại" highlightType="do" /> để hoàn thành việc gắn tag.
            </>
        ),
    },
    {
        content: (
            <ImageWithFigcaption figcaption="Hình 10.3 - Giao diện trang Danh sách văn bản đến - Tag hiển thị ở Trích yếu nội dung văn bản">
                <Image src={images.vanBanDen012} alt="" />
            </ImageWithFigcaption>
        ),
    },
    {
        content: (
            <>
                <Highlight content="Tag văn bản" highlightType="xanh" /> được gán sẽ được hiển thị
                ngay trên phần <Highlight content="Trích yếu nội dung văn bản" />. Thông qua{' '}
                <Highlight content="Tag văn bản" highlightType="xanh" />, ta có thể tìm và phân loại
                các văn bản dễ dàng, nhanh chóng.
            </>
        ),
    },
    {
        content: (
            <ImageWithFigcaption figcaption="Hình 10.4 - Giao diện trang Danh sách văn bản đến - Tag hiển thị ở Trích yếu nội dung văn bản">
                <Image src={images.vanBanDen013} alt="" />
            </ImageWithFigcaption>
        ),
    },
];

export { tagSteps };

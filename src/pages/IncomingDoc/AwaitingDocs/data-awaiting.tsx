import images from '~/assets/images';
import { IStep } from '~/commons/interfaces/step';
import Image from '~/components/Image';
import ImageWithFigcaption from '~/components/ImageWithFigcaption';
import Highlight from '~/components/Highlight';

const awaitingSteps: IStep[] = [
    {
        content: (
            <>
                Đối với tài khoản nhận được <Highlight content="Văn bản đến" highlightType="xanh" />
                , giao diện Trang chủ sẽ hiển thị như sau:
            </>
        ),
    },
    {
        content: (
            <ImageWithFigcaption figcaption="Hình 8.1 - Giao diện trang chủ của cá nhân nhận được văn bản đến">
                <Image src={images.vanBanDen001} alt="" />
            </ImageWithFigcaption>
        ),
    },
    {
        content: (
            <>
                Click trực tiếp vào MODULE{' '}
                <Highlight content="VĂN BẢN ĐẾN - Chờ tiếp nhận" highlightType="do" /> như chỉ dẫn ở{' '}
                <Highlight content="Hình 8.1" />, hệ thống sẽ chuyển tới trang{' '}
                <Highlight content="Danh sách văn bản đến chờ tiếp nhận" highlightType="xanh" />
            </>
        ),
    },
    {
        content: (
            <ImageWithFigcaption figcaption="Hình 8.2 - Giao diện trang Danh sách văn bản đến chờ tiếp nhận">
                <Image src={images.vanBanDen002} alt="" />
            </ImageWithFigcaption>
        ),
    },
    {
        content: (
            <>
                Ở trang{' '}
                <Highlight content="Danh sách văn bản đến chờ tiếp nhận" highlightType="xanh" />, ta
                sẽ thấy được các trường thông tin{' '}
                <Highlight content="Văn bản đến" highlightType="xanh" />. Ta có thể click trực tiếp
                vào <Highlight content="Trích yếu nội dung văn bản" /> để xem được{' '}
                <strong>Thông tin chi tiết văn bản</strong> hoặc click vào{' '}
                <Highlight content="File văn bản" /> để xem nhanh <strong>Nội dung văn bản</strong>.
            </>
        ),
    },
    {
        content: (
            <ImageWithFigcaption figcaption="Hình 8.3 - Giao diện Thông tin chi tiết của văn bản đến">
                <Image src={images.vanBanDen003} alt="" />
                <Image src={images.vanBanDen004} alt="" />
            </ImageWithFigcaption>
        ),
    },
    {
        content: (
            <>
                Qua <Highlight content="Thông tin chi tiết văn bản" />, ta có thể theo dõi được các
                trường thông tin quan trọng{' '}
                <strong>
                    <i>
                        (Thông tin chi tiết, Danh sách người gửi đến, Danh sách ký ban hành, Lịch sử
                        chỉnh sửa văn bản, ...)
                    </i>
                </strong>
                .
            </>
        ),
    },
];

export { awaitingSteps };

import images from '~/assets/images';
import { IStep } from '~/commons/interfaces/step';
import Image from '~/components/Image';
import ImageWithFigcaption from '~/components/ImageWithFigcaption';
import Highlight from '~/components/Highlight';

const receptionSteps: IStep[] = [
    {
        content: (
            <ImageWithFigcaption figcaption="Hình 9.1 - Giao diện Thông tin chi tiết của văn bản đến - Thao tác Tiếp nhận">
                <Image src={images.vanBanDen005} alt="" />
            </ImageWithFigcaption>
        ),
    },
    {
        content: (
            <>
                Để thực hiện tiếp nhận <Highlight content="Văn bản đến" highlightType="xanh" />, ta
                click vào button <Highlight content="Tiếp nhận" highlightType="do" /> như{' '}
                <Highlight content="Hình 9.1" /> chỉ dẫn.
            </>
        ),
    },
    {
        content: (
            <ImageWithFigcaption figcaption="Hình 9.2 - Giao diện Model Tiếp nhận văn bản">
                <Image src={images.vanBanDen006} alt="" />
                <Image src={images.vanBanDen007} alt="" />
            </ImageWithFigcaption>
        ),
    },
    {
        content: (
            <>
                Tiếp theo, ta chọn <Highlight content="Sổ văn bản" />, hệ thống sẽ lấy{' '}
                <Highlight content="Số đến" /> tiếp theo tự động theo số đã được cấu hình. Ta click
                vào button <Highlight content="Tiếp nhận & đóng dấu" highlightType="do" /> để thêm{' '}
                <Highlight content="Văn bản đến" highlightType="xanh" /> vào sổ và thực hiện việc
                đóng dấu.
            </>
        ),
    },
    {
        content: (
            <ImageWithFigcaption figcaption="Hình 9.3 - Giao diện Trình xử lý đóng dấu văn bản đến">
                <Image src={images.vanBanDen008} alt="" />
            </ImageWithFigcaption>
        ),
    },
    {
        content: (
            <>
                Trình xử lý <Highlight content="Đóng dấu văn bản" highlightType="do" /> sẽ được mở
                lên như <Highlight content="Hình 9.3" />, ta sẽ thấy{' '}
                <Highlight content="con dấu đến" highlightType="xanh" /> được xuất hiện tại phía bên
                trái của văn bản, lúc này, ta chỉ việc kéo thả và căn chỉnh con dấu sao cho phù hợp.
                Click vào button <Highlight content="✓⃝" highlightType="do" /> để xác nhận việc đóng
                dấu.
            </>
        ),
    },
    {
        content: (
            <ImageWithFigcaption figcaption="Hình 9.3 - Giao diện Trình xử lý đóng dấu văn bản đến">
                <Image src={images.vanBanDen009} alt="" />
            </ImageWithFigcaption>
        ),
    },
    {
        content: (
            <>
                Sau khi thực hiện việc <Highlight content="Đóng dấu" highlightType="do" /> xong,
                model <Highlight content="Chuyển văn bản" highlightType="xanh" /> sẽ hiển thị lên,
                ta nhập <Highlight content="ý kiến chuyển" /> và chọn{' '}
                <Highlight content="cá nhân, đơn vị" /> muốn chuyển văn bản đến. Click vào button{' '}
                <Highlight content="Chuyển văn bản" highlightType="do" /> để chuyển văn bản. Hoàn
                thành!
            </>
        ),
    },
];

export { receptionSteps };

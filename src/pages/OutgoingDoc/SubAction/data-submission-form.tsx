import images from '~/assets/images';
import { IStep } from '~/commons/interfaces/step';
import Image from '~/components/Image';
import ImageWithFigcaption from '~/components/ImageWithFigcaption';
import Highlight from '~/components/Highlight';

const submissionFormSteps: IStep[] = [
    {
        content: (
            <>
                Sau khi thực hiện hành động{' '}
                <Highlight content="Lưu lại và tạo phiếu trình" highlightType="do" />, hệ thống sẽ
                chuyển tới giao diện <Highlight content="Tạo phiếu trình" highlightType="xanh" />.
                Ta nhập đầy đủ các trường thông tin yêu cầu, đối với{' '}
                <Highlight content="Thông tin đính kèm" /> và{' '}
                <Highlight content="Danh sách cá nhân xin ý kiến" /> hệ thống sẽ lấy theo thông tin
                mà ta đã thực hiện lúc tạo <Highlight content="Dự thảo" highlightType="xanh" />.
            </>
        ),
    },
    {
        content: (
            <ImageWithFigcaption figcaption="Hình 5.1 - Giao diện tạo phiếu trình">
                <Image src={images.myDraftSubForm01} alt="" />
                <Image src={images.myDraftSubForm02} alt="" />
                <Image src={images.myDraftSubForm03} alt="" />
            </ImageWithFigcaption>
        ),
    },
    {
        content: (
            <>
                Đối với cá nhân được trình phê duyệt, các thông tin sẽ được hiển thị trên trang chủ
                như sau. Có thể click trực tiếp vào <Highlight content="Thông báo" /> hoặc{' '}
                <Highlight content="Phiếu trình - Chờ xử lý" /> theo chỉ dẫn ở hình dưới đây để đi
                tới trang xử lý phiếu trình.
            </>
        ),
    },
    {
        content: (
            <ImageWithFigcaption figcaption="Hình 5.2 - Giao diện trang chủ của cá nhân được trình phê duyệt - Trần Lê Kim Tuyến">
                <Image src={images.myDraftAddFile19} alt="" />
            </ImageWithFigcaption>
        ),
    },

    {
        content: (
            <ImageWithFigcaption figcaption="Hình 5.3 - Giao diện danh sách Phiếu trình cần phê duyệt">
                <Image src={images.myDraftAddFile20} alt="" />
            </ImageWithFigcaption>
        ),
    },
    {
        content: (
            <>
                <Highlight content="Trình xử lý" highlightType="do" /> phiếu trình sẽ được mở lên
                sau khi click vào <Highlight content="Nội dung trình" highlightType="xanh" /> như{' '}
                <Highlight content="Hình 5.3" /> hướng dẫn.
            </>
        ),
    },
    {
        content: (
            <ImageWithFigcaption figcaption="Hình 5.4 - Giao diện Thông tin phiếu trình - Ý kiến xác nhận">
                <Image src={images.myDraftAddFile21} alt="" />
                <Image src={images.myDraftAddFile22} alt="" />
            </ImageWithFigcaption>
        ),
    },
    {
        content: (
            <>
                Tiếp theo, cá nhân được trình phê duyệt sẽ xử lý{' '}
                <Highlight content="Phê duyệt" highlightType="xanh" /> hoặc{' '}
                <Highlight content="Trả lại" highlightType="do" /> kèm theo nội dung ý kiến.
            </>
        ),
    },
    {
        content: (
            <ImageWithFigcaption figcaption="Hình 5.5 - Giao diện Thông tin phiếu trình - Xử lý 'Phê duyệt' hoặc 'Trả lại'">
                <Image src={images.myDraftAddFile23} alt="" />
            </ImageWithFigcaption>
        ),
    },
    {
        content: (
            <>
                Sau khi phiếu trình được xử lý, cá nhân <Highlight content="lập phiếu trình" /> sẽ
                nhận được thông báo như sau:
            </>
        ),
    },
    {
        content: (
            <ImageWithFigcaption figcaption="Hình 5.6 - Giao diện trang chủ của cá nhân lập phiếu trình - Vũ Ngọc Đoàn">
                <Image src={images.myDraftAddFile25} alt="" />
            </ImageWithFigcaption>
        ),
    },
    {
        content: (
            <>
                Phiếu trình sau khi đã được các cá nhân{' '}
                <Highlight content="phê duyệt" highlightType="xanh" /> sẽ được chuyển đến cho cá
                nhân có thẩm quyền <Highlight content="Ký duyệt" highlightType="do" />.
            </>
        ),
    },
    {
        content: (
            <ImageWithFigcaption figcaption="Hình 5.7 - Giao diện Thông tin phiếu trình của cá nhân có thẩm quyền ký duyệt">
                <Image src={images.myDraftAddFile26} alt="" />
            </ImageWithFigcaption>
        ),
    },
    {
        content: (
            <>
                Cuối cùng, cá nhân <Highlight content="lập phiếu trình" /> có thể theo dõi được
                phiếu trình của mình trình đi đã được{' '}
                <Highlight content="Phê duyệt" highlightType="xanh" /> hay bị{' '}
                <Highlight content="Trả lại" highlightType="do" /> thông qua trạng thái hiển thị
                trong bảng <Highlight content="Danh sách phiếu trình" />.
            </>
        ),
    },
    {
        content: (
            <ImageWithFigcaption figcaption="Hình 5.8 - Giao diện Danh sách phiếu trình của cá nhân lập phiếu trình">
                <Image src={images.myDraftAddFile24} alt="" />
            </ImageWithFigcaption>
        ),
    },
];

export { submissionFormSteps };

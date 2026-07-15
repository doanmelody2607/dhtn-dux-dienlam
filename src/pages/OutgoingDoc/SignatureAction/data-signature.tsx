import images from '~/assets/images';
import { IStep } from '~/commons/interfaces/step';
import Image from '~/components/Image';
import ImageWithFigcaption from '~/components/ImageWithFigcaption';
import Highlight from '~/components/Highlight';

const signatureSteps: IStep[] = [
    {
        content: (
            <>
                Sau khi thực hiện hành động <Highlight content="Trình ký" highlightType="do" />,
                trạng thái của dự thảo lúc này sẽ là <Highlight content="Đang xử lý" />. Ta có thể
                hủy luồng trình ký như chỉ dẫn trong hình dưới đây.
            </>
        ),
    },
    {
        content: (
            <ImageWithFigcaption figcaption="Hình 6.1 - Giao diện Danh sách văn bản dự thảo">
                <Image src={images.trinhKy001} alt="" />
                {/* <Image src={images.myDraftSubForm02} alt="" />
                <Image src={images.myDraftSubForm03} alt="" /> */}
            </ImageWithFigcaption>
        ),
    },
    {
        content: (
            <>
                Đối với <strong>Lãnh đạo</strong> được trình{' '}
                <Highlight content="ký duyệt" highlightType="xanh" />, các thông tin sẽ được hiển
                thị trên trang chủ như sau. Có thể click trực tiếp vào{' '}
                <Highlight content="Thông báo" /> hoặc{' '}
                <Highlight content="Văn bản đi - Chờ xử lý" /> theo chỉ dẫn ở hình dưới đây để đi
                tới trang xử lý văn bản dự thảo.
            </>
        ),
    },
    {
        content: (
            <ImageWithFigcaption figcaption="Hình 6.2 - Giao diện trang chủ của cá nhân được trình ký duyệt - Bí Thư Đảng Ủy Test">
                <Image src={images.trinhKy002} alt="" />
            </ImageWithFigcaption>
        ),
    },
    {
        content: (
            <>
                Hệ thống sẽ mở trang{' '}
                <Highlight content="Danh sách văn bản trình ký" highlightType="do" />,{' '}
                <strong>Lãnh đạo</strong> sẽ xem được các trường thông tin của văn bản dự thảo.
                Click vào <Highlight content="Trích yếu nội dung văn bản" /> để xem thông tin chi
                tiết của dự thảo. Click vào{' '}
                <Highlight content="File văn bản" highlightType="xanh" /> để mở trình xử lý văn bản
                dự thảo.
            </>
        ),
    },
    {
        content: (
            <ImageWithFigcaption figcaption="Hình 6.3 - Giao diện Danh sách văn bản trình ký">
                <Image src={images.trinhKy003} alt="" />
            </ImageWithFigcaption>
        ),
    },
    {
        content: (
            <>
                <Highlight content="Trình xử lý" highlightType="do" /> văn bản dự thảo sẽ được mở
                lên sau khi click vào <Highlight content="File văn bản" highlightType="xanh" /> như{' '}
                <Highlight content="Hình 6.3" /> hướng dẫn. Ở trong{' '}
                <Highlight content="Trình xử lý" highlightType="do" /> này, chữ ký của{' '}
                <strong>Lãnh đạo</strong> được trình ký duyệt sẽ chỉ xuất hiện khi{' '}
                <Highlight content="tên người ký trong dự thảo" /> trùng (chính xác) với{' '}
                <Highlight content="tên người ký trên hệ thống" />.
            </>
        ),
    },
    {
        content: (
            <ImageWithFigcaption figcaption="Hình 6.4 - Giao diện trình xử lý văn bản dự thảo">
                <Image src={images.trinhKy004} alt="" />
            </ImageWithFigcaption>
        ),
    },
    {
        content: (
            <>
                Tiếp theo, <strong>Lãnh đạo</strong> có thể <Highlight content="co dãn, kéo thả" />{' '}
                chữ ký sao cho phù hợp và{' '}
                <Highlight content="xác nhận ký duyệt" highlightType="xanh" />.
            </>
        ),
    },
    {
        content: (
            <ImageWithFigcaption figcaption="Hình 6.5 - Giao diện trình xử lý văn bản dự thảo - Sau khi click vào nút xác nhận ký duyệt">
                <Image src={images.trinhKy005} alt="" />
            </ImageWithFigcaption>
        ),
    },
    {
        content: (
            <ImageWithFigcaption figcaption="Hình 6.6 - Giao diện Chứng thư chữ ký số được hiển thị lên">
                <Image src={images.trinhKy007} alt="" />
            </ImageWithFigcaption>
        ),
    },
    {
        content: (
            <ImageWithFigcaption figcaption="Hình 6.7 - Giao diện Chứng thư chữ ký số được hiển thị lên - Nhập mật khẩu">
                <Image src={images.trinhKy008} alt="" />
            </ImageWithFigcaption>
        ),
    },
    {
        content: (
            <>
                Sau khi đã nhập mật khẩu{' '}
                <Highlight content="chứng thư chữ ký số" highlightType="do" /> và click vào OK, hệ
                thống sẽ thông báo{' '}
                <Highlight
                    content="Đồng chí đã thực hiện ký duyệt thành công"
                    highlightType="xanh"
                />
                .
            </>
        ),
    },
    {
        content: (
            <ImageWithFigcaption figcaption="Hình 6.8 - Giao diện Danh sách văn bản trình ký - Xuất hiện thông báo ký duyệt thành công">
                <Image src={images.trinhKy009} alt="" />
            </ImageWithFigcaption>
        ),
    },
];

export { signatureSteps };

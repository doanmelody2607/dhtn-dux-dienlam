import images from '~/assets/images';
import { IStep } from '~/commons/interfaces/step';
import Image from '~/components/Image';
import ImageWithFigcaption from '~/components/ImageWithFigcaption';
import Highlight from '~/components/Highlight';

const feedbackSteps: IStep[] = [
    {
        content: (
            <>
                Văn bản dự thảo sau khi thực hiện hành động{' '}
                <Highlight content="Trình xin ý kiến" highlightType="do" /> sẽ được hiển thị ra
                ngoài <Highlight content="Danh sách văn bản dự thảo" /> với trạng thái là{' '}
                <Highlight content="Đang xin ý kiến" />.
            </>
        ),
    },
    {
        content: (
            <ImageWithFigcaption figcaption="Hình 4.1 - Văn bản dự thảo sau khi trình xin ý kiến">
                <Image src={images.myDraftAddFile12} alt="Văn bản dự thảo sau khi lưu" />
            </ImageWithFigcaption>
        ),
    },
    {
        content: (
            <>
                Lúc này, ở tài khoản của người được{' '}
                <Highlight content="trình xin ý kiến" highlightType="xanh" /> sẽ nhận được thông
                báo, ở biểu tượng <Highlight content="🔔" /> nằm gần tên tài khoản sẽ hiển thị con
                số thông báo, click vào <Highlight content="🔔" /> ta sẽ xem được các thông báo.
                Hoặc ta cũng có thể nhìn thấy ở phần <Highlight content="Văn bản đi" />, các con số
                sẽ xuất hiện tương ứng với trạng thái của dự thảo. Click trực tiếp vào chúng để{' '}
                <Highlight content="xử lý dự thảo" highlightType="do" />
            </>
        ),
    },
    {
        content: (
            <ImageWithFigcaption figcaption="Hình 4.2 - Giao diện trang chủ của người được trình xin ý kiến">
                <Image src={images.myDraftAddFile13} alt="Văn bản dự thảo - Thông tin chi tiết" />
            </ImageWithFigcaption>
        ),
    },
    {
        content: (
            <>
                Sau khi click vào <Highlight content="Thông báo" />, hệ thống sẽ chuyển tới trang{' '}
                <Highlight content="Văn bản ký duyệt" />, ta có thể thực hiện các thao tác theo chỉ
                dẫn dưới đây:
            </>
        ),
    },
    {
        content: (
            <ImageWithFigcaption figcaption="Hình 4.3 - Giao diện danh sách Văn bản trình ký - Chờ xử lý">
                <Image src={images.myDraftAddFile14} alt="Văn bản dự thảo - Thông tin chi tiết" />
            </ImageWithFigcaption>
        ),
    },
    {
        content: (
            <>
                Form <Highlight content="Xem thông tin chiết" /> sẽ được mở lên sau khi click vào{' '}
                <Highlight content="Trích yếu nội dung văn bản" />, ở trong Form này, ta click vào
                nút <Highlight content="Cho ý kiến" highlightType="do" /> để cho ý kiến.
            </>
        ),
    },
    {
        content: (
            <ImageWithFigcaption figcaption="Hình 4.4 - Giao diện danh sách Văn bản trình ký - Chờ xử lý - Xem thông tin chi tiết">
                <Image src={images.myDraftAddFile15} alt="Văn bản dự thảo - Thông tin chi tiết" />
            </ImageWithFigcaption>
        ),
    },
    {
        content: (
            <>
                Tiếp theo, ta nhập <Highlight content="nội dung góp ý" />, đồng thời có thể{' '}
                <Highlight content="đính kèm file" /> theo. Cuối cùng, click vào{' '}
                <Highlight content="Gửi ký kiến" highlightType="do" /> để gửi ý kiến đi.
            </>
        ),
    },
    {
        content: (
            <ImageWithFigcaption figcaption="Hình 4.5 - Giao diện danh sách Văn bản trình ký - Chờ xử lý - Xem thông tin chi tiết - Cho ý kiến">
                <Image src={images.myDraftAddFile16} alt="Văn bản dự thảo - Thông tin chi tiết" />
            </ImageWithFigcaption>
        ),
    },
    {
        content: (
            <>
                Sau khi được <Highlight content="cho ý kiến" highlightType="xanh" />, cá nhân{' '}
                <Highlight content="Trình xin ý kiến" /> cũng sẽ nhận được thông báo như hình dưới
                đây. Click trực tiếp vào <Highlight content="thông báo" /> để xem chi tiết nội dung
                góp ý (<Highlight content="ý kiến" highlightType="do" />,{' '}
                <Highlight content="file đính kèm" highlightType="do" />, ... ).
            </>
        ),
    },
    {
        content: (
            <ImageWithFigcaption figcaption="Hình 4.6 - Giao diện trang chủ của người trình xin ý kiến">
                <Image src={images.myDraftAddFile17} alt="Văn bản dự thảo - Thông tin chi tiết" />
            </ImageWithFigcaption>
        ),
    },
    {
        content: (
            <ImageWithFigcaption figcaption="Hình 4.7 - Xem thông tin chi tiết - Danh sách cho ý kiến">
                <Image src={images.myDraftAddFile18} alt="Văn bản dự thảo - Thông tin chi tiết" />
            </ImageWithFigcaption>
        ),
    },
];

export { feedbackSteps };

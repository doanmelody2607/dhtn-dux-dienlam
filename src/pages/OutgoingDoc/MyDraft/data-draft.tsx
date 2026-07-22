import images from '~/assets/images';
import { IStep } from '~/commons/interfaces/step';
import Highlight from '~/components/Highlight';
import Image from '~/components/Image';
import ImageWithFigcaption from '~/components/ImageWithFigcaption';

const createDraftSteps: IStep[] = [
    {
        content: (
            <ImageWithFigcaption figcaption="Hình 2.1 - Danh sách văn bản dự thảo đã tạo">
                <Image src={images.myDraft} alt="Văn bản dự thảo" />
            </ImageWithFigcaption>
        ),
    },
    {
        content: (
            <>
                Tại giao diện <strong>Danh sách văn bản dự thảo</strong>, click vào nút có hình{' '}
                <Highlight content="╋" highlightType="do" /> như <Highlight content="Hình 2.1" />,
                hệ thống sẽ mở trang{' '}
                <Highlight content="Tạo mới văn bản dự thảo" highlightType="xanh" />
            </>
        ),
    },

    {
        content: (
            <ImageWithFigcaption figcaption="Hình 2.2 - Giao diện trang tạo mới văn bản dự thảo">
                <Image src={images.myDraftAddFile01} alt="Tạo mới văn bản dự thảo" />
            </ImageWithFigcaption>
        ),
    },
    {
        content: (
            <>
                Click vào nút <Highlight content="Chọn file" highlightType="do" /> như{' '}
                <Highlight content="Hình 2.2" />, đưa file dự thảo lên, hệ thống sẽ quét qua file
                văn bản và tự động điền các trường thông tin cần thiết vào.
            </>
        ),
    },
    {
        content: (
            <ImageWithFigcaption figcaption="Hình 2.3 - Giao diện trang tạo mới văn bản dự thảo sau khi tải file dự thảo lên">
                <Image
                    src={images.myDraftAddFile02}
                    alt="Tạo mới văn bản dự thảo - đã đính file lên"
                />
            </ImageWithFigcaption>
        ),
    },

    {
        content: (
            <>
                Click vào <Highlight content="Kiểm tra thể thức, chính tả" highlightType="do" />, hệ
                thống sẽ mở trình kiểm tra lên, trong đó sẽ hiển thị{' '}
                <Highlight content="nội dung văn bản" /> và{' '}
                <Highlight content="danh sách lỗi văn bản" />
            </>
        ),
    },
    {
        content: (
            <ImageWithFigcaption figcaption="Hình 2.4 - Giao diện tab kiểm tra thể thức, chính tả">
                <Image
                    src={images.myDraftAddFile03}
                    alt="Tạo mới văn bản dự thảo - kiểm tra chính tả"
                />
            </ImageWithFigcaption>
        ),
    },
    {
        content: (
            <>
                {' '}
                Sau khi hoàn tất việc kiểm tra thể thức, chính tả dự thảo, tiếp theo là phần{' '}
                <Highlight content="Chọn người xử lý tiếp theo" />, khi chọn người xử lý {'-->'}{' '}
                chức danh tương ứng sẽ hiển thị. Ở phần <Highlight content="Chọn hành động" />, có 2
                luồng hành động sau: <Highlight content="Phê duyệt" highlightType="xanh" /> và{' '}
                <Highlight content="Ký duyệt" highlightType="xanh" />
            </>
        ),
    },
    {
        content: (
            <ImageWithFigcaption figcaption="Hình 2.5 - Giao diện trang tạo mới văn bản dự thảo - Danh sách cá nhân xử lý tiếp theo">
                <Image
                    src={images.myDraftAddFile04}
                    alt="Tạo mới văn bản dự thảo - Chọn người ký duyệt - Chưa chọn"
                />
            </ImageWithFigcaption>
        ),
    },
    {
        content: (
            <>
                Sau khi chọn <Highlight content="Người xử lý" /> và{' '}
                <Highlight content="Hành động" /> xong, ta sẽ có được giao diện như sau:
            </>
        ),
    },
    {
        content: (
            <ImageWithFigcaption figcaption="Hình 2.6 - Giao diện trang tạo mới văn bản dự thảo - Danh sách cá nhân xử lý tiếp theo">
                <Image
                    src={images.myDraftAddFile05}
                    alt="Tạo mới văn bản dự thảo - Chọn người ký duyệt - Đã chọn"
                />
            </ImageWithFigcaption>
        ),
    },
    {
        content: (
            <>
                Trước khi trình phê duyệt và ký duyệt, có thể chọn các cá nhân để xin ý kiến trong
                phần <Highlight content="Danh sách cho ý kiến" />.
            </>
        ),
    },
    {
        content: (
            <ImageWithFigcaption figcaption=" Hình 2.7 - Giao diện trang tạo mới văn bản dự thảo - Danh sách các cá nhân cho ý kiến">
                <Image
                    src={images.myDraftAddFile06}
                    alt="Tạo mới văn bản dự thảo - Chọn các cá nhân xin ý kiến"
                />
            </ImageWithFigcaption>
        ),
    },
    {
        content: (
            <>
                Click vào <Highlight content="Chọn cá nhân" highlightType="do" /> như{' '}
                <Highlight content="Hình 2.7" />, giao diện danh sách cá nhân sẽ được mở lên như
                hình bên dưới {'-->'} chọn cơ quan, đơn vị và các cá nhân tương ứng
            </>
        ),
    },
    {
        content: (
            <ImageWithFigcaption figcaption=" Hình 2.8 - Giao diện trang tạo mới văn bản dự thảo - Chọn các cá nhân cho ý kiến">
                <Image
                    src={images.myDraftAddFile07}
                    alt="Tạo mới văn bản dự thảo - Chọn các cá nhân xin ý kiến"
                />
            </ImageWithFigcaption>
        ),
    },
    {
        content: (
            <>
                <Highlight content="Danh sách cho ý kiến" /> sau khi đã chọn các cá nhân và đồng ý
                thêm vào danh sách
            </>
        ),
    },
    {
        content: (
            <ImageWithFigcaption figcaption=" Hình 2.9 - Giao diện trang tạo mới văn bản dự thảo - Danh sách cá nhân cho ý kiến sau khi đã chọn">
                <Image
                    src={images.myDraftAddFile08}
                    alt="Tạo mới văn bản dự thảo - Chọn các cá nhân xin ý kiến"
                />
            </ImageWithFigcaption>
        ),
    },
    {
        content: (
            <>
                Cuối cùng, dựa vào nhu cầu (<Highlight content="Lưu lại" highlightType="do" />,{' '}
                <Highlight content="Trình ký" highlightType="xanh" />
                ,...), ta sẽ thực hiện <Highlight content="Hành động" /> phù hợp
            </>
        ),
    },
    {
        content: (
            <ImageWithFigcaption figcaption=" Hình 2.10 - Giao diện trang tạo mới văn bản dự thảo - Chú thích các hành động">
                <Image
                    src={images.myDraftAddFile09}
                    alt="Tạo mới văn bản dự thảo - Chọn các cá nhân xin ý kiến"
                />
            </ImageWithFigcaption>
        ),
    },
];

export { createDraftSteps };

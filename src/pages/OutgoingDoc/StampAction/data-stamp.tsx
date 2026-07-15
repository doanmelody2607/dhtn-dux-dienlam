import images from '~/assets/images';
import { IStep } from '~/commons/interfaces/step';
import Image from '~/components/Image';
import ImageWithFigcaption from '~/components/ImageWithFigcaption';
import Highlight from '~/components/Highlight';

const stampSteps: IStep[] = [
    {
        content: (
            <>
                Sau khi văn bản dự thảo được <Highlight content="ký duyệt" highlightType="xanh" />,
                mặc định hệ thống sẽ tự động chuyển văn bản dự thảo đến tài khoản{' '}
                <Highlight content="Văn thư" /> (trong mục{' '}
                <Highlight content="VĂN BẢN ĐI - Chờ cấp số" highlightType="do" />
                ). Ở giao diện trang chủ của cá nhân có vai trò là <Highlight content="Văn thư" />{' '}
                sẽ hiển thị như sau:
            </>
        ),
    },
    {
        content: (
            <ImageWithFigcaption figcaption="Hình 7.1 - Giao diện trang chủ của cá nhân với vai trò Văn thư">
                <Image src={images.capSo001} alt="" />
            </ImageWithFigcaption>
        ),
    },
    {
        content: (
            <>
                Ta click vào vùng xử lý{' '}
                <Highlight content="VĂN BẢN ĐI - Chờ cấp số" highlightType="do" /> như{' '}
                <Highlight content="Hình 7.1" /> chỉ dẫn để chuyển tới trang hiển thị{' '}
                <Highlight content="Danh sách văn bản trình ký - chờ cấp số" />.
            </>
        ),
    },
    {
        content: (
            <ImageWithFigcaption figcaption="Hình 7.2 - Giao diện trang Danh sách văn bản trình ký  - Chờ cấp số ">
                <Image src={images.capSo002} alt="" />
            </ImageWithFigcaption>
        ),
    },
    {
        content: (
            <>
                Tiếp theo, ta có thể xem thông tin chi tiết dự thảo bằng cách click vào{' '}
                <Highlight content="Trích yếu nội dung văn bản" />, hoặc thực hiện nhanh hành động{' '}
                <Highlight content="Cấp số" highlightType="xanh" /> theo như chỉ dẫn trong{' '}
                <Highlight content="Hình 7.2" />
            </>
        ),
    },
    {
        content: (
            <ImageWithFigcaption figcaption="Hình 7.3 - Giao diện phần xử lý Cấp số văn bản - Chọn Sổ văn bản">
                <Image src={images.capSo003} alt="" />
            </ImageWithFigcaption>
        ),
    },
    {
        content: (
            <>
                Ở phần xử lý <Highlight content="Cấp số văn bản" highlightType="xanh" />, ta chọn{' '}
                <Highlight content="Sổ văn bản" /> <br />
                <strong>
                    <i>
                        ***Admin đã tạo cho mỗi cơ quan, đơn vị một Sổ văn bản đi. VD: sổ của UBKT
                        sẽ là UBKT - Văn bản đi (2025-2030)
                    </i>
                </strong>
                <br />
                <strong>
                    <i style={{ color: 'red' }}>
                        ***Sổ văn bản đi lần này sẽ không phân ra thành nhiều sổ theo từng thể loại
                        nữa, thay vào đó ta chỉ cần một Sổ văn bản đi duy nhất. Số ký hiệu tự động
                        theo từng thể loại đã được Admin cấu hình***
                    </i>
                </strong>
            </>
        ),
    },
    {
        content: (
            <ImageWithFigcaption figcaption="Hình 7.4 - Giao diện phần xử lý Cấp số văn bản - Chọn Thể loại văn bản">
                <Image src={images.capSo004} alt="" />
            </ImageWithFigcaption>
        ),
    },
    {
        content: (
            <>
                Khi chọn <Highlight content="Thể loại văn bản" />,{' '}
                <Highlight content="Số ký hiệu" /> sẽ tự động được lấy theo cấu hình{' '}
                <Highlight content="Sổ văn bản đi" highlightType="xanh" /> đã cài đặt trước đó. Tiếp
                theo, nếu ta thực hiện hành động <Highlight content="Cấp số" highlightType="do" />{' '}
                thì hệ thống sẽ chỉ lưu vào sổ. Còn nếu thực hiện hành động{' '}
                <Highlight content="Cấp số & Đóng dấu" highlightType="do" /> thì hệ thống sẽ chuyển
                đến <Highlight content="Trình xử lý Cấp số & Đóng dấu" highlightType="xanh" />.
            </>
        ),
    },
    {
        content: (
            <ImageWithFigcaption figcaption="Hình 7.5 - Giao diện trình xử lý Cấp số & Đóng dấu - Số ký hiệu và Ngày ký">
                <Image src={images.capSo005} alt="" />
            </ImageWithFigcaption>
        ),
    },
    {
        content: (
            <>
                Nhìn vào <Highlight content="Hình 7.5" />, ta có thể thấy được{' '}
                <Highlight content="Số ký hiệu" /> và <Highlight content="Ngày ký" /> đã được hệ
                thống điền vào tự động. Cuộn xuống cuối văn bản, lúc này ta thấy văn bản vẫn chưa
                được đóng dấu{' '}
                <strong>
                    <i>(không thấy xuất hiện con dấu)</i>
                </strong>
            </>
        ),
    },
    {
        content: (
            <ImageWithFigcaption figcaption="Hình 7.6 - Giao diện trình xử lý Cấp số & Đóng dấu - Chưa có dấu cơ quan, đơn vị">
                <Image src={images.capSo006} alt="" />
            </ImageWithFigcaption>
        ),
    },
    {
        content: (
            <>
                Để thực hiện thao tác <Highlight content="Đóng dấu" highlightType="do" />, ta click
                vào nút hình dấu <Highlight content="+" highlightType="do" /> như chỉ dẫn trên{' '}
                <Highlight content="Hình 7.6" />, sau đó di chuột vào trong phần nội dung văn bản và
                đặt con dấu vào vùng chữ ký sao cho phù hợp, click chuột 1 cái để hoàn thành việc
                đặt con dấu.
            </>
        ),
    },
    {
        content: (
            <ImageWithFigcaption figcaption="Hình 7.7 - Giao diện trình xử lý Cấp số & Đóng dấu - Đã đóng dấu cơ quan, đơn vị">
                <Image src={images.capSo007} alt="" />
            </ImageWithFigcaption>
        ),
    },
    {
        content: (
            <>
                Cuối cùng, ta click vào nút <Highlight content="✓⃝" highlightType="do" /> để xác
                nhận việc đóng dấu{' '}
                <strong>
                    <i style={{ color: 'red' }}>(Ký số con dấu)</i>.
                </strong>{' '}
                Hoàn thành!
            </>
        ),
    },
];

export { stampSteps };

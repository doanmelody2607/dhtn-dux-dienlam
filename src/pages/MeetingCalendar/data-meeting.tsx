import images from '~/assets/images';
import { IStep } from '~/commons/interfaces/step';
import Image from '~/components/Image';
import ImageWithFigcaption from '~/components/ImageWithFigcaption';
import Highlight from '~/components/Highlight';

const tagSteps: IStep[] = [
    {
        content: (
            <ImageWithFigcaption figcaption="Hình 12.1 - Giao diện trang Danh sách lịch họp">
                <Image src={images.lichHop001} alt="" />
            </ImageWithFigcaption>
        ),
    },
    {
        content: (
            <>
                Trên đây là giao diện trang{' '}
                <Highlight content="Danh sách lịch họp" highlightType="xanh" />, để tạo mới{' '}
                <Highlight content="Lịch họp" />, ta click vào nút{' '}
                <Highlight content="╋" highlightType="do" /> như <Highlight content="Hình 2.1" />{' '}
                chỉ dẫn.
            </>
        ),
    },
    {
        content: (
            <ImageWithFigcaption figcaption="Hình 12.2 - Giao diện Model Đặt lịch họp - Chọn loại phòng">
                <Image src={images.lichHop000} alt="" />
            </ImageWithFigcaption>
        ),
    },
    {
        content: (
            <>
                Model <Highlight content="Đặt lịch họp" highlightType="xanh" /> sẽ hiển thị lên, ở
                phần <Highlight content="Chọn loại phòng" />, ta có 2 loại phòng:{' '}
                <Highlight content="Phòng họp được quản lý" highlightType="xanh" /> và{' '}
                <Highlight content="Phòng họp không được quản lý" highlightType="do" />.
            </>
        ),
    },
    {
        content: (
            <ImageWithFigcaption figcaption="Hình 12.3 - Giao diện Model Đặt lịch họp - Phòng họp được quản lý">
                <Image src={images.lichHop002} alt="" />
                <Image src={images.lichHop003} alt="" />
            </ImageWithFigcaption>
        ),
    },
    {
        content: (
            <>
                Đối với loại phòng là{' '}
                <Highlight content="Phòng họp được quản lý" highlightType="xanh" />, ta chỉ có thể
                chọn các phòng họp đã được cấu hình sẵn,{' '}
                <strong>
                    <i style={{ color: 'red' }}>không thể nhập từ bàn phím</i>
                </strong>
                . Đối với loại phòng là{' '}
                <Highlight content="Phòng họp không được quản lý" highlightType="do" /> thì ngược
                lại.
            </>
        ),
    },
    {
        content: (
            <ImageWithFigcaption figcaption="Hình 12.4 - Giao diện Model Đặt lịch họp - Nhập các trường thông tin khác">
                <Image src={images.lichHop004} alt="" />
            </ImageWithFigcaption>
        ),
    },
    {
        content: (
            <>
                Tiếp theo, ta tiếp tục điền các trường thông tin khác, có thể đính kèm{' '}
                <Highlight content="Tài liệu họp" />. Ở{' '}
                <Highlight content="Thành phần tham gia" highlightType="xanh" />, ta thêm các cá
                nhân, đơn vị vào bảng và chọn vai trò tương ứng. Đối với các vai trò
                <Highlight content="Chuẩn bị" />, ta bắt buộc phải nhập{' '}
                <Highlight content="Nội dung chuẩn bị" />.
            </>
        ),
    },
    {
        content: (
            <ImageWithFigcaption figcaption="Hình 12.5 - Giao diện Model Đặt lịch họp - Hoàn tất đặt lịch họp">
                <Image src={images.lichHop005} alt="" />
            </ImageWithFigcaption>
        ),
    },
    {
        content: (
            <>
                Sau khi đã nhập đầy đủ các trường thông tin của <Highlight content="Lịch họp" />. Ta
                click vào button <Highlight content="Ghi lại" highlightType="do" /> để hoàn thành
                việc <Highlight content="Đặt lịch họp" highlightType="xanh" />.
            </>
        ),
    },
    {
        content: (
            <ImageWithFigcaption figcaption="Hình 12.6 - Giao diện trang Danh sách văn bản đến - Tag hiển thị ở Trích yếu nội dung văn bản">
                <Image src={images.lichHop006} alt="" />
            </ImageWithFigcaption>
        ),
    },
    {
        content: (
            <>
                Lịch họp sau khi được khởi tạo sẽ được hiển thị ra ngoài trang{' '}
                <Highlight content="Danh sách lịch họp" highlightType="xanh" /> như{' '}
                <Highlight content="Hình 12.6" />. Trạng thái của lịch họp lúc này sẽ là{' '}
                <Highlight content="Chờ duyệt" />,{' '}
                <strong>
                    tài khoản (cá nhân) được phân quyền{' '}
                    <Highlight content="Quản lý lịch họp" highlightType="do" /> mới có thể{' '}
                    <Highlight content="duyệt lịch họp" highlightType="xanh" />.
                </strong>
                Ta cũng có thể thực hiện các thao tác{' '}
                <Highlight content="Chỉnh sửa" highlightType="xanh" /> hoặc{' '}
                <Highlight content="Xóa" highlightType="do" /> lịch họp.
            </>
        ),
    },
];

export { tagSteps };

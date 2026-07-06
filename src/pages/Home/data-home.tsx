import { IStep } from '~/commons/interfaces/step';
import Highlight from '~/components/Highlight';
import Image from '~/components/Image';
import ImageWithFigcaption from '~/components/ImageWithFigcaption';
import images from '~/assets/images';

const loginSteps: IStep[] = [
    {
        content: (
            <>
                Mở trình duyệt <Highlight content="Google Chrome" /> hoặc{' '}
                <Highlight content="Microsoft Edge" />
            </>
        ),
    },

    {
        content: (
            <>
                Gõ vào thanh địa chỉ: <strong>https://dhtn.dcs.vn</strong> rồi nhấn{' '}
                <strong>Enter</strong>.
            </>
        ),
    },
    {
        content: (
            <ImageWithFigcaption figcaption="Hình 1.1 - Màn hình đăng nhập">
                <Image src={images.login} alt="Login" />
            </ImageWithFigcaption>
        ),
    },
    {
        content: (
            <>
                Tại ô <strong>"Tên tài khoản"</strong> — nhập số CCCD.
            </>
        ),
    },

    {
        content: (
            <>
                {' '}
                Tại ô <strong>"Mật khẩu"</strong> — nhập mật khẩu. Bấm biểu tượng 👁 bên phải để
                kiểm tra mật khẩu đã đúng chưa.
            </>
        ),
    },
    {
        content: (
            <>
                Click vào <Highlight content="Đăng nhập" highlightType="do" />, mã OTP (6 số) sẽ
                được gửi về SĐT ngay lập tức, nhập mã OTP vào hệ thống để hoàn thành việc đăng nhập.
            </>
        ),
    },
    {
        content: (
            <ImageWithFigcaption figcaption="Hình 1.2 - Màn hình đăng nhập hệ thống khi có yêu cầu nhập mã xác thực OTP">
                <Image src={images.loginOTP} alt="Màn hình đăng nhập - xác thực OTP" />
            </ImageWithFigcaption>
        ),
    },
];

const logoutSteps: IStep[] = [
    {
        content: (
            <ImageWithFigcaption figcaption="Hình 1.3 - Trang chủ hệ thống: hiển thị thống kê và các chức năng chính">
                <Image src={images.dashboard} alt="Màn hình dashboard" />
            </ImageWithFigcaption>
        ),
    },
    {
        content: (
            <>
                Bấm vào <strong>tên của bạn</strong> ở góc trên bên phải (ví dụ:{' '}
                <strong>"Vũ Ngọc Đoàn"</strong>).
            </>
        ),
    },
    {
        content: (
            <>
                Chọn <strong>"Đăng xuất"</strong> từ menu xổ xuống.
            </>
        ),
    },
];

export { loginSteps, logoutSteps };

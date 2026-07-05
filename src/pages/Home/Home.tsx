import { FC } from 'react';
import Card from '~/components/Card';
import Highlight from '~/components/Highlight';
import LiquidGlass from '~/components/LiquidGlass';
import Note from '~/components/Note';
import Step from '~/components/Step';
import StepItem from '~/components/Step/StepItem';
import { dashboardPreview, loginSteps, logoutSteps } from './data-home';

interface HomeProps {}

const Home: FC<HomeProps> = () => {
    return (
        <>
            <Card
                cardTitle="🔐 Đăng nhập vào Hệ thống"
                description="Hệ thống Điều hành tác nghiệp được truy cập qua trình duyệt web. Dưới đây là
                    hướng dẫn cách đăng nhập:"
            >
                <h3>Các bước đăng nhập</h3>
                <Step steps={loginSteps}></Step>

                <Note noteType="tip">
                    Ngoài đăng nhập bằng tài khoản thông thường, bạn cũng có thể đăng nhập bằng{' '}
                    <strong>VNeID</strong> (nút phía dưới). Liên hệ bộ phận IT để được hướng dẫn
                    kích hoạt VNeID.
                </Note>

                <Note noteType="warn">
                    Nếu quên mật khẩu, bấm vào chữ <strong>"Quên mật khẩu"</strong> trên màn hình
                    đăng nhập hoặc liên hệ quản trị viên. Không chia sẻ mật khẩu cho người khác.
                </Note>
            </Card>

            <Card
                cardTitle="🏠 Trang chủ (Dashboard) — Màn hình tổng quan"
                description="Sau khi đăng nhập thành công, bạn sẽ thấy màn hình Trang chủ như sau:"
            >
                <LiquidGlass>
                    <StepItem stepItem={dashboardPreview} />
                </LiquidGlass>
                <h3>Giải thích các vùng trên Trang chủ</h3>
                <LiquidGlass>
                    <table>
                        <tr>
                            <th>Vùng</th>
                            <th>Mô tả chi tiết</th>
                        </tr>
                        <tr>
                            <td>
                                <strong>Menu bên trái</strong>
                            </td>
                            <td>
                                Danh sách tất cả chức năng: Văn bản đến, Văn bản đi, Phiếu trình,
                                Lịch họp, Nhiệm vụ... Bấm vào tên chức năng để mở.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Thanh trên cùng (đỏ)</strong>
                            </td>
                            <td>
                                Hiển thị tên đơn vị, nút tìm kiếm 🔍, thông báo 🔔, làm mới 🔄. Bấm
                                vào tên bạn ở góc phải để đổi mật khẩu hoặc đăng xuất.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Các ô thống kê</strong>
                            </td>
                            <td>
                                Số lượng văn bản đến/đi/phiếu trình theo trạng thái.{' '}
                                <Highlight content="Bấm trực tiếp vào con số" /> để mở danh sách
                                tương ứng — rất nhanh!
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Nhiệm vụ nhận được</strong>
                            </td>
                            <td>
                                Biểu đồ tiến độ nhiệm vụ cá nhân — giúp bạn nắm nhanh tổng quan công
                                việc được giao.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Lịch họp sắp tới</strong>
                            </td>
                            <td>Hiển thị các cuộc họp trong tuần bạn cần tham dự.</td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Các tab phía trên</strong>
                            </td>
                            <td>
                                Mỗi chức năng mở ra sẽ là một tab riêng. Bạn có thể chuyển qua lại
                                giữa các tab, hoặc bấm X để đóng tab.
                            </td>
                        </tr>
                    </table>
                </LiquidGlass>
                <h3>Đăng xuất</h3>
                <Step steps={logoutSteps}></Step>
                <Note noteType="danger">
                    Luôn đăng xuất khi rời khỏi máy tính, đặc biệt trên máy dùng chung, để bảo vệ
                    tài khoản của bạn.
                </Note>
            </Card>
        </>
    );
};

export default Home;

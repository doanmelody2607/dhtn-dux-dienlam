import images from '~/assets/images';
import { IStep } from '~/commons/interfaces/step';
import Image from '~/components/Image';
import ImageWithFigcaption from '~/components/ImageWithFigcaption';
import Highlight from '~/components/Highlight';

const saveSteps: IStep[] = [
    {
        content: (
            <ImageWithFigcaption figcaption="Hình 11.1 - Giao diện Thông tin chi tiết của văn bản đến - Thao tác Lưu tài liệu cá nhân">
                <Image src={images.vanBanDen014} alt="" />
            </ImageWithFigcaption>
        ),
    },
    {
        content: (
            <>
                Để thực hiện <Highlight content="Lưu tài liệu cá nhân" highlightType="xanh" />, ta
                click vào button <Highlight content="Lưu tài liệu cá nhân" highlightType="do" /> như{' '}
                <Highlight content="Hình 11.1" /> chỉ dẫn.
            </>
        ),
    },
    {
        content: (
            <ImageWithFigcaption figcaption="Hình 11.2 - Giao diện Model Lưu tài liệu cá nhân - Chọn Danh mục tài liệu">
                <Image src={images.vanBanDen015} alt="" />
            </ImageWithFigcaption>
        ),
    },
    {
        content: (
            <>
                Model <Highlight content="Lưu tài liệu cá nhân" highlightType="xanh" /> sẽ được mở
                lên, ở phần chọn <Highlight content="Danh mục tài liệu" />, bởi vì trước đó ta chưa
                từng lưu tài liệu, cho nên sẽ không thấy hiển thị danh mục nào cả. Do đó, ta cần
                chọn vào <Highlight content="Danh mục khác" highlightType="do" />.
            </>
        ),
    },
    {
        content: (
            <ImageWithFigcaption figcaption="Hình 11.3 - Giao diện Model Lưu tài liệu cá nhân - Nhập Tên danh mục và Nội dung gợi nhớ">
                <Image src={images.vanBanDen016} alt="" />
            </ImageWithFigcaption>
        ),
    },
    {
        content: (
            <>
                Sau khi chọn <Highlight content="Danh mục khác" highlightType="do" />, ô nhập dữ
                liệu <Highlight content="Tên danh mục" /> sẽ xuất hiện, ta nhập tên tài liệu vào. Ở
                phần <Highlight content="Nội dung gợi nhớ" />, ta có thể nhập hoặc không cũng được.
                Sau đó, click vào button <Highlight content="Ghi lại" highlightType="do" /> để hoàn
                tất việc <Highlight content="Lưu tài liệu cá nhân" highlightType="xanh" />.
            </>
        ),
    },
    {
        content: (
            <ImageWithFigcaption figcaption="Hình 11.4 - Giao diện trang Tài liệu cá nhân - Các văn bản đã thực hiện Lưu tài liệu cá nhân">
                <Image src={images.vanBanDen017} alt="" />
            </ImageWithFigcaption>
        ),
    },
    {
        content: (
            <>
                Các văn bản được <Highlight content="Lưu tài liệu cá nhân" highlightType="xanh" />{' '}
                sẽ được hiển thị ở trang <Highlight content="Tài liệu cá nhân" highlightType="do" />
                . Ta có thể click vào vùng văn bản như chỉ dẫn ở <Highlight content="Hình 11.4" />{' '}
                để xem thông tin chi tiết. Như vậy, với thao tác{' '}
                <Highlight content="Lưu tài liệu cá nhân" highlightType="xanh" />, ta có thể lưu trữ
                lại được các văn bản quan trọng, hữu ích, góp phần tìm kiếm, tra cứu nhanh, dễ dàng,
                nâng cao hiệu quả công tác.
            </>
        ),
    },
];

export { saveSteps };

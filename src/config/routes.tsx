import DriveFileMoveIcon from '@mui/icons-material/DriveFileMove';
import HomeIcon from '@mui/icons-material/Home';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material/SvgIcon';
import { AppRoute } from '~/commons/interfaces/routes';
import Home from '~/pages/Home';
import OutgoingDoc, { MyDraft } from '~/pages/OutgoingDoc';
import FeedbackAction from '~/pages/OutgoingDoc/FeedbackAction';
import RecordAction from '~/pages/OutgoingDoc/RecordAction';
import SubdAction from '~/pages/OutgoingDoc/SubAction';

interface HeaderInfo {
    title: string;
    icon?: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
}

const appRoutes: AppRoute[] = [
    {
        id: '64ba51d5-3977-4f0d-bd28-28460d57680a',
        icon: HomeIcon,
        title: 'Đăng nhập & Trang chủ',
        path: '/',
        component: Home,
    },

    {
        id: 'eb4e402b-e90e-4de3-88da-38d230f134c7',
        icon: DriveFileMoveIcon,
        title: 'Văn bản đi',
        component: OutgoingDoc,
        children: [
            {
                id: '588b36d5-6da9-47ee-ae1b-c467b3e5a56a',
                title: 'Dự thảo của tôi',
                path: '/van-ban-di/du-thao-cua-toi',
                component: MyDraft,
            },
            {
                id: 'c4d9b9d6-41ad-40a6-9c07-5732389292ac',
                title: 'Lưu lại',
                path: '/van-ban-di/luu-lai',
                component: RecordAction,
            },
            {
                id: 'e38d3235-639b-4281-ad5c-f613f2605910',
                title: 'Trình xin ý kiến',
                path: '/van-ban-di/trinh-xin-y-kien',
                component: FeedbackAction,
            },
            {
                id: '13b8403d-c237-4954-93ff-0c019be7bf24',
                title: 'Lưu lại và tạo phiếu trình',
                path: '/van-ban-di/luu-lai-va-tao-phieu-trinh',
                component: SubdAction,
            },
        ],
    },

    // {
    //     id: '4c2d9e65-f3c6-4f7d-b75b-91491d88b54b',
    //     icon: '',
    //     title: 'Văn bản đến',
    //     component: VanBanDen,
    //     children: [
    //         {
    //             id: 'e514e662-fa71-4d74-8696-c9bbddaffbb4',
    //             title: 'Văn bản chờ xử lý',
    //             path: '/van-ban-den/cho-xu-ly',
    //             component: VanBanChoXuLy,
    //         },
    //         {
    //             id: 'e514e882-fa71-4d74-8696-c9bbddafafc4',
    //             title: 'Văn bản đã xử lý',
    //             path: '/van-ban-den/da-xu-ly',
    //             component: VanBanDaXuLy,
    //         },

    //         {
    //             id: 'incoming-doc-rejected',
    //             title: 'Văn bản bị trả lại',
    //             path: '/van-ban-den/bi-tra-lai',
    //             component: VanBanBiTraLai,
    //         },
    //     ],
    // },

    // {
    //     id: '1a284a7e-3e65-419b-bece-5f982bd01f7d',
    //     icon: '📝',
    //     title: 'Phiếu trình',
    //     path: '/phieu-trinh',
    //     component: SubmissionForm,
    // },
    // {
    //     id: '42bb3ae2-64d2-413d-9fd9-b769eb0e01b3',
    //     icon: '💼',
    //     title: 'Quản lý nhiệm vụ',
    //     path: '/nhiem-vu',
    //     component: NhiemVu,
    // },
    // {
    //     id: '810be13c-9254-4bfe-972e-62f8d608206b',
    //     icon: '📅',
    //     title: 'Lịch họp',
    //     path: '/lich-hop',
    //     component: LichHop,
    // },
];

const buildHeaderMap = (
    routes: AppRoute[],
    map = new Map<string, HeaderInfo>(),
    breadcrumbs: string[] = [],
    icon?: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>,
) => {
    routes.forEach((route) => {
        const nextBreadcrumbs = [...breadcrumbs, route.title];

        const nextIcon = icon ?? route.icon;

        if (route.path) {
            // map.set(route.path, `${nextIcon ? `${nextIcon} ` : ''}${nextBreadcrumbs.join(' - ')}`);
            map.set(route.path, {
                title: nextBreadcrumbs.join(' - '),
                icon: nextIcon,
            });
        }

        if (route.children) {
            buildHeaderMap(route.children, map, nextBreadcrumbs, nextIcon);
        }
    });

    console.log('map check:: ', map);

    return map;
};

export const headerTitles = buildHeaderMap(appRoutes);

export default appRoutes;

import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import DriveFileMoveIcon from '@mui/icons-material/DriveFileMove';
import HomeIcon from '@mui/icons-material/Home';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material/SvgIcon';
import { AppRoute } from '~/commons/interfaces/routes';
import Home from '~/pages/Home';
import IncomingDoc, {
    AwaitingDocs,
    ReceptionAction,
    SaveAction,
    TagAction,
} from '~/pages/IncomingDoc';
import OutgoingDoc, { MyDraft } from '~/pages/OutgoingDoc';
import FeedbackAction from '~/pages/OutgoingDoc/FeedbackAction';
import RecordAction from '~/pages/OutgoingDoc/RecordAction';
import SignatureAction from '~/pages/OutgoingDoc/SignatureAction';
import StampAction from '~/pages/OutgoingDoc/StampAction';
import SubdAction from '~/pages/OutgoingDoc/SubAction';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MeetingCalendar from '~/pages/MeetingCalendar';

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
            {
                id: '0b2666d6-ecf7-4f15-8e2c-3cf27ea75044',
                title: 'Trình ký',
                path: '/van-ban-di/trinh-ky',
                component: SignatureAction,
            },
            {
                id: 'f8beed04-1db8-4347-a816-7599320bb08b',
                // icon: GavelIcon,
                title: 'Cấp số, đóng dấu',
                path: '/van-ban-di/cap-so',
                component: StampAction,
            },
        ],
    },
    {
        id: 'd35d48ae-3f9a-40eb-854b-bf2a23c3aae8',
        icon: CreateNewFolderIcon,
        title: 'Văn bản đến',
        component: IncomingDoc,
        children: [
            {
                id: '6576887c-9a9e-4a52-a766-ba484653a2c3',
                title: 'Văn bản chờ tiếp nhận',
                path: '/van-ban-den/cho-tiep-nhan',
                component: AwaitingDocs,
            },
            {
                id: '0f18ed10-f059-4c91-bd1c-32384aeeabf8',
                title: 'Tiếp nhận',
                path: '/van-ban-den/tiep-nhan',
                component: ReceptionAction,
            },
            {
                id: '551759fb-a5f6-43ea-a165-466a0df15f95',
                title: 'Gắn tag',
                path: '/van-ban-den/gan-tag',
                component: TagAction,
            },
            {
                id: '4ddaebb6-6d6b-4ee9-8112-87b77728593d',
                title: 'Lưu tài liệu cá nhân',
                path: '/van-ban-den/luu-tai-lieu-ca-nhan',
                component: SaveAction,
            },
        ],
    },
    {
        id: '75e934c2-7b5a-4fc6-b4bb-c16ff787ca75',
        icon: CalendarMonthIcon,
        title: 'Lịch họp',
        path: '/lich-hop',
        component: MeetingCalendar,
    },

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

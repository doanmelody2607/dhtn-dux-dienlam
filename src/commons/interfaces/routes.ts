import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material/SvgIcon';

// routes/types.ts
export interface AppRoute {
    id: string;
    path?: string;
    title: string;
    icon?: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
    component: React.FC;
    children?: AppRoute[];

    // Mở rộng sau này
    hidden?: boolean;
    permission?: string;
}

import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import { SvgIconComponent } from '@material-ui/icons';

export type link = {
    text: string;
    to: string;
    icon: SvgIconComponent
};

export const LinksList: link[] = [
  {
    text: 'Главная',
    to: '/',
    icon: HomeIcon,
  },
  {
    text: 'Поиск',
    to: '/search',
    icon: SearchIcon,
  },
  {
    text: 'Создать трек',
    to: '/create',
    icon: AddIcon,
  }
];
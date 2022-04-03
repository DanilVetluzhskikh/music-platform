import SearchIcon from '@mui/icons-material/Search';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import HomeIcon from '@mui/icons-material/Home';
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
    text: 'Альбомы',
    to: '/albums',
    icon: LibraryBooksIcon,
  }
];
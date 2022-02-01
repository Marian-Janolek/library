import { IoBarChartSharp } from 'react-icons/io5';
import { BsBook, BsFillPersonFill } from 'react-icons/bs';
import { HiOutlineLibrary } from 'react-icons/hi';
import { AiOutlineFileSearch } from 'react-icons/ai';

const links = [
  { id: 1, text: 'štatistiky', path: '/', icon: <IoBarChartSharp /> },
  {
    id: 2,
    text: 'knižnice',
    path: 'all-libraries',
    icon: <AiOutlineFileSearch />,
  },
  {
    id: 3,
    text: 'pridaj knižnicu',
    path: 'add-library',
    icon: <HiOutlineLibrary />,
  },
  { id: 4, text: 'študenti', path: 'students', icon: <BsFillPersonFill /> },
  { id: 5, text: 'knihy', path: 'books', icon: <BsBook /> },
];

export default links;

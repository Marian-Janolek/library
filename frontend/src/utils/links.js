import { IoBarChartSharp } from 'react-icons/io5';
import { BsBook, BsFillPersonFill, BsFillPersonPlusFill } from 'react-icons/bs';
import { HiOutlineLibrary } from 'react-icons/hi';
import { AiOutlineFileSearch } from 'react-icons/ai';
import { RiHealthBookFill } from 'react-icons/ri';

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
  {
    id: 4,
    text: 'vytvor študenta',
    path: 'add-student',
    icon: <BsFillPersonPlusFill />,
  },
  { id: 5, text: 'študenti', path: 'students', icon: <BsFillPersonFill /> },
  { id: 6, text: 'vytvor knihu', path: 'add-book', icon: <RiHealthBookFill /> },
];

export default links;

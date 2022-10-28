import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='w-full h-16 bg-blue-600 flex items-center justify-between px-10 py-2'>

      <Link to='/' className='text-white text-3xl font-semibold '>Crud</Link>
      <Link to='add-user'>
        <button className='w-48 h-12 bg-white text-blue-500  font-semibold rounded-lg cursor-pointer hover:bg-transparent hover:border-2 hover:bg-dark hover:text-white  '>
          Add Users
        </button>
      </Link>
    </div>
  );
};
export default Navbar;

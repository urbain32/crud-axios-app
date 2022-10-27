const Navbar = () => {
  return (
    <div className='w-full h-16 bg-blue-600 flex items-center justify-between px-10 py-2'>
      <h1 className='text-white text-3xl font-semibold '>Crud</h1>
      <button className='w-48 h-12 bg-white text-blue-500 font-semibold rounded-lg cursor-pointer hover:bg-transparent hover:border-2 hover:bg-dark hover:text-white  '>
        Add Users
      </button>
    </div>
  );
};
export default Navbar;

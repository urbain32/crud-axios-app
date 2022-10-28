import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

const User = () => {
  const { id } = useParams();
  const [user, setUser] = useState();
  const url = `http://localhost:3003/users/${id}`;
  useEffect(() => {
    axios.get(url).then((res) => {
      setUser(res.data);
    });
  }, [url]);
  return (
    <div className='w-full h-full flex items-center justify-center'>
      {user && (
        <>
          <div className='w-[700px] h-fit flex items-center justify-center mt-16 px-6 py-4 border border-black shadow-slate-700 shadow-sm  rounded-2xl '>
            <div className='w-5/12 flex flex-col space-y-4 '>
              <h2 className='text-black font-semibold text-xl border-b border-black'>
                Name
              </h2>
              <h2 className='text-black font-semibold text-xl border-b border-black'>
                Email
              </h2>
              <h2 className='text-black font-semibold text-xl border-b border-black '>
                Phone
              </h2>
            </div>
            <div className='w-5/12 flex flex-col space-y-4 '>
              <h2 className='text-black font-semibold text-xl border-b border-black'>
                {user.name}
              </h2>
              <h2 className='text-black font-semibold text-xl border-b border-black'>
                {user.email}
              </h2>
              <h2 className='text-black font-semibold text-xl border-b border-black'>
                {user.phone}
              </h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default User;

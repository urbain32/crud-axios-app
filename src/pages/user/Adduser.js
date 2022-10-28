import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Adduser = () => {
  const [name,setName]= useState('')
  const [username, setUsername] = useState('');
  const [email,setEmail]= useState('')
  const [phone, setPhone] = useState('');
  const url = 'http://localhost:3003/users';
  const data = { name, username, email, phone }
  const navigate= useNavigate()
  const handleAdd = (e) => {
    e.preventDefault()
    axios.post(url, data)
      .then(res => {
        if (res) {
          console.log('The data has been succefully added', res)
          navigate('/')
        }
      
      })
      .catch(err => {
      console.log('data has not been added reason:', err.message )
    })
    
  }
 
  return (
    <div className='w-screen h-full flex items-center justify-center mt-16 px-6 py-4 '>
      <form className='w-[50%] h-full ' onSubmit={handleAdd}>
        <h1 className='text-xl font-bold flex items-center justify-center mb-4'>
          Create a User
        </h1>
        <div className='mb-6'>
          <label
            htmlFor='name'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
          >
            Name
          </label>
          <input
            type='text'
            placeholder='Enter your name.'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            required=''
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='mb-6'>
          <label
            htmlFor='username'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
          >
            Username
          </label>
          <input
            type='text'
            placeholder='Enter your username.'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            required=''
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className='mb-6'>
          <label
            htmlFor='email'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
          >
            Your email
          </label>
          <input
            type='email'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='name@flowbite.com'
            required=''
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='mb-6'>
          <label
            htmlFor='phone number'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
          >
            Phone Number
          </label>
          <input
            type='tel'
            placeholder='phone number...'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            required=''
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <button
          type='submit'
          className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default Adduser;

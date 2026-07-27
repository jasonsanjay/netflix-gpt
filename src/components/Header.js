import React from 'react';
import { Logo } from '../utils/constants';
import { useNavigate } from 'react-router-dom';
import { removeUser } from '../utils/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user)

  const handleSignOut = () =>{
    signOut(auth).then(() => {
      navigate("/");
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
    // dispatch(removeUser());
  }
  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
        <img className='w-44' alt="logo" src={Logo} />
      {user &&  (
         <div className='flex'>
          <img className='w-12 h-12 m-2' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="user-icon"/>

        <button className='font-bold text-white' onClick={handleSignOut} >Signout</button> 

        </div>
         )}
    </div>
  )
}

export default Header;
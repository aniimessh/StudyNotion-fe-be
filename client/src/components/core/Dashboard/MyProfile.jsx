import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import IconButton from '../../common/IconButton';

const MyProfile = () => {
    const {user} = useSelector(state => state.profile);
    const navigate = useNavigate();
  return (
    <div>
        <h1>My Profile</h1>

        <section>
            <div>
                <img src={`${user?.image}`} alt={`profile-${user?.firstname} Image`}  className='aspect-square w-[78px] rounded-full object-cover'/>
                <div>
                    <p>{user?.firstName+" "+user?.lastName}</p>
                    <p>{user?.email}</p>
                </div>
            </div>
            <IconButton text="Edit" onclick={() =>  navigate("dashboard/settings")}/>
        </section>

        <section>
            <div>
                <p>About</p>
                <IconButton text="Edit"  onclick={() =>  navigate("dashboard/settings")}/>
                <p>{user?.additionalDetails?.about ? user?.additionalDetails?.about  : "Write something about yourself"}</p>
            </div>
        </section>

        <section>
            {/* 2:14:50 class 7 */}
        </section>

    </div>
  )
}

export default MyProfile
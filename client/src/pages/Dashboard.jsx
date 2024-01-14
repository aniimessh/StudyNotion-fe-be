import React from 'react'
import { useSelector } from 'react-redux'

const Dashboard = () => {
    const {loading: authLoading} = useSelector((state) => state.auth);
    const {loading: profileLoading} = useSelector((state) => state.profile);
    
  return (
    <div>

    </div>
  )
}

export default Dashboard
import React from 'react'
import styles from '../../styles/Profile.module.scss'
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logout from 'app/auth/mutations/logout';
import { useMutation } from 'blitz';

const Profile = () => {
    const [logoutMutation] = useMutation(logout)

    return (
        <>
        <div className={styles.mainDiv}>
            <h2 className={styles.heading}>Profile</h2>
            <h5 className={styles.heading2}>Thank you For Registration into FreshCart</h5>
            <h5 className={styles.heading3}>Call For Verify Your Account</h5>
            <h4 className={styles.heading4}>Call For Verification</h4>
            <FontAwesomeIcon icon={faPhoneAlt} className={styles.logo}/>
            <h4 className={styles.heading5}>0000-000-000</h4>
            <button
              onClick={async () => await logoutMutation()}  
              className={styles.logout}>Log-Out</button
            >
            
        </div>
        </>
    )
}

export default Profile

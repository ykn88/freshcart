import React from 'react'
import {Field, Form } from 'react-final-form'
import styles from '../../styles/Login.module.scss'
import { faUserCircle,faUserLock } from "@fortawesome/free-solid-svg-icons";
// import {  } from "@fortawesome/free-solid-svg-icons";
import {  } from "@fortawesome/free-regular-svg-icons";
// import {  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useMutation } from 'blitz';
import login from "app/auth/mutations/login"
import {  FORM_ERROR } from "app/components/Form"
import { LoginInput } from '../validations';


// import {s0} from '../../images/logo.png'

type LoginFormProps = {
    onSuccess?: () => void
}

const Login = ({handleRoute}) => {
    const [loginMutation] = useMutation(login)

    return (
        <>
        <div className={styles.mainDiv}>
            <div className={styles.items}>
                <img src="http://res.cloudinary.com/dlccpotyg/image/upload/v1603447476/xianlfnpxse0t7xptsnd.png" alt="" className={styles.logo}/>
                <p className={styles.para}>Proceed With Login</p>
                <h2 className={styles.head2}>Login</h2>
            </div>
           <Form 
            initialValues={{ email: "", password: "" }}
            onSubmit={async (values) => {
                try {
                 const user = await loginMutation(values)
                 handleRoute(user)  
                } catch (error) {
                  if (error.name === "AuthenticationError") {
                    return { [FORM_ERROR]: "Sorry, those credentials are invalid" }
                  } else {
                    return {
                      [FORM_ERROR]:
                        "Sorry, we had an unexpected error. Please try again. - " + error.toString(),
                    }
                  }
                }
              }}
           >
               {({ handleSubmit})=>(
                   <form onSubmit={handleSubmit} className={styles.form}> 
                        <div className={styles.div}>
                       <Field name="email">{({ input })=> (
                       <input placeholder="Enter Username" type="email" {...input} className={styles.input} />)} 
                       </Field>
                       <FontAwesomeIcon icon={faUserCircle} className={styles.logoImg}/>
                       </div>
                       <div className={styles.div2}>
                       <Field name="password">{({ input })=> (
                       <input placeholder="Enter Password" type="password" {...input} className={styles.input}/>)} 
                       </Field>
                       <FontAwesomeIcon icon={faUserLock} className={styles.logoImg}/>
                       </div>
                       <button type="submit" className={styles.button}> Login</button>
                   </form>
               )}

           </Form>
           <div className={styles.items2}>
                <p className={styles.para2}>Forget Password?</p>
                <p className={styles.para2}>Don't Hava Account? 
                <Link href="signup">
                <a className={styles.anchor}>Register</a>
                </Link>
                </p>
            </div>
        </div>
        </>
    )
}

export default Login

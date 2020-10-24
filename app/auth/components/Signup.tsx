
import React from 'react'
import {Field, Form} from 'react-final-form'
import styles from '../../styles/Login.module.scss'
import { faEnvelope, faMobileAlt, faUserCircle,faUserLock } from "@fortawesome/free-solid-svg-icons";
// import {  } from "@fortawesome/free-solid-svg-icons";
import {  } from "@fortawesome/free-regular-svg-icons";
// import {  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useMutation } from 'blitz';
// import {s0} from '../../images/logo.png'
import signup from "app/auth/mutations/signup"
import { FORM_ERROR } from "app/components/Form"



type SignupFormProps = {
    onSuccess?: () => void
}

const Signup = (props:SignupFormProps) => {
    const [signupMutation] = useMutation(signup)

    return (
        <>
        <div className={styles.mainDiv}>
            <div className={styles.items}>
                <img src="http://res.cloudinary.com/dlccpotyg/image/upload/v1603447476/xianlfnpxse0t7xptsnd.png" alt="" className={styles.logo}/>
                <p className={styles.para}>Proceed With Signup</p>
                <h2 className={styles.head2}>Signup</h2>
            </div>
           <Form onSubmit={async (values)=>{
               alert("Submitting!!!");
               console.log(values);
               try {
                await signupMutation(values)
                props.onSuccess?.()
              } catch (error) {
                if (error.code === "P2002" && error.meta?.target?.includes("email")) {
                  // This error comes from Prisma
                  return { email: "This email is already being used" }
                } else {
                  return { [FORM_ERROR]: error.toString() }
                }
              }
           }}>
               {({ handleSubmit})=>(
                   <form onSubmit={handleSubmit} className={styles.form}> 
                        <div className={styles.div}>
                       <Field name="name">{({ input })=> (
                       <input placeholder="Enter Your Name" type="text" {...input} className={styles.input} />)} 
                       </Field>
                       <FontAwesomeIcon icon={faUserCircle} className={styles.logoImg}/>
                       </div>
                        <div className={styles.div}>
                       <Field name="email">{({ input })=> (
                       <input placeholder="Enter Your Email" type="email" {...input} className={styles.input} />)} 
                       </Field>
                       <FontAwesomeIcon icon={faEnvelope} className={styles.logoImg}/>
                       </div>
                       <div className={styles.div}>
                       <Field name="password">{({ input })=> (
                       <input placeholder="Enter Password" type="password" {...input} className={styles.input}/>)} 
                       </Field>
                       <FontAwesomeIcon icon={faUserLock} className={styles.logoImg}/>
                       </div>
                       <div className={styles.div}>
                       <Field name="contactNo">{({ input })=> (
                       <input placeholder="Enter Mobile Number" type="text" {...input} className={styles.input}/>)} 
                       </Field>
                       <FontAwesomeIcon icon={faMobileAlt} className={styles.logoImg}/>
                       </div>
                       <button type="submit" className={styles.button}> Signup</button>
                   </form>
               )}

           </Form>
           <div className={styles.items2}>
                <p className={styles.para2}>Already Hava Account? 
                <Link href="login">
                <a className={styles.anchor}>Login</a>
                </Link>
                </p>
            </div>
        </div>
        </>
    )
}

export default Signup

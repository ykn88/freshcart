
import React from 'react'
import { Field, Form } from 'react-final-form';
import styles from '../../styles/UploadProduct.module.scss'

const UploadProduct = () => {
    return (
        <>
        <div className={styles.mainDiv}>
            <div className={styles.heading}>
                <h2 className={styles.heading2}>Upload Products</h2>
            </div>
            <Form onSubmit={(formObj)=>{
               alert("Submitting!!!");
               console.log(formObj);
           }}>
               {({ handleSubmit})=>(
                   <form onSubmit={handleSubmit} className={styles.form}> 
                        <div className={styles.div}>
                       <Field name="title">{({ input })=> (
                       <input placeholder="Title" type="text" {...input} className={styles.input} />)} 
                       </Field>
                       </div>
                       <div className={styles.div3}>
                        <div className={styles.div2}>
                       <Field name="price">{({ input })=> (
                       <input placeholder="Price" type="number" {...input} className={styles.input} />)} 
                       </Field>
                       </div>
                        <div className={styles.div5}>
                       <Field name="pricePerKg">{({ input })=> (
                       <input placeholder="Price Per Kg" type="number" {...input} className={styles.input} />)} 
                       </Field>
                       </div>
                       </div>
                       <div className={styles.div}>
                       <Field name="minQty">{({ input })=> (
                       <input placeholder="Set Minimum Quantity" type="number" {...input} className={styles.input}/>)} 
                       </Field>
                       </div>
                       <div className={styles.div4}>
                        <h2 className={styles.uihead}>Upload Image</h2>
                       <Field name="image">{({ input })=> (
                       <input type="file" {...input} className={styles.input}/>)} 
                       </Field>
                       </div>
                       <div className={styles.div6}>
                       <Field name="desc">{({ input })=> (
                       <input type="text" placeholder="Description" {...input} className={styles.input}/>)} 
                       </Field>
                       </div>
                       <button type="submit" className={styles.button}> Upload Product</button>
                   </form>
               )}

           </Form>

        </div>
        </>
    )
}

export default UploadProduct

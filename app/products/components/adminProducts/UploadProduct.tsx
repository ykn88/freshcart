import React from 'react'
import { Field, Form } from 'react-final-form';
import styles from '../../../styles/UploadProduct.module.scss'

const UploadProduct = ({newProduct}) => {
    return (
        <>
        <div className={styles.mainDiv}>
            <div className={styles.heading}>
                <h2 className={styles.heading2}>Upload Products</h2>
            </div>
            <Form onSubmit={(formObj)=>{
               alert("Submitting!!!");
               newProduct(formObj);
           }}>
               {({ handleSubmit})=>(
                   <form onSubmit={handleSubmit} className={styles.form}> 
                        <div className={styles.div}>
                       <Field name="name">{({ input })=> (
                       <input placeholder="name" type="text" {...input} className={styles.input} />)} 
                       </Field>
                       </div>
                       <div className={styles.div3}>
                        <div className={styles.div2}>
                       <Field name="price">{({ input })=> (
                       <input placeholder="Price" type="number" {...input} className={styles.input} />)} 
                       </Field>
                       </div>
                       <div className={styles.div5}>
                       <Field name="measure">{({ input })=> (
                       <select placeholder="Price Per Kg" type="string" {...input} className={styles.input}>
                           <option value="0">Select Measure</option>
                           <option value="perKg">perKg</option>
                           <option value="perItem">perItem</option>
                       </select>
                       )} 
                       </Field>
                       </div>
                       <div className={styles.div5}>
                       <Field name="category">{({ input })=> (
                       <select placeholder="category" type="number" {...input} className={styles.input}>
                           <option value="0">Select Category</option>
                           <option value="1">Fruits</option>
                           <option value="2">Vegetable</option>
                       </select>
                       )} 
                       </Field>
                       </div>
                       </div>
                       <div className={styles.div}>
                       <Field name="minQuantity">{({ input })=> (
                       <input placeholder="Set Minimum Quantity" type="number" {...input} className={styles.input}/>)} 
                       </Field>
                       </div>
                       <div className={styles.div4}>
                        <h2 className={styles.uihead}>Upload Image</h2>
                       <Field name="imageUrl">{({ input })=> (
                       <input type="file" {...input} className={styles.input}/>)} 
                       </Field>
                       </div>
                       <div className={styles.div6}>
                       <Field name="description">{({ input })=> (
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

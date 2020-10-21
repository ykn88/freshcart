import React, { useState } from 'react'

const Image = () => {
    const [img , setImg] = useState("")
    const [url, setUrl] = useState("")

    const postDetails = () =>{
        const data = new FormData()
        data.append("file", img)
        data.append("upload_preset", "fileUpload")
        data.append("cloud_name", "dlccpotyg")
        fetch("https://api.cloudinary.com/v1_1/dlccpotyg/image/upload", {
            method:"post",
            body:data
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data.url)
            // setUrl(data.url)
        })
        .catch(err=>{
            console.log(err)
        }
        )

    }
    return (
        <div>
            <input type="file" onChange={(e)=>setImg(e.target.files[0])}/>
            <button onClick={()=>postDetails()}>Submit</button>
<br/>
              <h2> After Uploading Image See Console for URL</h2>
            {/* <a href="setUrl">open it</a> */}
        </div>
    )
}

export default Image

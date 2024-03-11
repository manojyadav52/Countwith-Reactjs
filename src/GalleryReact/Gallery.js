import React, {useState} from "react";

const Gallery =()=>{
    const [count,setCount] =useState(0);
       return(
        <div>
            <p>hey you can click the button {count} multiple times</p>
            <button className="btn btn-primary" onClick={() => setCount(count+1)}> click ME</button>

        </div>
       )
}
export default Gallery;
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { commentUpdate, commentDelete } from "./actions";

function SingleComment({data}) {
const {text, id} = data;
const dispatch = useDispatch();
const [commentText, setCommentText] = useState('');
const handleDelete=(e)=>{
    e.preventDefault();
    dispatch(commentDelete(id));
}
useEffect(()=>{
    if (text) {
        setCommentText(text);
    }
}, [text]);
const handleInput = (e) => {
setCommentText(e.target.value);
}
const handleUpdate = (e) => {
    e.preventDefault();
    console.log('submit>>', commentText);
    dispatch(commentUpdate(commentText, id))
}
    return(
       <form onSubmit={handleUpdate} className="commens-item">
        <div onClick={handleDelete} className="comments-item-delete">&times;</div>
            <input type="text" value={commentText} onChange={handleInput}/>
            <input type="submit" hidden />
         </form>
     
        )
}
export default SingleComment;
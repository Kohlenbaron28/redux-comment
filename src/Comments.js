import SingleComment from "./redux/SingleComment";
import { useState, useEffect } from "react";
import uniqid from 'uniqid';
import { useDispatch, useSelector } from "react-redux";
import { commentCreate, commentsLoad } from "./redux/actions";

function Comments(props) {
    const [textComment, setTextComment]=useState(''); 
    const comments=useSelector(state => {
        const { commentReducer } = state;
        return commentReducer.comments;

    });
    const dispatch=useDispatch();
    const handleInput = (e) => {
      setTextComment(e.target.value);  
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        const id=uniqid();
        dispatch(commentCreate(textComment, id));
    }
    console.log('COMMENTS', comments);

    useEffect(()=>{
        dispatch(commentsLoad());
    }, []);
    return(
      <div className="card-comments">
         <form onSubmit={handleSubmit} className="commens-item-create">
            <input type="text" value={textComment} onChange={handleInput} />
            <input type="submit" hidden />
         </form>
         {!!comments.length && comments.map(res => {
          return <SingleComment key={res.id} data={res}/> 
         })}
         
      </div>  
        )
}
export default Comments;
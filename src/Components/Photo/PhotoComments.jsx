import React from 'react'
import {UserContext} from '../../UserContext'
import PhotoCommentsForm from './PhotoCommentsForm';
import styles from './PhotoComment.module.css';

const PhotoComments = (props) => {
  const [comments, setComments] = React.useState(() => props.comments);
  const {login} = React.useContext(UserContext);
  const commentsSection = React.useRef(null);

  React.useEffect(()=>{
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  },[comments])
  return (
    <>
      <ul className={styles.comments} ref={commentsSection}>
        {comments.map(comment => <li key={comment.id}>
          <b>{comment.comment_author}: </b>
          <span>{comment.comment_content}</span>
        </li>)}
      </ul>
      {login && <PhotoCommentsForm id={props.id} setComments={setComments}/>}
    </>
  )
}

export default PhotoComments;

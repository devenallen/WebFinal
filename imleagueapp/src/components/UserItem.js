// import './UserItem.css';
// import Card from './Card';

// function UserItem(props) {
    
//     return (
//             <Card className='user_class'>
//                 <img src={props.image} alt={props.name} className='user-class-img'/>
//                 <h2 className='user-class-name'>{props.name }</h2>
//             </Card>
//           );
//         }
    
//     export default UserItem;

import './UserItem.css';
import Card from './Card';
import { Link } from 'react-router-dom';

function UserItem(props) {
  return (
   <>
      <Card className="user-item__content" onClick={props.OnClick}>
        <div className="user-item__image">
            <img src={props.image} alt={props.name} />
        </div>
        <div className="user-item__info">
         <Link to='/edit-user' className="linkinfo">
          <h2>{props.name}</h2>
         </Link>
        </div>
      </Card>
    </>
  );
}

export default UserItem;
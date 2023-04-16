import './css/UserItem.css';
import Card from './Card';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function UserItem(props) {
  const navigate = useNavigate();

  const handleItemClick = () => {
    navigate(`/view-user/${props.name}`, { 
      state: {
        captain: props.captain,
        numPlayers: props.numPlayers,
        image: props.image,
      } 
    });
  };
  return (
   <>
      <Card className="user-item__content" onClick={handleItemClick}>
        <div className="user-item__image">
            <img src={props.image} alt={props.name} />
        </div>
        <div className="user-item__info">
         <Link to={`/view-user/${props.name}`} className="linkinfo">
          <h2>{props.name}</h2>
         </Link>
         <button className="editbuttonsUI" onClick={props.handleDeleteUser} type="submit">Delete Team</button>
         {/* <p> {props.captain} </p> */}
        </div>
      </Card>
    </>
  );
}

export default UserItem;
import UserItem from './UserItem';
import Card from './Card';
import './Users.css';

function Users(props) {
    return (
        <Card className="users">
            {props.user_list.map(user => (
            <UserItem
                key={user.id}
                id={user.id}
                name={user.name}
                image={user.image}
        />
      ))}
    </Card>
    );
  }

export default Users;
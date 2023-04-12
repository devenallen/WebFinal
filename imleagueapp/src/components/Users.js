// import UserItem from './UserItem';
// import Card from './Card';
// import './Users.css';

// function Users(props) {
//     return (
//         <Card className="users">
//             {props.user_list.map(user => (
//             <UserItem
//                 key={user.id}
//                 id={user.id}
//                 name={user.name}
//                 image={user.image}
//         />
//       ))}
//     </Card>
//     );
//   }

// export default Users;
import './Users.css';
import UserItem from './UserItem';

function Users(props) {
  function handleEditUser(userId, newName) {
    props.onEditUser(userId, newName);
  } // This may not be needed
  return (
    <div className="users">
      {props.users.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          name={user.name}
          image={user.image}
          onEditUser={handleEditUser} // This may not be needed
        />
      ))}
    </div>
  );
}

export default Users;
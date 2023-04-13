import './css/ViewItem.css';
import { useState } from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function ViewItem(props) {
    
    const { name } = useParams();

    const [teamname, setTeamname] = useState('');
    const [numPlayers, setNumPlayers] = useState('');
    const [captain, setCaptain] = useState('');
    const [logo, setLogo] = useState('');
  
    const handleTeamnameChange = (event) => {
      setTeamname(event.target.value);
    };
  
    const handleNumPlayersChange = (event) => {
      setNumPlayers(event.target.value);
    };
  
    const handleCaptainChange = (event) => {
      setCaptain(event.target.value);
    };
  
    const handleLogoChange = (event) => {
      setLogo(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // perform login or signup logic here
    };
  
    return (
      <div>
        <h1>{name}</h1>
      <Card className="create-team">
         <form className="overallform" onSubmit={handleSubmit}>
            <div className="createform">
                <label htmlFor="teamname">Team name: </label>
                <input
                    id="teamname"
                    type="teamname"
                    placeholder= ""
                    value={name}
                    onChange={handleTeamnameChange}
                />
            </div>
            <div className="createform">
                <label htmlFor="numplayers">Number of Players: </label>
                <input
                    id="numplayers"
                    type="numplayers"
                    placeholder= ""
                    value={numPlayers}
                    onChange={handleNumPlayersChange}
                />
            </div>
            <div className="createform">
                <label htmlFor="captain">Team Captain: {captain}</label>
                <input
                    id="captain"
                    type="captain"
                    placeholder= ""
                    value={captain}
                    onChange={handleCaptainChange}
                />
            </div>
            <div className="createform">
                <label htmlFor="logo">Logo: </label>
                <input
                    id="image"
                    type="image"
                    alt = "logo"
                    placeholder= ""
                    value={logo}
                    onChange={handleLogoChange}
                />
            </div>
            <div className="editbutton">
              <Link to="/">
                <button className="editbuttons" type="submit">Save</button>
              </Link>
              <button className="editbuttons" type="submit">Delete Team</button>
              <Link to="/edit-user/:id">
                <button className="editbuttons" type="submit">Edit</button>
              </Link>
            </div>
          </form> 
      </Card>
    </div>
//     <div>
//     <h1>{name}</h1>
//     <Card className="create-team">
//         <div className="overallform" onSubmit={handleSubmit}>
//             <div className="createform">
//                 <label htmlFor="teamname">Team name: </label>
//                 <p>{name}</p>
//             </div>
//             <div className="createform">
//                 <label htmlFor="numplayers">Number of Players: </label>
//                 <p>{numPlayers}</p>
//             </div>
//             <div className="createform">
//                 <label htmlFor="captain">Team Captain: </label>
//                 <p>{captain}</p>
//             </div>
//             <div className="createform">
//                 <label htmlFor="logo">Logo: </label>
//                 <img src={image} alt="logo" />
//             </div>
//             <div className="editbutton">
//                 <Link to="/">
//                     <button className="editbuttons" type="submit">Save</button>
//                 </Link>
//                 <button className="editbuttons" type="submit">Delete Team</button>
//                 <Link to="/edit-user/:id">
//                     <button className="editbuttons" type="submit">Edit</button>
//                 </Link>
//             </div>
//         </div>
//     </Card>
// </div>
    );
}

export default ViewItem;
import './css/ViewItem.css';
//import { useState } from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function ViewItem() {
    
    const { name, captain, numPlayers } = useParams();
    const image = new URLSearchParams(window.location.search).get('image');

    // const [teamname, setTeamname] = useState('');
    // const [numPlayers, setNumPlayers] = useState('');
    // const [captain, setCaptain] = useState('');
    // const [logo, setLogo] = useState('');
  
    // const handleTeamnameChange = (event) => {
    //   setTeamname(event.target.value);
    // };
  
    // const handleNumPlayersChange = (event) => {
    //   setNumPlayers(event.target.value);
    // };
  
    // const handleCaptainChange = (event) => {
    //   setCaptain(event.target.value);
    // };
  
    // const handleLogoChange = (event) => {
    //   setLogo(event.target.value);
    // };
  
    // const handleSubmit = (event) => {
    //   event.preventDefault();
    //   // perform login or signup logic here
    // };
  
    return (
      <div>
        <h1>{name}</h1>
      <Card className="create-team">
          <h2> Teamname: {name}</h2>
          <h2> Number of Players: {numPlayers} </h2>
          <h2> Team Captain: {captain} </h2>
          <h2> Logo URL: </h2>
          <img src={image} alt="logo" />
          <div className="editbutton">
              <Link to="/">
                <button className="editbuttons" type="button">Save</button>
               </Link>
              {/* <button className="editbuttons" type="submit">Delete Team</button>
              <Link to={"/edit-user/Hawks"}> 
                <button className="editbuttons" type="submit">Edit</button>
              </Link> */}
            </div>
      </Card>
    </div>
    );
}

export default ViewItem;
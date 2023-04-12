import { useState } from 'react';

function CreateItem() {
  const [itemName, setItemName] = useState('');
  const [itemDescription, setItemDescription] = useState('');

  const handleItemNameChange = (event) => {
    setItemName(event.target.value);
  };

  const handleItemDescriptionChange = (event) => {
    setItemDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // perform form submission or API call to create new item
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="item-name">Item Name:</label>
        <input
          id="item-name"
          type="text"
          value={itemName}
          onChange={handleItemNameChange}
        />
      </div>
      <div>
        <label htmlFor="item-description">Item Description:</label>
        <textarea
          id="item-description"
          value={itemDescription}
          onChange={handleItemDescriptionChange}
        />
      </div>
      <button type="submit">Create Item</button>
    </form>
  );
}

export default CreateItem;

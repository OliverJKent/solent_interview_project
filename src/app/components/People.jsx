import React from 'react';

import { ListItem, Arrow } from './Styled';

const People = (props) => (
  <>
    <ListItem>
      <img className='thumbnailImg' src={props.person.picture.thumbnail} />
      <p className="fullName">
        {props.person.name.first} {props.person.name.last}
      </p>
      <Arrow />
    </ListItem>
  </>
);

export default People;

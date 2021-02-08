import React from 'react';
import People from 'Components/People';
import {Link} from "react-router-dom";

import { Wrapper, HelloBox, ListContainer } from './Styled';
import PhoneSVG from 'Public/icons/phone.svg';

import worldImageURL from 'Public/images/world.png';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      people: []
    };
  }

  componentDidMount = () => {
    fetch("https://randomuser.me/api/?results=10")
      .then(res => res.json())
      .then(
        (data) => {
          this.setState({
            people: data.results
          });
        },

        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }


  render = () => {
    let key = 0;
    const peopleList = this.state.people.map((person) => {
      if (this.props.filter) {
        if ((person.name.first + " " + person.name.last).toLowerCase().includes(this.props.filter.toLowerCase())) {
          return <Link key={(key+=1)} to={{pathname:'/info', state:{person: person}}}><People person={person}/> </Link>
        }
      } else {
        return <Link key={(key+=1)} to={{pathname:'/info', state:{person: person}}}> <People person={person}/> </Link>
      }

})

      return(
        <div>
          {peopleList}
        </div>
      )
  }
}

export default List;

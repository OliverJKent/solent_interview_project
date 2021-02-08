import React from 'react';

import { Wrapper, HelloBox, Image, Background, HeadingWrapper, Heading, Subheading, Search } from '../components/Styled';
import List from 'Components/List';


class Homepage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      filter: ""
    };
  }

  render = () => {
    return(
    <>
      <Background>
        <HeadingWrapper>
          <Heading>
            Find a member of staff
          </Heading>
          <Subheading>
          Use the search box to get started
          </Subheading>
          <div className="searchWrapper">
            <input className="filterInput" placeholder="Start typing..." onChange={textInput => this.setState({filter: textInput.target.value})} />
            <Search />
          </div>
        </HeadingWrapper>
      </Background>
      <List filter={this.state.filter}/>
    </>
    );
  }
}

export default Homepage;

export {
    Homepage
};

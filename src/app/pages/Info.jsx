import React from 'react';
import { Wrapper, HelloBox, Image, Background, HeadingWrapper, Heading, ProfileDetails, AdditionalInfo, Subheading, Search, Email, Phone, Dob, InfoItem, InfoField } from '../components/Styled';
import {Link} from "react-router-dom";

const Info = (props) => {

  let date = new Date(props.location.state.person.dob.date); //convert the date of birth into the required format
  let dob = date.toLocaleDateString();

  if (props.location.state === undefined) {
    return (
        <Redirect to="/" /> //if the state is not defined, redirect to avoid errors
      )
  } else {
      return (
          <>
            <div className="desktopOnly">
              <Background>
                <HeadingWrapper>
                  <Heading>
                    Find a member of staff
                  </Heading>
                  <Subheading>
                  Use the search box to get started
                  </Subheading>
                  <div className="searchWrapper">
                    <input className="filterInput" placeholder="Start typing..." />
                    <Search />
                  </div>
                </HeadingWrapper>
              </Background>
            </div>
            <ProfileDetails>
              <img className="profileDetailsImage" src={props.location.state.person.picture.large} />
              <p className="profileDetailsName">{props.location.state.person.name.first + " " + props.location.state.person.name.last}</p>
              <AdditionalInfo>
                <InfoItem>
                  <Email />
                  <InfoField>
                    {props.location.state.person.email}
                  </InfoField>
                </InfoItem>
                <InfoItem>
                  <Dob />
                  <InfoField>
                    {dob}
                  </InfoField>
                </InfoItem>
                <InfoItem>
                  <Phone />
                  <InfoField>
                    {props.location.state.person.cell}
                  </InfoField>
                </InfoItem>
              </AdditionalInfo>
            </ProfileDetails>
          </>
      );
  }
};

export default Info;

export {
    Info
};

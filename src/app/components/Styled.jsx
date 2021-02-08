import styled from 'styled-components';
import backgroundImgURL from 'Public/images/background.jpg';
import ArrowSVG from 'Public/icons/circle-arrow.svg';
import SearchSVG from 'Public/icons/search.svg';
import EmailSVG from 'Public/icons/email.svg';
import PhoneSVG from 'Public/icons/phone.svg';
import DobSVG from 'Public/icons/dob.svg';

// https://styled-components.com/

export const Wrapper = styled.div`
  width: 100%;
  background: #dbdbdb;
`;

export const HelloBox = styled.div`
    font-size: 2rem;
    text-align: ${({ $align }) => $align ? $align : 'left'};
`;

export const Background = styled.div`
    margin: 0 auto;
    position: relative;
    height: 525px;
    top: -2px;
    background-image: url(${backgroundImgURL});
    background-size: cover;
    @media (max-width: 500px) {
      height: 300px;
    }
`;

export const HeadingWrapper = styled.div`
  color: white;
  font-size: 5rem;
  text-align: left;
  position: absolute;
  max-width: 560px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: 500px) {
    width: 80%;
    text-align: center;
  }
`;

export const Heading = styled.h1`
  color: white;
  font-weight: bold;
  font-size: 5rem;
  margin: 0;
  @media (max-width: 500px) {
    font-size: 3rem;
  }
  @media (max-width: 400px) {
    font-size: 2rem;
  }
`;

export const Subheading = styled.h2`
  color: white;
  font-size: 1.7rem;
  font-weight: 500;
  margin: 0;
  @media (max-width: 500px) {
    font-size: 1.5rem;
  }
`;

export const ListItem = styled.div`
    background: white;
    border: 2px solid gray;
    border-radius: 5px;
    height: 60px;
    margin: 20px auto 20px auto;
    width: 50%;
    @media (max-width: 500px) {
      width: 80%;
    }
`;

export const ProfileDetails = styled.div`
  padding-top: 30px;
  margin: auto;
`;

export const AdditionalInfo = styled.div`
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Arrow = styled(ArrowSVG)`
  float: right;
  margin: 5px;
  transform: scale(0.9);
`;

export const Search = styled(SearchSVG)`
  float: right;
  transform: translateY(-45px) scale(0.7);
`;

export const Email = styled(EmailSVG)`
  transform: translateY(-5px) scale(0.7);
  @media (max-width: 600px) {
    display: block;
    margin: auto;
  }
`;

export const Phone = styled(PhoneSVG)`
  transform: translateY(-7px) scale(0.7);
  @media (max-width: 600px) {
    display: block;
    margin: auto;
  }
`;

export const Dob = styled(DobSVG)`
  transform: translateY(-7px) scale(0.7);
  @media (max-width: 600px) {
    display: block;
    margin: auto;
  }
`;

export const InfoItem = styled.div`
  padding: 0 10px 0 10px;
  @media (max-width: 600px) {
    width: 100%;
    padding-bottom: 30px;
  }
`;

export const InfoField = styled.div`
  float: right;
  color: #636363;
  @media (max-width: 600px) {
    width: 100%;
    float: none;
    text-align: center;
  }
`;

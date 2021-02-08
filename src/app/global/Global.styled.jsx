import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
    body {
        padding: 0;
        margin: 0;
        background: #dbdbdb;
    }

    body, input, button, textarea {
        font-size: 1rem;
        font-family: Calibri, 'Trebuchet MS', sans-serif;
    }

    .thumbnailImg {
        float: left;
        border: 1px solid gray;
        border-radius: 40px;
        margin: 5px 5px 0 5px;
    }

    .fullName {
        float: left;
        margin-top: 20px;
        color: #636363;
        font-weight: bold;
    }

    .filterInput {
      height: 40px;
      width: 100%;
      border-radius: 5px;
      font-size: 1.5rem;
      padding: 5px;
    }

    .filterInput::placeholder {
      opacity: 0.6;
    }

    .profileDetailsName {
      text-align: center;
      margin-top: 0;
      font-size: 2rem;
      font-weight: bold;
      color: #444444;
    }

    .profileDetailsImage {
      border-radius: 80px;
      border: 10px solid white;
      box-shadow: 0 0 0 1pt gray;
      display: block;
      margin: 0 auto 0 auto;
    }

    @media only screen and (max-width: 600px) {
      .desktopOnly {
        display: none;
      }
    }
`;

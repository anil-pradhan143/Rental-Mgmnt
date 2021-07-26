import styled from "styled-components";

// this is the styled component

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  list-style: none;
  padding: 10px 20px;

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    &:hover {
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }

    img {
      align-self: center;
      max-width: 150px;
    }

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      background: #4863b1;
      flex: 1;
      text-align: center;
      padding: 10px;
      font-size: 12px;
      color: white;

      i {
        font-size: 15px;
        position: absolute;
        margin-left: 200px;
      }
    }
  }
`;

import { styled } from "styled-components";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

export default function BtnDrop({ btnText, itensList, onItemSelect, itemType, disableCondition = false }) {
  const [isOpen, setIsOpen] = useState("closed");

  const handleDropdown = () => {
    switch (isOpen) {
      case "closed":
        setIsOpen("opening");
        setTimeout(() => {
          setIsOpen("open");
        }, 400);
        break;
      case "open":
        setIsOpen("closing");
        setTimeout(() => {
          setIsOpen("closed");
        }, 400);
        break;
      default:
        break;
    }
  };

  return (
    <DropContainer>
      <Button disabled={disableCondition} type="button" onClick={handleDropdown} className={isOpen}>
        {btnText}
        <span>
          <IoIosArrowDown />
        </span>
        <div className={`dropdown dropdown-${isOpen}`}>
          <ul>
            {itensList.map((element) => (
              <li
                onClick={(action) => {
                  onItemSelect(element, itemType);
                }}
              >
                {element}
              </li>
            ))}
          </ul>
        </div>
      </Button>
    </DropContainer>
  );
}

const DropContainer = styled.div`
  button.closed,
  button.opening {
    padding: 0 5px;
  }

  .dropdown {
    transition: all 0.4s ease;
    position: relative;
    width: 100%;
  }

  .dropdown-open {
    display: block;
    top: 20px;
    opacity: 1;
  }

  .dropdown-closing {
    opacity: 0;
    top: -500px;
  }

  .dropdown-closed {
    display: none;
    opacity: 0;
    top: -500px;
  }

  .dropdown-opening {
    display: block;
    top: -500px;
  }

  .dropdown ul {
    background-color: white;
    height: 200px;
    margin: 0;
    padding: 0;
    position: relative;
    overflow-y: auto;
    width: 100%;
    z-index: 999;
  }

  li {
    background-color: white;
    border: 1px solid black;
    border-radius: 5px;
    box-shadow: 0 5px 9px -5px black;
    cursor: pointer;
    list-style-type: none;
    margin: 10px 0;
    padding: 5px 0;
  }
`;

const Button = styled.button`
  background-color: white;
  border: 1px solid gray;
  border-radius: 10px;
  box-shadow: 0 5px 9px -5px black;
  cursor: pointer;
  height: 30px;
  margin: 0 10px;
  min-width: 100px;
  padding: 5px 5px 0;

  &:disabled {
    cursor: not-allowed;
    filter: brightness(0.5);
  }
`;

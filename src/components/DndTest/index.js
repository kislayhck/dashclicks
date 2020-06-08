import React, { Component } from "react";
import styled from "styled-components";
import Dragable from "../Dragable";
import Droppable from "../Dropable";
import Table from "../table/Table";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;

const Item = styled.div`
  padding: 8px;
  color: #555;
  background-color: white;
  border-radius: 3px;
`;

const droppableStyle = {
  backgroundColor: "#555",
  width: "250px",
  height: "800px",
  margin: "32px",
};
const droppableStyle2 = {
  backgroundColor: "#555",
  width: "100%",
  height: "800px",
  margin: "32px",
};

export default class DndTest extends Component {
  render() {
    return (
      <Wrapper>
        <Droppable id="dr1" style={droppableStyle}>
          <Dragable style={{ margin: "8px" }} id="item1">
            <Item>
              <Table />
            </Item>
          </Dragable>
          {/* <Dragable style={{ margin: "8px" }} id="item2">
            <Item> item2</Item>
          </Dragable> */}
        </Droppable>
        <Droppable id="dr2" style={droppableStyle2}></Droppable>
      </Wrapper>
    );
  }
}

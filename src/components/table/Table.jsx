import React, { Component } from "react";

class Table extends Component {
  render() {
    return (
      <div>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colspan="2"></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;

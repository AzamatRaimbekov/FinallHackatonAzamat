import React from "react";

const ToReg = () => {
  return (
    <div>
      <div class="col-md-6">
        <form>
          <div class="form-group">
            <label>First name</label>
            <input
              type="text"
              class="form-control"
              id="first-name"
              placeholder="first name"
            />
          </div>
          <div class="form-group">
            <label>Last name</label>
            <input
              type="text"
              class="form-control"
              id="last-name"
              placeholder="last name"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="Enter email"
            />
          </div>
          <button type="submit" id="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>

      <button type="submit" id="getData" class="btn btn-primary">
        Search data
      </button>

      <div class="col-md-6">
        <table class="table table-striped" id="dataTbl">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ToReg;

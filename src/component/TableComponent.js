import React from "react";
import "./table.css"

const TableComponent = ({list,viewHandle,editHandle,deleteHandle}) => {
  return (
    <>
        <div className="table-container">
        <table>
          <tr>
            <th>Name</th>
            <th>Contact</th>
            <th>Country</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
          {list.map((e) => {
            return (
              <tr key={e.id}>
                <td>{e.data.name}</td>
                <td>{e.data.contact}</td>
                <td>{e.data.company}</td>
                <td>{e.data.email}</td>
                <td>
                  <div className="btnBox">
                    <button onClick={() => viewHandle(e.id)}>View</button>
                    <button onClick={() => editHandle(e.id)}>Edit</button>
                    <button onClick={() => deleteHandle(e.id)}>Delete</button>
                  </div>
                </td>
              </tr>
            );
          })}
        </table>
       
      </div>
    </>
  );
};

export default TableComponent;

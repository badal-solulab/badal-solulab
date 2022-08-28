import React, { useEffect, useState } from "react";
import "./table.css";
import { useSelector, useDispatch } from "react-redux";
import { createData, editData, deleteData } from "./action";

const Table = () => {
  const list = useSelector((state) => state.crud.datalist);
  const editlist = useSelector((state) => state.crud.editIem);
  const updateList = useSelector((state) => state.crud.saveItem);
  const dispatch = useDispatch();
  // const [Data, setData] = useState([]);
  // const onSubmitHandle = () => {
  //   setData([...Data, value]);
  // };


  console.log(editlist)
  
  const [toggle, settoggle] = useState(false);
  const [value, setvalue] = useState({
    name: "",
    contact: "",
    company: "",
    email: "",
  });
  useEffect(() => {
    setvalue(editlist);
  }, [editlist])

  useEffect(() => {
    setvalue(updateList);
  }, [updateList])

  
  const onSetHandle = (e) => {
    setvalue({ ...value, [e.target.name]: e.target.value });
  };
  console.log(value);

  return (
    <>
      <div className="table-container">
        <table>
          <tr>
            <th>Name</th>
            <th>Contact</th>
            <th>Country</th>
            <th>Email</th>
            <th></th>
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
                    <button
                      
                      onClick={() => dispatch(editData(e.id), settoggle(true))}
                    >
                      Edit
                    </button>
                    <button onClick={() => dispatch(deleteData(e.id))}>
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        
        </table>
        <form style={{ marginTop: "16px" }}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={value.name}
            onChange={onSetHandle}
          />
          <label>Contact:</label>
          <input
            type="text"
            name="contact"
            value={value.contact}
            onChange={onSetHandle}
          />
          <label>Country:</label>
          <input
            type="name"
            name="company"
            value={value.company}
            onChange={onSetHandle}
          />
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={value.email}
            onChange={onSetHandle}
          />
          {/* <input type="button" value="submit" /> */}
          <input
            type="button"
            value="submit"
            onClick={() =>
              dispatch(
                createData(value),
                setvalue({
                  name: "",
                  contact: "",
                  company: "",
                  email: "",
                })
              )
          
            }

          />
        </form>
      </div>
    </>
  );
};

export default Table;

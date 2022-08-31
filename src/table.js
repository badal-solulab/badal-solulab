import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createData, editData, deleteData, viewData } from "./store/action";
import FormComponent from "./component/FormComponent";
import ModalComponent from "./component/ModalComponent";
import TableComponent from "./component/TableComponent";

const Table = () => {
  const list = useSelector((state) => state.crud.datalist);
  const editlist = useSelector((state) => state.crud.editIem);
  const updateList = useSelector((state) => state.crud.saveItem);
  const dispatch = useDispatch();
  const [modal, setmodal] = useState(false);
  const [toggle, settoggle] = useState("");
  const [value, setvalue] = useState({
    name: "",
    contact: "",
    company: "",
    email: "",
  });
  useEffect(() => {
    setvalue(editlist);
  }, [editlist]);

  useEffect(() => {
    if (toggle) settoggle("");
  }, [list]);

  const onSetHandle = (e) => {
    setvalue({ ...value, [e.target.name]: e.target.value });
  };

  const createHandle = () => {
    dispatch(
      createData({ data:value, id: toggle || Math.random(), isedit:toggle ? true : false }),
      setvalue({
        name: "",
        contact: "",
        company: "",
        email: "",
      })
    );
  };
  const viewHandle = (id) => {
    dispatch(viewData(id));
    setmodal(true);
  };
  const editHandle = (id) => {
    dispatch(editData(id, value));
    settoggle(id);
  };
  const deleteHandle = (id) => {
    dispatch(deleteData(id));
  };

  return (
    <>
      <TableComponent
        list={list}
        viewHandle={viewHandle}
        editHandle={editHandle}
        deleteHandle={deleteHandle}
      />
      <FormComponent
        createHandle={createHandle}
        value={value}
        onSetHandle={onSetHandle}
      />
      <ModalComponent
        modal={modal}
        setmodal={setmodal}
        updateList={updateList}
      />
    </>
  );
};

export default Table;

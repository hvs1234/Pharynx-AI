import { useDispatch, useSelector } from "react-redux";
import {
  setPath,
  setOpen,
  setDivOpen,
  setOpen2,
  setOpen3,
  setSubDivOpen,
} from "./Slice";
import { useCallback } from "react";

const Handlers = () => {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.app.open);
  const open2 = useSelector((state) => state.app.open2);
  const open3 = useSelector((state) => state.app.open3);
  const divOpen = useSelector((state) => state.app.divOpen);
  const SubdivOpen = useSelector((state) => state.app.SubdivOpen);

  const handleOnClick = useCallback(
    (path) => (e) => {
      e.preventDefault();
      dispatch(setPath(path));
      window.location.pathname = path;
    },
    [dispatch]
  );

  const handleOpen = useCallback(
    (value) => {
      dispatch(setOpen(value));
    },
    [dispatch]
  );

  const handleOpen2 = useCallback(
    (value) => {
      dispatch(setOpen2(value));
    },
    [dispatch]
  );
  const handleOpen3 = useCallback(
    (value) => {
      dispatch(setOpen3(value));
    },
    [dispatch]
  );

  const handleDivOpen = useCallback(
    (value) => {
      dispatch(setDivOpen(value));
    },
    [dispatch]
  );
  const handleSubDivOpen = useCallback(
    (value) => {
      dispatch(setSubDivOpen(value));
    },
    [dispatch]
  );

  return {
    handleOnClick,
    handleOpen,
    open,
    divOpen,
    handleDivOpen,
    SubdivOpen,
    handleSubDivOpen,
    handleOpen2,
    open2,
    handleOpen3,
    open3,
  };
};

export default Handlers;

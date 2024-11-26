import React from "react";
import TableLoader from "../partials/TableLoader";
import Pills from "../partials/Pills";
import {
  Archive,
  ArchiveRestore,
  FilePenLine,
  FileVideo,
  Trash2,
} from "lucide-react";
import LoadMore from "../partials/LoadMore";
import SpinnerTable from "../partials/spinners/SpinnerTable";
import IconNoData from "../partials/IconNoData";
import IconServerError from "../partials/IconServerError";
import { StoreContext } from "@/components/store/storeContext";
import {
  setIsAdd,
  setIsConfirm,
  setIsDelete,
  setIsEdit,
  setIsView,
} from "@/components/store/storeAction";
import ModalDelete from "../partials/modals/ModalDelete";
import ModalConfirm from "../partials/modals/ModalConfirm";
import { movie } from "./datamovies";
import ModalViewMovie from "./ModalViewMovie";

const MovieTable = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [movieInfo, setMovieInfo] = React.useState("");
    let counter = 1;
  
  const handleAdd = () => {
    dispatch(setIsAdd(true));
  };
  const handleView = (item) => {
    dispatch(setIsView(true));
    setMovieInfo(item );
  };
  const handleDelete = () => {
    dispatch(setIsDelete(true));
  };
  const handleRestore = () => {
    dispatch(setIsConfirm(true));
  };
  const handleArchive = () => {
    dispatch(setIsConfirm(true));
  };
  return (
    <>
      <div className="p-4 bg-secondary rounded-md mt-10 border border-line relative">
        {/* <SpinnerTable /> */}
        <div className="table-wrapper custom-scroll">
          {/* <TableLoader count={40} cols={10} /> */}
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Status</th>
                <th>Title</th>
                <th>Year</th>
                <th>Duration</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {/* <tr>
                        <td colSpan={100}>
                          <IconNoData />
                        </td>
                      </tr> 
               <tr>
                        <td colSpan={100}>
                          <IconServerError />
                        </td>
                      </tr>  */}
              {movie.map((item, key) => (
                <tr key={key}>
                  <td>{counter++}.</td>
                  <td>
                    <Pills />
                  </td>
                <td>{ item.movie_title}</td>
                <td>{ item.movie_year}</td>
                <td>{ item.movie_duration}</td>
                  <td>
                    <ul className="table-action">
                      {item.movie_is_active ? (
                        <>
                          <li>
                            <button className="tooltip" data-tooltip="View">
                              <FileVideo onClick={() => handleView(item)} />
                            </button>
                          </li>
                          <li>
                            <button className="tooltip" data-tooltip="Edit">
                              <FilePenLine onClick={() => handleAdd()} />
                            </button>
                          </li>
                          <li>
                            <button className="tooltip" data-tooltip="Archive">
                              <Archive onClick={() => handleArchive()} />
                            </button>
                          </li>
                        </>
                      ) : (
                        <>
                          <li>
                            <button className="tooltip" data-tooltip="Restore">
                              <ArchiveRestore onClick={() => handleRestore()} />
                            </button>
                          </li>
                          <li>
                            <button
                              className="tooltip"
                              data-tooltip="Delete"
                              onClick={handleDelete}
                            >
                              <Trash2 />
                            </button>
                          </li>
                        </>
                      )}
                    </ul>
                  </td>
                </tr>
           ))}
            
              
            </tbody>
          </table>

          <LoadMore />
        </div>
      </div>

       {store.isView && <ModalViewMovie  movieInfo={movieInfo}/>}
      {store.isDelete && <ModalDelete />}
      {store.isConfirm && <ModalConfirm />}
    </>
  );
};

export default MovieTable;

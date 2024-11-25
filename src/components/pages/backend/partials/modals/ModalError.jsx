import { Archive, Info, Trash2, X } from "lucide-react";
import React from "react";
import ModalWrapper from "./ModalWrapper";
import { setError } from "@/components/store/storeAction";
import { StoreContext } from "@/components/store/storeContext";

const ModalError = () => {
  const { dispatch } = React.useContext(StoreContext);

  const handleClose = () => {
    dispatch(setError(false));
  };
  return (
    <>
      <ModalWrapper>
        <div
          className="modal-main bg-primary absolute top-1/2 left-1/2 -translate-x-1/2 
          -translate-y-1/2 max-w-[300px] w-full rounded-md border border-line"
        >
          <div className="modal-body p-2 py-4 text-center">
            <X className="text-alert mx-auto mb-4" size={40} />
            <h5>Server error</h5>
            <p className="my-5 text-center">
              Something went wrong, Please reload the page
            </p>

            <button
              className="btn btn-alert w-full flex justify-center"
              onClick={handleClose}
            >
              Okay
            </button>
          </div>
        </div>
      </ModalWrapper>
    </>
  );
};

export default ModalError;

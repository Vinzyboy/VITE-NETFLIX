import { Archive, Info, Trash2, X } from "lucide-react";
import React from "react";
import ModalWrapper from "./ModalWrapper";

const ModalValidation = () => {
  return (
    <>
      <ModalWrapper>
        <div
          className="modal-main bg-primary absolute top-1/2 left-1/2 -translate-x-1/2 
          -translate-y-1/2 max-w-[300px] w-full rounded-md border border-line"
        >

          <div className="modal-body p-2 py-4 text-center">
            <Info className="text-info mx-auto mb-4" size={40}/>
            <h5>Validation issue</h5>
            <p className="my-5 text-center">
              The title already exist
            </p>

              <button className="btn btn-info w-full flex justify-center">Okay</button>
          </div>
        </div>
      </ModalWrapper>
    </>
  );
};

export default ModalValidation;

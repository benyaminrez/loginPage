/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { createPortal } from "react-dom"

const Modal =({isOpen, open, title, body ,children}) => {
    return (
        <>
        {
            isOpen &&
            createPortal(
            <div className="modal d-block " tabIndex="-1" onClick={()=> open(false)}>
            <div className="modal-dialog " onClick={(e)=> e.stopPropagation()}>
              <div className="modal-content bg-dark text-light">
                <div className="modal-header">
                  <h5 className="modal-title h3" dir="rtl"> {title}</h5>
                  <button type="button" className="btn-close  bg-info" onClick={()=>open(false)} data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body" style={{fontSize:1.1+"rem"}} dir="rtl">
                  <p> {body} </p>
                </div>
                <div className="modal-footer">
   {children}
      </div>
    </div>
  </div>
</div>
                
          , document.getElementById('modal'))
        }
        </>
    )
}
export default Modal
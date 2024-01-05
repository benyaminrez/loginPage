/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import { size } from "lodash"

const Spinner = ({theme = 'success'})=>{

return(
    <>
    
    <div className="bg-dark w-100 h-100 bg-opacity-25 d-flex justify-content-center shadow  position-absolute text-center">

    <div className="spinner-border text-success h1 display-1"  role="status">
  <span className="text-center">Loading...</span>
</div>
    </div>
    </>
)
} 
export default Spinner
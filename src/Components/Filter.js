import React from 'react'
import Modal from 'react-modal/lib/components/Modal'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import { selectState } from '../redux/actions/ridesAction';

const customStyles = {
    content: {
      top: '10%',
      width:'228px',
      height:'190px',
      background:'#131313'
    },
  };


function Filter({setIsOpen,modalIsOpen}) {

  let rides = useSelector(state=>state.allRides.ridesDetails)

  console.log(rides)

  const dispatch = useDispatch()

    // const handleSubmitCity=(ride)=>{
    //     dispatch({type:'SELECT_CITY',payload:ride.city})
    // }

    // const handleSubmitState=(ride)=>{
    //     dispatch({type:'SELECT_STATE',payload:ride.state})
    // }

    const handleChange=((e)=>{
      e.preventDefault()
      console.log("yap this happened")
     let selected_State=e.target.value
      console.log(selected_State)

      dispatch(selectState(selected_State))
    })
    

    function closeModal() {
      setIsOpen(false);
    }
  return (
     <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className=" text-white p-5 rounded-xl mt-6 mb-0 ml-auto mr-3"
        style={customStyles}
      >
        <div className="flex justify-between mb-2">
          <h2 className="text-xl">Filters</h2>
          <button className="text-3xl" onClick={closeModal}><AiOutlineCloseCircle/></button>
        </div>
        <hr></hr>
        <form className="text-xl">
          <div>
          <select className=" bg-[#6a6c6d] text-white  h-10 my-3 w-full"  onChange={handleChange}>
              <option value="">State</option>
              {rides.filter(function(item){
                return rides.indexOf(item.state)>-1;
              }) }
              {rides.map((ride,id)=>(
                  <option key={id} value={ride.state}>{ride.state}</option>
              ))}
          </select>
          <select className=" bg-[#6a6c6d] text-white h-10 my-3 w-full">
              <option value="">City</option>
              {rides.filter(function(item){
                return rides.indexOf(item.city)>-1
              })}
              {rides.map((ride,id)=>(
                      <option key={id}  onClick={()=>console.log(ride.city)} value={ride.city}>{ride.city}</option>
              ))}
          </select>
          </div>
        </form>
      </Modal>
  )
}

export default Filter
import { useState } from 'react'
import { connect, useSelector } from 'react-redux'

function App(props) {
  const [formObj, setFormObj] = useState({
    name : "",
    email : ""
  })


  // const dataUsers = useSelector((state)=>state.users) // using use SELECTOR MEANS ur auto subscribing in the store
    //const dispatch = useDispatch()
  // const handleSubmit2 = (e)=>{
  //   e.preventDefault()
  //   dispatch({
  //       type : "ADD_USER",
  //       payload : formObj
  //   })
  // }

  const {addUser,data} = props

  const handleSubmit = (e)=>{
    e.preventDefault()
    if(addUser(formObj)){
      console.log(data)
    }
  }

  const handleChange = (e)=>{
    const {name,value} = e.target
    setFormObj((prev)=>({...prev, [name]: value}))
  }

  return (
    <>
        <form onSubmit={handleSubmit}>
            Name : 
            <input type="text" name ="name" value={formObj.name} onChange={handleChange} /> <br />
            Email : 
            <input type="text" name ="email" value={formObj.email} onChange={handleChange} /> <br />
            <input type="submit" value="Add User" />
        </form>
    </>
  )
}

const mapStateToProps = (state)=>{
  return {
    data : state.users
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    addUser : (user) => dispatch({
        type : 'ADD_USER',
        payload : user
    })
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)

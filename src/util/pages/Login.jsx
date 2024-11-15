import React, { useState } from 'react'
import {useFormik} from 'formik'
import * as Yup from "yup"

function Login() {
    const[userData,setUserData] = useState([])
    const[selectedIndex,setSelectedIndex]=useState(null)

    const initialValues = { userName: "", email: "", password: "" }
    const validationSchema = Yup.object().shape({
        userName: Yup.string().required("User name is Required"),
        email: Yup.string().email().required("email is required"),
        password: Yup.string().required("Password ia required")
    })


    const handleFormSubmit = (values) => {
      if (selectedIndex != null) {
          selectedIndex && userData.splice(selectedIndex, 1);
          userData[selectedIndex] = values
      } else {
          setUserData([...userData, values])
      }

      formikDetailes.resetForm()
      setSelectedIndex(null);
  }

    const formikDetailes = useFormik({
      initialValues,
      validationSchema,
      onSubmit: handleFormSubmit

    })
    const handleDelete = (index) => {
      const deletedUserData = userData.filter((_, ind) => ind !== index)
      setUserData(deletedUserData)
  }

  const handleUpdate = (index) => {
      setSelectedIndex(index)
      const selectedVal = userData[index]
      formikDetailes.setFieldValue("userName", selectedVal.userName)
      formikDetailes.setFieldValue("email", selectedVal.email)
      formikDetailes.setFieldValue("password", selectedVal.password)
  }    
  return (
<div className='w-[80%] m-auto'>
            <h1 className='text-2xl font-bold text-center m-4'>Register before Login</h1>
            <form onSubmit={formikDetailes.handleSubmit} className='border border-slate-950 rounded-xl p-3 w-[50%]'>
                <div className='p-2'>
                    <label>UserName:</label>
                    <input
                        className='p-1 m-1 border border-slate-950  rounded-md'
                        name='userName'
                        type='text'
                        value={formikDetailes.values.userName}
                        onChange={formikDetailes.handleChange}
                        onBlur={formikDetailes.handleBlur}
                    />
                    <p className='text-red-600'>{(formikDetailes.errors.userName || formikDetailes.touched.userName) ? formikDetailes.errors.userName : ""}</p>
                </div>
                <div className='p-2'>
                    <label>Email:</label>
                    <input
                        className='p-1 m-1 border border-slate-950  rounded-md'
                        name='email'
                        type='text'
                        value={formikDetailes
                            .values.email}
                        onChange={formikDetailes.handleChange}
                        onBlur={formikDetailes.handleBlur}
                    />
                    <p className='text-red-600'>{(formikDetailes.errors.email || formikDetailes.touched.email) ? formikDetailes.errors.email : ""}</p>
                </div>
                <div className='p-2'>
                    <label>Password:</label>
                    <input
                        className='p-1 m-1 border border-slate-950  rounded-md'
                        name='password'
                        type='text'
                        value={formikDetailes.values.password}
                        onChange={formikDetailes.handleChange}
                        onBlur={formikDetailes.handleBlur}
                    />
                    <p className='text-red-600'>{(formikDetailes.errors.password || formikDetailes.touched.password) ? formikDetailes.errors.password : ""}</p>
                </div>
                <div>
                    <button className='p-2 bg-lime-400 m-2 text-black rounded-md' type='submit'>Submit</button>
                </div>
            </form>
            <div>
                <h1> user Data cards </h1>
                {userData &&
                    userData.map((ele, index) => {
                        return (
                            <div className='p-3 m-3 bg-sky-200 rounded-lg'>
                                <p className='text-black'>{ele.userName}</p>
                                <p className='to-white'>{ele.email}</p>
                                <button
                                    onClick={() => { handleUpdate(index) }}
                                    className='p-1 m-2 rounded-lg bg-amber-600 text-white'>Edit</button>
                                <button
                                    onClick={() => {
                                        handleDelete(index)
                                    }}
                                    className='p-1 m-2 rounded-lg bg-red-700 text-white'
                                >Delete</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
  )
}

export default Login

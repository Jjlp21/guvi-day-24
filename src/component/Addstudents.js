import axios from 'axios';
import React,{useState,useContext,useEffect} from 'react'
import {useNavigate} from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup'
function AddStudent() {

    let navigate = useNavigate();
  
 const formik = useFormik({
     initialValues:{
         name:'',
         email:'',
         mobile:'',
         degree:'',
         dept:''
     },
     onSubmit(values) {
        handleSave(values)
      
    },validationSchema:yup.object({
         name:yup.string().required('required'),
         email:yup.string().email('invalid email address').required('required'),
         mobile:yup.string().matches(/^\d{10}$/,"invalid mobile number ").required('required'),
         degree:yup.string(),
         dept:yup.string()
     }),
     
     
 })
    let handleSave =async(data)=>{
       try { let d=await axios.post('https://614eacd3b4f6d30017b48344.mockapi.io/user',data)
       console.log(d)
       navigate('/all-students')
           
       } catch (error) {
           window.alert(error)
       }
    }
    return (
        <div className='margin'>
            <h1>Add Student</h1>
           <form onSubmit={formik.handleSubmit}>
           <label htmlFor='name'>Name</label>
            <input
                id='name'
                name='name'
                type='name'
                className="form-control"
                placeholder="name"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.name}
                            />

         {formik.touched.name && formik.errors.name?(<div style={{color:"red"}}>{formik.errors.name}</div>) : null}  
         <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              className="form-control"
              placeholder="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.email}
          
              />
      {formik.touched.email && formik.errors.email ? (<div style={{color:"red"}}>{formik.errors.email}</div>): null}
               <label htmlFor="mobile">Mobile</label>
             <input
              id="mobile"
              name="mobile"
              type="mobile"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.mobile}
              className="form-control"
              placeholder="moblie"
              />
                   {formik.touched.mobile && formik.errors.mobile ? (<div style={{color:"red"}}>{formik.errors.mobile}</div>): null}
              <label htmlFor="degree">Degree</label>
            <input
              id="degree"
              name="degree"
              type="degree"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.degree}
              className="form-control"
              placeholder="degree"
              />
                   {formik.touched.degree && formik.errors.degree ? (<div style={{color:"red"}}>{formik.errors.degree}</div>): null}
              <label htmlFor="dept">Department</label>
            <input
              id="dept"
              name="dept"
              type="dept"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.department}
              className="form-control"
               placeholder="dept"
              />
                   {formik.touched.dept && formik.errors.dept ? (<div style={{color:"red"}}>{formik.errors.dept}</div>): null},
     <button type="submit" className="btn btn-primary">Submit</button>
           </form>
        </div>
    )
}

export default AddStudent

    
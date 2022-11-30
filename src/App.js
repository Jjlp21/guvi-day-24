import './App.css';
import React,{useState,useEffect} from 'react';
import {BrowserRouter as Router,Route,Routes}from 'react-router-dom'
import Sidebar from './component/Sidebar';
import Dashboard from './component/Dashboard';
import Allstudents from './component/Allstudents';
import Addstudents from './component/Addstudents';
import Editstudent from'./component/Editstudent';



            function App() {



              useEffect(()=>{

              })
              
            
              return<>
              
              <Router>
              
                
              <div style={{display:"flex",flexDirection:"row"}}><Sidebar/>
                <div><Routes>
                
                <Route path='/dashboard' element={<Dashboard/>}/>
                  <Route path='/all-students' element={<Allstudents/>}/>
                  <Route path='/add-student' element={<Addstudents/>}/>
                  <Route path='/edit-student/:id' element={<Editstudent/>}/>
                  <Route path='/' element={<Allstudents />}/>
                </Routes></div></div>
              
                </Router>
              </>
              
            }

            export default App;

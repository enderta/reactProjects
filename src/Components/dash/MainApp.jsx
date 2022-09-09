import React from 'react'
import './mainApp.css'
import Tables from './Tables'
import Lists from './Lists'
import Create from './Create'
import Graphs from './Graphs'

export const MainApp = () => {
  return (
    <div>
        <div className="parent">
  <div className="div1">
    <Tables />
     </div>
  <div className="div2"> 
  <Graphs />
  </div>
  <div className="div3"> 
  <Tables />
  </div>
  <div className="div4">
  <Tables />
     </div>
</div>

    </div>
  )
}
export default MainApp
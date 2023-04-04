import React from 'react'

export default function Alert(props) {
  return (
   
  props.alert &&<div className={`alert alert-${props.alert.type} d-flex align-items-center`} role="alert" style={{height: '20px', margin :'0px'}}>
  <div>
    <strong>Success</strong> : {props.alert.msg}
  </div>
</div>
   
    
  )
}

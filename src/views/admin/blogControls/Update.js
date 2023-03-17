import { Editor } from 'primereact/editor'
import React from 'react'
import { useState,useEffect } from 'react';

const Update = (props) => {
    const [text1, setText1] = useState('');

    
    useEffect(() => {
        const content=localStorage.getItem("content")
        setText1(props.content)


    
    }, [])
    
  return (
    <div>
        <Editor value={text1} />
    </div>
  )
}

export default Update
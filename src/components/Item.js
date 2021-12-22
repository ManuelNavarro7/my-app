import React,{useState, useEffect} from 'react' 
import { NavLink , useParams} from 'react-router-dom'


export default function Item(){

    const {id}=useParams()

return(
    <div>{id}</div>
)
}
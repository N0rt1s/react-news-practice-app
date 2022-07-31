import React from 'react'

export default function newsBox(props) {
  return (
    <div className="card" key={props.key} style={{width: "18rem"}}>
        <img src={props.imageurl} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{props.imagetitle==null?props.empty:props.imagetitle}</h5>
            <p className="card-text">{props.description}</p>
            <a href={props.newsurl} target="_blank" className="btn btn-dark">Read More</a>
        </div>
    </div>
  )
}

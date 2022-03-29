import {useParams} from "react-router";
import React, { useState, useEffect } from "react";
import axios from "axios"
import {Link , useHistory} from "react-router-dom";



const PetDetail =()=>{

    const {_id} = useParams();
    const history = useHistory();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${_id}`)
            .then(response => {
                // console.log(response);
                setPet(response.data.pet);
            }).catch(err => {
                console.log(err);
            });
    }, [])
    let [pet, setPet] = useState([])

    const deletePet = (petId)=>{
        axios.delete(`http://localhost:8000/api/pets/delete/${_id}`)
        .then(response => {
            // console.log(response);
            history.push('/')
        }).catch(err => {
            console.log(err);
        });
    }


    return (
        <>
        <div className="card bg-secondary mb-4" key={_id}>
            <div className="card-body">
                <h2 className="card-title mb-3 petNameFixed">Details about {pet.name}</h2>
                <h6 className="card-subtitle mb-3 ">Type: {pet.type}</h6>
                <h6 className="card-subtitle mb-3 ">Description: {pet.description}</h6>
                <h6 className="card-subtitle m-3">Skills:  {pet.skill1}<br/> {pet.skill2}<br/> {pet.skill3}</h6>
                <Link to={`/edit/${_id}`} className="btn btn-success btn-md mx-3">Edit {pet.name}</Link>
                <button onClick={deletePet} className="btn btn-success btn-md mx-3">Adopt {pet.name}</button>
            </div>
        </div>
        <br/>
        <div>
        <Link to="/" type="button" className="btn btn-outline-success btn-lg mb-4">Back to Home Page</Link>
        </div>
        
    </>
)};

export default PetDetail;
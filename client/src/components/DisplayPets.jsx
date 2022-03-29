import React, { useState, useEffect } from "react";
import axios from "axios"
import {Link } from "react-router-dom";
import {useParams} from "react-router";


const DisplayPets = (props) => {

    useEffect(() => {
        axios.get("http://localhost:8000/api/pets")
            .then(response => {
                // console.log(response);
                setPets(response.data.pets);
            }).catch(err => {
                console.log(err);
            });
    }, [props.updateForm])

    let [pets, setPets] = useState([])
    const {} = useParams();
    // removed {_id}




    return (
        <div>
            <Link to={"/new"} className="btn btn-outline-success btn-md my-3">Add a Pet to the Shelter</Link>
            <h3>These Pets are looking for a good home!</h3>
            <br/>
            <h6 className="text-muted">~Click pet name or details button to view or adopt~</h6>
            {
                pets.map((petObj) => {
                    return (
                        <div className="card bg-secondary mb-4" key={petObj._id}>
                            <div className="card-body">
                            <h3 className="card-subtitle mb-3 "><Link to={`/details/${petObj._id}`} className="petName" >{petObj.name}</Link> </h3>
                                <h6 className="card-subtitle mb-3 ">Type: {petObj.type}</h6>
                                <Link to={`/edit/${petObj._id}`} className="btn btn-success btn-sm mx-3">Edit {petObj.name}</Link>
                                <Link to={`/details/${petObj._id}`} className="btn btn-success btn-sm mx-3" >Details of {petObj.name}</Link>
                            </div>
                        </div>

                )})

        }
        </div>
    );
};

export default DisplayPets;
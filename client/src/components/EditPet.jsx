import {useParams} from "react-router";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";


const EditPet = ()=> {

    const {_id} = useParams();
    const history = useHistory();

    let [petInfo, setPetInfo] = useState({});
    let [formError, setFormError] = useState({})
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${_id}`)
        .then(response=>{
            // console.log(" YOOOOOO EDIT...",response);
            setPetInfo(response.data.pet)
        })
        .catch(err=>{
            console.log('Something went wrong', err )
            })
        }
    , [])

    const editPet =(e)=>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/pets/update/${_id}`, petInfo)
        .then(response=>{
            // console.log("updating",response)
            if(response.data.error){
                setFormError(response.data.error.errors);
            }else{
            setFormError({});
            history.push('/')
            }
        })
        .catch(err=>{
            console.log('Something went wrong', err )
            })

    }

    const changeHandler=(e)=>{
        // e.target.name  e.target.value 
        setPetInfo({
            ...petInfo,
            [e.target.name] : e.target.value
        })


    }


    return (
        <>
        <form onSubmit={editPet}>
            <div className="form-group">
                <label htmlFor="">Pet Name:</label>
                <input type="text" className="form-control" onChange={changeHandler} name="name" value={petInfo.name}/>
                <p className="text-danger">{formError.name?.message}</p>
                {petInfo.name?.length < 3 && petInfo.name?.length >0 ? <p>Must be at least 3 characters</p> : null}

                <label htmlFor="">Type:</label>
                <input type="text" className="form-control" onChange={changeHandler} name="type" value={petInfo.type}/>
                <p className="text-danger">{formError.type?.message}</p>
                {petInfo.type?.length < 3 && petInfo.type?.length >0 ? <p>Must be at least 3 characters</p> : null}

                <label htmlFor="">Description:</label>
                <input type="text" className="form-control" onChange={changeHandler} name="description" value={petInfo.description}/>
                <p className="text-danger">{formError.description?.message}</p>
                {petInfo.description?.length < 3 && petInfo.description?.length >0 ? <p>Must be at least 3 characters</p> : null}

                <label htmlFor="">Skill 1:</label>
                <input type="text" className="form-control" onChange={changeHandler} name="skill1" value={petInfo.skill1}/>
                <label htmlFor="">Skill 2:</label>
                <input type="text" className="form-control" onChange={changeHandler} name="skill2" value={petInfo.skill2}/>
                <label htmlFor="">Skill 3:</label>
                <input type="text" className="form-control" onChange={changeHandler} name="skill3" value={petInfo.skill3}/>
            </div>
                <input type="submit" value="Submit Edit" className="btn btn-outline-success btn-md my-3 mt-4" /><br/>
                <Link to="/" type="button" className="btn btn-outline-success btn-md my-3 mt-2">Back to Home Page</Link>
        </form>
        </>
    )
}


export default EditPet;

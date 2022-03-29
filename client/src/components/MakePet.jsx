import axios from "axios";
import React, {useState} from "react";
import { Link, useHistory } from "react-router-dom";


const MakePets = (props)=> {

    let [name, setName] = useState ("")
    let [type, setType] = useState ("")
    let [description, setDescription] = useState ("")
    let [skill1, setSkill1] = useState ("")
    let [skill2, setSkill2] = useState ("")
    let [skill3, setSkill3] = useState ("")
    const history = useHistory();
    let [formError, setFormError] = useState({})

    const submitPet =(e)=>{
        e.preventDefault();
        let formInfo = {name,type,description,skill1,skill2,skill3};

        axios.post("http://localhost:8000/api/pets/new",formInfo)
        .then(response=>{
            // console.log(" YOOOOOOOOOOOOO...",response);
            // backend val
            if(response.data.error){
                setFormError(response.data.error.errors);
            }else{
            // also in app.js file and displayPets.jsx
            props.setUpdateForm(!props.updateForm)

            setName("");
            setType("");
            setDescription("");
            setSkill1("");
            setSkill2("");
            setSkill3("");
            setFormError({});

            history.push('/')
            }

        })
        .catch(err=>{
            console.log('Something went wrong', err )
        })
    }

    return (
        <>
        <h3>Know a pet needing a new home?</h3>
        <form onSubmit={submitPet}>
            <div className="form-group">
                <label htmlFor="">Name: *</label>
                <input type="text" className="form-control" onChange={ (e) => setName(e.target.value)} value={name}/>
                <p className="text-danger">{formError.name?.message}</p>
                {name.length < 3 && name.length >0 ? <p>Must be at least 3 characters</p> : null}

                <label htmlFor="">Type: *</label>
                <input type="text" className="form-control" onChange={ (e) => setType(e.target.value)} value={type}/>
                <p className="text-danger">{formError.type?.message}</p>
                {type.length < 3 && type.length >0 ? <p>Must be at least 3 characters</p> : null}

                <label htmlFor="">Description: *</label>
                <input type="text" className="form-control" onChange={ (e) => setDescription(e.target.value)} value={description}/>
                <p className="text-danger">{formError.description?.message}</p>
                {description.length < 3 && description.length >0 ? <p>Must be at least 3 characters</p> : null}

                <label htmlFor="">Skill 1:</label>
                <input type="text" className="form-control" onChange={ (e) => setSkill1(e.target.value)} value={skill1}/>
                <label htmlFor="">Skill 2:</label>
                <input type="text" className="form-control" onChange={ (e) => setSkill2(e.target.value)} value={skill2}/>
                <label htmlFor="">Skill 3:</label>
                <input type="text" className="form-control" onChange={ (e) => setSkill3(e.target.value)} value={skill3}/>
                <h6 className="text-muted">~ * is a required field ~</h6>
            </div>
            <input type="submit" value="Add Pet" className="btn btn-outline-success btn-md my-3" /><br/>
                <Link to="/" type="button" className="btn btn-outline-success btn-md my-3 mt-2">Back to Home Page</Link>
        </form>
        </>
    )
}

export default MakePets;

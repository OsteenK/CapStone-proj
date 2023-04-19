
import React, {useState} from "react";
import './CharityEditForm.css'

const CharityForm = () => {

    const [charName, setCharName] = useState("");
    const [charEmail, setCharEmail] = useState("");
    const [charPassword, setCharPassword] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        setCharName("")
        setCharEmail("")
        setCharPassword("")
        setImageUrl("")
        setDescription("")
    }



    return(
        <div>
            <form className="Charity-form" onSubmit={handleSubmit}>
                <input className="charity-form-input"
                name="Name"
                type="text"
                onChange= {(event)=>{setCharName(event.target.value)}}
                value= {charName}
                placeholder= "Charity Name"
                />

                <input className="charity-form-input"
                name="email"
                type="text"
                onChange= {(event)=>{setCharEmail(event.target.value)}}
                value= {charEmail}
                placeholder= "Email"
                />

                <input className="charity-form-input"
                name="password"
                type="password"
                onChange= {(event)=>{setCharPassword(event.target.value)}}
                value= {charPassword}
                placeholder= "Password"
                />

                <input className="charity-form-input"
                name="image"
                type="text"
                onChange= {(event)=>{setImageUrl(event.target.value)}}
                value= {imageUrl}
                placeholder= "Banner Image"
                />
                <input className="charity-form-input-description"
                name="description"
                type="text"
                onChange= {(event)=>{setDescription(event.target.value)}}
                value= {description}
                placeholder= "Description of the charity"
                />
                <button className='rounded-full' type= "submit">Submit Application</button>
            </form>

            <div className="left-side-text">
                <h3>Edit Charity Profile</h3>
                <p>Use this form to update and edit your profile details. Remember to keep it professional.</p>
            </div>
        </div>
    )

}

export default CharityForm
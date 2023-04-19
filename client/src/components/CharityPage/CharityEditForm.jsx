
import React, {useState} from "react";

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
             <form className="Beneficiary-form" onSubmit={handleSubmit}>
                <input className="beneficiary-form-input"
                name="Name"
                type="text"
                onChange= {(event)=>{setCharName(event.target.value)}}
                value= {charName}
                placeholder= "Charity Name"
                />

                <input className="beneficiary-form-input"
                name="email"
                type="text"
                onChange= {(event)=>{setCharEmail(event.target.value)}}
                value= {charEmail}
                placeholder= "Email"
                />

                <input className="beneficiary-form-input"
                name="password"
                type="password"
                onChange= {(event)=>{setCharPassword(event.target.value)}}
                value= {charPassword}
                placeholder= "Password"
                />

                <input className="beneficiary-form-input"
                name="image"
                type="text"
                onChange= {(event)=>{setImageUrl(event.target.value)}}
                value= {imageUrl}
                placeholder= "Banner Image"
                />
                <input className="beneficiary-form-input-description"
                name="description"
                type="text"
                onChange= {(event)=>{setDescription(event.target.value)}}
                value= {description}
                placeholder= "Description of the charity"
                />
                <button className='rounded-full' type= "submit">Submit Application</button>
            </form>
        </div>
    )

}

export default CharityForm
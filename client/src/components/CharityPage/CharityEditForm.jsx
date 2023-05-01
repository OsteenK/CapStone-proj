
import React, {useState} from "react";
import './CharityEditForm.css'
import CharityNavBar from "./CharityNavBar";

const CharityForm = () => {

    const [formData, setFormData] = useState([])
    const [charName, setCharName] = useState("");
    const [charEmail, setCharEmail] = useState("");
    const [charPassword, setCharPassword] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormData([...formData, {charName, charEmail, charPassword, imageUrl, description}])
        setCharName("")
        setCharEmail("")
        setCharPassword("")
        setImageUrl("")
        setDescription("")

        const updateData = {
            charName,
            charEmail,
            description,
            charPassword,
            imageUrl

        };




        fetch(`/charities/${formData.id}`, {
        method: 'PATCH', // or 'PUT'
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateData)
        })
        .then(response => {
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Charity updated:', data);
        })
        .catch(error => {
            console.error('Error updating charity:', error);
        });
    }



    return(
        <div>
            <CharityNavBar />
            <form className="charity-form" onSubmit={handleSubmit}>
                <input className="charity-form-input"
                name="name"
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
                name="img_url"
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

                <button className='submit-button' type= "submit">Submit Application</button>
            </form>

            <div className="left-side-text">
                <h3>Edit Charity Profile</h3>
                <p className="edit-sentence">Use this form to update and edit your profile details. Remember to keep it professional.</p>
            </div>
        </div>
    )

}

export default CharityForm
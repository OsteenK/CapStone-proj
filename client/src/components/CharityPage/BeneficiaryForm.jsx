import React from "react";

const BeneficiaryForm = () => {

    const [benName, setBenName] = useState("");
    const [location, setLocation] = useState("");
    const [cardImage, setCardImage] = useState("");
    const [items, setItems] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
    }


    return(
        <div>
            <form className="Beneficiary-form" onSubmit={handleSubmit}>
                <input className="beneficiary-form-input"
                name="Name"
                type="text"
                onChange= {(event)=>{setBenName(event.target.value)}}
                value= {benName}
                placeholder= "Beneficiary Name"
                />

                <input className="beneficiary-form-input"
                name="location"
                type="text"
                onChange= {(event)=>{setLocation(event.target.value)}}
                value= {location}
                placeholder= "Location"
                />

                <input className="beneficiary-form-input"
                name="cardImage"
                type="text"
                onChange= {(event)=>{setCardImage(event.target.value)}}
                value= {cardImage}
                placeholder= "Card Image URL"
                />

                <input className="beneficiary-form-input"
                name="items"
                type="text"
                onChange= {(event)=>{setItems(event.target.value)}}
                value= {items}
                placeholder= "Items Received"
                />
                <input className="beneficiary-form-input-description"
                name="description"
                type="text"
                onChange= {(event)=>{setDescription(event.target.value)}}
                value= {description}
                placeholder= "Description of how your charity helped the beneficiary using the donations from the donors"
                />
            </form>
        </div>
    )

}

export default BeneficiaryForm
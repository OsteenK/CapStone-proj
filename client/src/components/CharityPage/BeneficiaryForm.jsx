
import './BeneficiaryForm.css'
import { useState } from "react";
const BeneficiaryForm = () => {

    const [benName, setBenName] = useState("");
    const [location, setLocation] = useState("");
    const [cardImage, setCardImage] = useState("");
    const [items, setItems] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        setBenName("")
        setLocation("")
        setCardImage("")
        setItems("")
        setDescription("")

        // const updateData = {
        //     name,
        //     location,
        //     description,
        //     item,
        //     image_url

        // };

        // fetch(`/beneficiaries`, {
        // method: 'POST',
        // headers: {
        //     'Content-Type': 'application/json'
        // },
        // body: JSON.stringify(updateData)
        // })
        // .then(response => {
        //     if (!response.ok) {
        //     throw new Error('Network response was not ok');
        //     }
        //     return response.json();
        // })
        // .then(data => {
        //     console.log('Beneficiary updated:', data);
        // })
        // .catch(error => {
        //     console.error('Error updating beneficiary:', error);
        // });
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
                <button className='rounded-full' type= "submit">Add Story</button>
            </form>

            <div className='text-part-left'>
                <h3>Why add stories?</h3>
                <p className='first-paragraph'>Adding beneficiary stories encourages donors to contribute to your charity, by showing the impact of their donations.</p>

                <h3>Guidelines</h3>
                <ul>
                    <li>
                        <p>Focus on the individual:A beneficiary story should be personal and emotionally impactful. Highlight the challenges and struggles that the individual faced, and how the charity made a difference in their life.</p>
                    </li>
                    <li>
                        <p>Use real names and images (with permission):Using real names and pictures helps to build authenticity and trust with your audience. Make sure to obtain permission from the beneficiary before sharing their story publicly.</p>
                    </li>
                    <li>
                        <p>Incorporate visuals:Use photos or videos to visually enhance the story and create a more immersive experience for your audience.</p>
                    </li>
                    <li>
                        <p>Highlight the impact of donor support:Donors want to know that their contributions are making a meaningful impact. Be sure to clearly explain how the charity was able to help the beneficiary, and how donor support made this possible.</p>
                    </li>
                    <li>
                        <p>Keep it concise: While it's important to be detailed and informative, a beneficiary story should also be easy to read and digest. Focus on the most important details and keep the story concise, so that readers can quickly understand the impact of the charity's work.</p>
                    </li>
                </ul>
            </div>
        </div>
    )

}

export default BeneficiaryForm
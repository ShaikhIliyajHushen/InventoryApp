import React, { useState } from 'react';
import './index.css';


function Index() {

    // const [formData, setFormData] = useState({
    //     companyName: '',
    //     Name: '',
    //     Email: '',
    //     PhoneNumber: '',
    //     communicationType: ''
    // })

    // const [error, setErrors] = useState(false)

    // const handleOnchange = (e) => {
    //     const { name, value } = e.target
    //     setFormData((prev) => ({ ...prev, [name]: value }))
    // }

    // const handleRadio =(e)=>{
    //    setFormData((prev)=>({
    //        ...prev, communicationType: e.target.value
    //    }))
    // }

    // const validateForm = () => {
    //     const newErrors = {};
    //     if (!formData.companyName) newErrors.companyName = "Company name is required";
    //     if (!formData.Name) newErrors.Name = "Name is required";
    //     if (!formData.Email) newErrors.Email = "Email is required";
    //     if (!formData.PhoneNumber) newErrors.PhoneNumber = "Phone number is required";
    //     if (!formData.communicationType) newErrors.communicationType = "Select a communication type";

    //     setErrors(newErrors);
    //     return Object.keys(newErrors).length === 0;
    // };

// const handleSubmit = (e) => {
//     e.preventDefault();
//     if(validateForm()){
//         console.log(formData)
//     }
// }

return (
    <>
        <div className='container-fluid'>
            <div className='row navbar'>
                <div className='col text-center'>Welcom to Pvt Ltd</div>
            </div>
            {/* <div className='row'>
                <div className='col-lg-8 col-md-5 col-sm-5 text-center ddd'>
                    <h1>Welcom to fhghj dhsdjkfhhjsdf hfdjklsdhflhg</h1>
                </div>
                <div className='col-lg-4 col-md-7 col-sm-7 ddd h-100'>
                    <div className='row card p-3'>
                        <form action="" onSubmit={handleSubmit}>
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" onChange={handleOnchange} name='Name' value={formData.Name} placeholder="Name" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            {error.Name && <span>{error.Name}</span>}
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" onChange={handleOnchange} name='Email' value={formData.Email} placeholder="Email" aria-label="Username" aria-describedby="basic-addon1" />
                            </div> 
                            {error.Email && <span>{error.Email}</span>}
                            <div class="input-group mb-1">
                                <input type="text" class="form-control" onChange={handleOnchange} name='companyName' value={formData.companyName} placeholder="Company Name" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                             {error.companyName && <span>{error.companyName}</span>}
                            <span className='mb-2'>Salect Service</span>
                            <div className='d-flex justify-content-around'>
                                <div >
                                    <input type="radio" onChange={handleRadio} name="voice" value={formData.communicationType ==='voice'} id="" /><label htmlFor="">Voice</label>
                                </div>
                                <div>
                                    <input type="radio" onChange={handleRadio} name="sms" value={formData.communicationType ==='sms'} id="" /><label htmlFor="">sms</label>
                                </div>
                                <div>
                                    <input type="radio" onChange={handleRadio} name="whatsapp" value={formData.communicationType ==='whatsapp'} id="" /><label htmlFor="">whatsapp</label>
                                </div>
                            </div>
                            {error.communicationType && <span>{error.communicationType}</span>}
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">91</span>
                                <input type="text" class="form-control" onChange={handleOnchange} name='PhoneNumber' value={formData.PhoneNumber} placeholder="Name" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            {error.PhoneNumber && <span>{error.PhoneNumber}</span>}
                            <div>
                                <button type='submit'>SingUp</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div> */}
        </div>
    </>
)
}

export default Index

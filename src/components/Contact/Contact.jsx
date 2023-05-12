import React, { useState, useRef, useEffect } from 'react'
import Button from '../Button/Button'
import { validateEmail, validateSubject } from '../utils/validation'
import Layout from '../Layout/Layout';
import './contact.css'

const Contact = () => {
    const [subject, setSubject] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');
    const [errors,setErrors] = useState({});
    const inputSubjectRef = useRef(null)

    const handleChangeInputSubject = (event) => {
      if (validateSubject(event.target.value)) {
        setSubject(event.target.value);
        setErrors({
          ...errors,
          subject: null,
        });
      } else {
        setErrors({
          ...errors,
          subject: "Subject must be more than 8 characters",
        });
      }
    };

    const handleChangeInputEmail = (event) => {
        if (validateEmail(event.target.value)){
            setEmail(event.target.value);
            setErrors({
                ...errors,
                email: null,
            })
        }else {
            setErrors({
              ...errors,
              email: 'Email is not valid'
            });
        }
    };

    const handleChangeTextArea = (event) => {
      setDescription(event.target.value);
    };

    const handleSubmit = () => {
      console.log("subject", subject);
      console.log("email", email);
      console.log("description", description);
      alert(' thanks for your request, we will contact you as soon as possible')
    };
    useEffect(()=>{
      inputSubjectRef.current.focus();
    }, [])

    return (<>
<section className="mb-4">
<Layout>
    <h2 className="h1-responsive font-weight-bold text-center my-4">Contact me</h2>
    <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact me directly.</p>
      <div className="row">
        <div className="col-md-9 mb-md-0 mb-5">
            <form id="contact-form " name="contact-form" action="mail.php" method="POST">

                <div className="padding">

                    <div className="col-md-6 ">
                        <div className="md-form mb-0 padding">
                        <input className="form-control" ref={inputSubjectRef} onChange={handleChangeInputSubject} type="text" placeholder="subject"/>
                          {errors.subject && <span className='text-danger'>{errors.subject}</span>}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="md-form mb-0 padding">
                        <input className="form-control" onChange={handleChangeInputEmail} type="email" placeholder="Email"/>
                          {errors.email && <span className='text-danger'>{errors.email}</span>}
                        </div>
                    </div>

                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="md-form mb-3">
                        </div>
                    </div>
                </div>

                <div className="row padding">

                    <div className="col-md-12 ">

                        <div className="md-form mb-3">
                            <textarea type="text" id="message" name="message" placeholder='Your request here' rows="2" className="form-control md-textarea" onChange={handleChangeTextArea}></textarea>
                        </div>

                    </div>
                </div>

            </form>

            <div className="text-center text-md-left">
              <Button handleClick={handleSubmit}>Submit</Button>    
            </div>
            <div className="status"></div>
        </div>

        <div className="col-md-3 text-center pr">
            <ul className="list-unstyled ">
                <li><i className="fas fa-map-marker-alt fa-2x"></i>
                    <p>Hamburg, Germany</p>
                </li>

                <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                    <p>hossein.karbakhsh.ravari@gmail.com</p>
                </li>
            </ul>
        </div>

    </div>
    </Layout>

</section>
</>
    );
};

export default Contact
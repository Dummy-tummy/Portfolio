import React, { useState, useRef } from 'react';
import contactGif from '../assets/images/contact.gif'
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_mxuwtyt', 'template_2bp6j5p', form.current, {
                publicKey: 's3glYWQQWNlzZ9uw2',
            })
            .then(
                () => {
                    alert('Email has been success fully sent');
                },
                (error) => {
                    alert('FAILED...', error.text);
                },
            );
    };

    return (
        <div className="container">
            <h2 className="text-center mb-4">Contact Me</h2>
            <div className="row">
                <div className="col-md-6">
                    <img src={contactGif} alt="GIF" className="img-fluid" />
                </div>
                <div className="col-md-6">
                    <form ref={form} onSubmit={sendEmail} id="contact-form">
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" name="user_email" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="subject" className="form-label">Subject</label>
                            <input type="text" className="form-control" id="subject" name="user_name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea className="form-control" id="message" rows="3" name="message"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Sent it!</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact
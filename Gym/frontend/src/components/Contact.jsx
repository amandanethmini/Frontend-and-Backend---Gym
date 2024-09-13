import React, { useRef, useState } from 'react';
import { ClipLoader } from 'react-spinners';
import { toast } from 'react-toastify';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.sendForm('service_90kckho', 'template_7tcvmmy', form.current, 'RnHdnGgXZoYCKAZ66')
            .then(
                (result) => {
                    console.log('Success:', result.text);
                    toast.success("Message sent successfully");
                    setLoading(false);
                    // Optionally reset form fields here
                    form.current.reset();
                },
                (error) => {
                    console.error('Failed to send message:', error);
                    toast.error("Failed to send message");
                    setLoading(false);
                }
            );
    };

    return (
        <section className="contact" id="contact" >
            <form ref={form} onSubmit={sendEmail}>
                <h1>CONTACT US</h1>
                <div>
                    <label>Name</label>
                    <input type="text" name="user_name" required />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" name="user_email" required />
                </div>
                <div>
                    <label>Message</label>
                    <textarea name="message" required />
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "15px",
                    }}
                >
                    {loading && <ClipLoader size={20} color="white" />}
                    Send Message
                </button>
            </form>
        </section>
    );
};

export default Contact;

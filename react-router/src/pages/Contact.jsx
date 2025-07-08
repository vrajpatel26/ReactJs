import { Form } from "react-router-dom"

export const contactData = async ({ request }) => {
    try {
        const res = await request.formData()
        const data = Object.fromEntries(res)
        console.log(data);
        return null;
    } catch (error) {
        console.log(error);

    }
}

export const Contact = () => {
    return (
        <section className="container section-contact">
            <div className="container">
                <h2 className="section-common--heading">Contact Us</h2>
                <p className="section-common--subheading">
                    Get in touch with us. We are always help to you.
                </p>
            </div>

            <div className="grid grid-two--cols">
                <div className="contact-content">
                    <Form method="POST" action="/contact">
                        <div className="grid grid-two-cols mb-3">
                            <div>
                                <label htmlFor="username">Full Name</label>
                                <input
                                    type="text"
                                    name="username"
                                    id="username"
                                    required
                                    autoComplete="off"
                                    placeholder="Enter Full Name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email">email address</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    required
                                    autoComplete="off"
                                    placeholder="abc@gmail.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message">email address</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    cols="30"
                                    rows="10"
                                    placeholder="we are always here to help you"
                                ></textarea>
                            </div>

                            <div className="mt-3">
                                <button type="submit" className="btn contact-btn">
                                    send message
                                </button>
                            </div>
                        </div>
                    </Form>
                </div>
                <div className="contact-image">
                    <figure>
                        <img
                            src="/contact.png"
                            alt="contact pic"
                            className="contact_image"
                        />
                    </figure>
                </div>
            </div>

        </section >
    )
}
import React, { useState, useContext } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { FaEnvelope } from "react-icons/fa";
import "./Contact.scss";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

function Contact() {
  const [show, setShow] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleClose = (): void => {
    setShow(false);
    setFormData({ name: "", email: "", message: "" });
    setErrors({});
  };
  const handleShow = (): void => setShow(true);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const onSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    setIsSubmitting(true);

    if (validateForm()) {
      try {
        const formDataToSend = new FormData();
        formDataToSend.append(
          "access_key",
          "4cf07025-30c0-4fe1-8c8a-5008383abfb4"
        );
        formDataToSend.append("name", formData.name);
        formDataToSend.append("email", formData.email);
        formDataToSend.append("message", formData.message);

        const object = Object.fromEntries(formDataToSend);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: json,
        }).then((res) => res.json());

        if (res.success) {
          console.log("Success", res);
          handleClose();
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    }

    setIsSubmitting(false);
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="contact-button">
        <FaEnvelope className="me-2" />
        Contact Me 🤝
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        keyboard={false}
        className="modern-modal"
        centered
      >
        <div>
          <Modal.Header closeButton>
            <Modal.Title style={{ color: "#fff" }}>Contact Me</Modal.Title>
          </Modal.Header>
          <Form onSubmit={onSubmit}>
            <Modal.Body>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput2"
              >
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  autoFocus
                  className={errors.name ? "is-invalid" : ""}
                />
                {errors.name && (
                  <div className="error-message">{errors.name}</div>
                )}
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="name@example.com"
                  className={errors.email ? "is-invalid" : ""}
                />
                {errors.email && (
                  <div className="error-message">{errors.email}</div>
                )}
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={3}
                  placeholder="Enter your message"
                  className={errors.message ? "is-invalid" : ""}
                />
                {errors.message && (
                  <div className="error-message">{errors.message}</div>
                )}
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button type="submit" variant="primary" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </Modal.Footer>
          </Form>
        </div>
      </Modal>
    </>
  );
}

export default Contact;

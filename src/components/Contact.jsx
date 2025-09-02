import React, { useState } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

// ==== STYLES ====
const Section = styled.section`
  background: #0a0120; /* Dark background like screenshot */
  color: white;
  padding: 4rem 2rem;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const SubLine = styled.div`
  width: 60px;
  height: 3px;
  background: #00e5ff;
  margin: 0.5rem auto 3rem auto;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3rem;
  margin-bottom: 3rem;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 250px;
  font-size: 1rem;

  svg {
    font-size: 2rem;
    margin-bottom: 0.5rem;
    color: #00e5ff;
  }

  span {
    display: block;
    margin-top: 0.3rem;
    font-weight: bold;
  }

  a {
    color: #00e5ff;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Form = styled.form`
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.8rem;
  border-radius: 8px;
  border: none;
  outline: none;
  font-size: 1rem;
`;

const Textarea = styled.textarea`
  padding: 0.8rem;
  border-radius: 8px;
  border: none;
  outline: none;
  font-size: 1rem;
  min-height: 120px;
`;

const Button = styled.button`
  background: #00e5ff;
  color: #0a0120;
  padding: 0.9rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #00b8d4;
  }
`;

// ==== COMPONENT ====
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_ixoor1r", // your service ID
        "template_xq9p9od", // your template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "6yvbHfgjHxJ4oyVHd" // your public key
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        () => {
          alert("❌ Failed to send. Try again.");
        }
      );
  };

  return (
    <Section id="contact">
      <Title>Let's Talk</Title>
      <SubLine />

      {/* Contact Info Section */}
      <InfoRow>
        <InfoBox>
          <FaMapMarkerAlt />
          <span>Address</span>
          <p>Minipura, Dumbara, Mahawalawattha</p>
        </InfoBox>
        <InfoBox>
          <FaPhoneAlt />
          <span>WhatsApp</span>
          <a href="tel:+94701451464">+94 70 145 1464</a>
        </InfoBox>
        <InfoBox>
          <FaEnvelope />
          <span>Email</span>
          <a href="mailto:sewchathurika0@gmail.com">
            sewchathurika0@gmail.com
          </a>
        </InfoBox>
      </InfoRow>

      {/* Contact Form */}
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <Button type="submit">Send Message</Button>
      </Form>
    </Section>
  );
};

export default ContactForm;

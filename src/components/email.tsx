import * as React from 'react';
     
interface EmailTemplateProps {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  lastName,
  email,
  phoneNumber,
  message,
}) => (
  <div>
    <h1>Contact Form Submission</h1>
    <p>First Name: {firstName}</p>
    <p>Last Name: {lastName}</p>
    <p>Email: {email}</p>
    <p>Phone Number: {phoneNumber}</p>
    <p>Message: {message}</p>
  </div>
);

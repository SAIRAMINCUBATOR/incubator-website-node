import React from 'react';

function EmailTemplate({ name, email, message }) {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Message:</strong> {message}</p>
      <hr />
      <p style={{ color: '#999', fontSize: '12px' }}>
        This message was sent from the contact form of <a href='https://sairamincubation.com'> Sairam Incubator</a> website.
      </p>
    </div>
  );
}

export default EmailTemplate;

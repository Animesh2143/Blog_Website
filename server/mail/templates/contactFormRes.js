exports.contactUsEmail = (
  email,
  firstname,
  lastname,
  message,
  phoneNo,
  countrycode
) => {
  return `<!DOCTYPE html>
  <html>
  
  <head>
      <meta charset="UTF-8">
      <title>Contact Form Confirmation</title>
      <style>
          body {
              background-color: #f9f9f9;
              font-family: Arial, sans-serif;
              font-size: 16px;
              line-height: 1.6;
              color: #333;
              margin: 0;
              padding: 0;
          }
  
          .container {
              max-width: 600px;
              margin: 30px auto;
              padding: 20px;
              background: #ffffff;
              border-radius: 8px;
              box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
              text-align: center;
          }
  
          .header {
              font-size: 22px;
              font-weight: bold;
              color: #2c3e50;
              margin-bottom: 20px;
          }
  
          .body {
              font-size: 16px;
              text-align: left;
              padding: 10px 20px;
          }
  
          .highlight {
              font-weight: bold;
              color: #e67e22;
          }
  
          .footer {
              font-size: 14px;
              color: #666;
              margin-top: 20px;
              border-top: 1px solid #ddd;
              padding-top: 10px;
          }
  
          .cta {
              display: inline-block;
              padding: 10px 20px;
              background-color: #3498db;
              color: #ffffff;
              text-decoration: none;
              border-radius: 5px;
              font-size: 16px;
              font-weight: bold;
              margin-top: 20px;
          }
  
      </style>
  
  </head>
  
  <body>
      <div class="container">
          <div class="header">Contact Form Confirmation</div>
          <div class="body">
              <p>Dear <span class="highlight">${firstname} ${lastname}</span>,</p>
              <p>Thank you for reaching out to us. We have received your message and will respond as soon as possible.</p>
              <p>Here are the details you provided:</p>
              <p><strong>Name:</strong> ${firstname} ${lastname}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone Number:</strong> ${countrycode} ${phoneNo}</p>
              <p><strong>Message:</strong> ${message}</p>
              <p>We appreciate your time and interest. Our team will get back to you shortly.</p>
          </div>
          <a href="#" class="cta">Visit Our Blog</a>
          <div class="footer">
              If you have any further questions, feel free to contact us at 
              <a href="mailto:kushwaharamji415@gmail.com">kushwaharamji415@gmail.com</a>.  
              <br> We are here to assist you!
          </div>
      </div>
  </body>
  
  </html>`;
};

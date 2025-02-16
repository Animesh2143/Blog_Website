exports.passwordUpdated = (email, name) => {
	return `<!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="UTF-8">
        <title>Password Update Confirmation</title>
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
                padding: 10px 20px;
                text-align: left;
            }
    
            .highlight {
                font-weight: bold;
                color: #e74c3c;
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
                padding: 12px 24px;
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
            <div class="header">Password Update Confirmation</div>
            <div class="body">
                <p>Hey ${name},</p>
                <p>Your password has been successfully updated for the email <span class="highlight">${email}</span>.</p>
                <p>If you did not request this password change, please <strong>contact us immediately</strong> to secure your account.</p>
            </div>
            <a href="#" class="cta">Contact Support</a>
            <div class="footer">
                If you need further assistance, feel free to reach out to us at 
                <a href="mailto:kushwaharamji415@gmail.com">kushwaharamji415@gmail.com</a>.
            </div>
        </div>
    </body>
    
    </html>`;
};

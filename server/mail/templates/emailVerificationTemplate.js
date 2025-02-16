const otpTemplate = (otp) => {
	return `<!DOCTYPE html>
	<html>
	
	<head>
		<meta charset="UTF-8">
		<title>OTP Verification Email</title>
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
				font-size: 24px;
				font-weight: bold;
				color: #e74c3c;
				margin: 10px 0;
				display: inline-block;
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
			<div class="header">OTP Verification Email</div>
			<div class="body">
				<p>Dear User,</p>
				<p>Thank you for registering with us. To complete your registration, please use the following OTP (One-Time Password) to verify your account:</p>
				<span class="highlight">${otp}</span>
				<p>This OTP is valid for **5 minutes**. If you did not request this verification, please ignore this email.</p>
			</div>
			<a href="#" class="cta">Visit Our Website</a>
			<div class="footer">
				If you have any questions, feel free to contact us at 
				<a href="mailto:support@yourblogwebsite.com">support@yourblogwebsite.com</a>.
			</div>
		</div>
	</body>
	
	</html>`;
};

module.exports = otpTemplate;

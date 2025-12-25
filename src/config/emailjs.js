// EmailJS Configuration
// Get these values from https://www.emailjs.com/
// After signing up, go to Email Services, Email Templates, and Account sections

export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY',
  recipientEmail: 'shashankgowdashash1317@gmail.com', // Your email address
}





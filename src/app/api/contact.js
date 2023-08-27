import sgMail from '@sendgrid/mail'

export default async function handler(req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  const { email, message, firstName, lastName } = req.body

  const content = {
    to: 'pipepiperpestcontrol@gmail.com',
    from: email,
    subject: `New Message from ${firstName} ${lastName}`,
    text: message,
    html: `<p><b>From:</b> ${firstName} ${lastName}<br/><b>Message:</b> ${message}</p>`,
  }

  try {
    await sgMail.send(content)
    res.status(200).json({ status: "Ok", message: 'Message sent successfully.' })
  } catch (error) {
    console.log('ERROR', error)
    res.status(400).json({ status: "error", message: 'Error sending message.' })
  }
}


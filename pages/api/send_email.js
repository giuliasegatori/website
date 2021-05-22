import sgMail from '@sendgrid/mail'

export default (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const { name, email, message } = req.body
  const msg = {
    to: 'giulia.segatori@gmail.com', // Change to your recipient
    from: 'lino.sorice@gmail.com', // Change to your verified sender
    subject: 'Hai un nuovo messaggio da giuliasegatori.com',
    html: `
      <div>
        name: ${name} <br />
        email: ${email} <br />
        message: ${message}
      </div>
    `
  }
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
      res.status(200).json({
        status: true
      })
    })
    .catch(error => {
      console.error(error)
      res.status(400).json({
        status: false,
        message: error.message
      })
    })
}

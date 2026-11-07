import { useState, type FormEvent } from 'react'
import { Headset, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import './contacts.css'

const inquiryCategories = [
  { value: 'Support', label: 'Support & General' },
  { value: 'Investment', label: 'Funds & Investment' },
  { value: 'Others', label: 'Others' },
] as const

type InquiryCategory = (typeof inquiryCategories)[number]['value']

export function ContactsPage() {
  const [category, setCategory] = useState<InquiryCategory>('Support')
  const [submitNotice, setSubmitNotice] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const categoryLabel = inquiryCategories.find((item) => item.value === category)?.label
    setSubmitNotice(
      `Your ${categoryLabel} inquiry is ready. This demo site does not send or store messages yet.`,
    )
  }

  return (
    <div className="contacts-page">
      <header className="contacts-heading">
        <p className="contacts-eyebrow">Communication Channels</p>
        <h1>Get in Touch with Our Team</h1>
        <p>Direct support for regional hubs, institutional investors, and community partnerships.</p>
      </header>

      <div className="contacts-layout">
        <aside className="contacts-channel-list" aria-label="Direct contact channels">
          <section className="contact-channel-card">
            <span className="contact-channel-icon contact-channel-icon--support">
              <Headset size={20} aria-hidden="true" />
            </span>
            <h2>Support &amp; Call Lines</h2>
            <p>Contact our team for regional operations and general inquiries.</p>
            <a className="contact-channel-detail" href="tel:+255754892341">
              <Phone size={15} aria-hidden="true" /> +255 754 892 341
            </a>
            <a className="contact-channel-detail" href="mailto:habari@maendeleoasilia.co.tz">
              <Mail size={15} aria-hidden="true" /> habari@maendeleoasilia.co.tz
            </a>
            <p className="contact-address">
              <MapPin size={15} aria-hidden="true" />
              Kilimo Complex, Victoria Area, New Bagamoyo Road, Dar es Salaam, Tanzania
            </p>
          </section>

          <section className="contact-channel-card">
            <span className="contact-channel-icon contact-channel-icon--whatsapp">
              <MessageCircle size={20} aria-hidden="true" />
            </span>
            <h2>Direct Call &amp; WhatsApp</h2>
            <p>Message our team about field operations and farmer partnerships.</p>
            <a
              className="contact-whatsapp-link"
              href="https://wa.me/255754892341"
              target="_blank"
              rel="noreferrer"
            >
              Open WhatsApp Desk <MessageCircle size={14} aria-hidden="true" />
            </a>
          </section>
        </aside>

        <section className="contact-inquiry-card" aria-labelledby="contact-inquiry-title">
          <h2 id="contact-inquiry-title">Send an Official Inquiry</h2>
          <form onSubmit={handleSubmit}>
            <fieldset className="contact-category-fieldset">
              <legend>Select Inquiry Category</legend>
              <div className="contact-category-options">
                {inquiryCategories.map((item) => (
                  <button
                    key={item.value}
                    className={`contact-category-button${category === item.value ? ' is-selected' : ''}`}
                    type="button"
                    aria-pressed={category === item.value}
                    onClick={() => {
                      setCategory(item.value)
                      setSubmitNotice('')
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </fieldset>

            <div className="contact-form-grid">
              <label>
                Your Name *
                <input name="name" autoComplete="name" required placeholder="Full Name" />
              </label>
              <label>
                Email or Phone *
                <input name="contact" autoComplete="email" required placeholder="Contact Info" />
              </label>
            </div>

            <label className="contact-message-field">
              Message *
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Write your inquiry details here..."
              />
            </label>

            <p className="contact-demo-note">
              Messages are not transmitted or stored on this demo site.
            </p>
            {submitNotice && <p className="contact-submit-notice" role="status">{submitNotice}</p>}

            <button className="contact-submit-button" type="submit">Send Message</button>
          </form>
        </section>
      </div>
    </div>
  )
}

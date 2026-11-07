import { useState } from 'react'
import { ArrowRight, BriefcaseBusiness, CalendarDays, Handshake, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { routePaths } from '../../routes/routePaths'
import { jobs } from './jobData'
import './jobs.css'

type DeskMode = 'jobs' | 'farmer'

const crops = ['Sunflower Seeds', 'Cashew Nuts', 'Maize / Corn', 'Sesame Seeds', 'Palm Oil Fruit', 'Others']

export function JobsPage() {
  const [mode, setMode] = useState<DeskMode>('jobs')
  const [farmerNotice, setFarmerNotice] = useState('')

  function handleFarmerSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setFarmerNotice('Demo only: this partnership request was not sent. Farmer intake is not connected yet.')
  }

  return (
    <div className="jobs-page">
      <header className="jobs-page-heading">
        <p className="jobs-eyebrow">Careers &amp; community partnerships</p>
        <h1>Jobs &amp; Farmer Desk</h1>
        <p>Find a role in our regional hubs or connect your farm and cooperative to local manufacturing.</p>
      </header>

      <div className="jobs-mode-switch" role="tablist" aria-label="Choose a desk">
        <button
          id="jobs-mode-tab"
          className={`jobs-mode-button${mode === 'jobs' ? ' is-active' : ''}`}
          type="button"
          role="tab"
          aria-selected={mode === 'jobs'}
          aria-controls="job-seeker-panel"
          onClick={() => setMode('jobs')}
        >
          <BriefcaseBusiness size={17} aria-hidden="true" /> Apply for Jobs
        </button>
        <button
          id="farmer-mode-tab"
          className={`jobs-mode-button${mode === 'farmer' ? ' is-active' : ''}`}
          type="button"
          role="tab"
          aria-selected={mode === 'farmer'}
          aria-controls="farmer-desk-panel"
          onClick={() => setMode('farmer')}
        >
          <Handshake size={17} aria-hidden="true" /> Partner as a Farmer
        </button>
      </div>

      {mode === 'jobs' ? (
        <section id="job-seeker-panel" className="job-seeker-panel" role="tabpanel" aria-labelledby="jobs-mode-tab">
          <div className="jobs-section-heading">
            <p className="jobs-eyebrow">Join our regional hubs</p>
            <h2>Regional Agro-Industrial Careers</h2>
            <p>Join our operating hubs across Tanzania and lead rural industrial manufacturing.</p>
          </div>
          <div className="job-listings">
            {jobs.map((job) => (
              <article className="job-listing-card" key={job.id}>
                <div className="job-listing-info">
                  <p className="job-listing-kicker"><span>{job.hub}</span><span aria-hidden="true">·</span><span>{job.department}</span></p>
                  <h3>{job.title}</h3>
                  <p className="job-listing-summary">{job.summary}</p>
                  <div className="job-listing-meta">
                    <span><BriefcaseBusiness size={14} aria-hidden="true" /> Full-Time</span>
                    <span><CalendarDays size={14} aria-hidden="true" /> Apply by {job.deadline}</span>
                  </div>
                </div>
                <Link className="jobs-primary-button job-listing-link" to={`${routePaths.jobs}/${job.id}`}>
                  Apply for Position <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </section>
      ) : (
        <section id="farmer-desk-panel" className="farmer-desk-panel" role="tabpanel" aria-labelledby="farmer-mode-tab">
          <div className="farmer-partnership-banner">
            <p className="farmer-program-label">Outgrower Program</p>
            <h2>Become a Hub Supply Partner</h2>
            <p>
              We offer guaranteed off-take contracts, fair transparent pricing, quality seeds,
              and technical agronomy support to individual farmers and local cooperatives.
            </p>
          </div>

          <div className="farmer-form-card">
            <div className="farmer-form-heading">
              <div>
                <p className="jobs-eyebrow">Grow with us</p>
                <h2>Farmer Partnership Registration Form</h2>
              </div>
              <span className="farmer-heading-icon"><Handshake size={24} aria-hidden="true" /></span>
            </div>
            <form onSubmit={handleFarmerSubmit}>
              <div className="jobs-form-grid">
                <label>Farmer or Cooperative Name *
                  <input name="organization" required placeholder="e.g. Mwangaza Farmers Cooperative Group" />
                </label>
                <label>Region &amp; District Location *
                  <span className="jobs-input-icon">
                    <MapPin size={16} aria-hidden="true" />
                    <input name="location" required placeholder="e.g. Dodoma - Bahi District" />
                  </span>
                </label>
                <label>Main Crop Harvested *
                  <select name="crop" required defaultValue="">
                    <option value="" disabled>Select Crop Type</option>
                    {crops.map((crop) => <option key={crop}>{crop}</option>)}
                  </select>
                </label>
                <label>Total Acreage / Estimated Annual Output (Tons) *
                  <input name="output" required placeholder="e.g. 15 Acres / 20 Metric Tons" />
                </label>
                <label>Contact Person Name *
                  <input name="contactName" autoComplete="name" required placeholder="e.g. Mary Chalamila" />
                </label>
                <label>Phone Number (WhatsApp) *
                  <input name="phone" type="tel" autoComplete="tel" required placeholder="+255 700 000 000" />
                </label>
              </div>
              <p className="jobs-demo-notice">
                Partnership requests are not transmitted or stored on this demo site.
              </p>
              {farmerNotice && <p className="jobs-submit-notice" role="status">{farmerNotice}</p>}
              <button className="jobs-primary-button farmer-submit-button" type="submit">
                Submit Partnership Request <ArrowRight size={16} aria-hidden="true" />
              </button>
            </form>
          </div>
        </section>
      )}

      <div className="jobs-footer-link">
        <p>Looking for something else?</p>
        <Link to={routePaths.hubs}>Explore our regional hubs <ArrowRight size={15} aria-hidden="true" /></Link>
      </div>
    </div>
  )
}

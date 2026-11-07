import { useState, type ChangeEvent, type FormEvent } from 'react'
import { ArrowLeft, BriefcaseBusiness, CalendarCheck, Check, Clock3, MapPin, Upload, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { routePaths } from '../../routes/routePaths'
import type { Job } from './jobData'

type JobDetailsContentProps = {
  job: Job
  initialFormOpen?: boolean
}

const educationLevels = [
  'University Degree (B.Sc / B.A)',
  'Diploma / Higher Diploma',
  'Vocational / VETA Certificate',
  'Secondary Education (Form 4/6)',
]

export function JobDetailsContent({ job, initialFormOpen = false }: JobDetailsContentProps) {
  const [formOpen, setFormOpen] = useState(initialFormOpen)
  const [resumeName, setResumeName] = useState('')
  const [resumeError, setResumeError] = useState('')
  const [submitNotice, setSubmitNotice] = useState('')

  function handleResumeChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]
    setResumeError('')
    if (!file) {
      setResumeName('')
      return
    }

    const isAllowedType = /\.(pdf|docx)$/i.test(file.name)
    if (!isAllowedType || file.size > 5 * 1024 * 1024) {
      setResumeName('')
      setResumeError('Choose a PDF or DOCX file up to 5 MB.')
      event.target.value = ''
      return
    }

    setResumeName(file.name)
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitNotice('Demo only: this application was not sent. Hiring submissions are not connected yet.')
  }

  return (
    <article className="job-detail-card">
      <Link className="jobs-back-link" to={routePaths.jobs}>
        <ArrowLeft size={16} aria-hidden="true" /> Back to Open Roles
      </Link>

      <header className="job-detail-heading">
        <p>{job.department}</p>
        <h1>{job.title}</h1>
        <div className="job-detail-meta">
          <span><MapPin size={15} aria-hidden="true" />{job.hub}</span>
          <span><Clock3 size={15} aria-hidden="true" />Full-Time</span>
          <span><CalendarCheck size={15} aria-hidden="true" />Deadline: {job.deadline}</span>
        </div>
      </header>

      <div className="job-detail-copy">
        <section>
          <h2>About the Role</h2>
          <p>{job.about}</p>
        </section>
        <section>
          <h2>Key Responsibilities</h2>
          <ul>{job.responsibilities.map((item) => <li key={item}>{item}</li>)}</ul>
        </section>
        <section>
          <h2>Requirements &amp; Qualifications</h2>
          <ul>{job.requirements.map((item) => <li key={item}>{item}</li>)}</ul>
        </section>
        <section>
          <h2>Compensation &amp; Benefits</h2>
          <p>Competitive regional salary, local housing allowance, comprehensive health cover, and performance incentives.</p>
        </section>
      </div>

      {!formOpen ? (
        <section className="job-apply-prompt">
          <h2>Ready to Apply for this Position?</h2>
          <p>Complete the candidate intake form to prepare your application for the regional hub HR team.</p>
          <button className="jobs-primary-button" type="button" onClick={() => setFormOpen(true)}>
            Apply Now <span aria-hidden="true">↓</span>
          </button>
        </section>
      ) : (
        <section className="job-application-form">
          <h2><BriefcaseBusiness size={20} aria-hidden="true" /> Applicant Intake Form</h2>
          <p className="jobs-form-note">Applying for <strong>{job.title}</strong> at {job.hub}.</p>
          <form onSubmit={handleSubmit}>
            <div className="jobs-form-grid">
              <label>Full Name *
                <input name="fullName" autoComplete="name" required placeholder="e.g. Juma Rashid Bakari" />
              </label>
              <label>Phone Number (WhatsApp) *
                <input name="phone" type="tel" autoComplete="tel" required placeholder="+255 700 000 000" />
              </label>
              <label>Email Address *
                <input name="email" type="email" autoComplete="email" required placeholder="candidate@example.co.tz" />
              </label>
              <label>Highest Education Level *
                <select name="education" required defaultValue="">
                  <option value="" disabled>Select Qualification</option>
                  {educationLevels.map((level) => <option key={level}>{level}</option>)}
                </select>
              </label>
            </div>
            <label>Cover Letter / Statement of Interest *
              <textarea
                name="coverLetter"
                required
                rows={4}
                placeholder="Briefly introduce yourself and why you want to work at this hub..."
              />
            </label>
            <label className="jobs-upload">
              Resume / Qualifications Summary <span>(optional, PDF or DOCX up to 5 MB)</span>
              <span className="jobs-upload-box">
                <Upload size={23} aria-hidden="true" />
                <span>{resumeName || 'Choose a resume file'}</span>
                <input
                  type="file"
                  name="resume"
                  accept=".pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  onChange={handleResumeChange}
                />
              </span>
              {resumeError && <span className="jobs-field-error" role="alert">{resumeError}</span>}
            </label>
            <p className="jobs-demo-notice" role="status" aria-live="polite">
              Applications are not transmitted or stored on this demo site.
            </p>
            {submitNotice && <p className="jobs-submit-notice" role="status">{submitNotice}</p>}
            <div className="jobs-form-actions">
              <button className="jobs-cancel-button" type="button" onClick={() => setFormOpen(false)}>
                <X size={15} aria-hidden="true" /> Cancel
              </button>
              <button className="jobs-primary-button" type="submit">
                <Check size={16} aria-hidden="true" /> Submit Application
              </button>
            </div>
          </form>
        </section>
      )}
    </article>
  )
}

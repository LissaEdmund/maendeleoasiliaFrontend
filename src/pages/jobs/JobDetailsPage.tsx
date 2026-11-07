import { Link, useParams } from 'react-router-dom'
import { routePaths } from '../../routes/routePaths'
import { JobDetailsContent } from './JobDetailsContent'
import { jobs } from './jobData'
import './jobs.css'

export function JobDetailsPage() {
  const { id } = useParams()
  const job = jobs.find((item) => item.id === id)

  if (!job) {
    return (
      <div className="jobs-page">
        <section className="jobs-empty-state">
          <h1>Position not found</h1>
          <p>This role may have closed or is no longer available.</p>
          <Link to={routePaths.jobs}>Browse open roles</Link>
        </section>
      </div>
    )
  }

  return <div className="jobs-page"><JobDetailsContent job={job} /></div>
}

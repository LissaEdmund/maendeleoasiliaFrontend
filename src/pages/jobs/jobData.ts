export type Job = {
  id: string
  title: string
  hub: string
  department: string
  summary: string
  deadline: string
  about: string
  responsibilities: string[]
  requirements: string[]
}

export const jobs: Job[] = [
  {
    id: 'plant-supervisor',
    title: 'Plant Operations Supervisor',
    hub: 'Dodoma Central Hub',
    department: 'Operations & Logistics',
    summary: 'Lead oilseed refinery crushing operations, maintenance schedules, and shift personnel in Dodoma.',
    deadline: 'Nov 30, 2026',
    about:
      'As the Plant Operations Supervisor at our Dodoma Central Hub, you will be responsible for overseeing continuous mechanical oilseed crushing, solvent extraction, and edible oil refining operations.',
    responsibilities: [
      'Manage daily processing throughput targets (up to 120 Metric Tons/Day).',
      'Enforce strict workplace safety, industrial hygiene, and equipment maintenance protocols.',
      'Collaborate with quality control chemists to maintain TBS certification standards for refined edible oils.',
      'Lead shift workforce scheduling, skills training, and performance evaluations.',
    ],
    requirements: [
      'B.Sc or Higher Diploma in Mechanical Engineering, Chemical Processing, or Agro-Industrial Technology.',
      'Minimum of 3 years hands-on experience in industrial milling or refining plants.',
      'Fluent in Swahili and English.',
    ],
  },
  {
    id: 'quality-chemist',
    title: 'Chief Quality Control Chemist',
    hub: 'Mtwara Agro Hub',
    department: 'Quality Assurance',
    summary: 'Oversee laboratory testing for cashew processing standards, moisture levels, and TBS compliance.',
    deadline: 'Dec 15, 2026',
    about:
      'Lead laboratory inspection, batch testing, moisture profiling, and ISO/TBS certification protocols for processed cashew nuts and sesame oil at the Mtwara facility.',
    responsibilities: [
      'Conduct chemical and microbiological testing on incoming raw crops and refined consumer products.',
      'Maintain batch traceability records and compliance logs.',
      'Calibrate lab testing equipment and train junior lab technicians.',
    ],
    requirements: [
      'B.Sc in Industrial Chemistry, Food Science, or Biochemistry.',
      '2+ years experience in a certified food manufacturing laboratory.',
    ],
  },
  {
    id: 'agronomy-lead',
    title: 'Regional Agronomy Field Lead',
    hub: 'Morogoro Hub',
    department: 'Agronomy & Farmer Intake',
    summary: 'Manage cooperative outgrower programs, seed distribution, and harvest yield collection across Kilombero.',
    deadline: 'Dec 05, 2026',
    about:
      'Direct outgrower extension services, coordinate seed and input distribution, and manage cooperative crop intake schedules across Kilombero district.',
    responsibilities: [
      'Conduct field training for partner smallholder farmers on yield optimization.',
      'Manage harvest grading and fair-price weight verification at regional collection points.',
      'Oversee cooperative registration and contract execution.',
    ],
    requirements: [
      'Degree in Agronomy, Agricultural Extension, or Crop Science.',
      'Valid motorcycle driving license and field experience.',
    ],
  },
]

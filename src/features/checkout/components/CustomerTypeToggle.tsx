import type { CustomerType } from '../types/checkout'
export function CustomerTypeToggle({ value, onChange }: { value: CustomerType; onChange: (value: CustomerType) => void }) {
  return <div className="customer-toggle" role="group" aria-label="Customer type">{(['b2c', 'b2b'] as const).map((type) => <button key={type} type="button" aria-pressed={value === type} className={value === type ? 'selected' : ''} onClick={() => onChange(type)}>{type.toUpperCase()} {type === 'b2c' ? 'Personal' : 'Business'}</button>)}</div>
}

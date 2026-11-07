import { useId, useState, type ReactNode } from 'react'
import { Search, SlidersHorizontal } from 'lucide-react'
import './filterBar.css'

export type FilterBarOption = {
  label: string
  value: string
}

export type FilterBarSelect = {
  id: string
  label: string
  value: string
  options: FilterBarOption[]
  onChange: (value: string) => void
  icon?: ReactNode
  prefix?: string
}

export type FilterBarChoiceGroup = {
  id: string
  label: string
  value: string
  options: FilterBarOption[]
  onChange: (value: string) => void
}

export type FilterBarToggle = {
  id: string
  label: string
  checked: boolean
  onChange: (checked: boolean) => void
}

export type FilterBarProps = {
  ariaLabel: string
  className?: string
  search?: {
    label: string
    value: string
    placeholder?: string
    onChange: (value: string) => void
  }
  selects?: FilterBarSelect[]
  choiceGroups?: FilterBarChoiceGroup[]
  toggles?: FilterBarToggle[]
  onClear?: () => void
  clearLabel?: string
}

export function FilterBar({
  ariaLabel,
  className,
  search,
  selects = [],
  choiceGroups = [],
  toggles = [],
  onClear,
  clearLabel = 'Clear filters',
}: FilterBarProps) {
  const [filtersOpen, setFiltersOpen] = useState(false)
  const filterPanelId = useId()
  const hasFilters = choiceGroups.length > 0 || toggles.length > 0
  const classNames = ['shared-filter-bar', className].filter(Boolean).join(' ')

  return (
    <section className={classNames} aria-label={ariaLabel}>
      {search && (
        <label className="shared-filter-search">
          <Search size={18} aria-hidden="true" />
          <span className="sr-only">{search.label}</span>
          <input
            type="search"
            value={search.value}
            onChange={(event) => search.onChange(event.target.value)}
            placeholder={search.placeholder}
          />
        </label>
      )}

      {selects.map((select) => (
        <label className="shared-filter-select" key={select.id}>
          {select.icon}
          <span className="sr-only">{select.label}</span>
          {select.prefix && <span className="shared-filter-prefix" aria-hidden="true">{select.prefix}</span>}
          <select value={select.value} onChange={(event) => select.onChange(event.target.value)}>
            {select.options.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </label>
      ))}

      {hasFilters && (
        <div className="shared-filter-wrap">
          <button
            className={`shared-filter-button${filtersOpen ? ' is-active' : ''}`}
            type="button"
            aria-expanded={filtersOpen}
            aria-controls={filterPanelId}
            aria-label="Open filters"
            onClick={() => setFiltersOpen((open) => !open)}
          >
            <SlidersHorizontal size={17} aria-hidden="true" />
          </button>
          {filtersOpen && (
            <div className="shared-filter-panel" id={filterPanelId}>
              {choiceGroups.map((group) => (
                <fieldset key={group.id}>
                  <legend>{group.label}</legend>
                  {group.options.map((option) => (
                    <label key={option.value}>
                      <input
                        type="radio"
                        name={group.id}
                        value={option.value}
                        checked={group.value === option.value}
                        onChange={() => group.onChange(option.value)}
                      />
                      {option.label}
                    </label>
                  ))}
                </fieldset>
              ))}
              {toggles.map((toggle) => (
                <label className="shared-filter-toggle" key={toggle.id}>
                  <input
                    type="checkbox"
                    checked={toggle.checked}
                    onChange={(event) => toggle.onChange(event.target.checked)}
                  />
                  {toggle.label}
                </label>
              ))}
              {onClear && (
                <button className="shared-filter-clear" type="button" onClick={onClear}>
                  {clearLabel}
                </button>
              )}
            </div>
          )}
        </div>
      )}
    </section>
  )
}

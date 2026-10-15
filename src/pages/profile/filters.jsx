import { Button } from '@atoms/button'
import styles from '@style'

// Tour steps shared by the Creations, Collection and Collabs tabs.
export const FILTERS_TEXT =
  'Show all, only OBJKTs for sale on the primary market (by the artist) or secondary market (by collectors), or those not for sale.'
export const VIEW_MODE_STEP = {
  target: 'view-mode',
  text: 'Switch between one OBJKT at a time and a grid.',
  align: 'right',
}

function FilterButton({ type, children, count, isActive, onClick }) {
  return (
    <Button
      onClick={() => {
        onClick(type)
      }}
    >
      <div
        className={styles.tag}
        style={{ textDecoration: isActive ? 'underline' : 'none' }}
      >
        {children}
        {count !== undefined && (
          <span style={{ marginLeft: '0.4em', opacity: 0.6 }}>{count}</span>
        )}
      </div>
    </Button>
  )
}

// `filterTokens(tokens, type)` is the page's own filter, so counts match the grid.
export default function Filters({
  onChange,
  filter,
  items = [],
  tokens,
  filterTokens,
}) {
  return (
    <div data-tour="filters" className={styles.filters}>
      {items.map(({ type, label }) => (
        <FilterButton
          key={type}
          type={type}
          onClick={onChange}
          isActive={filter === type}
          count={tokens && filterTokens(tokens, type).length}
          children={label}
        />
      ))}
    </div>
  )
}

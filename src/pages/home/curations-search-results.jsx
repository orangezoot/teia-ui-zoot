import { Loading } from '@atoms/loading'
import { useCurationSearch } from '@data/curations'
import CurationGrid from '@pages/curations/CurationGrid'
import styles from '@style'

/**
 * Curations tab of the search page: the curations page's search, matched
 * against `term` and shown with the same cards.
 */
export default function CurationsSearchResults({ term }) {
  const { results, error, isLoading, progress } = useCurationSearch(term)

  if (error) {
    return <p role="alert">Could not search curations: {error.message}</p>
  }
  if (isLoading) {
    return (
      <Loading
        message={`Searching curations… (${progress.loaded}/${progress.total})`}
      />
    )
  }
  if (!results.length) {
    return (
      <div className={styles.empty_section}>
        <h1>no results</h1>
      </div>
    )
  }
  return <CurationGrid curations={results} />
}

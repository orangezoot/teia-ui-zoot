import { useState, useEffect } from 'react'
import { Page, Container } from '@atoms/layout'
import { Button } from '@atoms/button'
import { Input } from '@atoms/input'
import { Loading } from '@atoms/loading'
import { PATH } from '@constants'
import {
  useCurationsInfinite,
  useCurationSearch,
  useCurationRoles,
} from '@data/curations'
import { useUserStore } from '@context/userStore'
import Tour, { TourLink } from '@components/tour'
import CurationGrid from './CurationGrid'
import MigrationNotice from './MigrationNotice'
import styles from '@style'

const CURATIONS_TOUR = [
  {
    target: 'curations-new',
    text: 'Make your own curation: a hand-picked set of OBJKTs with a title and cover.',
  },
  {
    target: 'curations-search',
    text: 'Search curations by title, tag or artist.',
  },
  {
    target: 'curations-sort',
    text: 'Show the latest curations first, or the oldest.',
  },
  {
    target: 'curations-card',
    text: 'Open a curation to browse its OBJKTs. Curations with music can also be played as a playlist.',
  },
]

export default function CurationsHome() {
  const [order, setOrder] = useState('desc')
  const [query, setQuery] = useState('')
  const [debounced, setDebounced] = useState('')
  useEffect(() => {
    const t = setTimeout(() => setDebounced(query.trim()), 300)
    return () => clearTimeout(t)
  }, [query])

  const searching = debounced.length > 0
  const browse = useCurationsInfinite(order)
  const search = useCurationSearch(debounced, order)

  const address = useUserStore((st) => st.address)
  const { data: roles } = useCurationRoles(address)

  return (
    <Page title="Curations">
      <Tour name="curations" steps={CURATIONS_TOUR} />
      <Container>
        <div className={styles.header}>
          <h1>
            Curations <TourLink name="curations" title="How curations work" />
          </h1>
          {roles?.canCreate && (
            <Button
              shadow_box
              to={`${PATH.CURATIONS}/create`}
              data-tour="curations-new"
            >
              New curation
            </Button>
          )}
        </div>

        <MigrationNotice address={address} />

        <div className={styles.toolbar}>
          <div data-tour="curations-search">
            <Input
              type="text"
              placeholder="Search title, tag, artist…"
              value={query}
              onChange={(v) =>
                setQuery(typeof v === 'string' ? v : v?.target?.value || '')
              }
            />
          </div>
          <div
            className={styles.seg}
            role="group"
            aria-label="Sort order"
            data-tour="curations-sort"
          >
            <button
              type="button"
              className={`${styles.seg_btn} ${
                order === 'desc' ? styles.seg_btn_active : ''
              }`}
              aria-pressed={order === 'desc'}
              onClick={() => setOrder('desc')}
            >
              Latest
            </button>
            <button
              type="button"
              className={`${styles.seg_btn} ${
                order === 'asc' ? styles.seg_btn_active : ''
              }`}
              aria-pressed={order === 'asc'}
              onClick={() => setOrder('asc')}
            >
              Oldest
            </button>
          </div>
        </div>

        {searching ? (
          search.error ? (
            <p className={styles.empty}>Could not search curations.</p>
          ) : search.isLoading ? (
            <Loading
              message={`Searching… (${search.progress.loaded}/${search.progress.total})`}
            />
          ) : (
            <CurationGrid
              curations={search.results}
              emptyMessage={`No curations match “${debounced}”.`}
            />
          )
        ) : (
          <>
            {browse.error && (
              <p className={styles.empty}>Could not load curations.</p>
            )}
            {browse.isLoadingInitial && !browse.error && (
              <Loading message="Loading curations" />
            )}
            {!browse.isLoadingInitial && !browse.error && (
              <>
                <CurationGrid
                  curations={browse.curations}
                  emptyMessage="No curations yet."
                />
                {browse.curations.length > 0 && !browse.reachedEnd && (
                  <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                    <Button
                      shadow_box
                      onClick={browse.loadMore}
                      disabled={browse.isLoadingMore}
                    >
                      {browse.isLoadingMore ? 'Loading…' : 'Load more'}
                    </Button>
                  </div>
                )}
              </>
            )}
          </>
        )}
      </Container>
    </Page>
  )
}

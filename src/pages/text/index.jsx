import { Outlet } from 'react-router-dom'
import { Page } from '@atoms/layout'
import { Tabs } from '@atoms/tab'
import { useUserStore } from '@context/userStore'
import Tour, { TourLink } from '@components/tour'
import styles from '@style'

// Post steps show on the lists; form steps only on the New Post tab.
const TEXT_TOUR = [
  {
    target: 'text-tabs',
    text: "Community shows everyone's text posts and Bulletin shows official Teia posts. Sync your wallet to see Your Posts and write a New Post.",
  },
  {
    target: 'text-post',
    text: 'Each post is an OBJKT. Click it to read the whole post and collect it, or click the author to see their profile.',
  },
  {
    target: 'text-title',
    text: 'Give your post a title. This is optional.',
  },
  {
    target: 'text-content',
    text: 'Write in Markdown, with a live preview beside it. The "Embed Teia Token" button in the toolbar adds an OBJKT to your post. Drafts save as you type.',
  },
  {
    target: 'text-tags',
    text: 'Tags help people find your post. The "text" tag is added for you.',
  },
  {
    target: 'text-editions',
    text: 'How many editions to mint, and the royalty you get on resales.',
  },
  {
    target: 'text-license',
    text: 'The license people can use your post under.',
  },
  {
    target: 'text-mint',
    text: 'Mint the post on Tezos. Your wallet will ask you to confirm.',
  },
]

const TABS = [
  { title: 'Community', to: '' },
  { title: 'Bulletin', to: 'bulletin' },
  { title: 'Your Posts', to: 'yourposts', private: true },
  { title: 'New Post', to: 'newpost', private: true },
]

export default function Text() {
  const address = useUserStore((st) => st.address)

  return (
    <Page title="Teia Text">
      <Tour name="text" steps={TEXT_TOUR} />
      <div className={styles.container}>
        <h1 className={styles.headline}>
          Text <TourLink name="text" title="How text posts work" />
        </h1>
        <Tabs
          tabs={TABS}
          tourTarget="text-tabs"
          filter={(tab) => {
            if (!address && tab.private) return null
            return tab
          }}
        />
        <div className={styles.tab_content}>
          <Outlet />
        </div>
      </div>
    </Page>
  )
}

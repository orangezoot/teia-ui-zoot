/* eslint-disable no-control-regex */
/* eslint-disable react-hooks/exhaustive-deps */
import { Page } from '@atoms/layout'
import { Checkbox, Input } from '@atoms/input'
import styles from '@style'
import { rpc_nodes, useLocalSettings } from '@context/localSettingsStore'
import { FEED_LIST } from '@constants'
import { Select, ThemeSelection } from '@atoms/select'
import { Line } from '@atoms/line'
import { useEffect, useState } from 'react'
import { BANNER_URL } from '@constants'
import JSON5 from 'json5'
import Tour, { TourLink } from '@components/tour'

const SETTINGS_TOUR = [
  {
    target: 'settings-feed',
    text: 'Choose whether NSFW and photosensitive OBJKTs show on feeds, and which feed the home page opens on.',
  },
  {
    target: 'settings-theme',
    text: 'Switch between light, dark and the other themes.',
  },
  {
    target: 'settings-rpc',
    text: 'The Tezos node Teia talks to. Try another one if transactions are slow or failing.',
  },
  {
    target: 'settings-fool',
    text: 'Brings back the tilted look from the 2023 April Fools joke.',
  },
  {
    target: 'settings-thumbnails',
    text: 'Load small thumbnails instead of full-size images from IPFS. Keep this on for faster pages.',
  },
  {
    target: 'settings-messages',
    text: 'Show or hide unread dots on your channel and DM lists.',
  },
  {
    target: 'settings-baker',
    text: 'Show the baker an artist delegates to, on their profile and on their token pages.',
  },
]

export const Settings = () => {
  const [bannerEnabled, setBannerEnabled] = useState(false)
  useEffect(() => {
    async function getBanner() {
      const config_response = await fetch(`${BANNER_URL}/banner_config.json`)
      const config_text = await config_response.text()
      const config_parsed = JSON5.parse(config_text)
      setBannerEnabled(config_parsed.enable === 1)
    }
    try {
      getBanner()
    } catch (e) {
      console.error(e)
    }
  }, [])

  const [
    nsfwFriendly,
    setNsfwFriendly,
    photosensitiveFriendly,
    setPhotosensitiveFriendly,
    startFeed,
    setStartFeed,
    rpcNode,
    setRpcNode,
    customRpcNode,
    setCustomRpcNode,
    tilted,
    setTilted,
    imgproxy,
    setImgproxy,
    has_seen_banner,
    setHasSeenBanner,
    messageNotifications,
    setMessageNotifications,
    showBakerOnProfile,
    setShowBakerOnProfile,
    showBakerOnToken,
    setShowBakerOnToken,
  ] = useLocalSettings((st) => [
    st.nsfwFriendly,
    st.setNsfwFriendly,
    st.photosensitiveFriendly,
    st.setPhotosensitiveFriendly,
    st.startFeed,
    st.setStartFeed,
    st.rpcNode,
    st.setRpcNode,
    st.customRpcNode,
    st.setCustomRpcNode,
    st.tilted,
    st.setTilted,
    st.imgproxy,
    st.setImgproxy,
    st.has_seen_banner,
    st.setHasSeenBanner,
    st.messageNotifications,
    st.setMessageNotifications,
    st.showBakerOnProfile,
    st.setShowBakerOnProfile,
    st.showBakerOnToken,
    st.setShowBakerOnToken,
  ])

  return (
    <Page>
      <Tour name="settings" steps={SETTINGS_TOUR} />
      <div className={styles.info}>
        <h1>
          Local Settings{' '}
          <TourLink name="settings" title="How these settings work" />
        </h1>
        <p>
          Those settings are non portable and only stored in your current
          browser cache.
        </p>
        <Line className={styles.title_line} />
      </div>
      <div className={styles.localSettings}>
        <div className={styles.fields}>
          <div className={styles.tour_group} data-tour="settings-feed">
            <p>
              <strong>Feed preferences</strong>
            </p>
            <Checkbox
              alt={`click to ${
                nsfwFriendly ? 'disable' : 'enable'
              } the blurring of NSFW tokens on feeds`}
              checked={nsfwFriendly}
              onCheck={setNsfwFriendly}
              label={'Allow NSFW on feeds'}
            />
            <Checkbox
              alt={`click to ${
                photosensitiveFriendly ? 'disable' : 'enable'
              } the blurring of photosensitive tokens on feeds`}
              checked={photosensitiveFriendly}
              onCheck={setPhotosensitiveFriendly}
              label={'Allow Photosensitive on feeds'}
            />
            <Select
              label={'Start Feed'}
              value={{
                label: startFeed.replace(/[^\x00-\xFF]/g, ''),
                value: startFeed,
              }}
              options={FEED_LIST.map((f) => ({
                label: f.replace(/[^\x00-\xFF]/g, ''),
                value: f,
              }))}
              onChange={(e) => {
                setStartFeed(e.value)
              }}
            />
          </div>

          <Line />
          <div className={styles.tour_group} data-tour="settings-theme">
            <ThemeSelection label={'Theme'} />
          </div>
          <Line />

          <div className={styles.tour_group} data-tour="settings-rpc">
            <Select
              label={'RPC Node'}
              value={{ label: rpcNode, value: rpcNode }}
              options={rpc_nodes.map((e) => ({ label: e, value: e }))}
              onChange={(e) => {
                setRpcNode(e.value)
              }}
            />
            {rpcNode === 'custom' && (
              <Input
                name="custom-rpc"
                value={customRpcNode}
                onChange={setCustomRpcNode}
                placeholder="url to a RPC node"
                label="Custom RPC node"
                // pattern={'^(?:https?|http):\\/\\/[^\\s\\/$.?#].[^\\s]*$'}
              />
            )}
          </div>
          <Line />
          <div className={styles.tour_group} data-tour="settings-fool">
            <Checkbox
              alt={`click to ${
                tilted ? 'disable' : 'enable'
              } fool around (a throwback of the 2023 april fool)`}
              title={`click to ${
                tilted ? 'disable' : 'enable'
              } fool around (a throwback of the 2023 april fool)`}
              checked={tilted}
              onCheck={setTilted}
              className="no-fool"
              label={'Fool Around'}
            />
          </div>
          <Line />
          <div className={styles.tour_group} data-tour="settings-thumbnails">
            <Checkbox
              alt={`click to ${
                imgproxy ? 'disable' : 'enable'
              } imgproxy thumbnails. Not using imgproxy will load fullsize images from ipfs directly instead (performance penalty)`}
              title={`click to ${
                imgproxy ? 'disable' : 'enable'
              } imgproxy thumbnails. Not using imgproxy will load fullsize images from ipfs directly instead (performance penalty)`}
              checked={imgproxy}
              onCheck={setImgproxy}
              initial={true}
              label={'Use thumbnails to increase performance'}
            />
          </div>
          <Line />
          <div className={styles.tour_group} data-tour="settings-messages">
            <p>
              <strong>Messages</strong>
            </p>
            <Checkbox
              alt={`click to ${
                messageNotifications ? 'disable' : 'enable'
              } unread indicators on channel and DM lists`}
              checked={messageNotifications}
              onCheck={setMessageNotifications}
              label={'Show unread message indicators'}
            />
          </div>
          <Line />
          <div className={styles.tour_group} data-tour="settings-baker">
            <p>
              <strong>Baker</strong>
            </p>
            <Checkbox
              alt={`click to ${
                showBakerOnProfile ? 'hide' : 'show'
              } the baker a user delegates to on their profile`}
              checked={showBakerOnProfile}
              onCheck={setShowBakerOnProfile}
              label={'Show baker on profiles'}
            />
            <Checkbox
              alt={`click to ${
                showBakerOnToken ? 'hide' : 'show'
              } the baker tab on token pages`}
              checked={showBakerOnToken}
              onCheck={setShowBakerOnToken}
              label={"Show the artist's baker tab on token pages"}
            />
          </div>
          {bannerEnabled && (
            <Checkbox
              alt={`click to ${
                setHasSeenBanner ? 'disable' : 'enable'
              } last event banner (this is automatically reset for you on new announcements)`}
              title={`click to ${
                setHasSeenBanner ? 'disable' : 'enable'
              } last event banner (this is automatically reset for you on new announcements)`}
              checked={has_seen_banner}
              onCheck={setHasSeenBanner}
              label={'Hide banner for last announcement'}
            />
          )}
        </div>
      </div>
    </Page>
  )
}

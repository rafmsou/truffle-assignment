import find from 'lodash/find';

function findMediaInAsset(asset) {
  return find(
    asset['video_asset']['mp4_renditions'],
    item => item['width'] === 1280 && item['height'] === 720
  )
}

function findAssetTypeInAssets(assets, type) {
  return find(
    assets,
    item => item['is_primary'] && item['slot_type'] === type
  )
}

export class Content {
  id = 0
  title = ''
  description = ''
  createdAt = ''
  slug = ''
  backgroundImage = ''
  playbackUrl = ''
  playbackDuration = 0

  constructor(jsonData) {
    this.id = jsonData['id']
    this.title = jsonData['title']
    this.description = this.parseDescription(jsonData['description'])
    this.createdAt = new Date(jsonData['created_date'])
    this.slug = jsonData['slug']
    this.backgroundImage = this.parseBackgroundImage(jsonData['associated_assets'])
    const [playbackUrl, playbackDuration] = this.parsePlaybackData(jsonData['associated_video_assets'])
    this.playbackUrl = playbackUrl
    this.playbackDuration = playbackDuration
  }

  parseDescription(description) {
    if (!description || description.trim() === '') {
      return 'No description.'
    }

    return description
  }

  parseBackgroundImage(assetsJson) {
    const thumbnail = find(
      assetsJson,
      item => item['is_primary'] && item['slot_type'] === 'landscape_thumbnail_asset'
    )

    if (thumbnail) {
      return thumbnail.asset.url
    }

    return '';
  }

  parsePlaybackData(associatedVideoAssets) {
    const videoAsset = findAssetTypeInAssets(associatedVideoAssets, 'landscape_asset_video_asset')

    if (videoAsset) {
      const sample = findMediaInAsset(videoAsset)
      if (sample) {
        return [sample.url, videoAsset['video_asset']['duration']]
      }
    }

    const videoAssetFallback = findAssetTypeInAssets(associatedVideoAssets, 'square_asset_video_asset')

    if (videoAssetFallback) {
      const sample = findMediaInAsset(videoAssetFallback)
      if (sample) {
        return [sample.url, videoAssetFallback['video_asset']['duration']]
      }
    }
    return ['', 0];
  }
}

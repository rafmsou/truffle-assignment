import find from 'lodash/find'

function imageTypeForPlatform() {
  if (window.isMobile.any) {
    return 'portrait_thumbnail_asset'
  }
  return 'landscape_thumbnail_asset'
}

function videoTypeForPlatform() {
  if (window.isMobile.any) {
    return 'portrait_asset_video_asset'
  }
  return 'landscape_asset_video_asset'
}

function findMediaInAsset(asset) {
  const mediaType = asset['slot_type']

  //define height and width based content type
  let height, width
  if (mediaType.includes('landscape') || mediaType.includes('square')) {
    height = 720
    width = 1280
  } else {
    height = 1280
    width = 720
  }

  return find(
    asset['video_asset']['mp4_renditions'],
    item => item['width'] === width && item['height'] === height
  )
}

function findAssetTypeInAssets(assets, type) {
  return find(
    assets,
    item => item['slot_type'] === type
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
      item => item['slot_type'] === imageTypeForPlatform()
    )

    if (thumbnail) {
      return thumbnail.asset.url
    }

    // try to fallback a squared image
    const fallback = find(
      assetsJson,
      item => item['slot_type'] === 'square_thumbnail_asset'
    )

    if (fallback) {
      return fallback.asset.url
    }

    return ''
  }

  parsePlaybackData(associatedVideoAssets) {
    const videoAsset = findAssetTypeInAssets(associatedVideoAssets, videoTypeForPlatform())

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
    return ['', 0]
  }
}

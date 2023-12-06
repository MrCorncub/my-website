/* eslint react/no-unknown-property: 0 */
/* eslint react/prefer-stateless-function: 0 */

/**
 * Spotify player iframe widget
 *
 * @author Alexander Wallin <office@alexanderwallin.com>
 * @see https://developer.spotify.com/technologies/widgets/spotify-play-button/
 * import SpotifyPlayer from "./SpotifyPlayer";
 */

import * as React from "react"

// Size presets, defined by Spotify
const sizePresets = {
  normal: {
    width: `100%`,
    height: `352px`,
  },
  compact: {
    width: `100%`,
    height: `152px`,
  },
}

function SpotifyPlayer({ albumUri = `6Ar5HxNWXtvraqs7FI7bYq`, size = `normal` }) {
  return (
    <iframe
      title="Spotify"
      style={{
        borderRadius: `12px`,
      }}
      src={`https://open.spotify.com/embed/album/${albumUri}?theme=0`}
      width={sizePresets[size].width}
      height={sizePresets[size].height}
      frameBorder="0"
      allowfullscreen=""
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    />
  )
}

export default SpotifyPlayer
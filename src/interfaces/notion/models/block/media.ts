import { UUID, NotionSecureUrl, PublicUrl } from "../common"
import { EmptyBlock } from "./empty_block"
import { BlockFormat } from "./block_format"
import { SemanticString } from "../semantic_string"

export interface Image extends EmptyBlock {
  type: "image"
  format?: BlockFormat
  properties?: {
    /** 
     * Normally, the same as `display_source` in {@link BlockFormat}.
     * When they are different, use `display_source`.
     */
    source?: [[NotionSecureUrl | PublicUrl]]
    caption?: SemanticString[]
  }
  /**  Defined if the user uploaded an image. */
  file_ids?: UUID[]
}

export interface Video extends EmptyBlock {
  type: "video"
  format?: BlockFormat
  properties?: {
    /** 
     * Normally, the same as `display_source` in {@link BlockFormat}.
     * When they are different, use `display_source`.
     */
    source?: [[NotionSecureUrl | PublicUrl]]
    caption?: SemanticString[]
  }
  /**  Defined if the user uploaded a video. */
  file_ids?: UUID[]
}

export interface Audio extends EmptyBlock {
  type: "audio"
  format?: BlockFormat
  properties?: {
    source: [[NotionSecureUrl | PublicUrl]]
  }
  /**  Defined if the user uploaded an audio file. */
  file_ids?: UUID[]
}

export interface Bookmark extends EmptyBlock {
  type: "bookmark"
  format?: BlockFormat
  properties?: {
    /** Link of the bookmarked web page. */
    link: [[string]]
    /** Title of the bookmarked web page, auto detected. */
    title?: [[string]]
    /** Description of the bookmarked web page, auto detected. */
    description?: [[string]]
  }
}

export interface Code extends EmptyBlock {
  type: "code"
  format?: BlockFormat
  properties?: {
    /** Code content. */
    title?: [[string]]
    language?: [[string]]
  }
}

export interface File extends EmptyBlock {
  type: "file"
  properties?: {
    /** Filename. */
    title: [[string]]
    /** URL of the file. */
    source: [[NotionSecureUrl | PublicUrl]]
    /** File size, defined if the user uploaded a file. */
    size?: [[string]]
  }
  /**  Defined if the user uploaded a file. */
  file_ids?: UUID[]
}

export type MediaBlock = Image | Video | Audio | Bookmark | Code | File
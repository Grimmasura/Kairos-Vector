
import dynamic from 'next/dynamic'
const GlyphEngine = dynamic(() => import('../components/GlyphEngine'), { ssr: false })

export default function GlyphPage() {
  return <GlyphEngine />
}

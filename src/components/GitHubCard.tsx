import { useState, useEffect } from 'react'
import { BookMarked, Star } from 'lucide-react'

const CARD_COLORS = [
  'bg-[#a855f7]',
  'bg-[#22c55e]',
  'bg-[#ec4899]',
  'bg-[#06b6d4]',
]

interface GitHubCardProps {
  repoUrl: string
  description: string
  index: number
}

function parseRepo(url: string): { owner: string; repo: string } | null {
  const m = url.match(/github\.com\/([^/]+)\/([^/]+)/)
  return m ? { owner: m[1], repo: m[2] } : null
}

export default function GitHubCard({ repoUrl, description, index }: GitHubCardProps) {
  const parsed = parseRepo(repoUrl)
  const [stars, setStars] = useState(0)

  useEffect(() => {
    if (!parsed) return
    fetch(`https://api.github.com/repos/${parsed.owner}/${parsed.repo}`)
      .then((r) => r.json())
      .then((d) => setStars(d.stargazers_count ?? 0))
      .catch(() => {})
  }, [repoUrl])

  if (!parsed) return null

  return (
    <div className={`${CARD_COLORS[index % CARD_COLORS.length]} p-3`}>
      <div className="bg-white rounded-xl p-4 shadow-sm flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 min-w-0">
            <BookMarked className="size-3.5 shrink-0 text-black" />
            <span className="text-xs text-black shrink-0">{parsed.owner} /</span>
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-xs font-medium text-black hover:underline truncate"
            >
              {parsed.repo}
            </a>
          </div>
          <div className="flex items-center gap-1 shrink-0 ml-2 text-black">
            <span className="text-xs font-semibold">{stars}</span>
            <Star className="size-3.5 fill-current" />
          </div>
        </div>

        <p className="text-xs text-black leading-relaxed line-clamp-3">
          {description}
        </p>

        <div className="flex items-center justify-end gap-2">
          <img
            src="https://avatars.githubusercontent.com/u/192629191?v=4"
            alt="PratyushKumar43"
            className="size-6 rounded-full object-cover"
          />
          <span className="text-xs font-bold text-black">PratyushKumar43</span>
        </div>
      </div>
    </div>
  )
}

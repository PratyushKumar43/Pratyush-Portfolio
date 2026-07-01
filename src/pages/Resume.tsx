import { ArrowLeft, Download } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export default function Resume() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-6 py-12 sm:py-20">
        <div className="flex items-center justify-between mb-8">
          <Link to="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="size-3.5" aria-hidden="true" />
              Home
            </Button>
          </Link>
          <a href="https://drive.google.com/uc?export=download&id=1cjIhY7GqG0WzOhUchQqRC5c4_5ENLI0_" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm">
              <Download className="size-3.5" aria-hidden="true" />
              Download
            </Button>
          </a>
        </div>

        <h1 className="text-[32px] font-semibold tracking-tight mb-1 leading-tight">Resume</h1>
        <p className="text-sm text-muted-foreground mb-8">
          Full Stack & Applied AI Engineer
        </p>

        <div className="rounded-sm overflow-hidden ring-1 ring-foreground/5 bg-card">
          <iframe
            src="https://drive.google.com/file/d/1cjIhY7GqG0WzOhUchQqRC5c4_5ENLI0_/preview"
            className="w-full h-[80vh] border-0"
            title="Pratyush Kumar Behera Resume"
          />
        </div>
      </div>
    </div>
  )
}

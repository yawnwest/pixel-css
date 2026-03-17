import './playground.css'
import '../src/tokens/tokens.css'
import '../src/base/reset.css'
import '../src/base/typography.css'
import '../src/components/button.css'

document.getElementById('theme-toggle')?.addEventListener('click', () => {
  const current = document.documentElement.dataset.theme
  document.documentElement.dataset.theme = current === 'dark' ? 'light' : 'dark'
})

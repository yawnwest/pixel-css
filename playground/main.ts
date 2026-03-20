import '../src/index.css'

document.getElementById('theme-toggle')?.addEventListener('click', () => {
  const current = document.documentElement.dataset.theme
  document.documentElement.dataset.theme = current === 'dark' ? 'light' : 'dark'
})

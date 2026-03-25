import '../src/index.css'

const themeToggle = document.getElementById('theme-toggle')

if (themeToggle) {
  let isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  themeToggle.textContent = isDark ? 'Light' : 'Dark'

  themeToggle.addEventListener('click', () => {
    isDark = !isDark
    document.documentElement.dataset.theme = isDark ? 'dark' : 'light'
    themeToggle.textContent = isDark ? 'Light' : 'Dark'
  })
}

document.querySelectorAll('[data-copy-btn]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const code = btn.closest('.panel-extra')!.querySelector('code')!.textContent ?? ''
    navigator.clipboard.writeText(code)
    btn.textContent = 'copied!'
    setTimeout(() => {
      btn.textContent = 'copy'
    }, 1500)
  })
})

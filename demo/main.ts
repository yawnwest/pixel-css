import '../src/index.css'

const themeToggle = document.getElementById('theme-toggle')

themeToggle?.addEventListener('click', () => {
  const isDark = document.documentElement.dataset.theme === 'dark'
  if (isDark) {
    delete document.documentElement.dataset.theme
    themeToggle.textContent = 'Dark'
  } else {
    document.documentElement.dataset.theme = 'dark'
    themeToggle.textContent = 'Light'
  }
})

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

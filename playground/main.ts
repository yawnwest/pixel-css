import '../src/index.css'

document.getElementById('theme-toggle')?.addEventListener('click', () => {
  const current = document.documentElement.dataset.theme
  document.documentElement.dataset.theme = current === 'dark' ? 'light' : 'dark'
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

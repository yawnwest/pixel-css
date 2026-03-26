// iOS Safari delays :active until it's sure the touch isn't a scroll gesture.
// We use touchstart to apply the pressed state immediately.
const pressing = new Map<number, HTMLElement>()

function onTouchStart(e: TouchEvent) {
  for (const touch of e.changedTouches) {
    const btn = (touch.target as Element).closest<HTMLButtonElement>('.btn')
    if (btn && !btn.disabled) {
      pressing.set(touch.identifier, btn)
      btn.classList.add('btn-pressing')
    }
  }
}

function onTouchEnd(e: TouchEvent) {
  for (const touch of e.changedTouches) {
    const btn = pressing.get(touch.identifier)
    if (btn) {
      btn.classList.remove('btn-pressing')
      pressing.delete(touch.identifier)
    }
  }
}

document.addEventListener('touchstart', onTouchStart, { passive: true })
document.addEventListener('touchend', onTouchEnd, { passive: true })
document.addEventListener('touchcancel', onTouchEnd, { passive: true })

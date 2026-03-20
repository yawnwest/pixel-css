#!/usr/bin/env python3
"""Pixel-art cursor generator for pixel-css.

Usage:
    pip3 install pillow
    python3 scripts/generate-cursors.py

Output: src/cursors/*.png

Hotspots for CSS:
    default.png      →  0  0
    pointer.png      →  4  0
    not-allowed.png  → 12 12
    text.png         →  2  6
"""

from PIL import Image, ImageDraw
import os

T = (0, 0, 0, 0)
B = (0, 0, 0, 255)
W = (255, 255, 255, 255)
R = (192, 57, 43, 255)  # --color-destructive

OUT = "src/cursors"
os.makedirs(OUT, exist_ok=True)


def from_pattern(rows):
    """Create an RGBA image sized to fit the pattern exactly.
    B = black, W = white, R = red, . = transparent
    """
    h = len(rows)
    w = max(len(row) for row in rows)
    img = Image.new("RGBA", (w, h), T)
    legend = {"B": B, "W": W, "R": R}
    for y, row in enumerate(rows):
        for x, ch in enumerate(row):
            if ch in legend:
                img.putpixel((x, y), legend[ch])
    return img


# ── default (arrow) ─────────────────────── hotspot: 0 0
arrow = from_pattern([
    "B",
    "BB",
    "BWB",
    "BWWB",
    "BWWWB",
    "BWWWWB",
    "BWWWWWB",
    "BWWWWWWB",
    "BWWWWWWWB",
    "BWWWWWWWWB",
    "BWWWWWWWWWB",
    "BWWWWWWBBBB",
    "BWWWBB",
    "BWBB",
    "BB",
    "B",
])

# ── pointer (hand) ──────────────────────── hotspot: 4 0
pointer = from_pattern([
    "...BB",
    "..BWWB",
    "..BWWB",
    "..BWWB",
    "..BWWBBB",
    "..BWWBWWBB",
    ".BBBWWWWWWB",
    "BWWWWWWWWWB",
    "BWWWWWWWWWB",
    "BWWWWWWWWWB",
    ".BBBBBBBBB",
])

# ── not-allowed ─────────────────────────── hotspot: 12 12
not_allowed = Image.new("RGBA", (24, 24), T)
d = ImageDraw.Draw(not_allowed)
d.ellipse([1, 1, 23, 23], fill=R, outline=B, width=2)
d.line([(4, 19), (19, 4)], fill=B, width=4)
d.line([(5, 19), (19, 5)], fill=R, width=2)
d.ellipse([1, 1, 23, 23], fill=None, outline=B, width=2)

# ── text (I-beam) ───────────────────────── hotspot: 2 6
text = from_pattern([
    "BBBBB",
    "BWWWB",
    ".BBB.",
    ".BWB.",
    ".BWB.",
    ".BWB.",
    ".BWB.",
    ".BWB.",
    ".BWB.",
    ".BWB.",
    ".BWB.",
    ".BWB.",
    ".BBB.",
    "BWWWB",
    "BBBBB",
])

arrow.save(f"{OUT}/default.png")
pointer.save(f"{OUT}/pointer.png")
not_allowed.save(f"{OUT}/not-allowed.png")
text.save(f"{OUT}/text.png")

print("✓ Cursors gespeichert in", OUT)
print()
print("CSS-Verwendung:")
print("  cursor: url('./cursors/default.png') 0 0, default;")
print("  cursor: url('./cursors/pointer.png') 4 0, pointer;")
print("  cursor: url('./cursors/not-allowed.png') 12 12, not-allowed;")
print("  cursor: url('./cursors/text.png') 2 6, text;")

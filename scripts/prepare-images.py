"""Resize the selected original audit photos into public/images as WebP.
Run from the project root: python -I scripts/prepare-images.py"""
import os
from PIL import Image, ImageFilter, ImageOps

SRC = "docs/source-audit/assets-original/images"
OUT = "public/images"

# output name -> (source path, widths)
PHOTOS = {
    "home-hero": ("slider/home/thumb/1741569269slider-1.jpg", [1280, 1920, 2560, 3200]),
    "home-intro": ("lingga-yoni/gal_1.jpg", [800, 1400]),
    "about-lingga": ("slider/about/17512608951750729884IMG_3366_(3).jpg", [1280, 2000]),
    "about-tradition": ("about/tradition_1.jpg", [800, 1400]),
    "about-community": ("about/mission_1.jpg", [800, 1400]),
    "about-offering": ("about/mission_3.jpg", [800, 1400]),
    "stay-hero": ("lingga-cottage/bg_head.jpg", [1280, 2000]),
    "cottage-bedroom": ("lingga-cottage/gal_4.jpg", [800, 1400]),
    "cottage-bathroom": ("lingga-cottage/gal_1.jpg", [800, 1400]),
    "cottage-towels": ("lingga-cottage/gal_3.jpg", [800, 1400]),
    "cottage-reception": ("lingga-cottage/receptions.jpg", [800, 1200]),
    "pool": ("lingga-pool/pool.jpg", [800, 1400]),
    "river-pool": ("lingga-romantic-river-pool/head.jpg", [800, 1400]),
    "playground": ("playground/thumb/playground.jpg", [800, 1400]),
    "spa-hero": ("product/spa/1756419788DSC03184.jpg", [1280, 2000]),
    "spa-massage": ("about/spa/1756420391DSC03183.jpg", [800, 1400]),
    "spa-hotstone": ("product/spa/1751258509IMG_1173.jpg", [800, 1400]),
    "spa-footbath": ("product/spa/1756419951DSC03165.jpg", [800, 1400]),
    "spa-herbal": ("product/spa/1756419813DSC03201.jpg", [800, 1400]),
    "spa-sauna": ("product/spa/1756420189DSC02487.jpg", [800, 1400]),
    "spa-jacuzzi": ("product/spa/1756419951DSC02508_(1).jpg", [800, 1400]),
    "dining-hero": ("content/home/restaurant_12.jpeg", [1280, 1920, 2560, 3200]),
    "dining-room": ("category/restaurant/1750307118DSC00837_1.jpg", [800, 1400]),
    "dining-floating": ("about/restaurant/1751272753DSC03766_(1).jpg", [800, 1400]),
    "dining-spread": ("about/restaurant/1751272606DSC03751_(1).jpg", [800, 1400]),
    "experiences-hero": ("lingga-yoni/bg_1.jpg", [1280, 2000]),
    "exp-yoga": ("about/yoga-retreat/1751266705DSC09803_(1).jpg", [800, 1400]),
    "exp-yoga-circle": ("gallery/yoga-retreat/1751266182DSC03155_(1).jpg", [800, 1400]),
    "exp-lingga-yoni": ("lingga-yoni/gal_3.jpg", [800, 1400]),
    "exp-holly-place": ("holy-place/gal_2.jpg", [800, 1400]),
    "exp-arts": ("balinese-art/gal_4.jpg", [800, 1400]),
    "exp-cooking": ("cooking-class/gal_1.jpg", [800, 1400]),
    "exp-trekking": ("lingga-trekking/gal_5.jpg", [800, 1400]),
    "exp-camping": ("camping-outbond/gal_1.jpg", [800, 1400]),
    "contact": ("gallery/page-about/1751259663DSC01860.jpg", [1280, 2000]),
    "home-spa": ("product/spa/1756419789DSC03192.jpg", [800, 1400]),
    "home-yoga": ("gallery/yoga-retreat/1751266183DSC09787_(1).jpg", [600, 1000]),
    "home-holly": ("holy-place/gal_1.jpg", [600, 1000]),
    "home-cooking": ("cooking-class/gal_5.jpg", [600, 1000]),
    "home-trekking": ("lingga-trekking/gal_4.jpg", [600, 1000]),
    "cottage-robe": ("lingga-cottage/gal_2.jpg", [800, 1400]),
}
# full-width hero photos: higher quality and a light sharpen after downscaling
HEROES = {"home-hero", "about-lingga", "stay-hero", "spa-hero", "dining-hero", "experiences-hero", "contact"}

# transparent dish cut-outs (kept as WebP with alpha)
DISHES = {
    "dish-1": "slide/restaurant/1751271772New_Project_(40).png",
    "dish-2": "slide/restaurant/1751271875New_Project_(41).png",
    "dish-3": "slide/restaurant/1751272162New_Project_(43).png",
}

os.makedirs(OUT, exist_ok=True)
dims = {}
for name, (rel, widths) in PHOTOS.items():
    im = ImageOps.exif_transpose(Image.open(os.path.join(SRC, rel))).convert("RGB")
    hero = name in HEROES
    for w in widths:
        w = min(w, im.width)
        h = round(im.height * w / im.width)
        out = im.resize((w, h), Image.LANCZOS) if w < im.width else im.copy()
        if hero and w < im.width:
            out = out.filter(ImageFilter.UnsharpMask(radius=1.2, percent=45, threshold=2))
        out.save(f"{OUT}/{name}-{w}.webp", "WEBP", quality=90 if hero else 74, method=6)
        if hero:  # AVIF for the large hero photos: ~40% smaller at comparable quality
            out.save(f"{OUT}/{name}-{w}.avif", "AVIF", quality=72, speed=4)
    dims[name] = (im.width, im.height, [min(w, im.width) for w in widths])
for name, rel in DISHES.items():
    im = Image.open(os.path.join(SRC, rel)).convert("RGBA")
    im.thumbnail((640, 640), Image.LANCZOS)
    im.save(f"{OUT}/{name}.webp", "WEBP", quality=80, method=6)

logo = Image.open(os.path.join(SRC, "logo.png")).convert("RGBA")
logo = logo.crop(logo.getbbox())
logo.thumbnail((480, 480), Image.LANCZOS)
logo.save(f"{OUT}/logo-white.png", optimize=True)
print("logo", logo.size)

# Open Graph image from the home hero
og = ImageOps.fit(Image.open(os.path.join(SRC, PHOTOS["home-hero"][0])).convert("RGB"), (1200, 630), Image.LANCZOS)
og.save("app/opengraph-image.jpg", quality=80)

for k, v in dims.items():
    print(f'  "{k}": {{ w: {v[0]}, h: {v[1]}, sizes: {v[2]} }},')

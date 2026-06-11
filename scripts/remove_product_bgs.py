"""
One-shot pre-processing: download the 3 PawClean product photos shared by the
user and write transparent PNG versions to /app/frontend/public/products/.

Uses rembg (u2net) which produces high-quality cutouts irrespective of the
photo backdrop (black or white).
"""

import os
import sys
import urllib.request

from rembg import remove

ASSETS = {
    "sage.png": "https://customer-assets.emergentagent.com/job_ten-seconds-clean/artifacts/sx7x8w1y_Untitled%20design%20-%202.PNG",
    "sky.png": "https://customer-assets.emergentagent.com/job_ten-seconds-clean/artifacts/t26w30zh_Untitled%20design%20-%201.PNG",
    "terracotta.png": "https://customer-assets.emergentagent.com/job_ten-seconds-clean/artifacts/2yqghkbc_Untitled%20design%202.jpg",
}

OUT_DIR = "/app/frontend/public/products"
os.makedirs(OUT_DIR, exist_ok=True)


def main() -> int:
    for name, url in ASSETS.items():
        print(f"[+] {name}  <-  {url}")
        with urllib.request.urlopen(url) as resp:
            src_bytes = resp.read()
        cut = remove(src_bytes)
        out_path = os.path.join(OUT_DIR, name)
        with open(out_path, "wb") as fp:
            fp.write(cut)
        size_kb = os.path.getsize(out_path) // 1024
        print(f"    -> {out_path}  ({size_kb} KB)")
    return 0


if __name__ == "__main__":
    sys.exit(main())

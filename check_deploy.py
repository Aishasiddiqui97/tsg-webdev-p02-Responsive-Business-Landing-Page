import urllib.request

url = 'https://aishasiddiqui97.github.io/tsg-webdev-p02-Responsive-Business-Landing-Page/'
req = urllib.request.Request(url)
resp = urllib.request.urlopen(req, timeout=10)
html = resp.read().decode()

# Check key elements
print('defer on bootstrap:', 'bootstrap.bundle.min.js' in html and 'defer' in html.split('bootstrap.bundle.min.js')[1][:200])
print('defer on script.min:', 'script.min.js' in html and 'defer' in html.split('script.min.js')[1][:200])
print('fetchpriority high:', 'fetchpriority' in html)
print('WebP images:', 'hero-gym.webp' in html, 'about-trainer.webp' in html)
print('CSS deferred:', 'media=\\"print\\" onload' in html.replace("'", '"'))
print('Font preloaded:', 'rel=\\"preload\\"' in html.replace("'", '"'))

# Glam by Gela — Landing Page

Static HTML/CSS site for the beauty studio.

## Files

| Path | Purpose |
|------|---------|
| `index.html` | Page content |
| `css/styles.css` | Styles (light + dark theme) |
| `js/main.js` | Mobile menu, theme toggle |
| `images/` | Hero portrait and assets |

---

## Hosting options

### 1. Your machine (Apache — already on port 80)

You already run Apache at **http://172.20.10.2** with the shop in `/var/www/html`.

**Studio page at `/studio/`** (keeps the shop on the homepage):

```bash
cd ~/Projects/salon-landing
chmod +x deploy.sh
./deploy.sh
```

Open **http://172.20.10.2/studio/** (or `http://localhost/studio/`).

**Studio as the main homepage** (replaces current `index.html`):

```bash
cp /var/www/html/index.html /var/www/html/index.html.shop-backup
./deploy.sh /var/www/html
```

Restore the shop later: `cp /var/www/html/index.html.shop-backup /var/www/html/index.html`

Ensure Apache is running:

```bash
sudo systemctl start apache2
sudo systemctl enable apache2
```

---

### 2. Quick test (no Apache)

```bash
cd ~/Projects/salon-landing
python3 -m http.server 8080
```

Open **http://localhost:8080**

---

### 3. Free public hosting (internet)

Good for a real URL without keeping your PC on.

| Service | Steps |
|---------|--------|
| **Netlify** | Drag the project folder to [app.netlify.com/drop](https://app.netlify.com/drop) or connect a Git repo |
| **Cloudflare Pages** | Upload folder or connect GitHub |
| **GitHub Pages** | Push repo → Settings → Pages → branch `main` / folder root |

After deploy, set a custom domain in the host’s dashboard if you own one (e.g. `glambygela.com`).

---

### 4. Custom domain + VPS

1. Buy domain (Namecheap, Cloudflare, etc.)
2. Point DNS **A record** to your server’s public IP
3. Use Apache/Nginx with `DocumentRoot` pointing at this folder
4. Add free SSL: `sudo certbot --apache` (Let’s Encrypt)

---

## Update the live site

Edit files in `~/Projects/salon-landing`, then redeploy:

```bash
./deploy.sh
```

---

## Theme

Dark mode is the default. Visitors can switch with the header button; choice is saved in the browser.

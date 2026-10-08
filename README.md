# Tal Avital - Portfolio Website

Personal portfolio website for Tal Avital, highlighting software engineering, embedded systems, IoT architecture, and agricultural technology projects.

---

## Quick Start (How to Run Locally)

This is a lightweight static website built with vanilla HTML, CSS, and JavaScript. You do not need to install complex build tools or dependencies to run it.

### Option 1: Direct File Open (Fastest)
Simply double-click [`index.html`](index.html) or right-click and choose **Open with** > **Google Chrome** (or your browser of choice).

---

### Option 2: Local HTTP Server (Recommended)
Running a local server ensures proper path resolution and supports features like embedded PDF previews in [`resume.html`](resume.html).

#### Using Python:
If you have Python installed:
```bash
# In the project root directory:
python -m http.server 8000
```
Then open [http://localhost:8000](http://localhost:8000) in your browser.

#### Using Node.js / npx:
If you have Node.js installed:
```bash
# Using 'serve'
npx serve .

# Or using 'http-server'
npx http-server . -p 8000
```
Then visit the URL displayed in your terminal (typically [http://localhost:3000](http://localhost:3000) or [http://localhost:8000](http://localhost:8000)).

#### Using VS Code / IDE:
If using VS Code or Antigravity IDE:
1. Install the **Live Server** extension.
2. Right-click [`index.html`](index.html) in the file explorer.
3. Select **"Open with Live Server"**.

---

## Page Structure & Themes

The portfolio includes multiple curated design themes. The root of the website defaults to the **Fierce Executive** theme with unlinked hidden alternate versions:

| Page / File | Theme / Purpose | Direct URL |
| :--- | :--- | :--- |
| [`index.html`](index.html) | **Root Page (Fierce Executive)** — Clean, high-contrast, editorial layout with interactive project tabs. Has no outgoing links to alternate versions. | `/` or `/index.html` |
| [`formal.html`](formal.html) | **v1.0 Formal** — Monochrome, serif-typeset resume layout. | `/formal.html` |
| [`casual.html`](casual.html) | **v2.0 Casual** — Earthy forest green theme with soft borders and badge tags. | `/casual.html` |
| [`fierce.html`](fierce.html) | **v3.0 Fierce** — Standalone Fierce Executive page. | `/fierce.html` |
| [`gilded.html`](gilded.html) | **v4.0 Luxe Gold** — Dark slate background with gold accent styling. | `/gilded.html` |
| [`resume.html`](resume.html) | **Resume Viewer** — Dedicated page embedding the official resume PDF with download buttons. | `/resume.html` |

---

## Project Structure

```text
Tal-Portfolio-Website/
├── assets/
│   ├── Cover_Photo.jpg          # Headshot portrait
│   └── Tal Avital Resume.pdf    # Official resume PDF
├── index.html                   # Website root (Fierce theme)
├── fierce.css / fierce.js       # Styles & tab interactivity for Fierce theme
├── formal.html                  # Formal monochrome version
├── style.css                    # Styles for Formal & Resume pages
├── casual.html / casual.css / casual.js # Casual Earthy Green theme
├── gilded.html / gilded.css / gilded.js # Luxe Gold theme
├── resume.html                  # Standalone full-page resume viewer
└── README.md                    # Project documentation
```

---

## Deployment (GitHub Pages)

To publish this portfolio to the web for free via GitHub Pages:

1. Push your changes to GitHub:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push origin main
   ```
2. Navigate to your repository on GitHub.
3. Go to **Settings** > **Pages** (under "Code and automation").
4. Under **Build and deployment**:
   - **Source**: Deploy from a branch
   - **Branch**: `main`
   - **Folder**: `/ (root)`
5. Click **Save**. Your site will be published at `https://<username>.github.io/<repo-name>/`.

## my public webpage
a website i built for myself maybe around 8-9 years ago that should use some serious ~~rewriting~~/redesigning

currently hosted on [rw.rs](https://rw.rs/)
- [ ] finish odinproject
- [x] redesign the page, keep it simple
- [ ] system that checks for changes in [curicullum-vitae](https://github.com/vuksavic/curicullum-vitae) and keeps an always updated pdf(or any other file format) available on the page(ci/cd pipeline)
- [ ] maybe implement some css framework?

## Automatic Deployment

The site automatically deploys to Hetzner hosting via GitHub Actions on every push to the main branch.

### Setup Instructions

1. **Get your Hetzner FTP credentials:**
   - Log into your Hetzner webhosting control panel (KonsoleH or cPanel)
   - Find your FTP access details (server address, username, password)

2. **Add GitHub Secrets:**
   Go to your repository Settings → Secrets and variables → Actions, and add:
   - `FTP_SERVER` - Your FTP server address (e.g., `your-domain.com` or `ftp.your-domain.com`)
   - `FTP_USERNAME` - Your FTP username
   - `FTP_PASSWORD` - Your FTP password

3. **That's it!** Every push to main/master will trigger deployment.

### Deployment Details

- **Files deployed:** All HTML, CSS, JS, and assets
- **Excluded:** node_modules, .git, package.json, README.md, .github
- **Protocol:** FTPS (FTP over TLS) for secure transfer
- **Method:** Incremental - only changed files are uploaded

### Alternative: SFTP/SSH Deployment

If your Hetzner plan includes SSH access, you can use SFTP instead by modifying `.github/workflows/deploy.yml`:
- Change `protocol: ftps` to `protocol: sftp`
- Change `port: 21` to `port: 22`
- Use your SSH credentials for the secrets

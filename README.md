# Casa de Vidro Interactive

## Publish free with GitHub Pages

1. Create an empty GitHub repository, such as `casa-de-vidro-interactive`.
2. From this folder, run:

   ```bash
   git init
   git add .
   git commit -m "Prepare Casa de Vidro for GitHub Pages"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
   git push -u origin main
   ```

3. In GitHub, open **Settings → Pages** and choose **GitHub Actions** as the source.

The included workflow deploys to `https://YOUR_USERNAME.github.io/YOUR_REPOSITORY/`.

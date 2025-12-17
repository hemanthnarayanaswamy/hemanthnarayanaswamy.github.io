<!-- markdownlint-disable-next-line -->
<div align="center">

  <!-- markdownlint-disable-next-line -->
  # Hemanth Narayanaswamy

  Personal Portfolio & Blog

  [![GitHub](https://img.shields.io/badge/GitHub-Profile-blue?logo=github)][github]&nbsp;
  [![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?logo=linkedin)][linkedin]&nbsp;
  [![Portfolio](https://img.shields.io/badge/Portfolio-Live-green?logo=globe)][portfolio]

  [**View Portfolio** →][portfolio]

  [![Portfolio Preview](https://chirpy-img.netlify.app/commons/devices-mockup.png)][portfolio]

</div>

## About Me

Welcome to my personal portfolio! I'm a passionate professional with expertise in multiple domains. This site showcases my work, skills, and experiences.

## Portfolio Sections

- **About** - Learn more about my background and interests
- **Skills** - Technical and professional competencies
- **Projects** - Showcase of my work and achievements
- **Experience** - Professional journey and milestones
- **Blog** - Technical articles and insights
- **Contact** - Get in touch for opportunities

## Features

- Responsive Design
- Dark/Light Theme Toggle
- Blog with Technical Writing
- Project Showcase
- Professional Layout
- SEO Optimized
- Fast Loading
- Mobile Friendly

## Technologies Used

This portfolio is built with:
- **Jekyll** - Static site generator
- **Chirpy Theme** - Professional Jekyll theme
- **HTML/CSS/JavaScript** - Frontend development
- **GitHub Pages** - Hosting and deployment

## Getting Started

Minimal setup that works on Ubuntu:

1. Install system packages:
   ```bash
   sudo apt update
   sudo apt install -y build-essential git curl \
     zlib1g-dev libssl-dev libreadline-dev libyaml-dev libxml2-dev libxslt1-dev
   ```
2. Install Ruby 3.1.x + Bundler 2.6.9 (matches `Gemfile.lock`):
   ```bash
   curl -fsSL https://github.com/rbenv/rbenv-installer/raw/main/bin/rbenv-installer | bash
   echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
   echo 'eval "$(rbenv init - bash)"' >> ~/.bashrc
   source ~/.bashrc
   rbenv install 3.1.4
   rbenv local 3.1.4
   gem install bundler -v 2.6.9
   ```
3. Install Node.js 20 with nvm:
   ```bash
   curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
   source ~/.bashrc
   nvm install 20 && nvm use 20
   ```
4. Install project dependencies and run the site:
   ```bash
   bundle _2.6.9_ install
   npm install
   npm run build
   bundle exec jekyll serve --livereload
   ```

## Contact

Feel free to reach out for collaborations, opportunities, or just to say hello!

[github]: https://github.com/hemanthnarayanaswamy
[linkedin]: https://linkedin.com/in/hemanthnarayanaswamy
[portfolio]: https://hemanthnarayanaswamy.github.io

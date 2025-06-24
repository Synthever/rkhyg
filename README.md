# Portfolio Website - Raekhandi Yoga Gusmawan

Modern, elegant, and responsive portfolio website built with TailwindCSS, Anime.js, and vanilla JavaScript.

## 🚀 Features

- **Modern Design**: Clean, minimalist design with glassmorphism effects
- **Dark/Light Theme**: Toggle between dark and light themes with smooth transitions
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: Beautiful animations powered by Anime.js
- **Floating Navigation**: iOS-style floating navigation with blur effects
- **Interactive Elements**: Hover effects, smooth scrolling, and micro-interactions
- **Performance Optimized**: Lazy loading, preloading, and optimized animations
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support

## 🛠️ Tech Stack

- **HTML5**: Semantic markup
- **TailwindCSS**: Utility-first CSS framework
- **JavaScript (ES6+)**: Modern JavaScript features
- **Anime.js**: Lightweight animation library
- **Font Awesome**: Icons
- **Google Fonts**: Inter font family

## 📁 Project Structure

```
rkhyg/
├── index.html              # Main HTML file
├── assets/
│   ├── css/
│   │   └── style.css       # Custom CSS styles
│   ├── js/
│   │   └── main.js         # Main JavaScript file
│   ├── img/
│   │   ├── placeholder-project.svg
│   │   └── profile-placeholder.svg
│   └── reference/
│       ├── CV-Raekhandi.pdf
│       └── PI_AMIKOM_Raekhandi.pdf
└── README.md
```

## 🎨 Design Features

### Color Scheme
- **Primary Blue**: #3b82f6
- **Primary Purple**: #8b5cf6
- **Dark Theme**: #0a0a0a, #1a1a1a, #2a2a2a
- **Light Theme**: #fafafa, #f5f5f5

### Typography
- **Font Family**: Inter (Google Fonts)
- **Font Weights**: 300, 400, 500, 600, 700, 800

### Animations
- **Page Load**: Staggered fade-in animations
- **Scroll Animations**: Elements animate as they come into view
- **Hover Effects**: Subtle scale and color transitions
- **Theme Toggle**: Smooth color transitions

## 📱 Sections

1. **Home**: Hero section with introduction and CTAs
2. **About**: Personal information and professional summary
3. **Skills**: Technical and soft skills with animated progress bars
4. **Experience**: Work history in timeline format
5. **Projects**: Portfolio projects with descriptions
6. **Blog**: Latest insights and articles
7. **Contact**: Contact form and social media links

## 🚀 Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/rkhyg.git
   cd rkhyg
   ```

2. **Open in browser**:
   - Simply open `index.html` in your preferred browser
   - Or use a local server like Live Server in VS Code

3. **Customize**:
   - Update personal information in `index.html`
   - Modify colors in TailwindCSS config
   - Add your own images in `assets/img/`
   - Update CV file in `assets/reference/`

## 🎯 Performance Optimizations

- **Lazy Loading**: Images and resources load as needed
- **Resource Preloading**: Critical resources are preloaded
- **Throttled Scroll Events**: Optimized scroll event handling
- **GPU Acceleration**: CSS transforms use GPU acceleration
- **Minified Resources**: External libraries are minified

## 🔧 Customization

### Changing Colors
Update the TailwindCSS config in `index.html`:
```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                'accent-blue': '#your-color',
                'accent-purple': '#your-color',
            }
        }
    }
}
```

### Adding New Sections
1. Add section HTML in `index.html`
2. Add navigation link in floating nav
3. Add scroll handling in `main.js`
4. Add custom animations if needed

### Modifying Animations
All animations are in `assets/js/main.js`. Use Anime.js syntax:
```javascript
anime({
    targets: '.your-element',
    opacity: [0, 1],
    duration: 1000,
    easing: 'easeOutExpo'
});
```

## 📱 Browser Support

- **Chrome**: 88+
- **Firefox**: 85+
- **Safari**: 14+
- **Edge**: 88+

## 🛡️ Security Features

- **Content Security Policy**: Inline scripts are minimized
- **XSS Protection**: User inputs are sanitized
- **HTTPS Ready**: All external resources use HTTPS

## 📈 SEO Optimizations

- **Meta Tags**: Proper meta descriptions and keywords
- **Semantic HTML**: Proper heading hierarchy
- **Alt Text**: All images have descriptive alt text
- **Structured Data**: JSON-LD structured data for better search results

## 🌐 Accessibility

- **ARIA Labels**: Proper ARIA labels for screen readers
- **Keyboard Navigation**: Full keyboard navigation support
- **High Contrast**: Support for high contrast mode
- **Reduced Motion**: Respects user's motion preferences

## 📱 Mobile Optimizations

- **Touch Targets**: Minimum 44px touch targets
- **Viewport Meta**: Proper viewport configuration
- **Mobile Navigation**: Optimized navigation for mobile
- **Performance**: Optimized for mobile networks

## 🔄 Updates and Maintenance

- **Regular Updates**: Keep dependencies updated
- **Performance Monitoring**: Monitor Core Web Vitals
- **Browser Testing**: Test across different browsers
- **Content Updates**: Keep portfolio content current

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **GitHub**: [@Synthever](https://github.com/Synthever)
- **Instagram**: [@rkh.yg_](https://instagram.com/rkh.yg_)
- **Email**: hello@raekhandi.dev

---

**Built with ❤️ by Raekhandi Yoga Gusmawan**

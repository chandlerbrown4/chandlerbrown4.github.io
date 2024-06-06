document.addEventListener('DOMContentLoaded', function() {
    // Load recent blog posts for the homepage
    if (document.getElementById('recent-blog-posts')) {
        fetch('blog/posts.json')
            .then(response => response.json())
            .then(posts => {
                const blogPostsContainer = document.getElementById('recent-blog-posts');
                posts.slice(0, 3).forEach(post => {
                    const postElement = document.createElement('div');
                    postElement.classList.add('card');
                    postElement.innerHTML = `
                        <h3><a href="${post.url}">${post.title}</a></h3>
                        <small>${new Date(post.date).toLocaleDateString()}</small>
                        <p>${post.summary}</p>`;
                    blogPostsContainer.appendChild(postElement);
                });
            })
            .catch(error => console.error('Error loading blog posts:', error));
    }

    // Load all blog posts for the blog page
    if (document.getElementById('blog-posts')) {
        fetch('posts.json')
            .then(response => response.json())
            .then(posts => {
                const blogPostsContainer = document.getElementById('blog-posts');
                posts.forEach(post => {
                    const postElement = document.createElement('div');
                    postElement.classList.add('card');
                    postElement.innerHTML = `
                        <h3><a href="${post.url}">${post.title}</a></h3>
                        <small>${new Date(post.date).toLocaleDateString()}</small>
                        <p>${post.summary}</p>`;
                    blogPostsContainer.appendChild(postElement);
                });
            })
            .catch(error => console.error('Error loading blog posts:', error));
    }
    // Particle.js configuration
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 100,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 4,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 150,
                    "duration": 0.1
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });
});
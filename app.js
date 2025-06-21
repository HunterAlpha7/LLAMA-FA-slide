document.addEventListener('DOMContentLoaded', function() {
    // Select all navigation buttons and slides
    const navButtons = document.querySelectorAll('.nav-btn');
    const slides = document.querySelectorAll('.slide');
    
    // Add click event listener to each navigation button
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Get the target section from the data-section attribute
            const targetSection = this.getAttribute('data-section');
            
            // Log for debugging
            console.log("Clicked on section:", targetSection);
            
            // Remove active class from all buttons and slides
            navButtons.forEach(btn => btn.classList.remove('active'));
            slides.forEach(slide => slide.classList.remove('active'));
            
            // Add active class to the clicked button
            this.classList.add('active');
            
            // Find and activate the corresponding slide
            const targetSlide = document.getElementById(targetSection);
            if (targetSlide) {
                targetSlide.classList.add('active');
                
                // Smooth scroll to the top of the slide
                document.querySelector('.presentation-content').scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                
                // Animate elements in the new slide
                animateSlideElements(targetSlide);
            } else {
                console.error("Could not find slide with ID:", targetSection);
            }
        });
    });
    
    // Function to animate elements within a slide
    function animateSlideElements(slide) {
        const elementsToAnimate = slide.querySelectorAll('.feature-item, .feature-list li, .architecture-details li, .benefits-list li, .business-column');
        
        elementsToAnimate.forEach((element, index) => {
            // Reset styles first
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            
            // Use setTimeout to create a staggered animation effect
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, 100 + (index * 100)); // 100ms delay between each element
        });
    }
    
    // Initialize animations for the initially active slide
    const initialSlide = document.querySelector('.slide.active');
    if (initialSlide) {
        animateSlideElements(initialSlide);
    }
    
    // Add hover effects to images
    const images = document.querySelectorAll('.feature-image, .tech-image, .chart-image, .business-image');
    
    images.forEach(image => {
        image.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'transform 0.3s ease';
            this.style.boxShadow = 'var(--shadow-lg)'; // Fixed this line
        });
        
        image.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'var(--shadow-md)'; // Fixed this line
        });
    });
});
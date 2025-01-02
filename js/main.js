// Initialize AOS (Animation On Scroll)
AOS.init({
    duration: 1000,
    once: true
});

// Change content on button click
document.querySelectorAll('.class-type').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.class-type').forEach(btn => {
            btn.classList.remove('active');
        });

        this.classList.add('active');

        const classType = this.getAttribute('data-class');
        document.querySelectorAll('.class-content').forEach(content => {
            content.classList.remove('active');
        });
        document.getElementById(`${classType}-content`).classList.add('active');
    });
});

// BMI Calculation
function calculateBMI() {
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const arrow = document.getElementById('bmiArrow');
    const chart = document.getElementById('bmiChart');
    
    if (height && weight) {
        const heightInMeters = height / 100;
        const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);
        let category = '';
        let position = 0;
        
        const chartWidth = chart.offsetWidth;
        if (bmi < 18.5) {
            position = chartWidth * 0.1;
            category = 'Underweight';
        } else if (bmi < 24.9) {
            position = chartWidth * 0.3;
            category = 'Normal';
        } else if (bmi < 29.9) {
            position = chartWidth * 0.5;
            category = 'Overweight';
        } else if (bmi < 34.9) {
            position = chartWidth * 0.7;
            category = 'Obese';
        } else {
            position = chartWidth * 0.9;
            category = 'Extremely Obese';
        }
        
        arrow.style.display = 'block';
        arrow.style.left = position + 'px';
        
        document.getElementById('bmi-result').innerHTML = 
            `Your BMI: ${bmi} (${category})`;
    }
}

document.getElementById('height').addEventListener('input', calculateBMI);
document.getElementById('weight').addEventListener('input', calculateBMI);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add to cart functionality
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const productName = this.parentElement.querySelector('.product-name').textContent;
        const price = this.parentElement.querySelector('.current-price').textContent;
        
        const notification = document.createElement('div');
        notification.classList.add('cart-notification');
        notification.textContent = `Added to cart: ${productName} - ${price}`;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 3000);
    });
});

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 0) {
        header.style.backgroundColor = '#355592';
    } else {
        header.style.backgroundColor = 'transparent';
    }
});
// Example of smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// Mobile menu functionality
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenu = document.getElementById('closeMenu');

// Function to open menu
const openMenu = () => {
    mobileMenu.style.transform = 'translateX(0)';
    document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
};

// Function to close menu
const closeMenuHandler = () => {
    mobileMenu.style.transform = 'translateX(100%)';
    document.body.style.overflow = ''; // Restore scrolling
};

// Event listeners
menuBtn.addEventListener('click', openMenu);
closeMenu.addEventListener('click', closeMenuHandler);

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) {
        closeMenuHandler();
    }
});

// Close menu when pressing Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeMenuHandler();
    }
});



  // Select elements
  const toggle = document.querySelector('input[type="checkbox"]'); // Toggle input
  const essentialPrice = document.getElementById('essential-price');
  const comprehensivePrice = document.getElementById('comprehensive-price');

  // Define pricing options
  const pricing = {
    monthly: {
      essential: '৳ 2,500',
      comprehensive: '৳ 6,000',
    },
    yearly: {
      essential: '৳ 25,000',
      comprehensive: '৳ 60,000',
    },
  };

  // Update prices based on toggle
  toggle.addEventListener('change', () => {
    const isYearly = toggle.checked; // Check if yearly pricing is selected
    if (isYearly) {
      // Update to yearly prices
      essentialPrice.innerHTML = `${pricing.yearly.essential}<sup class="text-[14px] text-[#4B5768] font-normal">/year</sup>`;
      comprehensivePrice.innerHTML = `${pricing.yearly.comprehensive}<sup class="text-[14px] text-neutral-50 font-normal">/year</sup>`;
    } else {
      // Update to monthly prices
      essentialPrice.innerHTML = `${pricing.monthly.essential}<sup class="text-[14px] text-[#4B5768] font-normal">/month</sup>`;
      comprehensivePrice.innerHTML = `${pricing.monthly.comprehensive}<sup class="text-[14px] text-neutral-50 font-normal">/month</sup>`;
    }
  });


function playVideo() {
  document.getElementById("thumbnailContainer").style.display = "none";
  document.getElementById("videoWrapper").style.display = "block"; 
  document.getElementById("youtubeVideo").src += "?autoplay=1";
}

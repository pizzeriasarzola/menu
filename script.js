document.addEventListener('DOMContentLoaded', () => {

    // --- IMPOSTAZIONI ORARI (MODIFICA QUI) ---
    const openingHours = {
        1: { closed: true }, 
        default: { open: 19, close: 23 }, 
        weekend: { open: 19, close: 23 }
    };
    const whatsappNumber = "391234567890"; 

    function checkOpeningStatus() {
        const bannerMessage = document.getElementById('closed-banner-message');
        const whatsappButton = document.querySelector('.whatsapp-button');
        if (whatsappButton) {
            whatsappButton.href = `https://wa.me/${whatsappNumber}?text=Vorrei%20prenotare%20un%20tavolo`;
        }

        const now = new Date();
        const day = now.getDay();
        const hour = now.getHours();
        
        let currentDayHours = openingHours.default;
        if (openingHours[day]?.closed) {
             currentDayHours = { open: 25, close: -1 };
        } else if ((day === 0 || day === 6) && openingHours.weekend) {
            currentDayHours = openingHours.weekend;
        }

        const isOpen = hour >= currentDayHours.open && hour < currentDayHours.close;
        if (!isOpen && bannerMessage) {
            bannerMessage.style.display = 'block';
        }
    }
    
    checkOpeningStatus();

    // --- LOGICA ANIMAZIONE HEADER ALLO SCROLL ---
    let lastScrollTop = 0;
    window.addEventListener("scroll", () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop && scrollTop > 50) {
            document.body.classList.add("scrolled");
        } else {
            document.body.classList.remove("scrolled");
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }, false);

    // --- LOGICA DI NAVIGAZIONE INTELLIGENTE ---
    const menuSections = document.querySelectorAll('.menu-category-section');
    const navLinks = document.querySelectorAll('#category-navigator a');
    const stickyHeader = document.getElementById('sticky-header-container');
    const categoryNavigator = document.getElementById('category-navigator');
    const navigatorContainer = document.getElementById('category-navigator-container');

    const observer = new IntersectionObserver((entries) => {
        const stickyHeaderHeight = stickyHeader ? stickyHeader.offsetHeight : 130;
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                navLinks.forEach(link => {
                    const isActive = link.getAttribute('href') === `#${id}`;
                    link.classList.toggle('active', isActive);
                    if (isActive) {
                        // FA SCORRERE LA CATEGORIA ATTIVA AL CENTRO
                        link.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                    }
                });
            }
        });
    }, { 
        rootMargin: `-${stickyHeader.offsetHeight}px 0px -45% 0px`
    });

    menuSections.forEach(section => observer.observe(section));

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if(targetSection) {
                const offsetTop = targetSection.offsetTop - stickyHeader.offsetHeight + 1;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Gestione sfumature dinamiche della navigazione
    function updateNavFades() {
        const nav = categoryNavigator;
        const navContainer = navigatorContainer;
        const scrollLeft = nav.scrollLeft;
        const scrollWidth = nav.scrollWidth;
        const clientWidth = nav.clientWidth;

        navContainer.classList.toggle('is-scrolled-start', scrollLeft > 1);
        navContainer.classList.toggle('is-scrolled-end', scrollLeft < scrollWidth - clientWidth - 1);
    }
    
    categoryNavigator.addEventListener('scroll', updateNavFades);
    window.addEventListener('resize', updateNavFades); // Aggiorna anche al resize
    updateNavFades(); // Controlla lo stato iniziale

    // --- LOGICA MODALE E PREZZI ---
    const allergenMap = { '1': 'Cereali contenenti glutine', '2': 'Crostacei', '3': 'Uova', '4': 'Pesce', '5': 'Arachidi', '6': 'Soia', '7': 'Latte e lattosio', '8': 'Frutta a guscio', '9': 'Sedano', '10': 'Senape', '11': 'Semi di sesamo', '12': 'Anidride solforosa e solfiti', '13': 'Lupini', '14': 'Molluschi' };
    const modal = document.getElementById('modal-container');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalAllergens = document.getElementById('modal-allergens');

    window.openModal = function(itemElement) {
        if (!modal || !itemElement || itemElement.classList.contains('beer-item')) return;
        modalImg.src = itemElement.querySelector('img').src;
        modalTitle.textContent = itemElement.querySelector('h3').textContent;
        modalDescription.textContent = itemElement.querySelector('.description').textContent;
        const allergenData = itemElement.getAttribute('data-allergens');
        modalAllergens.innerHTML = '';
        if (allergenData) {
            let allergenHtml = '<h4>Allergeni presenti:</h4><ul>';
            allergenData.split(',').forEach(num => {
                const trimmedNum = num.trim();
                if (allergenMap[trimmedNum]) {
                    allergenHtml += `<li><strong>${trimmedNum}:</strong> ${allergenMap[trimmedNum]}</li>`;
                }
            });
            allergenHtml += '</ul>';
            modalAllergens.innerHTML = allergenHtml;
            modalAllergens.style.display = 'block';
        } else {
            modalAllergens.style.display = 'none';
        }
        modal.style.display = 'flex';
    };

    window.closeModal = function() {
        if (modal) modal.style.display = 'none';
    };
    
    window.updatePrice = function(selectElement) {
        const selectedOption = selectElement.options[selectElement.selectedIndex];
        const size = selectedOption.value;
        const price = selectElement.getAttribute(`data-price-${size}`);
        const priceElement = selectElement.closest('.beer-options').querySelector('.dynamic-price');
        if (price && priceElement) {
            priceElement.textContent = `€ ${parseFloat(price).toFixed(2).replace('.', ',')}`;
        }
    };
});
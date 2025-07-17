document.addEventListener('DOMContentLoaded', () => {

    // --- IMPOSTAZIONI ORARI E CONTATTI ---
    const openingHours = {
        1: { closed: true }, 
        default: { open: 18, close: 23 }, 
        weekend: { open: 18, close: 24 }
    };
    const whatsappNumber = "391234567890"; 
    
    function setupContacts() {
        const whatsappButton = document.querySelector('.whatsapp-button');
        if (whatsappButton) whatsappButton.href = `https://wa.me/${whatsappNumber}?text=Vorrei%20prenotare%20un%20tavolo`;
    }

    function checkOpeningStatus() {
        const bannerMessage = document.getElementById('closed-banner-message');
        if (!bannerMessage) return;
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
        if (!isOpen) {
            bannerMessage.style.display = 'block';
        }
    }
    
    // --- GESTIONE ANIMAZIONI E SCROLL ---
    let lastScrollTop = 0;
    const contactBanner = document.getElementById('contact-banner');
    if (contactBanner) {
        document.documentElement.style.setProperty('--contact-banner-height', `${contactBanner.offsetHeight}px`);
    }
    
    const backToTopButton = document.getElementById('back-to-top');

    window.addEventListener("scroll", () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        // Animazione header
        if (scrollTop > lastScrollTop && scrollTop > 50) {
            document.body.classList.add("scrolled");
        } else {
            document.body.classList.remove("scrolled");
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        
        // Visibilità pulsante "torna su"
        if(backToTopButton) {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        }
    }, false);

    if (backToTopButton) {
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // --- RICERCA ---
    const searchInput = document.getElementById('search-input');
    const menuItems = document.querySelectorAll('.menu-item');
    const menuSections = document.querySelectorAll('.menu-category-section');

    if (searchInput) {
        searchInput.addEventListener('input', () => {
            const searchTerm = searchInput.value.toLowerCase().trim();

            menuSections.forEach(section => {
                const itemsInSection = section.querySelectorAll('.menu-item');
                let sectionHasVisibleItems = false;

                itemsInSection.forEach(item => {
                    const title = item.querySelector('h3').textContent.toLowerCase();
                    const description = item.querySelector('p.description').textContent.toLowerCase();

                    if (title.includes(searchTerm) || description.includes(searchTerm)) {
                        item.style.display = 'flex';
                        sectionHasVisibleItems = true;
                    } else {
                        item.style.display = 'none';
                    }
                });

                // Mostra o nascondi il titolo della sezione se non ci sono risultati
                const titleElement = section.querySelector('.section-title');
                if(titleElement) {
                    titleElement.style.display = sectionHasVisibleItems ? 'block' : 'none';
                }
            });
        });
    }

    // --- NAVIGAZIONE INTELLIGENTE ---
    const stickyHeader = document.getElementById('sticky-header-container');
    const navLinks = document.querySelectorAll('#category-navigator a');
    const categoryNavigator = document.getElementById('category-navigator');
    const navigatorContainer = document.getElementById('category-navigator-container');

    const observer = new IntersectionObserver((entries) => {
        const stickyHeaderHeight = stickyHeader ? stickyHeader.offsetHeight : 0;
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                navLinks.forEach(link => {
                    const isActive = link.getAttribute('href') === `#${id}`;
                    link.classList.toggle('active', isActive);
                    if (isActive) {
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
                window.scrollTo({ top: offsetTop, behavior: 'smooth' });
            }
        });
    });

    function updateNavFades() {
        if (!categoryNavigator || !navigatorContainer) return;
        const { scrollLeft, scrollWidth, clientWidth } = categoryNavigator;
        navigatorContainer.classList.toggle('is-scrolled-start', scrollLeft > 1);
        navigatorContainer.classList.toggle('is-scrolled-end', scrollLeft < scrollWidth - clientWidth - 1);
    }
    if(categoryNavigator) categoryNavigator.addEventListener('scroll', updateNavFades);
    window.addEventListener('resize', updateNavFades);
    updateNavFades();

    // --- LOGICA MODALE E PREZZI ---
    const allergenMap = { '1': 'Cereali contenenti glutine', '2': 'Crostacei', '3': 'Uova', '4': 'Pesce', '5': 'Arachidi', '6': 'Soia', '7': 'Latte e lattosio', '8': 'Frutta a guscio', '9': 'Sedano', '10': 'Senape', '11': 'Semi di sesamo', '12': 'Anidride solforosa e solfiti', '13': 'Lupini', '14': 'Molluschi' };
    const modal = document.getElementById('modal-container');
    const modalClose = document.getElementById('modal-close');
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
        modal.classList.add('active');
    };

    window.closeModal = function() {
        if (modal) modal.classList.remove('active');
    };

    if (modal) modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
    if (modalClose) modalClose.addEventListener('click', closeModal);
    
    window.updatePrice = function(selectElement) {
        const selectedOption = selectElement.options[selectElement.selectedIndex];
        const size = selectedOption.value;
        const price = selectElement.getAttribute(`data-price-${size}`);
        const priceElement = selectElement.closest('.beer-options').querySelector('.dynamic-price');
        if (price && priceElement) {
            priceElement.textContent = `€ ${parseFloat(price).toFixed(2).replace('.', ',')}`;
        }
    };
    
    setupContacts();
    checkOpeningStatus();
});
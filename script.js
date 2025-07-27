document.addEventListener('DOMContentLoaded', () => {

    // --- IMPOSTAZIONI GENERALI ---
    const settings = {
        openingHours: {
            1: { closed: true }, // Lunedì
            default: { open: 18.5, close: 23.5 }, // Mar-Dom (18:30 - 23:30)
        },
        whatsappNumber: "3339721220", // Sostituisci con il tuo numero
        allergenMap: { '1': 'Glutine', '2': 'Crostacei', '3': 'Uova', '4': 'Pesce', '5': 'Arachidi', '6': 'Soia', '7': 'Latte e lattosio', '8': 'Frutta a guscio', '9': 'Sedano', '10': 'Senape', '11': 'Semi di sesamo', '12': 'Anidride solforosa e solfiti', '13': 'Lupini', '14': 'Molluschi' }
    };

    // --- ELEMENTI DOM ---
    const stickyHeader = document.getElementById('sticky-header-container');
    const searchInput = document.getElementById('search-input');
    const menuContent = document.getElementById('menu-content');
    const menuSections = document.querySelectorAll('.menu-category-section');
    const navLinks = document.querySelectorAll('#category-navigator a');
    const categoryNavigator = document.getElementById('category-navigator');
    const navigatorContainer = document.getElementById('category-navigator-container');
    const backToTopButton = document.getElementById('back-to-top');
    
    // Modali
    const standardModal = document.getElementById('modal-container');
    const coffeeModal = document.getElementById('coffee-modal-container');
    const beerModal = document.getElementById('beer-modal-container');
    const acquaModal = document.getElementById('acqua-modal-container');
    const vinoModal = document.getElementById('vino-modal-container');
    const amariModal = document.getElementById('amari-modal-container');
    
    // --- FUNZIONI ---

    function checkOpeningStatus() {
        const contactBanner = document.getElementById('contact-banner');
        if (!contactBanner) return;

        const now = new Date();
        const day = now.getDay(); // Domenica: 0, Lunedì: 1, ...
        const hour = now.getHours() + now.getMinutes() / 60;
        
        const todaysHours = settings.openingHours[day] || settings.openingHours.default;
        
        const isClosed = todaysHours.closed || !(hour >= todaysHours.open && hour < todaysHours.close);
        
        if (isClosed) {
            // Se il locale è chiuso, mostra l'intero banner di contatto
            contactBanner.style.display = 'block';
            
            // Assicurati che il messaggio di chiusura sia visibile (è nascosto di default in HTML)
            const bannerMessage = document.getElementById('closed-banner-message');
            if (bannerMessage) {
                bannerMessage.style.display = 'block';
            }
        } else {
            // Se il locale è aperto, nascondi l'intero banner di contatto
            contactBanner.style.display = 'none';
        }
    }

    function handleScrollAnimations() {
        function setBodyPadding() {
            if (stickyHeader) document.body.style.paddingTop = `${stickyHeader.offsetHeight}px`;
        }
        
        setBodyPadding();
        new ResizeObserver(setBodyPadding).observe(stickyHeader);

        window.addEventListener("scroll", () => {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            document.body.classList.toggle("scrolled", scrollTop > 10);
            if (backToTopButton) backToTopButton.classList.toggle('visible', window.pageYOffset > 300);
        }, { passive: true });
    }

    function handleSearch() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        const isSearching = searchTerm.length > 0;

        if (isSearching) {
            observer.disconnect();
        } else {
            menuSections.forEach(section => observer.observe(section));
        }

        menuSections.forEach(section => {
            let sectionHasVisibleItems = false;
            const itemsInSection = section.querySelectorAll('.menu-item');
            itemsInSection.forEach(item => {
                const title = item.querySelector('h3').textContent.toLowerCase();
                const description = item.querySelector('p.description').textContent.toLowerCase();
                const isMatch = !isSearching || title.includes(searchTerm) || description.includes(searchTerm);
                
                item.style.display = isMatch ? 'flex' : 'none';
                if (isMatch) sectionHasVisibleItems = true;
            });
            section.style.display = sectionHasVisibleItems ? 'block' : 'none';
        });
    }

    function openModal(itemElement) {
        // Logica per aprire il modale corretto in base all'ID dell'elemento
        switch (itemElement.id) {
            case 'caffe-item':
                coffeeModal?.classList.add('active');
                break;
            case 'tuborg-item':
                beerModal?.classList.add('active');
                break;
            case 'acqua-item':
                acquaModal?.classList.add('active');
                break;
            case 'vino-item':
                vinoModal?.classList.add('active');
                break;
            case 'amari-item':
                amariModal?.classList.add('active');
                break;
            default:
                // Apre il modale standard per tutti gli altri prodotti
                const modalImg = standardModal.querySelector('#modal-img');
                const modalTitle = standardModal.querySelector('#modal-title');
                const modalDescription = standardModal.querySelector('#modal-description');
                const modalAllergens = standardModal.querySelector('#modal-allergens');

                modalImg.src = itemElement.querySelector('img').src;
                modalTitle.textContent = itemElement.querySelector('h3').textContent;
                modalDescription.textContent = itemElement.querySelector('.description').textContent;
                
                const allergenData = itemElement.dataset.allergens;
                modalAllergens.innerHTML = '';
                if (allergenData) {
                    let html = '<h4>Allergeni presenti:</h4><ul>';
                    allergenData.split(',').forEach(num => {
                        const key = num.trim();
                        if (settings.allergenMap[key]) {
                            html += `<li><strong>${key}:</strong> ${settings.allergenMap[key]}</li>`;
                        }
                    });
                    html += '</ul>';
                    modalAllergens.innerHTML = html;
                }
                standardModal?.classList.add('active');
                break;
        }
    }

    function closeModal() {
        document.querySelectorAll('.modal-wrapper.active').forEach(modal => {
            modal.classList.remove('active');
        });
    }

    const observer = new IntersectionObserver((entries) => {
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
        rootMargin: `-${(stickyHeader?.offsetHeight || 130)}px 0px -45% 0px`
    });
    
    function setupOptionSelectors() {
        const selectors = document.querySelectorAll('.size-selector');
        
        function updatePriceDisplay(radioInput, selectorContainer) {
            const price = parseFloat(radioInput.dataset.price).toFixed(2);
            const targetDisplayId = selectorContainer.dataset.targetPriceDisplay;
            const priceDisplayElement = document.getElementById(targetDisplayId);

            if (priceDisplayElement) {
                priceDisplayElement.textContent = `€ ${price.replace('.', ',')}`;
            }
        }

        selectors.forEach(selector => {
            const initialCheckedInput = selector.querySelector('input[type="radio"]:checked');
            if (initialCheckedInput) {
                updatePriceDisplay(initialCheckedInput, selector);
            }

            selector.addEventListener('change', (event) => {
                if (event.target.type === 'radio') {
                    updatePriceDisplay(event.target, selector);
                }
            });
        });
    }

    // --- COLLEGAMENTO EVENTI ---
    if (searchInput) searchInput.addEventListener('input', handleSearch);
    if (backToTopButton) backToTopButton.addEventListener('click', () => window.scrollTo({ top: 0 }));
    
    if (menuContent) {
        menuContent.addEventListener('click', (e) => {
            const itemElement = e.target.closest('.menu-item');
            if (itemElement) {
                openModal(itemElement);
            }
        });
    }

    document.querySelectorAll('.modal-wrapper').forEach(m => m.addEventListener('click', (e) => { if (e.target === m) closeModal(); }));
    document.querySelectorAll('.modal-close').forEach(btn => btn.addEventListener('click', closeModal));
    
    menuSections.forEach(section => observer.observe(section));
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = document.querySelector(link.getAttribute('href'));
            if(targetSection) {
                const offsetTop = targetSection.offsetTop - (stickyHeader?.offsetHeight || 130) + 1;
                window.scrollTo({ top: offsetTop, behavior: 'smooth' });
            }
        });
    });

    function updateNavFades() {
        if (!categoryNavigator || !navigatorContainer) return;
        const { scrollLeft, scrollWidth, clientWidth } = categoryNavigator;
        navigatorContainer.classList.toggle('is-scrolled-start', scrollLeft > 5);
        navigatorContainer.classList.toggle('is-scrolled-end', scrollLeft < scrollWidth - clientWidth - 5);
    }
    if(categoryNavigator) categoryNavigator.addEventListener('scroll', updateNavFades, { passive: true });
    window.addEventListener('resize', updateNavFades);
    updateNavFades();

    // --- INIZIALIZZAZIONE ---
    checkOpeningStatus();
    handleScrollAnimations();
    setupOptionSelectors();
});
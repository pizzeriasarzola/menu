document.addEventListener('DOMContentLoaded', () => {

    // --- 1. SELEZIONE DEGLI ELEMENTI DEL DOM ---
    const stickyHeader = document.getElementById('sticky-header-container');
    const searchInput = document.getElementById('search-input');
    const menuContent = document.getElementById('menu-content');
    const backToTopButton = document.getElementById('back-to-top');
    const categoryNavigator = document.getElementById('category-navigator');
    const navigatorContainer = document.getElementById('category-navigator-container');
    
    const menuSections = document.querySelectorAll('.menu-category-section');
    const navLinks = document.querySelectorAll('#category-navigator a');
    const langButtons = document.querySelectorAll('.lang-btn');
    
    const translatableElements = document.querySelectorAll('[data-it]');
    const translatablePlaceholders = document.querySelectorAll('[data-it-placeholder]');

    // Modali
    const standardModal = document.getElementById('modal-container');
    const coffeeModal = document.getElementById('coffee-modal-container');
    const beerModal = document.getElementById('beer-modal-container');
    const vinoModal = document.getElementById('vino-modal-container');
    const amariModal = document.getElementById('amari-modal-container');

    // --- 2. IMPOSTAZIONI E DATI ---
    const settings = {
        allergenMap: { '1': 'Glutine', '2': 'Crostacei', '3': 'Uova', '4': 'Pesce', '5': 'Arachidi', '6': 'Soia', '7': 'Latte e lattosio', '8': 'Frutta a guscio', '9': 'Sedano', '10': 'Senape', '11': 'Semi di sesamo', '12': 'Anidride solforosa e solfiti', '13': 'Lupini', '14': 'Molluschi' }
    };

    // --- 3. DEFINIZIONE DELLE FUNZIONI PRINCIPALI ---

    function switchLanguage(lang) {
        if (!lang) return;
        if (menuContent) menuContent.style.visibility = 'hidden';

        translatableElements.forEach(el => {
            el.textContent = el.dataset[lang] || el.dataset['it'];
        });

        translatablePlaceholders.forEach(el => {
            const propName = `${lang}Placeholder`;
            el.placeholder = el.dataset[propName] || el.dataset['itPlaceholder'];
        });

        langButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });

        localStorage.setItem('preferredLanguage', lang);
        
        if (menuContent) setTimeout(() => { menuContent.style.visibility = 'visible'; }, 50);
    }
    
    function handleSearch() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        const isSearching = searchTerm.length > 0;

        menuSections.forEach(section => {
            let sectionHasVisibleItems = false;
            const itemsInSection = section.querySelectorAll('.menu-item');
            itemsInSection.forEach(item => {
                const title = item.querySelector('h3').textContent.toLowerCase();
                const description = item.querySelector('p.description').dataset.it.toLowerCase();
                const isMatch = title.includes(searchTerm) || description.includes(searchTerm);
                item.style.display = isMatch ? 'flex' : 'none';
                if (isMatch) sectionHasVisibleItems = true;
            });
            section.style.display = sectionHasVisibleItems ? 'block' : 'none';
        });

        if (isSearching) {
            observer.disconnect();
        } else {
            menuSections.forEach(section => observer.observe(section));
        }
    }

    function handlePageScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        document.body.classList.toggle("scrolled", scrollTop > 10);
        if (backToTopButton) {
            backToTopButton.classList.toggle('visible', scrollTop > 300);
        }
    }

    function setBodyPadding() {
        if (stickyHeader) {
            document.body.style.paddingTop = `${stickyHeader.offsetHeight}px`;
        }
    }

    function openModal(itemElement) {
        switch (itemElement.id) {
            case 'caffe-item': coffeeModal?.classList.add('active'); break;
            case 'tuborg-item': beerModal?.classList.add('active'); break;
            case 'vino-item': vinoModal?.classList.add('active'); break;
            case 'amari-item': amariModal?.classList.add('active'); break;
            default:
                const modalImg = standardModal.querySelector('#modal-img');
                const modalTitle = standardModal.querySelector('#modal-title');
                const modalDescription = standardModal.querySelector('#modal-description');
                const modalAllergens = standardModal.querySelector('#modal-allergens');

                modalImg.src = itemElement.querySelector('img').src;
                modalTitle.textContent = itemElement.querySelector('h3').textContent;
                
                const currentLang = localStorage.getItem('preferredLanguage') || 'it';
                const descriptionEl = itemElement.querySelector('.description');
                modalDescription.textContent = descriptionEl.dataset[currentLang] || descriptionEl.dataset.it;
                
                const allergenData = itemElement.dataset.allergens;
                modalAllergens.innerHTML = '';
                if (allergenData) {
                    const allergenTitle = { it: "Allergeni:", en: "Allergens:", es: "Alérgenos:", fr: "Allergènes:" };
                    let html = `<h4>${allergenTitle[currentLang]}</h4><ul>`;
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

    // --- FUNZIONE PER PREZZI DINAMICI (CAFFÈ, BIRRA, VINO) ---
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

    // --- 4. INIZIALIZZAZIONE DELL'OBSERVER PER LA NAVIGAZIONE ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                navLinks.forEach(link => {
                    const isActive = link.getAttribute('href') === `#${id}`;
                    link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
                });
            }
        });
    }, {
        rootMargin: `-${(stickyHeader?.offsetHeight || 100)}px 0px -50% 0px`
    });

    // --- 5. COLLEGAMENTO DEGLI EVENTI ---
    if (searchInput) searchInput.addEventListener('input', handleSearch);
    if (backToTopButton) backToTopButton.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    langButtons.forEach(button => button.addEventListener('click', () => switchLanguage(button.dataset.lang)));

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

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = document.querySelector(link.getAttribute('href'));
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - (stickyHeader?.offsetHeight || 100);
                window.scrollTo({ top: offsetTop, behavior: 'smooth' });
            }
        });
    });

    window.addEventListener('scroll', handlePageScroll, { passive: true });
    window.addEventListener('resize', setBodyPadding);

    // --- 6. ESECUZIONE INIZIALE ---
    menuSections.forEach(section => observer.observe(section));
    setBodyPadding();
    setupOptionSelectors(); // Esecuzione della funzione per i prezzi
    const preferredLanguage = localStorage.getItem('preferredLanguage') || 'it';
    switchLanguage(preferredLanguage);
});
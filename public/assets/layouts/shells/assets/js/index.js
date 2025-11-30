let loadPage = (d) => {
    d.e = ""; d.s = [];
    for (let i = 0, j = d.shells; i < j.length; i++) {
        d.e += shellFrame({
            i: i,
            f: (Math.random() + 1).toString(36).substring(7),
        });
        d.s.push(`assets/layouts/shells/${j[i]}.html`);
    }
    window.parent.postMessage({
        id: window.frameElement.id,
        action: "load-shells",
        tag: "iframe",
        shell: d.e,
        src: d.s,
        scroll: d.scroll,
        reset: d.reset
    });
},
shellFrame = (d) => {
    return`
        <div id="shell-${d.i}">
            <div>
                <div>
                    <iframe id="iframe-${d.f}" frameborder="0"></iframe>
                </div>
            </div>
        </div>
        <br />`;
},
_ux = {
    items: {
        [Math.random().toString(36).slice(2, 10)]: {
            id: Math.floor(Math.random() * 99999),
            pSN: "fSN20251022001",
            name: `THREEjs Ammo Kit`,
            desc: `A lightweight THREE.js + AMMO game engine with jQuery scripting, online/offline play, unlimited multiplayer, in-game chat, and customizable avatar controls.`,
            fulldesc: `This THREE.js + AMMO-powered game engine delivers a complete 3D development framework for creating dynamic, browser-based games. Built with jQuery for flexible scripting, it supports both online and offline gameplay modes, offering seamless multiplayer experiences with unlimited players and integrated in-game chat messaging. Developers can easily customize character behavior and controls through the avatar management script located at assets/js/wengine.js, enabling smooth real-time interactions and physics-driven environments. Ideal for developers seeking a lightweight yet powerful foundation for multiplayer 3D web games.<br><br>Please check if our products are helpful for your project, and feel free to explore our other items too. If you like this one, we’d really appreciate your feedback or a like!<br><br><p><strong>Support:</strong> All files are provided as-is and do not include support. You’re welcome to modify and use them in your own projects!</p>`,
            features: `Language: JQuery<br>Gameplay: Online/Offline<br>Multiplayer: Unlimited Players<br>Messaging: Gameplay Chat.`,
            url: `https://drive.google.com/u/5/uc?id=1zGsAtxMIPPbYwm8fLBuLTEsezdPIHxaP&export=download`,
            thumb: `assets/images/products/preview 001 THREEjs Ammo.webp`,
            slides: [
                "assets/images/products/preview 001 THREEjs Ammo.webp",
                "assets/images/products/preview 002 THREEjs Ammo.webp",
                "assets/images/products/preview 003 THREEjs Ammo.webp"
            ]
        },
        [Math.random().toString(36).slice(2, 10)]: {
            id: Math.floor(Math.random() * 99999),
            pSN: "fSN20251022002",
            name: `Edge Apartment`,
            desc: `A customizable Three.js engine with a demo level (Edge Apartment), optimized for WebGL and rapid prototyping to create immersive 3D worlds and web games.`,
            fulldesc: `A fully Three.js powered virtual experience engine demo featuring Edge Apartment as a complete sample level, showcasing smooth physics and lighting, built in JavaScript source code optimized for WebGL performance, rapid prototyping, and scalability, empowering developers, studios, and metaverse innovators to easily create immersive 3D worlds, interactive architectural environments, metaverse prototypes, and next generation browser based games.<br><br><a onclick=window.open('https://theneoverse.web.app/#virtualtour&&tours=edge-apartment') style='cursor: pointer'>Try demo</a><br><br>Please check if our products are helpful for your project, and feel free to explore our other items too. If you like this one, we’d really appreciate your feedback or a like!<br><br><p><strong>Support:</strong> All files are provided as-is and do not include support. You’re welcome to modify and use them in your own projects!</p>`,
            features: `Three.js source code, Cannon.js physics, generic avatars and prototype game level environment.`,
            demo: `window.open('https://theneoverse.web.app/#virtualtour&&tours=edge-apartment')`,
            url: `https://drive.google.com/u/5/uc?id=1qt6rpJQlnJWUr97QxHTYomGZucuNwV0q&export=download`,
            thumb: `assets/images/products/preview 001 Edge Apartment.webp`,
            slides: [
                "assets/images/products/preview 001 Edge Apartment.webp",
                "assets/images/products/preview 002 Edge Apartment.webp",
                "assets/images/products/preview 003 Edge Apartment.webp",
                "assets/images/products/preview 004 Edge Apartment.webp"
            ]
        },
        [Math.random().toString(36).slice(2, 10)]: {
            id: Math.floor(Math.random() * 99999),
            pSN: "fSN20251022003",
            name: `Land Creator`,
            desc: `A JavaScript-based land creator demo for Three.js developers, making it easy for indie creators to build expansive, realistic, and fully customizable 3D terrains`,
            fulldesc: `A JavaScript-based land creator demo for Three.js developers, making it easy for indie creators to build expansive, realistic, and fully customizable 3D terrains. This tool serves as an ideal foundation for developing immersive virtual worlds, open landscapes, and interactive environments within Three.js metaverse and game projects, it allows developers to create endless variations of terrain, from rolling hills and valleys to mountains, all optimized for smooth performance and seamless to integrate Three.js scenes on the mountainous terrains. Whether you’re starting a new open-world adventure, a creative sandbox, or a shared metaverse experience, this land creator provides the flexibility and control needed to bring your virtual worlds to life.<br><br><a onclick=window.open('https://theneoverse.web.app/#landcreators') style='cursor: pointer'>Try demo</a><br><br>Please check if our products are helpful for your project, and feel free to explore our other items too. If you like this one, we’d really appreciate your feedback or a like!<br><br><p><strong>Support:</strong> All files are provided as-is and do not include support. You’re welcome to modify and use them in your own projects!</p>`,
            features: `Land Creator source code.`,
            demo: `window.open('https://theneoverse.web.app/#landcreators')`,
            url: `https://drive.google.com/u/5/uc?id=1L29r3mlZLWaBUYLtLRZFJqmU85ZISMeN&export=download`,
            thumb: `assets/images/products/preview 001 Land Creator.webp`,
            slides: [
                "assets/images/products/preview 001 Land Creator.webp",
                "assets/images/products/preview 002 Land Creator.webp",
                "assets/images/products/preview 003 Land Creator.webp",
                "assets/images/products/preview 004 Land Creator.webp",
                "assets/images/products/preview 005 Land Creator.webp"
            ]
        },
        [Math.random().toString(36).slice(2, 10)]: {
            id: Math.floor(Math.random() * 99999),
            pSN: "fSN20251022004",
            name: `Desert`,
            desc: `A JavaScript-based desert creator demo for Three.js developers, making it easy for indie creators to build expansive, realistic, and fully customizable 3D terrains`,
            fulldesc: `A JavaScript-based desert creator demo for Three.js developers, making it easy for indie creators to build expansive, realistic, and fully customizable 3D terrains. This tool serves as an ideal foundation for developing immersive virtual worlds, open landscapes, and interactive environments within Three.js metaverse and game projects, it allows developers to create endless variations of terrain, from dunes and valleys, all optimized for smooth performance and seamless to integrate Three.js scenes on the mountainous terrains. Whether you’re starting a new open-world adventure, a creative sandbox, or a shared metaverse experience, this desert creator provides the flexibility and control needed to bring your virtual worlds to life.<br><br><a onclick=window.open('https://theneoverse.web.app/#desert') style='cursor: pointer'>Try demo</a><br><br>Please check if our products are helpful for your project, and feel free to explore our other items too. If you like this one, we’d really appreciate your feedback or a like!<br><br><p><strong>Support:</strong> All files are provided as-is and do not include support. You’re welcome to modify and use them in your own projects!</p>`,
            features: `Desert source code.`,
            demo: `window.open('https://theneoverse.web.app/#desert')`,
            url: `https://drive.google.com/u/5/uc?id=1tSrMdDE4v91DaaJvY-KrfvNJKdjdFr-O&export=download`,
            thumb: `assets/images/products/preview 001 Desert.webp`,
            slides: [
                "assets/images/products/preview 001 Desert.webp",
                "assets/images/products/preview 002 Desert.webp",
                "assets/images/products/preview 003 Desert.webp",
                "assets/images/products/preview 004 Desert.webp",
                "assets/images/products/preview 005 Desert.webp"
            ]
        },
        [Math.random().toString(36).slice(2, 10)]: {
            id: Math.floor(Math.random() * 99999),
            pSN: "fSN20251022005",
            name: `Facility Bunker`,
            desc: `A customizable Three.js engine with a demo level (Facility Bunker), optimized for WebGL and rapid prototyping to create immersive 3D worlds and web games.`,
            fulldesc: `A fully Three.js powered virtual experience engine demo featuring Facility Bunker as a complete sample level, showcasing smooth physics and lighting, built in JavaScript source code optimized for WebGL performance, rapid prototyping, and scalability, empowering developers, studios, and metaverse innovators to easily create immersive 3D worlds, interactive architectural environments, metaverse prototypes, and next generation browser based games.<br><br><a onclick=window.open('https://theneoverse.web.app/#virtualtour&&tours=fb') style='cursor: pointer'>Try demo</a><br><br>Please check if our products are helpful for your project, and feel free to explore our other items too. If you like this one, we’d really appreciate your feedback or a like!<br><br><p><strong>Support:</strong> All files are provided as-is and do not include support. You’re welcome to modify and use them in your own projects!</p>`,
            features: `Three.js source code, Cannon.js physics, generic avatars and prototype game level environment.`,
            demo: `window.open('https://theneoverse.web.app/#virtualtour&&tours=fb')`,
            url: `https://drive.google.com/u/5/uc?id=1L1q-sT7dPkU38BF6TXIxpIvD6AkODTBU&export=download`,
            thumb: `assets/images/products/preview 001 Facility Bunker.webp`,
            slides: [
                "assets/images/products/preview 001 Facility Bunker.webp",
                "assets/images/products/preview 002 Facility Bunker.webp",
                "assets/images/products/preview 003 Facility Bunker.webp",
                "assets/images/products/preview 004 Facility Bunker.webp",
                "assets/images/products/preview 005 Facility Bunker.webp",
                "assets/images/products/preview 006 Facility Bunker.webp"
            ]
        },
        [Math.random().toString(36).slice(2, 10)]: {
            id: Math.floor(Math.random() * 99999),
            pSN: "pSN20251022001",
            name: `Project Island City`,
            currency: `USD`,
            symbol: `$`,
            price: `2.00`,
            desc: `A customizable Three.js engine with a sample level (Project Island City), optimized for WebGL and rapid prototyping to create immersive 3D worlds and web games.`,
            fulldesc: `A fully customizable Three.js powered virtual experience engine featuring Project Island City as a complete sample level, showcasing smooth physics and lighting, built in JavaScript source code optimized for WebGL performance, rapid prototyping, and scalability, empowering developers, studios, and metaverse innovators to easily create immersive 3D worlds, interactive architectural environments, metaverse prototypes, and next generation browser based games.<br><br>Please check if our products are helpful for your project, and feel free to explore our other items too. If you like this one, we’d really appreciate your feedback or a like!<br><br><p><strong>Support:</strong> All files are provided as-is and do not include support. You’re welcome to modify and use them in your own projects!</p>`,
            features: `Three.js source code, Cannon.js physics, generic avatars and Island City game level environment.`,
            thumb: `assets/images/products/preview 001 Island.webp`,
            slides: [
                "assets/images/products/preview 001 Island.webp",
                "assets/images/products/preview 002 Island.webp",
                "assets/images/products/preview 003 Island.webp",
                "assets/images/products/preview 004 Island.webp"
            ]
        },
        [Math.random().toString(36).slice(2, 10)]: {
            id: Math.floor(Math.random() * 99999),
            pSN: "pSN20251022002",
            name: `Project Paperman`,
            currency: `USD`,
            symbol: `$`,
            price: `2.50`,
            desc: `A customizable Three.js engine with a sample level (Project Paperman), optimized for WebGL and rapid prototyping to create immersive 3D worlds and web games.`,
            fulldesc: `A fully customizable Three.js powered virtual experience engine featuring Project Paperman island city assets as a complete sample level, showcasing smooth physics and lighting, built in JavaScript source code optimized for WebGL performance, rapid prototyping, and scalability, empowering developers, studios, and metaverse innovators to easily create immersive 3D worlds, interactive architectural environments, metaverse prototypes, and next generation browser based games.<br><br>Please check if our products are helpful for your project, and feel free to explore our other items too. If you like this one, we’d really appreciate your feedback or a like!<br><br><p><strong>Support:</strong> All files are provided as-is and do not include support. You’re welcome to modify and use them in your own projects!</p>`,
            features: `Three.js source code, Cannon.js physics, generic paperman avatars and Island City game level environment.`,
            thumb: `assets/images/products/preview 001 Paperman.webp`,
            slides: [
                "assets/images/products/preview 001 Paperman.webp",
                "assets/images/products/preview 002 Paperman.webp",
                "assets/images/products/preview 003 Paperman.webp",
                "assets/images/products/preview 004 Paperman.webp",
                "assets/images/products/preview 005 Paperman.webp",
                "assets/images/products/preview 006 Paperman.webp"
            ]
        },
        [Math.random().toString(36).slice(2, 10)]: {
            id: Math.floor(Math.random() * 99999),
            pSN: "pSN20251022003",
            name: `Project Villa`,
            currency: `USD`,
            symbol: `$`,
            price: `1.00`,
            desc: `A customizable Three.js engine with a sample level (Project Villa), optimized for WebGL and rapid prototyping to create immersive 3D worlds and web games.`,
            fulldesc: `A fully customizable Three.js powered virtual experience engine featuring Project Villa as a complete sample level, showcasing smooth physics and lighting, built in JavaScript source code optimized for WebGL performance, rapid prototyping, and scalability, empowering developers, studios, and metaverse innovators to easily create immersive 3D worlds, interactive architectural environments, metaverse prototypes, and next generation browser based games.<br><br><a onclick=window.open('https://theneoverse.web.app/#realtours&&tours=tgv') style='cursor: pointer'>Try demo</a><br><br>Please check if our products are helpful for your project, and feel free to explore our other items too. If you like this one, we’d really appreciate your feedback or a like!<br><br><p><strong>Support:</strong> All files are provided as-is and do not include support. You’re welcome to modify and use them in your own projects!</p>`,
            features: `Three.js source code, Cannon.js physics, generic avatars and Villa game level environment.`,
            demo: `window.open('https://theneoverse.web.app/#realtours&&tours=tgv')`,
            thumb: `assets/images/products/preview 001 Villa.webp`,
            slides: [
                "assets/images/products/preview 001 Villa.webp",
                "assets/images/products/preview 002 Villa.webp",
                "assets/images/products/preview 003 Villa.webp"
            ]
        },
        [Math.random().toString(36).slice(2, 10)]: {
            id: Math.floor(Math.random() * 99999),
            pSN: "pSN20251022004",
            name: `Project DDust`,
            currency: `USD`,
            symbol: `$`,
            price: `0.50`,
            desc: `A customizable Three.js engine with a sample level (Project DDust), optimized for WebGL and rapid prototyping to create immersive 3D worlds and web games.`,
            fulldesc: `A fully customizable Three.js powered virtual experience engine featuring Project DDust as a complete sample level, showcasing smooth physics and lighting, built in JavaScript source code optimized for WebGL performance, rapid prototyping, and scalability, empowering developers, studios, and metaverse innovators to easily create immersive 3D worlds, interactive architectural environments, metaverse prototypes, and next generation browser based games.
            <br><br><a onclick=window.open('https://theneoverse.web.app/#virtualtour&&tours=csddust') style='cursor: pointer'>Try demo</a><br><br>Please check if our products are helpful for your project, and feel free to explore our other items too. If you like this one, we’d really appreciate your feedback or a like!<br><br><p><strong>Support:</strong> All files are provided as-is and do not include support. You’re welcome to modify and use them in your own projects!</p>`,
            features: `Three.js source code, Cannon.js physics, generic avatars and DDust game level environment.`,
            demo: `window.open('https://theneoverse.web.app/#virtualtour&&tours=csddust')`,
            thumb: `assets/images/products/preview 001 DDust.webp`,
            slides: [
                "assets/images/products/preview 001 DDust.webp",
                "assets/images/products/preview 002 DDust.webp",
                "assets/images/products/preview 003 DDust.webp"
            ]
        },
        [Math.random().toString(36).slice(2, 10)]: {
            id: Math.floor(Math.random() * 99999),
            pSN: "pSN20251022005",
            name: `Three.js WebGPU LOD`,
            currency: `USD`,
            symbol: `$`,
            price: `0.25`,
            desc: `Nanite like LOD system for Three.js WebGPU optimized for smooth, efficient, and scalable realtime rendering in browser based game engines.`,
            fulldesc: `Three.js WebGPU LOD - a Nanite-like Level of Detail system for Three.js, built for developers aiming to create browser based 3D game engines and all purpose realtime rendering applications to handle massive assets. It provides dynamic mesh adaptive detail scaling, realtime geometry management, and smooth transition handling optimized. The source code is organized for easy modification and integration, practical starting point to helps developers explore game engine development, bringing Nanite-like level of detail and efficient performance to any Three.js projects.<br><br><a onclick=window.open('https://theneoverse.web.app/#threeviewer&&load=12') style='cursor: pointer'>Try demo</a><br><br>Please check if our products are helpful for your project, and feel free to explore our other items too. If you like this one, we’d really appreciate your feedback or a like!<br><br><p><strong>Support:</strong> All files are provided as-is and do not include support. You’re welcome to modify and use them in your own projects!</p>`,
            features: `Three.js source code.`,
            demo: `window.open('https://theneoverse.web.app/#threeviewer&&load=12')`,
            thumb: `assets/images/products/preview 001 LOD.webp`,
            slides: [
                "assets/images/products/preview 001 LOD.webp",
                "assets/images/products/preview 002 LOD.webp",
                "assets/images/products/preview 003 LOD.webp"
            ]
        },
        [Math.random().toString(36).slice(2, 10)]: {
            id: Math.floor(Math.random() * 99999),
            pSN: "pSN20251022006",
            name: `Wrist Watch A.R.`,
            currency: `USD`,
            symbol: `$`,
            price: `96.00`,
            desc: `A real-time wristwatch AR experience powered by Mediapipe, featuring precise wrist tracking, a realistic 3D watch with occlusion, and cross-platform support for desktop and mobile.`,
            fulldesc: `An interactive wristwatch augmented reality source code that uses Mediapipe for precise wrist tracking and integrates a realistic 3D watch with natural occlusion, delivering a seamless, true-to-life AR experience on both desktop and mobile devices.<br><br><a onclick=window.open('https://theneoverse.web.app/#wrist-demo&&rolex') style='cursor: pointer'>Try demo</a><br><br>Please check if our products are helpful for your project, and feel free to explore our other items too. If you like this one, we’d really appreciate your feedback or a like!<br><br><p><strong>Support:</strong> All files are provided as-is and do not include support. You’re welcome to modify and use them in your own projects!</p>`,
            features: `Media Pipe wrist tracking source code and sample realistic 3d watch models.`,
            demo: `window.open('https://theneoverse.web.app/#wrist-demo&&rolex')`,
            thumb: `assets/images/products/preview 001 WristAR.webp`,
            slides: [
                "assets/images/products/preview 001 WristAR.webp",
                "assets/images/products/preview 002 WristAR.webp",
                "assets/images/products/preview 003 WristAR.webp",
                "assets/images/products/preview 004 WristAR.webp",
                "assets/images/products/preview 005 WristAR.webp"
            ]
        },
        [Math.random().toString(36).slice(2, 10)]: {
            id: Math.floor(Math.random() * 99999),
            pSN: "pSN20251022007",
            name: `Threejs Virtual Tours`,
            currency: `USD`,
            symbol: `$`,
            price: `5.00`,
            desc: `A customizable Three.js virtual tour engine for creating fast, immersive real estate browser tours optimized for WebGL and realtime performance.`,
            fulldesc: `A fully customizable Three.js powered virtual tour engine delivering smooth, high-performance browser experiences for real estate, design studios, and 3D consultancy projects, built in JavaScript and optimized for WebGL, rapid prototyping, and scalability, empowering developers and creators to craft immersive, interactive virtual tours with ease.<br><br>Instruction: in the menu, select <strong>SOLUTIONS</strong>, then <strong>VIRTUAL TOURS</strong>, then <strong>RENDERINGS</strong>, then <strong>SOLUTIONS</strong>, and finally select either 1. <strong>VILLA KITCHEN</strong> or 2. <strong>BATHROOM</strong>,<br><br><a onclick=window.open('https://theneoverse.web.app/#apexvt&&tours=villakitchen') style='cursor: pointer'>Try demo</a><br><br>Please check if our products are helpful for your project, and feel free to explore our other items too. If you like this one, we’d really appreciate your feedback or a like!<br><br><p><strong>Support:</strong> All files are provided as-is and do not include support. You’re welcome to modify and use them in your own projects!</p>`,
            features: `Three.js virtual tour engine source code, sample 360 tours bathroom and kitchen.`,
            demo: `window.open('https://theneoverse.web.app/#apexvt&&tours=villakitchen')`,
            thumb: `assets/images/products/preview 001 VirtualTours.webp`,
            slides: [
                "assets/images/products/preview 001 VirtualTours.webp",
                "assets/images/products/preview 002 VirtualTours.webp",
                "assets/images/products/preview 003 VirtualTours.webp",
                "assets/images/products/preview 004 VirtualTours.webp"
            ]
        },
        [Math.random().toString(36).slice(2, 10)]: {
            id: Math.floor(Math.random() * 99999),
            pSN: "pSN20251022008",
            name: `Garage Virtual Tours`,
            currency: `USD`,
            symbol: `$`,
            price: `3.00`,
            desc: `A customizable Three.js virtual tour engine for creating fast, immersive real estate browser tours optimized for WebGL and realtime performance.`,
            fulldesc: `A fully customizable Three.js powered virtual tour engine delivering smooth, high-performance browser experiences for real estate, design studios, and 3D consultancy projects, built in JavaScript and optimized for WebGL, rapid prototyping, and scalability, empowering developers and creators to craft immersive, interactive virtual tours with ease.<br><br><a onclick=window.open('https://theneoverse.web.app/#threeviewer&&load=0') style='cursor: pointer'>Try demo</a><br><br>Please check if our products are helpful for your project, and feel free to explore our other items too. If you like this one, we’d really appreciate your feedback or a like!<br><br><p><strong>Support:</strong> All files are provided as-is and do not include support. You’re welcome to modify and use them in your own projects!</p>`,
            features: `Three.js virtual tour engine source code and sample 360 tours scooter garage.`,
            demo: `window.open('https://theneoverse.web.app/#threeviewer&&load=0')`,
            thumb: `assets/images/products/preview 001 Garage.webp`,
            slides: [
                "assets/images/products/preview 001 Garage.webp",
                "assets/images/products/preview 002 Garage.webp",
                "assets/images/products/preview 003 Garage.webp",
                "assets/images/products/preview 004 Garage.webp"
            ]
        },
        [Math.random().toString(36).slice(2, 10)]: {
            id: Math.floor(Math.random() * 99999),
            pSN: "pSN20251022009",
            name: `Threejs Explore Device`,
            currency: `USD`,
            symbol: `$`,
            price: `2.5`,
            desc: `A customizable Three.js 3D model explorer with smooth animations that reveal internal components, ideal for creating interactive visualizations, virtual tours, and detailed product or architectural showcases.`,
            fulldesc: `A fully customizable Three.js 3D model explorer with smooth animation features that dynamically separates and reveals internal components, allowing users to create stunning interactive visualizations and immersive virtual product tours with ease. Designed for flexibility and performance, this project enables developers to showcase complex 3D models with precision, add interactive controls, camera transitions, and easily adapt it for product showcases, architectural previews, educational demonstrations, or mechanical explorations.<br><br><a onclick=window.open('https://theneoverse.web.app/#threeviewer&&controller') style='cursor: pointer'>Try demo</a><br><br>Please check if our products are helpful for your project, and feel free to explore our other items too. If you like this one, we’d really appreciate your feedback or a like!<br><br><p><strong>Support:</strong> All files are provided as-is and do not include support. You’re welcome to modify and use them in your own projects!</p>`,
            features: `Three.js explorer engine source code and 3d device model.`,
            demo: `window.open('https://theneoverse.web.app/#threeviewer&&controller')`,
            thumb: `assets/images/products/preview 001 Explore Device.webp`,
            slides: [
                "assets/images/products/preview 001 Explore Device.webp",
                "assets/images/products/preview 002 Explore Device.webp",
                "assets/images/products/preview 003 Explore Device.webp",
                "assets/images/products/preview 004 Explore Device.webp"
            ]
        },
        [Math.random().toString(36).slice(2, 10)]: {
            id: Math.floor(Math.random() * 99999),
            pSN: "pSN20251022010",
            name: `Vrrency E-Cash (υς24k)`,
            currency: `USD`,
            symbol: `$`,
            price: `0.05`,
            desc: `Vrrency (VCY 24,000.00) Electronic Cash, smart, secure, and offline-ready digital money for gamers, traders, and everyday users. Instantly purchase in-game or marketplace items, store value safely, and transfer funds via QR code, anytime, anywhere, with no banks, no delays, and no hidden fees.`,
            fulldesc: `Vrrency (VCY 24,000.00) Electronic Cash is your smart, secure, and offline-ready digital money, built for gamers, traders, and everyday users who want true freedom with their funds. With Vrrency (VCY) electronic cash, you can instantly purchase in-game and marketplace items, store real value safely on your device, and send or receive payments anytime, even without an internet connection. Fast, private, and borderless, Vrrency empowers you to trade peer-to-peer using simple QR code transfers, no banks, no delays, no hidden fees. Whether you’re upgrading your game, selling digital goods, or exchanging value with friends, VCY gives you full control of your money, anytime, anywhere.<br><br>Please check if our products are helpful for your project, and feel free to explore our other items too. If you like this one, we’d really appreciate your feedback or a like!<br><br><p><strong>Support:</strong> All files are provided as-is and do not include support. You’re welcome to modify and use them in your own projects!</p>`,
            features: `Vrrency (VCY) offline electronic cash.`,
            thumb: `assets/images/ecash qrcode.webp`,
            slides: [
                "assets/images/ecash qrcode.webp",
                "assets/images/ecash platform.webp",
                "1NmIAXIXk7c"
            ]
        },
        [Math.random().toString(36).slice(2, 10)]: {
            id: Math.floor(Math.random() * 99999),
            pSN: "pSN20251022011",
            name: `Threeverse Kit`,
            currency: `USD`,
            symbol: `$`,
            price: `0.50`,
            desc: `A customizable Three.js engine with a sample level (Prototype), optimized for WebGL and rapid prototyping to create immersive 3D worlds and web games.`,
            fulldesc: `A fully customizable Three.js powered virtual experience engine featuring prototype level as a complete sample level, showcasing smooth physics and lighting, built in JavaScript source code optimized for WebGL performance, rapid prototyping, and scalability, empowering developers, studios, and metaverse innovators to easily create immersive 3D worlds, interactive architectural environments, metaverse prototypes, and next generation browser based games.<br><br><a onclick=window.open('https://theneoverse.web.app/#virtualtour&&tours=prototype') style='cursor: pointer'>Try demo</a><br><br>Please check if our products are helpful for your project, and feel free to explore our other items too. If you like this one, we’d really appreciate your feedback or a like!<br><br><p><strong>Support:</strong> All files are provided as-is and do not include support. You’re welcome to modify and use them in your own projects!</p>`,
            features: `Three.js source code, Cannon.js physics, generic avatars and prototype game level environment.`,
            demo: `window.open('https://theneoverse.web.app/#virtualtour&&tours=prototype')`,
            thumb: `assets/images/products/preview 001 Prototype.webp`,
            slides: [
                "assets/images/products/preview 001 Prototype.webp",
                "assets/images/products/preview 002 Prototype.webp",
                "assets/images/products/preview 003 Prototype.webp",
                "assets/images/products/preview 004 Prototype.webp"
            ]
        },
        [Math.random().toString(36).slice(2, 10)]: {
            id: Math.floor(Math.random() * 99999),
            pSN: "pSN20251022012",
            name: `Three.js Lake Track`,
            currency: `USD`,
            symbol: `$`,
            price: `49.00`,
            desc: `A modular Three.js engine for building large scale browser based 3D worlds, featuring easy external asset integration, mesh simplification, parallax interiors, and modular avatars with optimized multiplayer animation.`,
            fulldesc: `A modular Three.js powered virtual experience engine written in JavaScript, designed for developing large scale open world or immersive environments for browser based gaming, simulation, or architectural visualization. It includes the “Lake Track” demo level, a small environment based on freely available 3D assets, used to demonstrate the engine’s ability to integrate external models and environments from common asset sources with minimal setup. The engine showcases scene organization, physics simulation, and performance optimization using an overdrive version of Cannon.js. It supports dynamic asset streaming for efficient resource handling, mesh simplification for managing complex geometry, and a parallax based interior projection system that simulates depth using a single plane cube mapping method. It also features an avatar customization system that allows mesh swapping for components such as hair, head, torso, pants, and shoes with configurable material colors. The avatar animation system is optimized for large multiplayer scenes by reducing animation update frequency for distant players, minimizing performance overhead and maintaining consistent WebGL performance across extensive virtual environments.<br><br><a onclick=window.open('https://theneoverse.web.app/#threeviewer&&lakelagoon') style='cursor: pointer'>Try demo</a><br><br>Please check if our products are helpful for your project, and feel free to explore our other items too. If you like this one, we’d really appreciate your feedback or a like!<br><br><p><strong>Support:</strong> All files are provided as-is and do not include support. You’re welcome to modify and use them in your own projects!</p>`,
            features: `Three.js source code, Cannon.js physics, generic avatars and lake track game level environment.`,
            demo: `window.open('https://theneoverse.web.app/#threeviewer&&lakelagoon')`,
            thumb: `assets/images/products/preview 001 Lake Track.webp`,
            slides: [
                "assets/images/products/preview 001 Lake Track.webp",
                "assets/images/products/preview 002 Lake Track.webp",
                "assets/images/products/preview 003 Lake Track.webp",
                "assets/images/products/preview 004 Lake Track.webp",
                "assets/images/products/preview 005 Lake Track.webp",
                "assets/images/products/preview 006 Lake Track.webp",
                "assets/images/products/preview 007 Lake Track.webp",
                "assets/images/products/preview 008 Lake Track.webp",
                "assets/images/products/instruction 001.webp",
                "assets/images/products/instruction 002.webp",
                "assets/images/products/instruction 003.webp",
                "assets/images/products/instruction 004.webp",
                "assets/images/products/instruction 005.webp"
            ]
        },
        [Math.random().toString(36).slice(2, 10)]: {
            id: Math.floor(Math.random() * 99999),
            pSN: "pSN20251022013",
            name: `Three.js Craterland`,
            currency: `USD`,
            symbol: `$`,
            price: `21.00`,
            desc: `A modular Three.js engine for building large scale browser based 3D worlds, featuring easy external asset integration, mesh simplification, parallax interiors, and modular avatars with optimized multiplayer animation.`,
            fulldesc: `A modular Three.js powered virtual experience engine written in JavaScript, designed for developing large scale open world or immersive environments for browser based gaming, simulation, or architectural visualization. It includes the “Craterland” demo level, a small environment based on freely available 3D assets, used to demonstrate the engine’s ability to integrate external models and environments from common asset sources with minimal setup. The engine showcases scene organization, physics simulation, and performance optimization using an overdrive version of Cannon.js. It supports dynamic asset streaming for efficient resource handling, mesh simplification for managing complex geometry, and a parallax based interior projection system that simulates depth using a single plane cube mapping method. It also features an avatar customization system that allows mesh swapping for components such as hair, head, torso, pants, and shoes with configurable material colors. The avatar animation system is optimized for large multiplayer scenes by reducing animation update frequency for distant players, minimizing performance overhead and maintaining consistent WebGL performance across extensive virtual environments.<br><br><a onclick=window.open('https://theneoverse.web.app/#threeviewer&&craterland') style='cursor: pointer'>Try demo</a><br><br>Please check if our products are helpful for your project, and feel free to explore our other items too. If you like this one, we’d really appreciate your feedback or a like!<br><br><p><strong>Support:</strong> All files are provided as-is and do not include support. You’re welcome to modify and use them in your own projects!</p>`,
            features: `Three.js source code, Cannon.js physics, generic avatars and Craterland game level environment.`,
            demo: `window.open('https://theneoverse.web.app/#threeviewer&&craterland')`,
            thumb: `assets/images/products/preview 001 Craterland.webp`,
            slides: [
                "assets/images/products/preview 001 Craterland.webp",
                "assets/images/products/preview 002 Craterland.webp",
                "assets/images/products/preview 003 Craterland.webp",
                "assets/images/products/preview 004 Craterland.webp",
                "assets/images/products/preview 005 Craterland.webp",
                "assets/images/products/preview 006 Craterland.webp",
                "assets/images/products/preview 007 Craterland.webp",
                "assets/images/products/preview 008 Craterland.webp",
                "assets/images/products/preview 009 Craterland.webp",
                "assets/images/products/preview 010 Craterland.webp",
                "assets/images/products/preview 011 Craterland.webp",
                "assets/images/products/instruction 001.webp",
                "assets/images/products/instruction 002.webp",
                "assets/images/products/instruction 003.webp",
                "assets/images/products/instruction 004.webp",
                "assets/images/products/instruction 005.webp"
            ]
        },
        [Math.random().toString(36).slice(2, 10)]: {
            id: Math.floor(Math.random() * 99999),
            pSN: "pSN20251022014",
            name: `3D Browser Game Kit`,
            currency: `USD`,
            symbol: `$`,
            price: `0.15`,
            desc: `A customizable Three.js engine with a sample level (Game Kit), optimized for WebGL and rapid prototyping to create immersive 3D worlds and web games.`,
            fulldesc: `A fully customizable Three.js powered virtual experience engine featuring Game Kit assets as a complete sample level, showcasing smooth physics and lighting, built in JavaScript source code optimized for WebGL performance, rapid prototyping, and scalability, empowering developers, studios, and metaverse innovators to easily create immersive 3D worlds, interactive architectural environments, metaverse prototypes, and next generation browser based games.<br><br>Please check if our products are helpful for your project, and feel free to explore our other items too. If you like this one, we’d really appreciate your feedback or a like!<br><br><p><strong>Support:</strong> All files are provided as-is and do not include support. You’re welcome to modify and use them in your own projects!</p>`,
            features: `Three.js source code, Cannon.js physics, generic avatars and Game Kit assets game level environment.`,
            thumb: `assets/images/products/preview 001 Game Kit.webp`,
            slides: [
                "assets/images/products/preview 001 Game Kit.webp",
                "assets/images/products/preview 002 Game Kit.webp",
                "assets/images/products/preview 003 Game Kit.webp"
            ]
        },
        [Math.random().toString(36).slice(2, 10)]: {
            id: Math.floor(Math.random() * 99999),
            pSN: "pSN20251022015",
            name: `Apartment Interior`,
            currency: `USD`,
            symbol: `$`,
            price: `0.25`,
            desc: `A customizable Three.js engine with a sample level (Apartment Interior), optimized for WebGL and rapid prototyping to create immersive 3D worlds and web games.`,
            fulldesc: `A fully customizable Three.js powered virtual experience engine featuring Apartment Interior assets as a complete sample level, showcasing smooth physics and lighting, built in JavaScript source code optimized for WebGL performance, rapid prototyping, and scalability, empowering developers, studios, and metaverse innovators to easily create immersive 3D worlds, interactive architectural environments, metaverse prototypes, and next generation browser based games.<br><br>Please check if our products are helpful for your project, and feel free to explore our other items too. If you like this one, we’d really appreciate your feedback or a like!<br><br><p><strong>Support:</strong> All files are provided as-is and do not include support. You’re welcome to modify and use them in your own projects!</p>`,
            features: `Three.js source code, Cannon.js physics, generic avatars and Apartment Interior assets game level environment.`,
            thumb: `assets/images/products/preview 001 Apartment Interior.webp`,
            slides: [
                "assets/images/products/preview 001 Apartment Interior.webp",
                "assets/images/products/preview 002 Apartment Interior.webp",
                "assets/images/products/preview 003 Apartment Interior.webp"
            ]
        },
        [Math.random().toString(36).slice(2, 10)]: {
            id: Math.floor(Math.random() * 99999),
            pSN: "pSN20251022016",
            name: `Game [Cash Survivor]`,
            currency: `USD`,
            symbol: `$`,
            price: `0.50`,
            desc: `A customizable Three.js engine with a sample level (Cash Survivor), optimized for WebGL and rapid prototyping to create immersive 3D worlds and web games.`,
            fulldesc: `A fully customizable Three.js powered virtual experience engine featuring Cash Survivor assets as a complete sample level, showcasing smooth physics and lighting, built in JavaScript source code optimized for WebGL performance, rapid prototyping, and scalability, empowering developers, studios, and metaverse innovators to easily create immersive 3D worlds, interactive architectural environments, metaverse prototypes, and next generation browser based games.<br><br><a onclick=window.open('https://theneoverse.web.app/#cashsurvivor') style='cursor: pointer'>Try demo</a><br><br>Please check if our products are helpful for your project, and feel free to explore our other items too. If you like this one, we’d really appreciate your feedback or a like!<br><br><p><strong>Support:</strong> All files are provided as-is and do not include support. You’re welcome to modify and use them in your own projects!</p>`,
            features: `Three.js source code, Cannon.js physics, generic avatars and Cash Survivor assets game level environment.`,
            demo: `window.open('https://theneoverse.web.app/#cashsurvivor')`,
            thumb: `assets/images/products/preview 001 Cash Survivor.webp`,
            slides: [
                "assets/images/products/preview 001 Cash Survivor.webp",
                "assets/images/products/preview 002 Cash Survivor.webp",
                "assets/images/products/preview 003 Cash Survivor.webp",
                "assets/images/products/preview 004 Cash Survivor.webp"
            ]
        },
        [Math.random().toString(36).slice(2, 10)]: {
            id: Math.floor(Math.random() * 99999),
            pSN: "pSN20251022017",
            name: `Moutain Pool`,
            currency: `USD`,
            symbol: `$`,
            price: `0.05`,
            desc: `A customizable Three.js engine with a sample level (Moutain Pool), optimized for WebGL and rapid prototyping to create immersive 3D worlds and web games.`,
            fulldesc: `A fully customizable Three.js powered virtual experience engine featuring Moutain Pool assets as a complete sample level, showcasing smooth physics and lighting, built in JavaScript source code optimized for WebGL performance, rapid prototyping, and scalability, empowering developers, studios, and metaverse innovators to easily create immersive 3D worlds, interactive architectural environments, metaverse prototypes, and next generation browser based games.<br><br>Please check if our products are helpful for your project, and feel free to explore our other items too. If you like this one, we’d really appreciate your feedback or a like!<br><br><p><strong>Support:</strong> All files are provided as-is and do not include support. You’re welcome to modify and use them in your own projects!</p>`,
            features: `Three.js source code, Cannon.js physics, generic avatars and Moutain Pool assets game level environment.`,
            thumb: `assets/images/products/preview 001 Moutain Pool.webp`,
            slides: [
                "assets/images/products/preview 001 Moutain Pool.webp",
                "assets/images/products/preview 002 Moutain Pool.webp",
                "assets/images/products/preview 003 Moutain Pool.webp"
            ]
        },
        [Math.random().toString(36).slice(2, 10)]: {
            id: Math.floor(Math.random() * 99999),
            pSN: "pSN20251022018",
            name: `Pavilion Dining`,
            currency: `USD`,
            symbol: `$`,
            price: `0.10`,
            desc: `A customizable Three.js engine with a sample level (Pavilion Dining), optimized for WebGL and rapid prototyping to create immersive 3D worlds and web games.`,
            fulldesc: `A fully customizable Three.js powered virtual experience engine featuring Pavilion Dining assets as a complete sample level, showcasing smooth physics and lighting, built in JavaScript source code optimized for WebGL performance, rapid prototyping, and scalability, empowering developers, studios, and metaverse innovators to easily create immersive 3D worlds, interactive architectural environments, metaverse prototypes, and next generation browser based games.<br><br>Please check if our products are helpful for your project, and feel free to explore our other items too. If you like this one, we’d really appreciate your feedback or a like!<br><br><p><strong>Support:</strong> All files are provided as-is and do not include support. You’re welcome to modify and use them in your own projects!</p>`,
            features: `Three.js source code, Cannon.js physics, generic avatars and Pavilion Dining assets game level environment.`,
            thumb: `assets/images/products/preview 001 Pavilion Dining.webp`,
            slides: [
                "assets/images/products/preview 001 Pavilion Dining.webp",
                "assets/images/products/preview 002 Pavilion Dining.webp",
                "assets/images/products/preview 003 Pavilion Dining.webp"
            ]
        },
        [Math.random().toString(36).slice(2, 10)]: {
            id: Math.floor(Math.random() * 99999),
            pSN: "pSN20251022019",
            name: `Real Estate Apartment`,
            currency: `USD`,
            symbol: `$`,
            price: `0.10`,
            desc: `A customizable Three.js engine with a sample level (Apartment), optimized for WebGL and rapid prototyping to create immersive 3D worlds and web games.`,
            fulldesc: `A fully customizable Three.js powered virtual experience engine featuring Apartment assets as a complete sample level, showcasing smooth physics and lighting, built in JavaScript source code optimized for WebGL performance, rapid prototyping, and scalability, empowering developers, studios, and metaverse innovators to easily create immersive 3D worlds, interactive architectural environments, metaverse prototypes, and next generation browser based games.<br><br>Please check if our products are helpful for your project, and feel free to explore our other items too. If you like this one, we’d really appreciate your feedback or a like!<br><br><p><strong>Support:</strong> All files are provided as-is and do not include support. You’re welcome to modify and use them in your own projects!</p>`,
            features: `Three.js source code, Cannon.js physics, generic avatars and Apartment assets game level environment.`,
            thumb: `assets/images/products/preview 001 Apartment.webp`,
            slides: [
                "assets/images/products/preview 001 Apartment.webp",
                "assets/images/products/preview 002 Apartment.webp",
                "assets/images/products/preview 003 Apartment.webp"
            ]
        },
        [Math.random().toString(36).slice(2, 10)]: {
            id: Math.floor(Math.random() * 99999),
            pSN: "pSN20251022020",
            name: `Resto de Teo`,
            currency: `USD`,
            symbol: `$`,
            price: `0.10`,
            desc: `A customizable Three.js engine with a sample level (Resto de Teo), optimized for WebGL and rapid prototyping to create immersive 3D worlds and web games.`,
            fulldesc: `A fully customizable Three.js powered virtual experience engine featuring Resto de Teo assets as a complete sample level, showcasing smooth physics and lighting, built in JavaScript source code optimized for WebGL performance, rapid prototyping, and scalability, empowering developers, studios, and metaverse innovators to easily create immersive 3D worlds, interactive architectural environments, metaverse prototypes, and next generation browser based games.<br><br>Please check if our products are helpful for your project, and feel free to explore our other items too. If you like this one, we’d really appreciate your feedback or a like!<br><br><p><strong>Support:</strong> All files are provided as-is and do not include support. You’re welcome to modify and use them in your own projects!</p>`,
            features: `Three.js source code, Cannon.js physics, generic avatars and Resto de Teo assets game level environment.`,
            thumb: `assets/images/products/preview 001 Resto de Teo.webp`,
            slides: [
                "assets/images/products/preview 001 Resto de Teo.webp",
                "assets/images/products/preview 002 Resto de Teo.webp",
                "assets/images/products/preview 003 Resto de Teo.webp"
            ]
        },
        [Math.random().toString(36).slice(2, 10)]: {
            id: Math.floor(Math.random() * 99999),
            pSN: "pSN20251022021",
            name: `Small Flat`,
            currency: `USD`,
            symbol: `$`,
            price: `0.10`,
            desc: `A customizable Three.js engine with a sample level (Small Flat), optimized for WebGL and rapid prototyping to create immersive 3D worlds and web games.`,
            fulldesc: `A fully customizable Three.js powered virtual experience engine featuring Small Flat assets as a complete sample level, showcasing smooth physics and lighting, built in JavaScript source code optimized for WebGL performance, rapid prototyping, and scalability, empowering developers, studios, and metaverse innovators to easily create immersive 3D worlds, interactive architectural environments, metaverse prototypes, and next generation browser based games.<br><br>Please check if our products are helpful for your project, and feel free to explore our other items too. If you like this one, we’d really appreciate your feedback or a like!<br><br><p><strong>Support:</strong> All files are provided as-is and do not include support. You’re welcome to modify and use them in your own projects!</p>`,
            features: `Three.js source code, Cannon.js physics, generic avatars and Small Flat assets game level environment.`,
            thumb: `assets/images/products/preview 001 Small Flat.webp`,
            slides: [
                "assets/images/products/preview 001 Small Flat.webp",
                "assets/images/products/preview 002 Small Flat.webp",
                "assets/images/products/preview 003 Small Flat.webp"
            ]
        },
        [Math.random().toString(36).slice(2, 10)]: {
            id: Math.floor(Math.random() * 99999),
            pSN: "pSN20251022022",
            name: `The Backrooms`,
            currency: `USD`,
            symbol: `$`,
            price: `0.05`,
            desc: `A customizable Three.js engine with a sample level (The Backrooms), optimized for WebGL and rapid prototyping to create immersive 3D worlds and web games.`,
            fulldesc: `A fully customizable Three.js powered virtual experience engine featuring The Backrooms assets as a complete sample level, showcasing smooth physics and lighting, built in JavaScript source code optimized for WebGL performance, rapid prototyping, and scalability, empowering developers, studios, and metaverse innovators to easily create immersive 3D worlds, interactive architectural environments, metaverse prototypes, and next generation browser based games.<br><br>Please check if our products are helpful for your project, and feel free to explore our other items too. If you like this one, we’d really appreciate your feedback or a like!<br><br><p><strong>Support:</strong> All files are provided as-is and do not include support. You’re welcome to modify and use them in your own projects!</p>`,
            features: `Three.js source code, Cannon.js physics, generic avatars and The Backrooms assets game level environment.`,
            thumb: `assets/images/products/preview 001 Backrooms.webp`,
            slides: [
                "assets/images/products/preview 001 Backrooms.webp",
                "assets/images/products/preview 002 Backrooms.webp",
                "assets/images/products/preview 003 Backrooms.webp"
            ]
        },
        [Math.random().toString(36).slice(2, 10)]: {
            id: Math.floor(Math.random() * 99999),
            pSN: "pSN20251022023",
            name: `Tower Home Apartment`,
            currency: `USD`,
            symbol: `$`,
            price: `0.15`,
            desc: `A customizable Three.js engine with a sample level (Tower Home Apartment), optimized for WebGL and rapid prototyping to create immersive 3D worlds and web games.`,
            fulldesc: `A fully customizable Three.js powered virtual experience engine featuring Tower Home Apartment assets as a complete sample level, showcasing smooth physics and lighting, built in JavaScript source code optimized for WebGL performance, rapid prototyping, and scalability, empowering developers, studios, and metaverse innovators to easily create immersive 3D worlds, interactive architectural environments, metaverse prototypes, and next generation browser based games.<br><br>Please check if our products are helpful for your project, and feel free to explore our other items too. If you like this one, we’d really appreciate your feedback or a like!<br><br><p><strong>Support:</strong> All files are provided as-is and do not include support. You’re welcome to modify and use them in your own projects!</p>`,
            features: `Three.js source code, Cannon.js physics, generic avatars and Tower Home Apartment assets game level environment.`,
            thumb: `assets/images/products/preview 001 Tower Home Apartment.webp`,
            slides: [
                "assets/images/products/preview 001 Tower Home Apartment.webp",
                "assets/images/products/preview 002 Tower Home Apartment.webp",
                "assets/images/products/preview 003 Tower Home Apartment.webp"
            ]
        },
        [Math.random().toString(36).slice(2, 10)]: {
            id: Math.floor(Math.random() * 99999),
            pSN: "pSN20251022024",
            name: `Crateria City 3D Model`,
            currency: `USD`,
            symbol: `$`,
            price: `3.50`,
            desc: `Crater City Megascape, a modular 3D environment built inside a vast oceanic crater turned futuristic island city, featuring elevated districts, grand bridges, and a central research zone for immersive web experiences.`,
            fulldesc: `Explore the Crater City Megascape, a Game-Ready, Modular 3D Environment for Web-Based Experiences. Welcome to Crater City, a captivating small city built inside and around a massive, ancient impact crater, now repurposed into a thriving, high-tech island civilization. Surrounded by a monumental retaining wall engineered to hold back the powerful tides of the open sea, this one-of-a-kind environment creates the perfect setting for scientific discovery, futuristic exploration, and immersive gameplay. At the heart of this dramatic terrain lies the central crater, a place of mystery and wonder preserved for research, protected from flooding, and fully integrated into the city’s layout. Around the crater, three fully-developed cities are strategically built, each perched on its own elevated platform, and connected by long structural bridges that span over water and terrain.<br><br><a onclick=window.open('https://theneoverse.web.app/#threeviewer&&crateria') style='cursor: pointer'>Live Tour</a><br><br>Please check if our products are helpful for your project, and feel free to explore our other items too. If you like this one, we’d really appreciate your feedback or a like!<br><br><p><strong>Support:</strong> All files are provided as-is and do not include support. You’re welcome to modify and use them in your own projects!</p>`,
            features: `Massive crater city with unique terrain for exploration and gameplay. Three interconnected cities built around the crater. Spaceports for advanced transportation storytelling. Multiple sub-islands, all connected via sleek bridges. Perfect for sci-fi, futuristic, urban, or post-apocalyptic worldbuilding. Designed for Three.js 3D Browser game engine.`,
            demo: `window.open('https://theneoverse.web.app/#threeviewer&&crateria')`,
            thumb: `assets/images/city 00.webp`,
            slides: [
                "assets/images/city 00.webp",
                "assets/images/city 01.webp",
                "assets/images/city 02.webp",
                "assets/images/city 03.webp",
                "assets/images/city 04.webp",
                "assets/images/city 05.webp",
                "assets/images/city 06.webp",
                "assets/images/city 07.webp",
                "assets/images/city 08.webp"
            ]
        },
        [Math.random().toString(36).slice(2, 10)]: {
            id: Math.floor(Math.random() * 99999),
            pSN: "pSN20251022025",
            name: `Serini & Suron Island Cities 3D Model`,
            currency: `USD`,
            symbol: `$`,
            price: `4.00`,
            desc: `A modular island city environment featuring detailed roads, buildings, and platform zones for realistic urban scenes. Optimized for Three.js and Cannon.js, it’s perfect for browser-based games and world-building with smooth performance and flexible level design.`,
            fulldesc: `This 3D environment features a detailed small island surrounded by attached and separate reclaimed platform cities, designed with road networks, overpasses, underpasses, generic buildings, and essential city assets for realistic urban scenes. Perfect for 3D browser gaming, the island city is fully optimized for Three.js and Cannon.js virtual experience engines, ensuring smooth performance and efficient rendering. The scene includes major geographic features, island mountain Serini and Suron, which are fragmented and modular for better handling in game engines. The setup includes both attached and standalone platform structures, offering flexibility for level design, exploration, and world-building.<br><br><a onclick=window.open('https://theneoverse.web.app/#serini&&serini') style='cursor: pointer'>Live Tour</a><br><br>Please check if our products are helpful for your project, and feel free to explore our other items too. If you like this one, we’d really appreciate your feedback or a like!<br><br><p><strong>Support:</strong> All files are provided as-is and do not include support. You’re welcome to modify and use them in your own projects!</p>`,
            features: `Massive islands Serini and Suron, Four interconnected cities built on artificial platforms. Spaceports. Designed for Three.js 3D Browser game engine.`,
            demo: `window.open('https://theneoverse.web.app/#serini&&serini')`,
            thumb: `assets/images/serini 01.webp`,
            slides: [
                "assets/images/serini 01.webp",
                "assets/images/serini 02.webp",
                "assets/images/serini 03.webp",
                "assets/images/serini 04.webp",
                "assets/images/serini 05.webp",
                "assets/images/serini 06.webp",
                "assets/images/serini 07.webp",
                "assets/images/serini 08.webp",
                "assets/images/serini 09.webp",
                "assets/images/serini 10.webp"
            ]
        },
        [Math.random().toString(36).slice(2, 10)]: {
            id: Math.floor(Math.random() * 99999),
            pSN: "pSN20251022026",
            name: `Three.js Cratergale`,
            currency: `USD`,
            symbol: `$`,
            price: `37.00`,
            desc: `A modular Three.js engine for building large scale browser based 3D worlds, featuring easy external asset integration, mesh simplification, parallax interiors, and modular avatars with optimized multiplayer animation.`,
            fulldesc: `A modular Three.js powered virtual experience engine written in JavaScript, designed for developing large scale open world or immersive environments for browser based gaming, simulation, or architectural visualization. It includes the “Cratergale” demo level, a small environment based on freely available 3D assets, used to demonstrate the engine’s ability to integrate external models and environments from common asset sources with minimal setup. The engine showcases scene organization, physics simulation, and performance optimization using an overdrive version of Cannon.js. It supports dynamic asset streaming for efficient resource handling, mesh simplification for managing complex geometry, and a parallax based interior projection system that simulates depth using a single plane cube mapping method. It also features an avatar customization system that allows mesh swapping for components such as hair, head, torso, pants, and shoes with configurable material colors. The avatar animation system is optimized for large multiplayer scenes by reducing animation update frequency for distant players, minimizing performance overhead and maintaining consistent WebGL performance across extensive virtual environments.<br><br><a onclick=window.open('https://theneoverse.web.app/#threeviewer&&cratergale') style='cursor: pointer'>Try demo</a><br><br>Please check if our products are helpful for your project, and feel free to explore our other items too. If you like this one, we’d really appreciate your feedback or a like!<br><br><p><strong>Support:</strong> All files are provided as-is and do not include support. You’re welcome to modify and use them in your own projects!</p>`,
            features: `Three.js source code, Cannon.js physics, generic avatars and Cratergale game level environment.`,
            demo: `window.open('https://theneoverse.web.app/#threeviewer&&cratergale')`,
            thumb: `assets/images/products/preview 001 Cratergale.webp`,
            slides: [
                "assets/images/products/preview 001 Cratergale.webp",
                "assets/images/products/preview 002 Cratergale.webp",
                "assets/images/products/preview 003 Cratergale.webp",
                "assets/images/products/preview 004 Cratergale.webp",
                "assets/images/products/preview 005 Cratergale.webp",
                "assets/images/products/preview 006 Cratergale.webp",
                "assets/images/products/preview 007 Cratergale.webp",
                "assets/images/products/preview 008 Cratergale.webp",
                "assets/images/products/preview 009 Cratergale.webp",
                "assets/images/products/instruction 001.webp",
                "assets/images/products/instruction 002.webp",
                "assets/images/products/instruction 003.webp",
                "assets/images/products/instruction 004.webp",
                "assets/images/products/instruction 005.webp"
            ]
        },
        [Math.random().toString(36).slice(2, 10)]: {
            id: Math.floor(Math.random() * 99999),
            pSN: "pSN20251022027",
            name: `Air King 3D Model`,
            currency: `USD`,
            symbol: `$`,
            price: `24.00`,
            desc: `A realistic Rolex Air King 3D model, fully textured and baked for a polished finish, available in Blender and GLB format—ideal for three.js, WebGL, and high-quality 3D projects.`,
            fulldesc: `A realistic Rolex Air King 3D model created with attention to detail and precision. The model is fully textured and baked for a clean, polished look and smooth performance in real-time environments. Delivered in Blender and GLB formats, it is ready to use for three.js, WebGL, AR/VR, and other 3D development projects. Ideal for developers and designers who need a high-quality, optimized asset that looks realistic and performs efficiently.<br><br>Please check if our products are helpful for your project, and feel free to explore our other items too. If you like this one, we’d really appreciate your feedback or a like!<br><br><p><strong>Support:</strong> All files are provided as-is and do not include support. You’re welcome to modify and use them in your own projects!</p>`,
            features: `Air King blender and compressed glb 3d model, ready for Three.js integration.`,
            thumb: `assets/images/products/air-king 001.webp`,
            slides: [
                "assets/images/products/air-king 001.webp",
                "assets/images/products/air-king 002.webp",
                "assets/images/products/air-king 003.webp"
            ]
        },
        [Math.random().toString(36).slice(2, 10)]: {
            id: Math.floor(Math.random() * 99999),
            pSN: "pSN20251022028",
            name: `Datejust 3D Model`,
            currency: `USD`,
            symbol: `$`,
            price: `24.00`,
            desc: `A realistic Rolex Datejust 3D model, fully textured and baked for a polished finish, available in Blender and GLB format—ideal for three.js, WebGL, and high-quality 3D projects.`,
            fulldesc: `A realistic Rolex Datejust 3D model created with attention to detail and precision. The model is fully textured and baked for a clean, polished look and smooth performance in real-time environments. Delivered in Blender and GLB formats, it is ready to use for three.js, WebGL, AR/VR, and other 3D development projects. Ideal for developers and designers who need a high-quality, optimized asset that looks realistic and performs efficiently.<br><br>Please check if our products are helpful for your project, and feel free to explore our other items too. If you like this one, we’d really appreciate your feedback or a like!<br><br><p><strong>Support:</strong> All files are provided as-is and do not include support. You’re welcome to modify and use them in your own projects!</p>`,
            features: `Datejust blender and compressed glb 3d model, ready for Three.js integration.`,
            thumb: `assets/images/products/datejust 001.webp`,
            slides: [
                "assets/images/products/datejust 001.webp",
                "assets/images/products/datejust 002.webp",
                "assets/images/products/datejust 003.webp"
            ]
        },
        [Math.random().toString(36).slice(2, 10)]: {
            id: Math.floor(Math.random() * 99999),
            pSN: "pSN20251022029",
            name: `Daydate 3D Model`,
            currency: `USD`,
            symbol: `$`,
            price: `24.00`,
            desc: `A realistic Rolex Daydate 3D model, fully textured and baked for a polished finish, available in Blender and GLB format—ideal for three.js, WebGL, and high-quality 3D projects.`,
            fulldesc: `A realistic Rolex Daydate 3D model created with attention to detail and precision. The model is fully textured and baked for a clean, polished look and smooth performance in real-time environments. Delivered in Blender and GLB formats, it is ready to use for three.js, WebGL, AR/VR, and other 3D development projects. Ideal for developers and designers who need a high-quality, optimized asset that looks realistic and performs efficiently.<br><br>Please check if our products are helpful for your project, and feel free to explore our other items too. If you like this one, we’d really appreciate your feedback or a like!<br><br><p><strong>Support:</strong> All files are provided as-is and do not include support. You’re welcome to modify and use them in your own projects!</p>`,
            features: `Daydate blender and compressed glb 3d model, ready for Three.js integration.`,
            thumb: `assets/images/products/daydate 001.webp`,
            slides: [
                "assets/images/products/daydate 001.webp",
                "assets/images/products/daydate 002.webp",
                "assets/images/products/daydate 003.webp"
            ]
        },
        [Math.random().toString(36).slice(2, 10)]: {
            id: Math.floor(Math.random() * 99999),
            pSN: "pSN20251022030",
            name: `Daytona 3D Model`,
            currency: `USD`,
            symbol: `$`,
            price: `24.00`,
            desc: `A realistic Rolex Daytona 3D model, fully textured and baked for a polished finish, available in Blender and GLB format—ideal for three.js, WebGL, and high-quality 3D projects.`,
            fulldesc: `A realistic Rolex Daytona 3D model created with attention to detail and precision. The model is fully textured and baked for a clean, polished look and smooth performance in real-time environments. Delivered in Blender and GLB formats, it is ready to use for three.js, WebGL, AR/VR, and other 3D development projects. Ideal for developers and designers who need a high-quality, optimized asset that looks realistic and performs efficiently.<br><br>Please check if our products are helpful for your project, and feel free to explore our other items too. If you like this one, we’d really appreciate your feedback or a like!<br><br><p><strong>Support:</strong> All files are provided as-is and do not include support. You’re welcome to modify and use them in your own projects!</p>`,
            features: `Daytona blender and compressed glb 3d model, ready for Three.js integration.`,
            thumb: `assets/images/products/daytona 001.webp`,
            slides: [
                "assets/images/products/daytona 001.webp",
                "assets/images/products/daytona 002.webp",
                "assets/images/products/daytona 003.webp"
            ]
        },
        [Math.random().toString(36).slice(2, 10)]: {
            id: Math.floor(Math.random() * 99999),
            pSN: "pSN20251022031",
            name: `Deepsea 3D Model`,
            currency: `USD`,
            symbol: `$`,
            price: `24.00`,
            desc: `A realistic Rolex Deepsea 3D model, fully textured and baked for a polished finish, available in Blender and GLB format—ideal for three.js, WebGL, and high-quality 3D projects.`,
            fulldesc: `A realistic Rolex Deepsea 3D model created with attention to detail and precision. The model is fully textured and baked for a clean, polished look and smooth performance in real-time environments. Delivered in Blender and GLB formats, it is ready to use for three.js, WebGL, AR/VR, and other 3D development projects. Ideal for developers and designers who need a high-quality, optimized asset that looks realistic and performs efficiently.<br><br>Please check if our products are helpful for your project, and feel free to explore our other items too. If you like this one, we’d really appreciate your feedback or a like!<br><br><p><strong>Support:</strong> All files are provided as-is and do not include support. You’re welcome to modify and use them in your own projects!</p>`,
            features: `Deepsea blender and compressed glb 3d model, ready for Three.js integration.`,
            thumb: `assets/images/products/deepsea 001.webp`,
            slides: [
                "assets/images/products/deepsea 001.webp",
                "assets/images/products/deepsea 002.webp",
                "assets/images/products/deepsea 003.webp"
            ]
        },
        [Math.random().toString(36).slice(2, 10)]: {
            id: Math.floor(Math.random() * 99999),
            pSN: "pSN20251022032",
            name: `Explorer 3D Model`,
            currency: `USD`,
            symbol: `$`,
            price: `24.00`,
            desc: `A realistic Rolex Explorer 3D model, fully textured and baked for a polished finish, available in Blender and GLB format—ideal for three.js, WebGL, and high-quality 3D projects.`,
            fulldesc: `A realistic Rolex Explorer 3D model created with attention to detail and precision. The model is fully textured and baked for a clean, polished look and smooth performance in real-time environments. Delivered in Blender and GLB formats, it is ready to use for three.js, WebGL, AR/VR, and other 3D development projects. Ideal for developers and designers who need a high-quality, optimized asset that looks realistic and performs efficiently.<br><br>Please check if our products are helpful for your project, and feel free to explore our other items too. If you like this one, we’d really appreciate your feedback or a like!<br><br><p><strong>Support:</strong> All files are provided as-is and do not include support. You’re welcome to modify and use them in your own projects!</p>`,
            features: `Explorer blender and compressed glb 3d model, ready for Three.js integration.`,
            thumb: `assets/images/products/explorer 001.webp`,
            slides: [
                "assets/images/products/explorer 001.webp",
                "assets/images/products/explorer 002.webp",
                "assets/images/products/explorer 003.webp"
            ]
        },
        [Math.random().toString(36).slice(2, 10)]: {
            id: Math.floor(Math.random() * 99999),
            pSN: "pSN20251022033",
            name: `Explorer II 3D Model`,
            currency: `USD`,
            symbol: `$`,
            price: `24.00`,
            desc: `A realistic Rolex Explorer II 3D model, fully textured and baked for a polished finish, available in Blender and GLB format—ideal for three.js, WebGL, and high-quality 3D projects.`,
            fulldesc: `A realistic Rolex Explorer II 3D model created with attention to detail and precision. The model is fully textured and baked for a clean, polished look and smooth performance in real-time environments. Delivered in Blender and GLB formats, it is ready to use for three.js, WebGL, AR/VR, and other 3D development projects. Ideal for developers and designers who need a high-quality, optimized asset that looks realistic and performs efficiently.<br><br>Please check if our products are helpful for your project, and feel free to explore our other items too. If you like this one, we’d really appreciate your feedback or a like!<br><br><p><strong>Support:</strong> All files are provided as-is and do not include support. You’re welcome to modify and use them in your own projects!</p>`,
            features: `Explorer II blender and compressed glb 3d model, ready for Three.js integration.`,
            thumb: `assets/images/products/explorer_II 001.webp`,
            slides: [
                "assets/images/products/explorer_II 001.webp",
                "assets/images/products/explorer_II 002.webp",
                "assets/images/products/explorer_II 003.webp"
            ]
        },
        [Math.random().toString(36).slice(2, 10)]: {
            id: Math.floor(Math.random() * 99999),
            pSN: "pSN20251022034",
            name: `GMT Master II 3D Model`,
            currency: `USD`,
            symbol: `$`,
            price: `24.00`,
            desc: `A realistic Rolex GMT Master II 3D model, fully textured and baked for a polished finish, available in Blender and GLB format—ideal for three.js, WebGL, and high-quality 3D projects.`,
            fulldesc: `A realistic Rolex GMT Master II 3D model created with attention to detail and precision. The model is fully textured and baked for a clean, polished look and smooth performance in real-time environments. Delivered in Blender and GLB formats, it is ready to use for three.js, WebGL, AR/VR, and other 3D development projects. Ideal for developers and designers who need a high-quality, optimized asset that looks realistic and performs efficiently.<br><br>Please check if our products are helpful for your project, and feel free to explore our other items too. If you like this one, we’d really appreciate your feedback or a like!<br><br><p><strong>Support:</strong> All files are provided as-is and do not include support. You’re welcome to modify and use them in your own projects!</p>`,
            features: `GMT Master II blender and compressed glb 3d model, ready for Three.js integration.`,
            thumb: `assets/images/products/GMT-master_II 001.webp`,
            slides: [
                "assets/images/products/GMT-master_II 001.webp",
                "assets/images/products/GMT-master_II 002.webp",
                "assets/images/products/GMT-master_II 003.webp"
            ]
        },
        [Math.random().toString(36).slice(2, 10)]: {
            id: Math.floor(Math.random() * 99999),
            pSN: "pSN20251022035",
            name: `Lady Datejust 3D Model`,
            currency: `USD`,
            symbol: `$`,
            price: `24.00`,
            desc: `A realistic Rolex Lady Datejust 3D model, fully textured and baked for a polished finish, available in Blender and GLB format—ideal for three.js, WebGL, and high-quality 3D projects.`,
            fulldesc: `A realistic Rolex Lady Datejust 3D model created with attention to detail and precision. The model is fully textured and baked for a clean, polished look and smooth performance in real-time environments. Delivered in Blender and GLB formats, it is ready to use for three.js, WebGL, AR/VR, and other 3D development projects. Ideal for developers and designers who need a high-quality, optimized asset that looks realistic and performs efficiently.<br><br>Please check if our products are helpful for your project, and feel free to explore our other items too. If you like this one, we’d really appreciate your feedback or a like!<br><br><p><strong>Support:</strong> All files are provided as-is and do not include support. You’re welcome to modify and use them in your own projects!</p>`,
            features: `Lady Datejust blender and compressed glb 3d model, ready for Three.js integration.`,
            thumb: `assets/images/products/lady_datejust 001.webp`,
            slides: [
                "assets/images/products/lady_datejust 001.webp",
                "assets/images/products/lady_datejust 002.webp",
                "assets/images/products/lady_datejust 003.webp"
            ]
        },
        [Math.random().toString(36).slice(2, 10)]: {
            id: Math.floor(Math.random() * 99999),
            pSN: "pSN20251022036",
            name: `Perpetual Oyster 3D Model`,
            currency: `USD`,
            symbol: `$`,
            price: `24.00`,
            desc: `A realistic Rolex Perpetual Oyster 3D model, fully textured and baked for a polished finish, available in Blender and GLB format—ideal for three.js, WebGL, and high-quality 3D projects.`,
            fulldesc: `A realistic Rolex Perpetual Oyster 3D model created with attention to detail and precision. The model is fully textured and baked for a clean, polished look and smooth performance in real-time environments. Delivered in Blender and GLB formats, it is ready to use for three.js, WebGL, AR/VR, and other 3D development projects. Ideal for developers and designers who need a high-quality, optimized asset that looks realistic and performs efficiently.<br><br>Please check if our products are helpful for your project, and feel free to explore our other items too. If you like this one, we’d really appreciate your feedback or a like!<br><br><p><strong>Support:</strong> All files are provided as-is and do not include support. You’re welcome to modify and use them in your own projects!</p>`,
            features: `Perpetual Oyster blender and compressed glb 3d model, ready for Three.js integration.`,
            thumb: `assets/images/products/perpetual_oyster 001.webp`,
            slides: [
                "assets/images/products/perpetual_oyster 001.webp",
                "assets/images/products/perpetual_oyster 002.webp",
                "assets/images/products/perpetual_oyster 003.webp"
            ]
        },
        [Math.random().toString(36).slice(2, 10)]: {
            id: Math.floor(Math.random() * 99999),
            pSN: "pSN20251022037",
            name: `Perpetual 1908 3D Model`,
            currency: `USD`,
            symbol: `$`,
            price: `24.00`,
            desc: `A realistic Rolex Perpetual 1908 3D model, fully textured and baked for a polished finish, available in Blender and GLB format—ideal for three.js, WebGL, and high-quality 3D projects.`,
            fulldesc: `A realistic Rolex Perpetual 1908 3D model created with attention to detail and precision. The model is fully textured and baked for a clean, polished look and smooth performance in real-time environments. Delivered in Blender and GLB formats, it is ready to use for three.js, WebGL, AR/VR, and other 3D development projects. Ideal for developers and designers who need a high-quality, optimized asset that looks realistic and performs efficiently.<br><br>Please check if our products are helpful for your project, and feel free to explore our other items too. If you like this one, we’d really appreciate your feedback or a like!<br><br><p><strong>Support:</strong> All files are provided as-is and do not include support. You’re welcome to modify and use them in your own projects!</p>`,
            features: `Perpetual 1908 blender and compressed glb 3d model, ready for Three.js integration.`,
            thumb: `assets/images/products/perpetual-1908 001.webp`,
            slides: [
                "assets/images/products/perpetual-1908 001.webp",
                "assets/images/products/perpetual-1908 002.webp",
                "assets/images/products/perpetual-1908 003.webp"
            ]
        },
        [Math.random().toString(36).slice(2, 10)]: {
            id: Math.floor(Math.random() * 99999),
            pSN: "pSN20251022038",
            name: `Sea Dweller 3D Model`,
            currency: `USD`,
            symbol: `$`,
            price: `24.00`,
            desc: `A realistic Rolex Sea Dweller 3D model, fully textured and baked for a polished finish, available in Blender and GLB format—ideal for three.js, WebGL, and high-quality 3D projects.`,
            fulldesc: `A realistic Rolex Sea Dweller 3D model created with attention to detail and precision. The model is fully textured and baked for a clean, polished look and smooth performance in real-time environments. Delivered in Blender and GLB formats, it is ready to use for three.js, WebGL, AR/VR, and other 3D development projects. Ideal for developers and designers who need a high-quality, optimized asset that looks realistic and performs efficiently.<br><br>Please check if our products are helpful for your project, and feel free to explore our other items too. If you like this one, we’d really appreciate your feedback or a like!<br><br><p><strong>Support:</strong> All files are provided as-is and do not include support. You’re welcome to modify and use them in your own projects!</p>`,
            features: `Sea Dweller blender and compressed glb 3d model, ready for Three.js integration.`,
            thumb: `assets/images/products/sea_dweller 001.webp`,
            slides: [
                "assets/images/products/sea_dweller 001.webp",
                "assets/images/products/sea_dweller 002.webp",
                "assets/images/products/sea_dweller 003.webp"
            ]
        },
        [Math.random().toString(36).slice(2, 10)]: {
            id: Math.floor(Math.random() * 99999),
            pSN: "pSN20251022039",
            name: `Sky Dweller 3D Model`,
            currency: `USD`,
            symbol: `$`,
            price: `24.00`,
            desc: `A realistic Rolex Sky Dweller 3D model, fully textured and baked for a polished finish, available in Blender and GLB format—ideal for three.js, WebGL, and high-quality 3D projects.`,
            fulldesc: `A realistic Rolex Sky Dweller 3D model created with attention to detail and precision. The model is fully textured and baked for a clean, polished look and smooth performance in real-time environments. Delivered in Blender and GLB formats, it is ready to use for three.js, WebGL, AR/VR, and other 3D development projects. Ideal for developers and designers who need a high-quality, optimized asset that looks realistic and performs efficiently.<br><br>Please check if our products are helpful for your project, and feel free to explore our other items too. If you like this one, we’d really appreciate your feedback or a like!<br><br><p><strong>Support:</strong> All files are provided as-is and do not include support. You’re welcome to modify and use them in your own projects!</p>`,
            features: `Sky Dweller blender and compressed glb 3d model, ready for Three.js integration.`,
            thumb: `assets/images/products/sky_dweller 001.webp`,
            slides: [
                "assets/images/products/sky_dweller 001.webp",
                "assets/images/products/sky_dweller 002.webp",
                "assets/images/products/sky_dweller 003.webp"
            ]
        },
        [Math.random().toString(36).slice(2, 10)]: {
            id: Math.floor(Math.random() * 99999),
            pSN: "pSN20251022040",
            name: `Submariner 3D Model`,
            currency: `USD`,
            symbol: `$`,
            price: `24.00`,
            desc: `A realistic Rolex Submariner 3D model, fully textured and baked for a polished finish, available in Blender and GLB format—ideal for three.js, WebGL, and high-quality 3D projects.`,
            fulldesc: `A realistic Rolex Submariner 3D model created with attention to detail and precision. The model is fully textured and baked for a clean, polished look and smooth performance in real-time environments. Delivered in Blender and GLB formats, it is ready to use for three.js, WebGL, AR/VR, and other 3D development projects. Ideal for developers and designers who need a high-quality, optimized asset that looks realistic and performs efficiently.<br><br>Please check if our products are helpful for your project, and feel free to explore our other items too. If you like this one, we’d really appreciate your feedback or a like!<br><br><p><strong>Support:</strong> All files are provided as-is and do not include support. You’re welcome to modify and use them in your own projects!</p>`,
            features: `Submariner blender and compressed glb 3d model, ready for Three.js integration.`,
            thumb: `assets/images/products/submariner 001.webp`,
            slides: [
                "assets/images/products/submariner 001.webp",
                "assets/images/products/submariner 002.webp",
                "assets/images/products/submariner 003.webp"
            ]
        },
        [Math.random().toString(36).slice(2, 10)]: {
            id: Math.floor(Math.random() * 99999),
            pSN: "pSN20251022041",
            name: `Submariner Date 3D Model`,
            currency: `USD`,
            symbol: `$`,
            price: `24.00`,
            desc: `A realistic Rolex Submariner Date 3D model, fully textured and baked for a polished finish, available in Blender and GLB format—ideal for three.js, WebGL, and high-quality 3D projects.`,
            fulldesc: `A realistic Rolex Submariner Date 3D model created with attention to detail and precision. The model is fully textured and baked for a clean, polished look and smooth performance in real-time environments. Delivered in Blender and GLB formats, it is ready to use for three.js, WebGL, AR/VR, and other 3D development projects. Ideal for developers and designers who need a high-quality, optimized asset that looks realistic and performs efficiently.<br><br>Please check if our products are helpful for your project, and feel free to explore our other items too. If you like this one, we’d really appreciate your feedback or a like!<br><br><p><strong>Support:</strong> All files are provided as-is and do not include support. You’re welcome to modify and use them in your own projects!</p>`,
            features: `Submariner Date blender and compressed glb 3d model, ready for Three.js integration.`,
            thumb: `assets/images/products/submariner-date 001.webp`,
            slides: [
                "assets/images/products/submariner-date 001.webp",
                "assets/images/products/submariner-date 002.webp",
                "assets/images/products/submariner-date 003.webp"
            ]
        },
        [Math.random().toString(36).slice(2, 10)]: {
            id: Math.floor(Math.random() * 99999),
            pSN: "pSN20251022042",
            name: `Yachtmaster 3D Model`,
            currency: `USD`,
            symbol: `$`,
            price: `24.00`,
            desc: `A realistic Rolex Yachtmaster 3D model, fully textured and baked for a polished finish, available in Blender and GLB format—ideal for three.js, WebGL, and high-quality 3D projects.`,
            fulldesc: `A realistic Rolex Yachtmaster 3D model created with attention to detail and precision. The model is fully textured and baked for a clean, polished look and smooth performance in real-time environments. Delivered in Blender and GLB formats, it is ready to use for three.js, WebGL, AR/VR, and other 3D development projects. Ideal for developers and designers who need a high-quality, optimized asset that looks realistic and performs efficiently.<br><br>Please check if our products are helpful for your project, and feel free to explore our other items too. If you like this one, we’d really appreciate your feedback or a like!<br><br><p><strong>Support:</strong> All files are provided as-is and do not include support. You’re welcome to modify and use them in your own projects!</p>`,
            features: `Yachtmaster blender and compressed glb 3d model, ready for Three.js integration.`,
            thumb: `assets/images/products/yachtmaster 001.webp`,
            slides: [
                "assets/images/products/yachtmaster 001.webp",
                "assets/images/products/yachtmaster 002.webp",
                "assets/images/products/yachtmaster 003.webp"
            ]
        },
        [Math.random().toString(36).slice(2, 10)]: {
            id: Math.floor(Math.random() * 99999),
            pSN: "pSN20251022043",
            name: `Pot Jackpot Slot Machine - Source`,
            currency: `USD`,
            symbol: `$`,
            price: `7.00`,
            desc: `A clean single-file HTML slot machine source in JavaScript with unpredictable spins, smart match detection, and fast WEBP graphics, offering a solid foundation for building a full slot machine game.`,
            fulldesc: `A lightweight single-file HTML slot machine source code in JavaScript that delivers unpredictable spins, smart match detection, and fast WEBP graphics, crafted as a polished yet expandable foundation that invites developers to experiment, customize, and innovate while giving investors a clear glimpse into a scalable, engaging game engine ready to evolve into a full-featured slot machine experience.<br><br>Please check if our products are helpful for your project, and feel free to explore our other items too. If you like this one, we’d really appreciate your feedback or a like!<br><br><p><strong>Support:</strong> All files are provided as-is and do not include support. You’re welcome to modify and use them in your own projects!</p>`,
            features: `.`,
            thumb: `assets/images/products/preview 001 pot jackpot.webp`,
            slides: [
                "assets/images/products/preview 001 pot jackpot.webp",
                "assets/images/products/preview 002 pot jackpot.webp",
                "assets/images/products/preview 003 pot jackpot.webp",
                "assets/images/products/preview 004 pot jackpot.webp",
                "assets/images/products/preview 005 pot jackpot.webp"
            ]
        },
    },
    pages: {
        [Math.random().toString(36).slice(2, 10)]: {
            pSN: "404",
            shell: ["404"],
        },
        [Math.random().toString(36).slice(2, 10)]: {
            pSN: "home",
            shell: ["carousel", "accordion", "cards", "faqs"],
        },
        [Math.random().toString(36).slice(2, 10)]: {
            pSN: "services",
            shell: ["services"],
        },
        [Math.random().toString(36).slice(2, 10)]: {
            pSN: "projects",
            shell: ["projects"],
        },
        [Math.random().toString(36).slice(2, 10)]: {
            pSN: "market",
            shell: ["store"],
        },
        [Math.random().toString(36).slice(2, 10)]: {
            pSN: "cart",
            shell: ["cart"],
        },
        [Math.random().toString(36).slice(2, 10)]: {
            pSN: "signin",
            shell: ["signup"],
        },
        [Math.random().toString(36).slice(2, 10)]: {
            pSN: "contact",
            shell: ["contact"],
        },
        [Math.random().toString(36).slice(2, 10)]: {
            pSN: "ecash",
            shell: ["unlock"],
        },
        [Math.random().toString(36).slice(2, 10)]: {
            pSN: "account",
            shell: ["showqr"],
        },
        [Math.random().toString(36).slice(2, 10)]: {
            pSN: "transactions",
            shell: ["transactions"],
        },
        [Math.random().toString(36).slice(2, 10)]: {
            pSN: "currencies",
            shell: ["currencies"],
        },
        ["tours-exteriors"]: {
            pSN: "tours-exteriors",
            shell: ["photo", "details"],
            content: {
                i: 'assets/images/virtual tours 01.webp',
                t: 'Exteriors',
                s: `We will integrate your 3d architectural design 360 renderings into an immersive virtual tours.<button class='submit-btn' onclick=localStorage.url='https:\/\/virtualtour.web.app#tours=cratercity';loadPage({shells:['demo'],scroll:0,reset:!0})><span><i class='fa fa-play fa-1x' style='margin-right: 12px;'></i> Live Demo</span></button>`,
                r: 'services',
                d: `<header><h1>3d architectural design 360 renderings</h1></header><section class='description'><h2>Transform Your 3D Architectural Designs into Stunning Immersive Virtual Tours</h2><p>We specialize in integrating your 3D architectural 360° renderings into fully interactive and immersive virtual tours that captivate clients, investors, and stakeholders alike.</p></section><section class='note'><p>Here's what we offer:</p><h3>Seamless Integration of 360° Renderings</h3><ul><li>We take your high-quality 3D architectural visuals and transform them into smooth, navigable virtual experiences.</li></ul><br><h3>Realistic and Engaging Walkthroughs</h3><ul><li>Our virtual tours allow users to explore every angle of your design as if they were physically there—perfect for pre-construction presentations, property showcases, and client pitches.</li></ul><br><h3>Cross-Platform Accessibility</h3><ul><li>Your virtual tours can be experienced across any device—desktop, tablet, mobile, or VR headset—making it easy for anyone to view anytime, anywhere.</li></ul><br><h3>Custom UI and Interactivity</h3><ul><li>Add hotspots, pop-up info panels, background music, floor plans, or branded elements to make your presentation even more interactive and tailored.</li></ul><br><h3>Boost Client Confidence and Sales</h3><ul><li>Help your clients visualize the space in full detail before it's even built,making decisions faster and more confidently.</li></ul><br><h3>Elevate Your Brand's Innovation</h3><ul><li>Position yourself as a forward-thinking firm using cutting-edge visualization technology to deliver the “wow” factor.</li></ul><br></section><footer class='footer'><p>Let us bring your vision to life in a way that's not only visually stunning,but also functionally powerful—designed to impress and convert.</p></footer>`
            }
        },
        ["tours-interiors"]: {
            pSN: "tours-interiors",
            shell: ["photo", "details"],
            content: {
                i: 'assets/images/virtual tours 03.webp',
                t: 'Interiors',
                s: `We will integrate your 3d interior design 360 renderings into an immersive virtual tours.<button class='submit-btn' onclick=localStorage.url='https:\/\/virtualtour.web.app#tours=playarea';loadPage({shells:['demo'],scroll:0,reset:!0})><span><i class='fa fa-play fa-1x' style='margin-right: 12px;'></i> Live Demo</span></button>`,
                r: 'services',
                d: `<header><h1>3d interior design 360 renderings</h1></header><section class='description'><h2>We transform your 3D interior design into fully immersive virtual tours that captivate and convert.</h2><p>Let us take your static 360 renderings and elevate them into an interactive experience your audience won't forget. Here's how our integration service can benefit you:</p></section><section class='note'><h3>Immersive Virtual Navigation</h3><ul><li>We turn your 360° interior renderings into explorable environments,allowing clients to walk through the space as if they were physically there.</li></ul><br><h3>Engaging and Interactive Experience</h3><ul><li>Add interactive hotspots,annotations,and clickable elements to highlight design details,furniture,materials,or product links.</li></ul><br><h3>Increased Client Confidence</h3><ul><li>Let your clients experience the layout,scale,and ambiance before construction begins—building trust and helping secure approvals faster.</li></ul><br><h3>Cross-Platform Accessibility</h3><ul><li>Your virtual tour will work seamlessly on desktops,tablets,and mobile devices—no app installation needed.</li></ul><br><h3>Boosted Marketing Appeal</h3><ul><li>Virtual tours add a high-end edge to your portfolio,making your presentations more impressive and your services more competitive.</li></ul><br><h3>Easy Sharing&Hosting Options</h3><ul><li>Get a hosted link or embed it directly on your website,listings,or presentations with ease.</li></ul></section><footer class='footer'><p>Whether you're an architect,interior designer,or real estate developer,our solution will help you stand out,close deals faster,and deliver unforgettable presentations.</p></footer>`
            }
        },
        ["tours-realestates"]: {
            pSN: "tours-realestates",
            shell: ["photo", "details"],
            content: {
                i: 'assets/images/virtual tours 04.webp',
                t: 'Real Estates',
                s: `We will integrate your 360 panoramic photographs into an immersive virtual tours.<button class='submit-btn' onclick=localStorage.url='https:\/\/realtours.web.app?pvar#tours=paseo-typical-flat-living';loadPage({shells:['demo'],scroll:0,reset:!0})><span><i class='fa fa-play fa-1x' style='margin-right: 12px;'></i> Live Demo</span></button>`,
                r: 'services',
                d: `<header><h1>360 panoramic photographs</h1></header><section class='description'><h2>Transform Your 360° Panoramic Photographs into Fully-Immersive Virtual Tours</h2><p> We specialize in seamlessly integrating your 360° panoramic photographs into captivating,interactive virtual tours that elevate how your space is experienced online.Whether you're showcasing real estate, architecture, hospitality, or educational spaces, we turn your static images into dynamic, explorable environments that feel real and engaging. </p></section><section class='note'><p>What We Offer:</p><h3>Full Immersive Integration</h3><ul><li>We bring your panoramic shots to life with smooth transitions, interactive hotspots, and a user-friendly interface.</li></ul><br /><h3>Cross-Platform Compatibility</h3><ul><li>Your tour will be fully responsive and viewable on desktop, mobile, tablet, and VR headsets.</li></ul><br /><h3>Custom Branding</h3><ul><li>Personalized UI with your logo, colors, and style to match your brand identity.</li></ul><br /><h3>Interactive Features</h3><ul><li>Add clickable information points, pop-up images, videos, contact forms, or navigation menus.</li></ul><br /><h3>Fast Loading, Smooth Experience</h3><ul><li>Optimized for speed and performance to ensure users stay engaged.</li></ul></section><section class='note'><p>Key Benefits:</p><h3>Stand Out from the Competition</h3><ul><li>Give your audience a modern, premium experience.</li></ul><br /><h3>Increase Engagement Time</h3><ul><li>Immersive tours hold attention longer than traditional images.</li></ul><br /><h3>Boost Conversions</h3><ul><li>A more interactive, engaging presentation drives decision-making.</li></ul><br /><h3>Global Accessibility</h3><ul><li>Showcase your space to potential clients or guests anywhere in the world, 24/7.</li></ul><br /><h3>Cost-Effective Marketing Tool</h3><ul><li>One virtual tour can serve you across websites, social media, emails, and presentations.</li></ul><br /></section><footer class='footer'><p>Let us help you turn your 360° images into a powerful marketing asset that tells a story, builds trust, and sells experiences. Ready to impress your audience? Let's create your virtual tour today.</p></footer>`
            }
        },
        ["experience-architecturals"]: {
            pSN: "experience-architecturals",
            shell: ["photo", "details"],
            content: {
                i: 'assets/images/city 05.webp',
                t: 'Architecturals',
                s: `We will integrate your 3d architectural designs into an immersive explorable virtual experiences.<button class='submit-btn' onclick=localStorage.url='https:\/\/threeviewer.web.app#crateria';loadPage({shells:['demo'],scroll:0,reset:!0})><span><i class='fa fa-play fa-1x' style='margin-right: 12px;'></i> Live Demo</span></button>`,
                r: 'services',
                d: `<header><h1>3d architectural designs virtual experiences.</h1></header><section class='description'><h2>Transform Your 3D Architectural Designs Into Immersive Virtual Experiences</h2><p>We offer professional integration of your 3D architectural designs into fully immersive and explorable virtual environments.This service allows you to showcase your projects in a dynamic,interactive way that captivates clients,investors,or stakeholders—far beyond what static images or walkthrough videos can offer.</p></section><section class='note'><p>What We Deliver:</p><h3>Seamless Integration</h3><ul><li>We take your 3D models and transform them into interactive virtual spaces that can be explored in real-time.</li></ul><br><h3>High-Fidelity Visualization</h3><ul><li>Present your architecture with photo-realistic rendering,accurate lighting,and!0-to-scale proportions.</li></ul><br><h3>Cross-Platform Access</h3><ul><li>Your virtual experience can be accessed on desktop,mobile,tablet,or even VR headsets—anytime,anywhere.</li></ul><br><h3>Interactive Navigation</h3><ul><li>Users can move through spaces,zoom in on details,and engage with design features at their own pace.</li></ul><br><h3>Custom UI/UX Elements</h3><ul><li>Add hotspots,labels,videos,audio narration,or even live guided tours within your virtual space.</li></ul></section><section class='description'></section><section class='note'><p>Key Benefits:</p><h3>Bring Your Vision to Life</h3><ul><li>Let clients walk through the space before it's even built.</li></ul><br><h3>Impress Stakeholders</h3><ul><li>Present your work in a cutting-edge, professional format.</li></ul><br><h3>Increase Client Engagement</h3><ul><li>Interactive presentations hold attention longer and communicate ideas more clearly.</li></ul><br><h3>Reach a Global Audience</h3><ul><li>Share your virtual experience online without geographic limitations.</li></ul><br><h3>Enhance Decision-Making</h3><ul><li>Clients can better understand spatial relationships, materials, and design intent.</li></ul><br></section><footer class='footer'><p>Whether you're an architect,interior designer,real estate developer,or project manager,our immersive virtual solutions give your designs the showcase they deserve.</p><strong>Let us help you turn your architecture into an experience.</strong></footer>`
            }
        },
        ["experience-interiors"]: {
            pSN: "experience-interiors",
            shell: ["photo", "details"],
            content: {
                i: 'assets/images/virtual tours 00.webp',
                t: 'Interiors',
                s: `We will integrate your 3d interior designs into an immersive explorable virtual experiences.<button class='submit-btn' onclick=localStorage.url='https:\/\/realtours.web.app#tours=towerresidence';loadPage({shells:['demo'],scroll:0,reset:!0})><span><i class='fa fa-play fa-1x' style='margin-right: 12px;'></i> Live Demo</span></button>`,
                r: 'services',
                d: `<header><h1>3d interior designs virtual experiences</h1></header><section class='description'><h2>Transform Your 3D Interior Designs into Immersive, Explorable Virtual Experiences</h2><p>Take your interior design presentations to the next level with our cutting-edge virtual integration service. We specialize in transforming your existing 3D interior designs into fully immersive and interactive virtual environments that your clients can explore in real time.</p></section><section class='note'><h3>What We Offer:</h3><ul><li>We will seamlessly integrate your 3D interior models into an interactive virtual experience that can be navigated like a real space—whether on desktop, mobile, or VR headsets.</li></ul><section class='note'><p>Key Benefits:</p><h3>Immersive Visualization</h3><ul><li>Let your clients step inside your designs. They can walk through spaces, look around, and feel the ambiance of your interiors—far beyond what static renders can provide.</li></ul><br><h3>Client Engagement and Excitement</h3><ul><li>Virtual experiences captivate and impress clients, helping them connect emotionally with your vision and increasing their confidence in your design decisions.</li></ul><br><h3>Competitive Edge</h3><ul><li>Stand out from other designers by offering a premium, tech-forward presentation that showcases your design in a futuristic and memorable way.</li></ul><br><h3>Interactive Design Showcases</h3><ul><li>Allow viewers to interact with the environment—change furniture layouts, switch lighting moods, or preview material options within the space.</li></ul><br><h3>Accessible Anywhere</h3><ul><li>Share your virtual interiors through a simple web link or embed it in your website—perfect for presentations, portfolios, or remote client meetings.</li></ul><br><h3>Increased Project Approval Rates</h3><ul><li>When clients can truly experience the space, they make faster and more confident decisions—speeding up the design approval process.</li></ul></section><footer class='footer'><p>Whether you're presenting to a client, building your portfolio, or marketing a property—our immersive virtual integration will elevate your 3D interiors into unforgettable experiences.</p><strong>Let us bring your designs to life.</strong></footer>`
            }
        },
        ["experience-events"]: {
            pSN: "experience-events",
            shell: ["photo", "details"],
            content: {
                i: 'assets/images/city 08.webp',
                t: 'Events',
                s: `We will integrate your 3d events designs into an immersive explorable virtual experiences.<button class='submit-btn' onclick=localStorage.url='https:\/\/threeviewer.web.app#crateria';loadPage({shells:['demo'],scroll:0,reset:!0})><span><i class='fa fa-play fa-1x' style='margin-right: 12px;'></i> Live Demo</span></button>`,
                r: 'services',
                d: `<header><h1>3d events designs virtual experiences</h1></header><section class='description'><h2>Transform Your 3D Event Designs into Fully Immersive Virtual Experiences</h2><p>We don't just visualize your 3D event designs—we bring them to life. Our service seamlessly integrates your 3D event environments into interactive, explorable virtual experiences that captivate audiences, elevate engagement, and leave a lasting impression.</p><br><p>Whether you're organizing a trade show, exhibition, corporate launch, or virtual conference, we turn your concepts into immersive digital spaces that people can walk through, explore, and interact with—anytime, anywhere.</p></section><section class='note'><p>What We Offer:</p><h3>Immersive 360° Virtual Environments</h3><ul><li>Allow your visitors to explore your event space in real time as if they were physically there.</li></ul><br><h3>Interactive Hotspots & Navigation</h3><ul><li>Add clickable points for videos, product showcases, or detailed info—making the experience dynamic and user-driven.</li></ul><br><h3>Cross-Platform Access</h3><ul><li>Your virtual event can be accessed from desktops, mobile devices, and VR headsets—no app download required.</li></ul><br><h3>Branded & Customized Experience</h3><ul><li>Every element can reflect your brand identity, from signage to ambient sound, creating a consistent and professional feel.</li></ul><br><h3>Real-Time Interactivity (Optional)</h3><ul><li>Integrate live video streams, chats, or guided tours to boost interaction and participation.</li></ul></section><section class='note'><p>Key Benefits for You:</p><h3>Maximize Reach</h3><ul><li>Engage a global audience without geographical limits.</li></ul><br><h3>Save Costs</h3><ul><li>Drastically reduce venue, travel, and logistics expenses.</li></ul><br><h3>Boost Engagement</h3><ul><li>Keep your visitors intrigued with rich multimedia and gamified elements.</li></ul><br><h3>Track Results</h3><ul><li>Collect analytics on user behavior, time spent, and engagement metrics.</li></ul><br><h3>Stand Out</h3><ul><li>Impress clients and stakeholders with cutting-edge virtual presentation.</li></ul></section><footer class='footer'><p>Let us help you future-proof your events. Stand out in the digital age with a virtual experience that's not just seen—but explored.</p></footer>`
            }
        },
        ["experience-vehicles"]: {
            pSN: "experience-vehicles",
            shell: ["photo", "details"],
            content: {
                i: 'assets/images/car.webp',
                t: 'Vehicles',
                s: `We will integrate your 3d vehicles (i.e. cars, trucks, scooter & etc.) into an immersive drivable virtual experience vehicles.<button class='submit-btn' onclick=localStorage.url='https:\/\/threeviewer.web.app#crateria';loadPage({shells:['demo'],scroll:0,reset:!0})><span><i class='fa fa-play fa-1x' style='margin-right: 12px;'></i> Live Demo</span></button>`,
                r: 'services',
                d: `<header><h1>3d vehicles virtual experience vehicles.</h1></header><section class='description'><h2>Transform Your 3D Vehicle Models into Immersive, Drivable Virtual Experiences</h2><p>We specialize in converting your 3D vehicle assets—whether cars, trucks, scooters, motorcycles, or specialty vehicles—into fully interactive and drivable virtual experiences. Our advanced integration process breathes life into your models, allowing users to explore, test-drive, and interact with them in real-time, immersive 3D environments.</p></section><section class='note'><p>Key Features & Benefits:</p><h3>Fully Drivable Interactions</h3><ul><li>Give users the thrill of virtually driving your vehicle models with realistic controls, physics, and animations—ideal for showcasing functionality and performance.</li></ul><br><h3>Immersive 3D Environments</h3><ul><li>We place your vehicles in beautifully rendered environments (urban streets, showrooms, off-road terrains, etc.) to enhance the realism and emotional engagement of your audience.</li></ul><br><h3>Cross-Platform Accessibility</h3><ul><li>Make your virtual experience accessible on web, desktop, and mobile platforms, including VR and AR support upon request.</li></ul><br><h3>Perfect for Marketing & Sales</h3><ul><li>Use interactive vehicle experiences for product launches, exhibitions, virtual showrooms, or online marketing to captivate clients and stand out from competitors.</li></ul><br><h3>Custom Branding & Detailing</h3><ul><li>We maintain the visual fidelity of your 3D designs while allowing for branded experiences with customizable paint, decals, interiors, lighting, and more.</li></ul><br><h3>Data-Driven Insights (Optional)</h3><ul><li>Track user engagement, interaction times, and more to understand customer preferences and refine your offerings.</li></ul></section><section class='note'><h3>Ideal for:</h3><ul><li>Automotive companies</li><li>Virtual showrooms</li><li>Vehicle concept presentations</li><li>Digital exhibitions and expos</li><li>Marketing agencies</li><li>Startups and prototype developers</li></ul></section><footer class='footer'><p>Let us help you showcase your 3D vehicle designs in a way that's not just seen—but experienced.</p></footer>`
            }
        },
        ["ecash-supply"]: {
            pSN: "ecash-supply",
            shell: ["photo", "details"],
            content: {
                i: 'assets/images/ecash supply.webp',
                t: 'Supply',
                s: `We provide the framework to enable secure democratic multi-party creation of electronic cash.<button class='submit-btn' onclick=window.open('https:\/\/ecash-training.web.app')><span><i class='fa fa-graduation-cap fa-1x' style='margin-right: 12px;'></i> Learn ECash</span></button><button class='submit-btn' onclick=window.open('https:\/\/github.com/VeinSyct/ECash-Module/tree/main/module-ecash/supply')><span><i class='fa fa-download fa-1x' style='margin-right: 12px;'></i> Module</span></button>`,
                r: 'services',
                d: `<header><h1>Electronic Cash Supply Platform Service</h1></header><section class='description'><h2>Secure Democratic Multi-Party Electronic Cash Creation</h2><p>We provide the framework to facilitate the creation of electronic cash, a digital version of paper money. Multiple authorized parties including banks, public offices, private contractors, and issuing outlets collaboratively approve and combine their portions of the source code to generate e-cash data. No single entity can create electronic cash alone, ensuring fully democratic, transparent, and tamper-proof issuance.</p><br><p>The framework supports web and microcontroller-based platforms and is designed for secure, resilient, and auditable generation of e-cash data that can be transferred and stored via QR code systems. Participants can define approval workflows, distribution rules, and operational parameters to ensure collaborative control and integrity throughout the process.</p></section><section class='note'><p>Key Benefits of Our Democratic Multi-Party E-Cash Supply Framework:</p><div class='feature-block'><h3>Framework as a Service</h3><ul><li>We provide the tools, technology, and expertise to implement multi-party e-cash creation platforms tailored to organizational needs.</li></ul></div><div class='feature-block'><h3>Collaborative Control</h3><ul><li>E-cash creation requires agreement from all participating parties, preventing unilateral issuance and ensuring fairness and transparency.</li></ul></div><div class='feature-block'><h3>Paper Money Replacement</h3><ul><li>Electronic cash functions as a secure, digital alternative to physical currency while preserving its core properties.</li></ul></div><div class='feature-block'><h3>Flexible Deployment</h3><ul><li>Compatible with web apps, desktop platforms, mobile devices, and microcontroller-based systems for broad adoption.</li></ul></div><div class='feature-block'><h3>Cryptographically Secured</h3><ul><li>Each e-cash unit is generated through combined deterministic algorithms held by multiple parties, preventing duplication or tampering.</li></ul></div><div class='feature-block'><h3>Controlled Approval Workflow</h3><ul><li>Issuance occurs only after all participants validate and merge their portions of the creation code, ensuring accountability and traceability.</li></ul></div><div class='feature-block'><h3>Customizable Workflows</h3><ul><li>Framework allows defining issuance rules, approval logic, and distribution parameters to match operational requirements.</li></ul></div><div class='feature-block'><h3>Resilient Infrastructure</h3><ul><li>The system is designed to ensure secure and reliable e-cash creation under varied operational conditions.</li></ul></div><div class='feature-block'><h3>Future-Ready Currency</h3><ul><li>Electronic cash replaces paper money, providing a scalable, secure, and fully collaborative digital currency system.</li></ul></div></section><footer class='footer'><p>Democratic Multi-Party Electronic Cash Platform Service</p><strong>We provide the framework, tools, and expertise for multiple parties to collaboratively create electronic cash securely, transparently, and audibly.</strong></footer>`
            }
        },
        ["ecash-platform"]: {
            pSN: "ecash-platform",
            shell: ["photo", "details"],
            content: {
                i: 'assets/images/ecash platform.webp',
                t: 'Platform',
                s: `We provide the framework to securely store and transfer electronic cash fully independent of internet or centralized systems.<button class='submit-btn' onclick=window.open('https:\/\/ecash-tutorial.web.app')><span><i class='fa fa-leanpub fa-1x' style='margin-right: 12px;'></i> Learn ECash</span></button><button class='submit-btn' onclick=window.open('https:\/\/github.com/VeinSyct/ECash-Module/tree/main/module-ecash/platform')><span><i class='fa fa-download fa-1x' style='margin-right: 12px;'></i> Module</span></button>`,
                r: 'services',
                d: `<header><h1>Electronic Cash Transfer and Storage Platform</h1></header><section class='description'><h2>Secure Resilient Transfer and Storage of Electronic Cash</h2><p>We provide the framework to enable secure storage and transfer of electronic cash. Transactions are fully independent of internet or centralized systems, allowing value to move safely in any environment including remote, off-grid, or extreme locations.</p></section><section class='note'><p>Key Features and Benefits</p><div class='feature-block'><h3>Fully Independent Operation</h3><ul><li>Transfers and storage do not rely on internet, servers, or centralized systems, allowing reliable operation in any setting.</li></ul></div><div class='feature-block'><h3>Multi-Modal Transfers</h3><ul><li>Electronic cash can be transferred via QR codes, infrared, USB, or direct card contact, supporting mobile apps, microcontroller devices, and physical implementations.</li></ul></div><div class='feature-block'><h3>Device-Native Storage</h3><ul><li>The e-cash resides directly on the user’s device or microcontroller without the need for wallets or transaction histories. The data structure itself is self-contained and merges/splits during transfers.</li></ul></div><div class='feature-block'><h3>Extreme Environment Compatibility</h3><ul><li>Works in remote, off-grid, or physically constrained environments, enabling transactions in caves, space, or other isolated locations.</li></ul></div><div class='feature-block'><h3>Scalable Across Use Cases</h3><ul><li>Suitable for humanitarian aid, disaster response, rural economies, transit systems, vending machines, and peer-to-peer payments.</li></ul></div><div class='feature-block'><h3>Privacy-First Design</h3><ul><li>No tracking, profiling, or third-party interference. Fully decentralized and private by design.</li></ul></div><div class='feature-block'><h3>Customizable and Deployable</h3><ul><li>Operators can provide their own database or use the one provided as a service, adapting the system to branding, workflow, and regulatory requirements.</li></ul></div><div class='feature-block'><h3>Reliable and Cost-Effective</h3><ul><li>No servers or gateways are required, minimizing infrastructure while maintaining robust operation under any condition.</li></ul></div></section><footer class='footer'><p>Democratic Multi-Party Electronic Cash Platform Service</p><strong>We provide the framework, tools, and expertise for multiple parties to collaboratively store and transfer electronic cash securely, transparently, and auditable.</strong></footer>`
            }
        },
        ["web-development"]: {
            pSN: "web-development",
            shell: ["photo", "details"],
            content: {
                i: 'assets/images/web development.webp',
                t: 'Web Development',
                s: `We build collaborative web apps with secure offline use, real-time sync, and fast performance on any device.`,
                r: 'services',
                d: `<header><h1>Web Development & Digital Experience Engineering</h1></header><section class='description'><h2>Ultra-Fast, Offline-Ready, Secure Web Solutions</h2><p>We engineer fully custom web platforms and applications using optimized HTML, CSS, and JavaScript that run entirely on users' devices. The architecture ensures that all code and business logic operate securely on the device while remaining unexposed, protecting your content and functionality from tampering or extraction.</p><br><p>Our platforms are fully offline-capable, allowing users to interact, submit forms, and perform transactions without internet access. Changes sync automatically in real-time whenever connectivity is available, providing fast, reliable access across all devices, including low-spec or limited-connectivity environments.</p><br><p>We develop custom APIs to coordinate data operations and interactions, avoiding third-party plugins that could become security liabilities. This approach ensures maximum control, reliability, and future-proof scalability.</p><br><p>From fast-loading websites to Progressive Web Apps (PWAs) and interactive platforms, every solution is optimized to perform flawlessly across devices, screen sizes, and connectivity scenarios. Minimal, efficient code ensures ultra-fast load times and smooth user experiences, enhancing engagement and satisfaction.</p><br><p>Accessibility and inclusivity are core principles. By following WCAG standards, all users can interact seamlessly with your platform. Combined with offline-first design, secure in-device execution, and real-time synchronization, our solutions deliver reliable, scalable, and engaging digital experiences.</p></section><section class='note'><p>Key Benefits of Our Web Development Services:</p><div class='feature-block'><h3>Ultra-Fast & Lightweight Architecture</h3><ul><li>Optimized HTML, CSS, and JavaScript ensure rapid load times and smooth performance even on low-spec devices and slow networks.</li></ul></div><div class='feature-block'><h3>Secure In-Device Execution & Custom APIs</h3><ul><li>All logic and code run securely on the device, invisible and protected from tampering. Custom APIs manage data interactions without relying on risky third-party plugins.</li></ul></div><div class='feature-block'><h3>Offline-Ready & Progressive</h3><ul><li>Applications function fully offline, allowing uninterrupted use without internet while syncing securely and instantly when online.</li></ul></div><div class='feature-block'><h3>Real-Time Data Sync & Reliability</h3><ul><li>Instant updates and seamless synchronization across devices ensure reliable operations and consistent user experiences.</li></ul></div><div class='feature-block'><h3>Custom-Built for Your Brand</h3><ul><li>Platforms are tailored to your brand identity, workflow, and long-term strategy, ensuring a consistent and scalable digital presence that grows with your business.</li></ul></div><div class='feature-block'><h3>Accessible & Inclusive Design</h3><ul><li>Platforms are built to meet WCAG accessibility standards, ensuring usability for all audiences, including those with disabilities.</li></ul></div><div class='feature-block'><h3>Eco-Friendly & Resource-Efficient</h3><ul><li>Optimized client-side code reduces device resource usage, server load, and bandwidth consumption, minimizing the digital carbon footprint.</li></ul></div><div class='feature-block'><h3>Transparency & Collaboration</h3><ul><li>We work closely with your team throughout development, ensuring clarity, transparency, and shared ownership at every stage.</li></ul></div><div class='feature-block'><h3>Future-Proof & Scalable</h3><ul><li>Modular architecture and in-device execution ensure your platform can evolve with new features, scale efficiently, and remain secure and reliable over time.</li></ul></div><div class='feature-block'><h3>Enhanced User Engagement</h3><ul><li>Interactive and responsive web solutions increase engagement, retention, and satisfaction while maintaining high performance across all devices.</li></ul></div></section><footer class='footer'><p>Build. Scale. Inspire – Your Web, Reimagined for the Modern World.</p><strong>Let us help you craft the future of your digital presence, secure, high-performing, and built to last.</strong></footer>`
            }
        },
    }
};
window.parent.postMessage({ isContent: { items: _ux.items, pages: _ux.pages } }, "*");
window.addEventListener("message", (e) => {
    if (e.type.match(/(message)/)) try {
        _ux.session = !_ux.session ? e.data.session : _ux.session;
        if (e.data.action && e.data.action.match(/(load-content)/)) {
            loadPage({ shells: e.data.shells, scroll: e.data.scroll, reset: e.data.reset });
        }
        if (e.data.action && e.data.action.match(/(update-content)/))
            try {
                openApp({ update: !0 });
            } catch (error) {}
        if (e.data.action && e.data.action.match(/(snap-scrolling)/)) {};
    } catch (error) {};
});
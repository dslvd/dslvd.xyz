'use strict';

const ipgeolocation = 'https://api.ipgeolocation.io/ipgeo?apiKey=a6f158e56097453e9fa056afda7a7aee';

const timeouts = [];

const mobileAndTabletCheck = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

$(document).ready(() => {
    const links = [{
            name: 'Website',
            link: 'https://dslvd.com/',
        },
        {
            name: 'Instagram',
            link: 'https://dslvd.xyz/instagram',
        },
        {
          name: 'Youtube',
          link: 'https://dslvd.xyz/youtube',
        },
    ];

    for (let i in links) {
        let link = links[i];

        $('#marquee').append(`<a href="${link.link}" target="_BLANK">${link.name}</a>`);

        link = $('#marquee').children('a').last();

        if (i != links.length - 1) $('#marquee').append(` <img class="emoticon" src="https://${location.host}/assets/others/dot.png"> `);
    }

    if (mobileAndTabletCheck()) {
        $('#background').replaceWith(`<div id="background" style="background-image: url(https://${location.host}/assets/others/dot.png);"></div>`);

        app.shouldIgnoreVideo = true;
    }

    app.titleChanger(['oh', 'hi', 'welcome <3']);
    app.iconChanger(['https://' + location.host + '/assets/others/dot.png', 'https://' + location.host + '/assets/others/dot.png', 'https://' + location.host + '/assets/others/dot.png', 'https://' + location.host + '/assets/others/dot.png', 'https://' + location.host + '/assets/others/dot.png', 'https://' + location.host + '/assets/others/dot.png', 'https://' + location.host + '/assets/others/dot.png', 'https://' + location.host + '/assets/others/dot.png', 'https://' + location.host + '/assets/others/dot.png']);
});

if ($.cookie('videoTime')) {
    app.videoElement.currentTime = $.cookie('videoTime');
    app.audioElement.currentTime = $.cookie('videoTime');
}

document.addEventListener('contextmenu', (event) => {
    event.preventDefault();
});

document.body.onkeyup = (event) => {
    if (event.keyCode == 32 && app.skippedIntro) {
        if (app.backgroundToggler) {
            app.videoElement.play();
            app.audioElement.play();
        } else {
            app.videoElement.pause();
            app.audioElement.pause();
        }

        return (app.backgroundToggler = !app.backgroundToggler);
    }
};

$('html').on('contextmenu', (event) => {
    const img = document.createElement('img');

    const trollfaceLight = app.skippedIntro ? '' : 'trollface-light';

    img.src = 'https://' + location.host + '/assets/others/trollface.jpg';
    img.width = 64;
    img.height = 64;
    img.alt = 'dslvd.xyz';
    img.style = `position: absolute; left: ${event.pageX}px; top: ${event.pageY}px; z-index: 10`;
    img.className = `troll ${trollfaceLight}`;

    document.body.appendChild(img);
});

setInterval(() => {
    $('.troll').remove();
}, 600);

$('.skip').click(() => {
    skipIntro();
});

$.fn.extend({
    animateCss: function(animationName) {
        const animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

        this.addClass(`animated ${animationName}`).one(animationEnd, () => {
            $(this).removeClass(`animated ${animationName}`);
        });

        return this;
    },
});

const writeLine = (text, speed, timeout, callback) => {
    timeout = typeof timeout === 'number' ? timeout : [0, (callback = timeout)];

    const lineNumber = app.id !== 2 ? ++app.id : (app.id += 2);

    setTimeout(() => {
        const typed = new Typed(`#line${lineNumber}`, {
            strings: text,
            typeSpeed: speed,
            onComplete: callback,
        });
    }, timeout);
};

$.getJSON(ipgeolocation, (data) => {
    writeLine(['Authenticating...', "Granting access to <span style='font-size: 14px; color: #06d;'>[an unknown user]</span>..."], 30, () => {
        if (app.skippedIntro) return;

        clearCursor();

        const usernames = ['user', 'dude'];

        const ip = data.ip ? data.ip : usernames[Math.floor(Math.random() * usernames.length)];
        const country = data.country_name ? data.country_name : 'your country';

        writeLine([`Access granted! <span style='font-size: 14px; color: #0f0;'>[success]</span>`, `Welcome, <i style='color: #0f0'>${ip}</i>! Looks like your from ${country} nice!`], 30, 500, () => {
            if (app.skippedIntro) return;

            clearCursor();

            writeLine([`<i style='color: #F62459'></i>`], 120, 500, () => {
                timeouts.push(
                    setTimeout(() => {
                        if (app.skippedIntro) return;

                        clearCursor();

                        setTimeout(() => {
                            skipIntro();
                        }, 500);
                    }, 1000)
                );
            });
        });
    });
}); 

const skipIntro = () => {
    if (app.skippedIntro) return;

    app.skippedIntro = true;

    timeouts.forEach((timeout) => {
        clearTimeout(timeout);
    });

    $('.top-right').remove();

    $('#main').fadeOut(100, () => {
        $('#main').remove();

        $('#marquee').marquee({
            duration: 15000,
            gap: 420,
            delayBeforeStart: 1000,
            direction: 'left',
            duplicated: true,
        });

        setTimeout(() => {
            $('.brand-header').animateCss(app.effects[Math.floor(Math.random() * app.effects.length)]);
        }, 200);

        setTimeout(() => {
            const typed = new Typed('#brand', {
                strings: app.brandDescription,
                typeSpeed: 40,

                onComplete: () => {
                    clearCursor();
                },
            });
        }, 1350);

        setTimeout(() => {
            if (!app.shouldIgnoreVideo) {
                app.videoElement.play();
                app.audioElement.play();
            }

            app.videoElement.addEventListener(
                'timeupdate',
                () => {
                    $.cookie('videoTime', app.videoElement.currentTime, {
                        expires: 1
                    });
                },
                false
            );

            $('.marquee-container').css('visibility', 'visible').hide().fadeIn(100);

            $('.marquee-container').animateCss('zoomIn');

            $('.container').fadeIn();

            $('.background').fadeIn(200, () => {
                if (!app.shouldIgnoreVideo) $('#audio').animate({
                    volume: app.musicVolume
                }, app.musicFadeIn);
            });
        }, 200);
    });
};

const clearCursor = () => {
    return $('span').siblings('.typed-cursor').css('opacity', '0');
};

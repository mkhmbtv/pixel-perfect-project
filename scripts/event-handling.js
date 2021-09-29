window.addEventListener('DOMContentLoaded', () => {
  console.log('event-handling.js script was successfully loaded');
  const lang = document.getElementById('lang-menu')
  lang.addEventListener('click', event => {
    console.log('lang clicked')
    event.stopPropagation();
    const dropup = document.querySelector('.dropup');
    dropup.classList.toggle('dropup--hidden');
  });

  window.addEventListener('click', () => {
    console.log('HTML document clicked');
    document.querySelector('.dropup').classList.add('dropup--hidden');
  });

  const images = [
    'https://combo.staticflickr.com/ap/build/images/sohp/2020-top-25/Fantasy_Island_Daniel_Cheong.jpg',
    'https://combo.staticflickr.com/ap/build/images/sohp/2020-top-25/sunset_1663_Junji_Aoyama.jpg',
    'https://combo.staticflickr.com/ap/build/images/sohp/2020-top-25/Catwalk_am_Bahnhof_Zurich_Oerlikon_Peter_Arn.jpg',
    'https://combo.staticflickr.com/ap/build/images/sohp/2020-top-25/Tree_and_Morning_Mist_Jos_Buurmans.jpg',
    'https://combo.staticflickr.com/ap/build/images/sohp/2020-top-25/Mists_of_renfrew_Adam_Gibbs.jpg',
    'https://combo.staticflickr.com/ap/build/images/sohp/2020-top-25/If_Only_We_Could_Turn_Back_Time_Anna_Kwa.jpg',
    'https://combo.staticflickr.com/ap/build/images/sohp/2020-top-25/Desert_Beauty_Christoph_Fischer.jpg',
    'https://combo.staticflickr.com/ap/build/images/sohp/2020-top-25/Europes_best_View_Fabian_Fortmann.jpg',
    'https://combo.staticflickr.com/ap/build/images/sohp/2020-top-25/benito_druck.jpg',
    'https://combo.staticflickr.com/ap/build/images/sohp/2020-top-25/Cool_Power_commended-LPOTY_UK_Steve_Cole.jpg',
    'https://combo.staticflickr.com/ap/build/images/sohp/2020-top-25/A_Time_of_Change_Rachel_Brokaw.jpg',
    'https://combo.staticflickr.com/ap/build/images/sohp/2020-top-25/Secluded_Pete_Rowbottom.jpg',
    'https://combo.staticflickr.com/ap/build/images/sohp/2020-top-25/Dawn_of_Another_Day_Sky_Matthews.jpg',
    'https://combo.staticflickr.com/ap/build/images/sohp/2020-top-25/Frosch_Bokeh_2_Axel_F.jpg',
    'https://combo.staticflickr.com/ap/build/images/sohp/2020-top-25/Untitled_Jorge_Guadalupe_Lizarraga.jpg',
    'https://combo.staticflickr.com/ap/build/images/sohp/2020-top-25/Sheep_in_the_woods_II_James_Mills.jpg',
    'https://combo.staticflickr.com/ap/build/images/sohp/2020-top-25/Pierre_Gely-Fort_The_Dark_Love_Boat.jpg',
    'https://combo.staticflickr.com/ap/build/images/sohp/2020-top-25/Happy_Birthday_Adam_Iwona_Podlasinska.jpg'
  ]

  const header = document.querySelector('.header');
  header.style.backgroundImage = `url(${images[Math.floor(Math.random() * images.length - 1)]})`;

  let i = 0;
  setInterval(() => {
    header.style.backgroundImage = `url(${images[i]})`
    i++;
    if (i === images.length) {
      i = 0
    }
  }, 5500);
})


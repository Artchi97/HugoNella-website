export const showsImages = [];
export const dailyImages = [];

for (let i = 1; i < 89; i++) {
  showsImages.push(require(`./assets/showsGallery/show${i}.jpg`));
}

for (let i = 1; i < 55; i++) {
  dailyImages.push(require(`./assets/dailyGallery/daily${i}.jpg`));
}

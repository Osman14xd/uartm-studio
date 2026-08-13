// Bu dosya GEÇİCİ placeholder veridir.
// Sanity CMS bağlandığında bu veriler yerine Sanity'den gelen gerçek içerik kullanılacak.

export interface ArtworkImage {
  src: string;
  alt: string;
  type?: 'image' | 'video';
}

export interface Artwork {
  images: ArtworkImage[];
  title: string;
  note: string;
}

const placeholderImg = (seed: string) =>
  `https://placehold.co/1200x900/e5e5e0/8a8a85?text=${encodeURIComponent(seed)}`;

export const duvarResimleri: Artwork[] = [
  {
    images: [
      { src: placeholderImg('Duvar 1 - Foto 1'), alt: 'Duvar resmi 1, açı 1' },
      { src: placeholderImg('Duvar 1 - Foto 2'), alt: 'Duvar resmi 1, açı 2' },
      { src: placeholderImg('Duvar 1 - Foto 3'), alt: 'Duvar resmi 1, açı 3' },
    ],
    title: 'Kadıköy cephe çalışması',
    note: 'Bu duvarda renk geçişleriyle uğraştım, en sevdiğim kısım gölgeleme oldu. Belediyenin talebi üzerine iki haftada tamamlandı.',
  },
  {
    images: [{ src: placeholderImg('Duvar 2'), alt: 'Duvar resmi 2' }],
    title: 'Cafe dış cephe',
    note: 'Mekanın konseptine uygun sıcak tonlar tercih edildi.',
  },
  {
    images: [{ src: placeholderImg('Duvar 3'), alt: 'Duvar resmi 3' }],
    title: 'Sokak projesi',
    note: 'Mahalle sakinleriyle birlikte planlanan bir çalışma.',
  },
  {
    images: [{ src: placeholderImg('Duvar 4'), alt: 'Duvar resmi 4' }],
    title: 'Okul bahçesi duvarı',
    note: 'Çocuklar için renkli ve oyuncu bir kompozisyon kurgulandı.',
  },
];

export const tablolar: Artwork[] = [
  {
    images: [{ src: placeholderImg('Tablo 1'), alt: 'Tablo 1' }],
    title: 'İsimsiz, yağlı boya',
    note: 'Tuval üzerine yağlı boya, kişisel bir çalışma.',
  },
  {
    images: [{ src: placeholderImg('Tablo 2'), alt: 'Tablo 2' }],
    title: 'Deniz manzarası',
    note: 'Işık ve gölge oyunlarına odaklandığım bir çalışma.',
  },
];

export const karaKalem: Artwork[] = [
  {
    images: [{ src: placeholderImg('Kara Kalem 1'), alt: 'Kara kalem 1' }],
    title: 'Portre çalışması',
    note: 'Sipariş üzerine yapılan bir portre çalışması.',
  },
  {
    images: [{ src: placeholderImg('Kara Kalem 2'), alt: 'Kara kalem 2' }],
    title: 'Serbest çalışma',
    note: 'Kendi başıma, keyfine yaptığım bir eskiz.',
  },
];

export const gunlukler: Artwork[] = [
  {
    images: [{ src: placeholderImg('Günlük 1'), alt: 'Stüdyo günlüğü 1' }],
    title: 'Stüdyoda bir gün',
    note: 'Yeni bir tekniği denerken çektiğim bir kare.',
  },
];

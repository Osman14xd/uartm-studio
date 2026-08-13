import {createClient} from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const sanityClient = createClient({
  projectId: 'bakobqce',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
});

const builder = imageUrlBuilder(sanityClient);
export function urlFor(source: any) {
  return builder.image(source);
}

/**
 * Sanity'nin "file" tipi (video) alanları için doğrudan CDN URL'i üretir.
 * Bunun için ayrı bir GROQ dereference sorgusu gerekmiyor; dosya
 * referansındaki (_ref) desenden (file-<id>-<uzanti>) URL'i kendimiz kuruyoruz.
 */
export function fileUrlFor(source: any): string {
  const ref: string = source?.asset?._ref || '';
  const match = ref.match(/^file-([a-f0-9]+)-(\w+)$/);
  if (!match) return '';
  const [, id, ext] = match;
  return `https://cdn.sanity.io/files/bakobqce/production/${id}.${ext}`;
}

export interface Eser {
  _id: string;
  kategori: string;
  gorseller: any[];
  baslik: string;
  not?: string;
  oneCikan?: boolean;
}

export interface SiteAyarlari {
  logo?: any;
  whatsapp?: string;
  email?: string;
  hakkindaMetni?: string;
  heroVideo?: {asset?: {url?: string}};
  siluetFoto?: any;
  instagram?: string;
  twitter?: string;
  youtube?: string;
  tiktok?: string;
}

/**
 * Sanity'den veri çekerken ağ hatası, henüz veri girilmemiş olması,
 * ya da build ortamının Sanity'ye erişememesi gibi durumlarda site
 * ÇÖKMESİN diye her istek try/catch ile korunuyor. Hata olursa
 * boş/null döner, sayfalar bunu "henüz eser eklenmedi" şeklinde
 * karşılıyor.
 */
export async function getEserlerByKategori(kategori: string): Promise<Eser[]> {
  try {
    return await sanityClient.fetch(
      `*[_type == "eser" && kategori == $kategori] | order(coalesce(sira, 9999) asc, _createdAt desc)`,
      {kategori}
    );
  } catch (err) {
    console.warn(`Sanity'den "${kategori}" eserleri çekilemedi:`, err);
    return [];
  }
}

export async function getOneCikanEserler(): Promise<Eser[]> {
  try {
    return await sanityClient.fetch(
      `*[_type == "eser" && oneCikan == true] | order(coalesce(sira, 9999) asc)`
    );
  } catch (err) {
    console.warn('Sanity\'den öne çıkan eserler çekilemedi:', err);
    return [];
  }
}

export async function getSiteAyarlari(): Promise<SiteAyarlari | null> {
  try {
    return await sanityClient.fetch(`*[_type == "siteAyarlari"][0]`);
  } catch (err) {
    console.warn('Sanity\'den site ayarları çekilemedi:', err);
    return null;
  }
}

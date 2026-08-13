import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'siteAyarlari',
  title: 'Site Ayarları',
  type: 'document',
  fields: [
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      description: 'Sitenin üst kısmında görünen logo. Mümkünse arka planı şeffaf (transparan PNG) olsun.',
    }),
    defineField({
      name: 'whatsapp',
      title: 'WhatsApp Numarası',
      type: 'string',
      description: 'Başında ülke kodu ile, boşluksuz (örn: 905551234567)',
    }),
    defineField({
      name: 'email',
      title: 'E-posta',
      type: 'string',
    }),
    defineField({
      name: 'hakkindaMetni',
      title: 'Hakkında Metni',
      type: 'text',
      rows: 6,
    }),
    defineField({
      name: 'heroVideo',
      title: 'Ana Sayfa Videosu',
      type: 'file',
      options: {accept: 'video/*'},
      description: 'Ana sayfanın en üstünde otomatik oynayan video. 9:16 (dikey) formatında olmalı.',
    }),
    defineField({
      name: 'siluetFoto',
      title: 'Profil Fotoğrafı',
      type: 'image',
      description: 'İletişim bölümünde görünen yuvarlak fotoğraf',
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram Linki',
      type: 'url',
      description: 'Boş bırakılırsa sitede ikon görünmez',
    }),
    defineField({
      name: 'twitter',
      title: 'Twitter / X Linki',
      type: 'url',
      description: 'Boş bırakılırsa sitede ikon görünmez',
    }),
    defineField({
      name: 'youtube',
      title: 'YouTube Linki',
      type: 'url',
      description: 'Boş bırakılırsa sitede ikon görünmez',
    }),
    defineField({
      name: 'tiktok',
      title: 'TikTok Linki',
      type: 'url',
      description: 'Boş bırakılırsa sitede ikon görünmez',
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Site Ayarları'}
    },
  },
})

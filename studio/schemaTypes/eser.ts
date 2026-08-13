import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'eser',
  title: 'Eser',
  type: 'document',
  fields: [
    defineField({
      name: 'kategori',
      title: 'Kategori',
      type: 'string',
      options: {
        list: [
          {title: 'Duvar Resimleri', value: 'duvar-resimleri'},
          {title: 'Tablo', value: 'tablo'},
          {title: 'Kara Kalem', value: 'kara-kalem'},
          {title: 'Günlükler', value: 'gunlukler'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'gorsel',
      title: 'Fotoğraf',
      type: 'image',
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'baslik',
      title: 'Başlık',
      type: 'string',
      description: 'Eserin adı (örn: "Kadıköy cephe çalışması")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'not',
      title: 'Not',
      type: 'text',
      rows: 3,
      description: 'Bu eser hakkında kısa bir not veya yorum (1-3 cümle yeterli)',
    }),
    defineField({
      name: 'oneCikan',
      title: 'Ana sayfada öne çıksın mı?',
      type: 'boolean',
      description: 'Açarsan bu eser ana sayfadaki büyük kartlarda görünür',
      initialValue: false,
    }),
    defineField({
      name: 'sira',
      title: 'Sıra',
      type: 'number',
      description: 'Küçük sayı önce gösterilir. Boş bırakılırsa en yeni eklenen üstte çıkar.',
    }),
  ],
  preview: {
    select: {
      title: 'baslik',
      subtitle: 'kategori',
      media: 'gorsel',
    },
  },
})

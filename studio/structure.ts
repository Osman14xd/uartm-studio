import type {StructureResolver} from 'sanity/structure'

const kategoriler = [
  {id: 'duvar-resimleri', title: 'Duvar Resimleri'},
  {id: 'tablo', title: 'Tablo'},
  {id: 'kara-kalem', title: 'Kara Kalem'},
  {id: 'gunlukler', title: 'Günlükler'},
  {id: 'videolar', title: 'Videolar'},
]

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Uartm Studio İçerik Paneli')
    .items([
      S.listItem()
        .title('Site Ayarları')
        .child(
          S.document().schemaType('siteAyarlari').documentId('siteAyarlari')
        ),
      S.divider(),
      ...kategoriler.map((kat) =>
        S.listItem()
          .title(kat.title)
          .child(
            S.documentList()
              .title(kat.title)
              .filter('_type == "eser" && kategori == $kategori')
              .params({kategori: kat.id})
          )
      ),
    ])

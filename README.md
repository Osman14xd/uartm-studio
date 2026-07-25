---
import Layout from '../layouts/Layout.astro';
import ArtworkFeed from '../components/ArtworkFeed.astro';
import { duvarResimleri } from '../data/placeholder';
---

<Layout title="Duvar Resimleri">
  <div class="max-w-2xl mx-auto px-5 pt-8">
    <h1 class="text-xl font-light tracking-wide">Duvar Resimleri</h1>
    <p class="text-neutral-500 text-[13px] mt-1">Mural ve dış cephe çalışmaları</p>
  </div>
  <ArtworkFeed items={duvarResimleri} />
</Layout>

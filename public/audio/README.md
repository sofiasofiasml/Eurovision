# Archivos de Audio (12 POINTS – Eurovision Challenge)

El juego cuenta con un **motor de audio híbrido (`src/utils/audioEngine.ts`)**:
1. **Preview Oficial (HTML5 Audio API)**: Busca automáticamente el preview oficial de la canción en iTunes Search API y reproduce los primeros 8 segundos de introducción.
2. **Archivos Locales MP3**: Si colocas archivos propios en esta carpeta (`public/audio/`), por ejemplo `slomo.mp3`, `euphoria.mp3`, `waterloo.mp3`, etc. (según la propiedad `audioUrl` definida en `src/data/songs.ts`), el reproductor HTML5 los utilizará directamente.
3. **Sintetizador Polifónico Web Audio API**: Si se juega sin conexión o sin archivos MP3 locales, el juego reproduce automáticamente la melodía reconocible programada para cada canción en `src/data/songs.ts`.

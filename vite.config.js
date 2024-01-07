import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ReactRefresh from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Portfolio/', //This is because GitHub imparts this as a prefix due to the repo
  build: {
    rollupOptions: {
      input: {
        aboutme: './aboutme.html',
        contact: './contact.html',
        index: './index.html',
        projects: './projects.html',
        aroserver: './projects/aroserver.html',
        avionicsreadout: './projects/avionicsreadout.html',
        blackjacksimulator: './projects/blackjacksimulator.html',
        bluebrainplanet: './projects/bluebrainplanet.html',
        cubestepreport: './projects/cubestepreport.html',
        datastructuresandalgorithms: './projects/datastructuresandalgorithms.html',
        deadmansswitch: './projects/deadmansswitch.html',
        diffiehellmanchat: './projects/diffiehellmanchat.html',
        dynamicgettexttoimage: './projects/dynamicgettexttoimage.html',
        emrysspacedesignfinal: './projects/emrysspacedesignfinal.html',
        fallguysclone: './projects/fallguysclone.html',
        fourierseriesart: './projects/fourierseriesart.html',
        github: './projects/github.html',
        halftone: './projects/halftone.html',
        knightplatformer: './projects/knightplatformer.html',
        lasereyetracker: './projects/lasereyetracker.html',
        lightalert: './projects/lightalert.html',
        musicutility: './projects/musicutility.html',
        nailstringart: './projects/nailstringart.html',
        orbitalmechanicsfinal: './projects/orbitalmechanicsfinal.html',
        planeglidecontour: './projects/planeglidecontour.html',
        portfoliomimicrypart1: './projects/portfoliomimicrypart1.html',
        portfoliosite: './projects/portfoliosite.html',
        prolateoblatesimulation: './projects/prolateoblatesimulation.html',
        sensitivityanalysis: './projects/sensitivityanalysis.html',
        sourcepanelmethod: './projects/sourcepanelmethod.html',
        spacevehicledynamicscontrol: './projects/spacevehicledynamicscontrol.html',
        sqlaccounts: './projects/sqlaccounts.html',
        youtubeanalyzer: './projects/youtubeanalyzer.html',
      },
    },
  },
  plugins: [react(), ReactRefresh()],
  server: {
    host: '0.0.0.0',
  }
})

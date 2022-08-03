import { defineConfig } from 'vite'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
import vue from '@vitejs/plugin-vue'

// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
import vuetify from 'vite-plugin-vuetify'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
		vue(),
		vueSetupExtend(),
		vuetify({ autoImport: true }),
	],
})

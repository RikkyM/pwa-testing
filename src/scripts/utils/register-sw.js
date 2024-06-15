import * as Workbox from 'workbox-window'

const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    console.log('Browser tidak mendukung Service Worker')
    return
  }

  const wb = new Workbox.Workbox('./sw.bundle.js')

  try {
    await wb.register()
    console.log('Service Worker berhasil didaftarkan')
  } catch (error) {
    console.log('Gagal mendaftarkan Service Worker', error)
  }
}

export default swRegister

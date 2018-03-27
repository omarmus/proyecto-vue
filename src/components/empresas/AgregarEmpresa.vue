<template>
  <section>
    <h2>Agregar empresa</h2>
    <form @submit.prevent="enviar">
      <p>
        Nombre: <input type="text" v-model="nombre" required>
      </p>
      <p>
        Dirección: <input type="text" v-model="direccion" required>
      </p>
      <button type="button" @click="$router.push('empresas')">Cancelar</button>
      <button type="submit">Enviar</button>
    </form>
  </section>
</template>

<script>
import axios from 'axios'

const url = 'http://localhost:4000/api-rest/'

export default {
  data () {
    return {
      id: '',
      nombre: '',
      direccion: ''
    }
  },
  methods: {
    enviar () {
      const datos = {
        nombre: this.nombre,
        direccion: this.direccion
      }

      axios.post(`${url}empresas`, datos)
        .then(respuesta => {
          this.$router.push('empresas')
        })
    }
  }
}
</script>

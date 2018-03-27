<template>
  <section>
    <h2>Lista de empresas</h2>
    <div class="btn-container">
      <button type="button" @click="agregar">Agregar</button>
    </div>
    <table>
      <tr>
        <th>Nombre</th>
        <th>Dirección</th>
        <th>Acciones</th>
      </tr>
      <tr v-for="item in items"
        :key="item.id"
      >
        <td>{{ item.nombre }}</td>
        <td>{{ item.direccion }}</td>
        <td>
          <button type="button" @click="editar(item.id)">Editar</button>
          <button type="button" @click="eliminar(item.id)">Eliminar</button>
        </td>
      </tr>
    </table>
  </section>
</template>

<script>
import axios from 'axios'

const url = 'http://localhost:4000/api-rest/'

export default {
  mounted () {
    this.lista()
  },
  data () {
    return {
      items: []
    }
  },
  methods: {
    lista () {
      axios.get(`${url}empresas`)
        .then(respuesta => {
          this.items = respuesta.data
        })
    },
    agregar () {
      this.$router.push('agregarEmpresa')
    },
    editar (id) {
      axios.get(`${url}empresas/${id}`)
        .then(respuesta => {
          this.$router.push('agregarEmpresa')
        })
    },
    eliminar (id) {
      if (confirm('Eliminar registro')) {
        axios.delete(`${url}empresas/${id}`)
          .then(respuesta => {
            this.lista()
          })
      }
    }
  }
}
</script>

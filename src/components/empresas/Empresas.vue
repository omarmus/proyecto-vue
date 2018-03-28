<template>
  <section>
    <div class="form" v-if="!lista">
      <h2>Agregar empresa</h2>
      <form @submit.prevent="enviar">
        <p>
          Nombre: <input type="text" v-model="nombre">
        </p>
        <p>
          Dirección: <input type="text" v-model="direccion">
        </p>
        <button type="button" @click="lista = true">Cancelar</button>
        <button type="submit">Enviar</button>
      </form>
    </div>
    <div class="lista" v-if="lista">
      <h2>Lista de empresas</h2>
      <div class="btn-container">
        <button @click="mostrarForm">Agregar empresa</button>
      </div>
      <table>
        <tr>
          <th>Nombre</th>
          <th>Dirección</th>
          <th>Acciones</th>
        </tr>
        <tr v-for="item in empresas" :key="item.id">
          <td>{{ item.nombre }}</td>
          <td>{{ item.direccion }}</td>
          <td>
            <button
              type="button"
              @click="eliminar(item.id)"
            >
              Eliminar
            </button>
            <button
              type="button"
              @click="editar(item.id)">
              Actualizar
            </button>
          </td>
        </tr>
      </table>
    </div>
  </section>
</template>

<script>
import axios from 'axios'

const url = 'http://localhost:4000/api-rest/'
export default {
  data () {
    return {
      empresas: [],
      id: '',
      nombre: '',
      direccion: '',
      lista: true
    }
  },
  created () {
    this.listar()
  },
  methods: {
    listar () {
      axios.get(`${url}empresas`)
        .then(respuesta => {
          this.empresas = respuesta.data
        })
    },
    enviar () {
      if (this.id) {
        // actualizar
        let datos = {
          id: this.id,
          nombre: this.nombre,
          direccion: this.direccion
        }
        axios.put(`${url}empresas/${this.id}`, datos)
          .then(respuesta => {
            this.listar()
            this.lista = true
          })
      } else {
        // crear
        let datos = {
          nombre: this.nombre,
          direccion: this.direccion
        }
        console.log('enviado', datos)
        axios.post(`${url}empresas`, datos)
          .then(respuesta => {
            this.listar()
            this.lista = true
          })
      }
    },
    eliminar (id) {
      if (confirm('¿Eliminar?')) {
        axios.delete(`${url}empresas/${id}`)
          .then(respuesta => {
            this.listar()
          })
      }
    },
    editar (id) {
      axios.get(`${url}empresas/${id}`)
        .then(respuesta => {
          let empresa = respuesta.data
          this.id = empresa.id
          this.nombre = empresa.nombre
          this.direccion = empresa.direccion
          this.lista = false
        })
    },
    mostrarForm () {
      this.lista = false
      this.id = ''
      this.nombre = ''
      this.direccion = ''
    }
  },
  watch: {
    'nombre': function (val) {
      console.log('Escuchando nombre', val)
    }
  }
}
</script>

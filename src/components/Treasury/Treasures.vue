<template>
  <v-card class="mt-3">
    <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="treasures"
      :search="search"
      :loading=loading
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.title }}</td>
        <td class="text-xs-right">{{ props.item.category }}</td>
        <td class="text-xs-right">
          <v-chip :color=colors[Math.floor(Math.random()*colors.length)] small v-for="(tag, i) in props.item.tags" :key=i text-color="white">
            {{tag}}
          </v-chip>
        </td>
        <td class="text-xs-right">{{ props.item.slug }}</td>
        <td class="text-xs-right">{{ months[props.item.createdOn.getMonth()] }} {{ props.item.createdOn.getDate() }}, {{ props.item.createdOn.getFullYear() }}</td>
        <td class="text-xs-right">
          <v-btn flat icon color="success">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
          <v-btn flat icon color="red">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </td>
      </template>
      <v-alert slot="no-results" :value="true" color="error" icon="mdi-alert">
        Your search for "{{ search }}" found no results.
      </v-alert>
    </v-data-table>
  </v-card>
</template>

<script>
import { db } from '@/plugins/firebase'

export default {
  name: 'Treasures',
  data() {
    return {
      search: '',
      loading: true,
      headers: [
        { align: 'left', text: 'Title', value: 'title', width: '20%' },
        { align: 'right', text: 'Category', value: 'category', width: '10%' },
        {
          align: 'right',
          text: 'Tags',
          value: 'tags',
          sortable: false,
          width: '20%'
        },
        {
          align: 'right',
          text: 'Slug',
          value: 'slug',
          sortable: false,
          width: '15%'
        },
        {
          align: 'right',
          text: 'Created On',
          value: 'createdOn',
          width: '20%'
        },
        {
          align: 'right',
          text: 'Actions',
          value: 'actions',
          width: '15%',
          sortable: false
        }
      ],
      colors: [
        'indigo',
        'orange',
        'primary',
        'green',
        'teal',
        'deep-purple',
        'pink',
        'blue',
        'brown'
      ],
      treasures: [],
      temp: [],
      months: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ]
    }
  },
  created() {
    let treasures = db
      .collection('treasures')
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          this.temp.push(doc.data())
        })
      })
      .then(res => {
        this.temp.map((e, i) => {
          e.createdOn = e.createdOn.toDate()
          this.treasures.push(e)
        })
        this.loading = false
        console.log(this.treasures)
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>
<style lang="scss" scoped>
</style>

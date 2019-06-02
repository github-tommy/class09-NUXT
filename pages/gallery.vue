 <template lang="html">
 
 <div>
   <br>
   <h1>Nasa Image Collection</h1>
   <br>
  <h2> Type in the image you want to see (sun, aurora etc) in the box below</h2>
  <br>
  <form v-on:submit.prevent="getResult(query)">
   <input type="text" v-model="query"/>
</form>
<div v-if="results">
<div v-for="result in results">
  <img v-bind:src="result.links[0].href"/>

</div>
</div>
</div>

</template>

<script>
import axios from 'axios';
export default {
  name: 'search',
  data () {
    return {
      msg: 'Search',
      query: '',
      results: ''
    }
  },
  methods: {
      getResult(query) {
        axios.get('https://images-api.nasa.gov/search?q=' + query + '&media_type=image').then( response => {
            console.log(response.data.collection.items);
            this.results = response.data.collection.items;
        });
      }
  }
}

</script>

<style lang="css" scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.results img {
    height: 300px;
    margin: 10px;
}
h1, h2 {
  font-weight: 300;
  font-size: 32px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>
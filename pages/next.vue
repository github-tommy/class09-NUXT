 <template lang="html">
 <div class="">
    <h1>Joke App</h1>
    <button @click="showJoke">Show button</button>
    <div v-if="joke">
      <p>{{joke}}</p>
    </div>

   <!-- <button v-on:click="greet">Greet</button> -->

 </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'helloworld',
  props: {
    msg: String
  },



 data() {
   return {
     joke: ''
   }
 },
 methods: {
   async showJoke(){
let config = {
  header: {
    'Accept': 'application/json'
  }
}
const joke = await axios.get('https://icanhazdadjoke.com', config);
this.joke = joke.data.joke
   }
 }

//  created: function() {
//    http://www.omdbapi.com/?apikey=90fcc7de&t=2018
//    this.test = "Hello Again one More time*";
//    axios.get(` https://swapi.co/api/people`)
//    .then(response => {
//      // JSON responses are automatically parsed.
//      this.posts = response.data
//      console.log(this.posts);
//    })
//    .catch(e => {
//      this.errors.push(e)
//    })
//    .finally(() => this.loading =true)
//  },
//  methods: {
//    greet: function() {
//      this.test = "Hello Again";
//    }
//  }
}
</script>

<style lang="css" scoped>
</style>